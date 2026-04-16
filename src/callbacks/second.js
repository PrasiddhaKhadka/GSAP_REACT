// 🔴 Callback (old style)

function fetchData(callback){
    setTimeout(()=>{
        callback('Data Received')
    },1000)
}


fetchData((data)=>{
    console.log(data)
    console.log('Data has been received!!')
})


// CALLBACK HELL
// loginUser(user, () => {
//   getProfile(() => {
//     getPosts(() => {
//       getComments(() => {
//         // 😵 nightmare
//       });
//     });
//   });
// });

