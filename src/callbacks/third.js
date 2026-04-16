//🟡 2. Promises (better)

import { useEffect } from "react";


function fetchData(callback){
    return new Promise((res,rej)=>{
       setTimeout(() => {
            res("Data received");
        }, 1000);
    })
}

fetchData().then((data)=>console.log(data)).catch((err) => {
    console.log(err);
  });



// 🟢 3. async/await (modern & cleanest)

// async function loadData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }


// async function loadUser() {
//   try {
//     await loginUser(user);
//     await getProfile();
//     await getPosts();
//     await getComments();
//   } catch (err) {
//     console.log(err);
//   }
// }
