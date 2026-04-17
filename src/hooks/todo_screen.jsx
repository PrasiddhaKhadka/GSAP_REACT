import React, { useState } from "react";
import { useAutoFetch, useApi } from "./apihooks";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export default function TodoScreen() {
  const [inputTitle, setInputTitle] = useState("");

  // useAutoFetch calls get() on mount automatically
  const { data: todo, loading, error, create, update, remove } = useAutoFetch(BASE_URL + "/1");

  // Separate instance for write operations on the collection
  const todosApi = useApi(BASE_URL);

  const handleCreate = async () => {
    const newTodo = await todosApi.create({
      title: inputTitle,
      completed: false,
      userId: 1,
    });
    console.log("Created:", newTodo);
    alert(`Created todo: "${newTodo?.title}"`);
    setInputTitle("");
  };

  const handleUpdate = async () => {
    const updated = await update(1, {
      id: 1,
      title: "Updated title",
      completed: true,
      userId: 1,
    });
    console.log("Updated:", updated);
  };

  const handlePatch = async () => {
    const patched = await todosApi.patch(1, { completed: true });
    console.log("Patched:", patched);
  };

  const handleDelete = async () => {
    await remove(1);
    console.log("Deleted todo 1");
    alert("Deleted! (jsonplaceholder fakes this — no real deletion)");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Todo Demo — useApi hook</h2>

      {/* ── Status ── */}
      {loading && <p style={styles.loading}>Loading...</p>}
      {error   && <p style={styles.error}>Error: {error}</p>}

      {/* ── Fetched Todo ── */}
      {todo && (
        <div style={styles.card}>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Completed:</strong> {todo.completed ? "✅ Yes" : "❌ No"}</p>
          <p><strong>User ID:</strong> {todo.userId}</p>
        </div>
      )}

      {/* ── Actions ── */}
      <div style={styles.actions}>
        <button style={styles.btn} onClick={() => todosApi.get(1)}>
          GET todo/1
        </button>

        <button style={{ ...styles.btn, background: "#22c55e" }} onClick={handleUpdate}>
          PUT (update)
        </button>

        <button style={{ ...styles.btn, background: "#f59e0b" }} onClick={handlePatch}>
          PATCH (completed)
        </button>

        <button style={{ ...styles.btn, background: "#ef4444" }} onClick={handleDelete}>
          DELETE
        </button>
      </div>

      {/* ── Create ── */}
      <div style={styles.createRow}>
        <input
          style={styles.input}
          placeholder="New todo title..."
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button
          style={{ ...styles.btn, background: "#8b5cf6" }}
          onClick={handleCreate}
          disabled={!inputTitle.trim()}
        >
          POST (create)
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif", padding: "0 16px" },
  title:     { fontSize: 20, fontWeight: 700, marginBottom: 16 },
  loading:   { color: "#6b7280" },
  error:     { color: "#ef4444" },
  card: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: "12px 16px",
    marginBottom: 16,
    lineHeight: 1.7,
  },
  actions:   { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 },
  btn: {
    padding: "8px 14px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
  },
  createRow: { display: "flex", gap: 8 },
  input: {
    flex: 1,
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    fontSize: 14,
  },
};