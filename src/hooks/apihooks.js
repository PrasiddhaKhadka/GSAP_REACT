import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export function useApi(baseUrl) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const setLoading = () =>
    setState({ data: null, loading: true, error: null });

  const setSuccess = (data) =>
    setState({ data, loading: false, error: null });

  const setError = (message) =>
    setState({ data: null, loading: false, error: message });

  const request = useCallback(
    async (path, options = {}) => {
      setLoading();
      try {
        // ✅ axios returns res.data directly — no res.ok or res.json()
        const res = await axios({
          url: `${baseUrl}${path}`,
          headers: { "Content-Type": "application/json" },
          ...options,
        });

        setSuccess(res.data);
        return res.data;
      } catch (err) {
        // ✅ axios wraps errors in err.response
        const message =
          err.response?.data?.message || err.message || "Something went wrong";
        setError(message);
        return null;
      }
    },
    [baseUrl]
  );

  const get = useCallback(
    (id) => request(id !== undefined ? `/${id}` : ""),
    [request]
  );

  const create = useCallback(
    (body) => request("", { method: "post", data: body }), // ✅ axios uses `data`, not `body`
    [request]
  );

  const update = useCallback(
    (id, body) => request(`/${id}`, { method: "put", data: body }),
    [request]
  );

  const patch = useCallback(
    (id, body) => request(`/${id}`, { method: "patch", data: body }),
    [request]
  );

  const remove = useCallback(
    (id) => request(`/${id}`, { method: "delete" }),
    [request]
  );

  return {
    ...state,
    get,
    create,
    update,
    patch,
    remove,
  };
}

export function useAutoFetch(baseUrl) {
  const api = useApi(baseUrl);

  useEffect(() => {
    api.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseUrl]);

  return api;
}