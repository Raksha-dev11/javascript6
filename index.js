// CALLBACK HELL

// function task1(callback){

//     setTimeout(()=>{
//         console.log("Task1 complete");
//         callback()
//     },2000)
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task2 complete");
//         callback()
//     },1000)
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task3 complete");
//         callback()
//     },3000)
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log("Task1 complete");
//         callback()
//     },1500)
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=> console.log("all taska complete"));
//         }); 
//     });
// });
// task2();
// task3();
// task4();
// console.log("All tasks complete!")

// PROMISES


// function walkDog(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dogwalked=true;
//             if(dogwalked){
//            resolve("YOU WALK THE DOG!")
//             }
//             else{
//                 reject("YOU DIDNT WALKED THE DOG")
//             }
//         },1500);
//     })

// }

// // function cleanKitchen(callback){

// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             const kitchenclean=true;
// //             if(kitchenclean){
// //             resolve("YOU CLEAN THE KITCHEN!")
// //             }
// //             else{
// //                 reject("YOU DIDNT CLEANED THE KITCHEN")
// //             }
// //         },2500);
// //     })
// // }

// // function takeOutTrash(callback){

// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             const taketrash=true;
// //             if(taketrash){
// //             resolve("You take out the trash!")
// //             }
// //             else{
// //                 reject("YOU DIDNT TAKE OUT TRASH")
// //             }
// //         },5000);
// //     })
// // }

// // walkDog().then(value=> {console.log(value); return cleanKitchen()})
// //          .then(value=> {console.log(value); return takeOutTrash()})
// //          .then(value=>{console.log(value);console.log("YOUU FINISHED ALL THE CHORES")})


// // ASYNC/AWAIT


// async function walkDog(){

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const dogwalked=true;
//                 if(dogwalked){
//                resolve("YOU WALK THE DOG!")
//                 }
//                 else{
//                     reject("YOU DIDNT WALKED THE DOG")
//                 }
//             },1500);
//         })

//     }

//     function cleanKitchen(callback){

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const kitchenclean=true;
//                 if(kitchenclean){
//                 resolve("YOU CLEAN THE KITCHEN!")
//                 }
//                 else{
//                     reject("YOU DIDNT CLEANED THE KITCHEN")
//                 }
//             },2500);
//         })
//     }

//     function takeOutTrash(callback){

//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const taketrash=true;
//                 if(taketrash){
//                 resolve("You take out the trash!")
//                 }
//                 else{
//                     reject("YOU DIDNT TAKE OUT TRASH")
//                 }
//             },5000);
//         })
//     }

// async function doChores(){

//     const walkDogResult=await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult=await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult=await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("You finished all the chores")
// }

// doChores()


// JSON FILES

// const names=["Spongebob","Patrick","Sqidward"]
// const person={
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies": ["Jellyfishing","Karate","Painting"]
// }
// // const people=[{
// // "name":"Spongebob",
// //     "age":30,
// //     "isEmployed":true
// // },
// // {
// //     "name":"Patrick",
// //     "age":34,
// //     "isEmployed":false
// // },
// // {
// //     "name":"Squidward",
// //     "age":50,
// //     "isEmployed":true
// // }]

// // const jsonString=JSON.stringify(people);

// // console.log(jsonString)

// const jsonNames = `["Spongebob","Patrick","Sqidward"]`
// const jsonPerson = `{"name":"Spongebob","age":30,"isEmployed":true,"hobbies": ["Jellyfishing","Karate","Painting"]}`
// const jsonPeople = `[{"name":"Spongebob","age":30,"isEmployed":true},
// {"name":"Patrick","age":34,"isEmployed":false},
// {"name":"Squidward","age":50,"isEmployed":true}]`;

// const parsedData=JSON.parse(jsonPeople);
// console.log(parsedData)




