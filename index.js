// console.log("Hii.....");
// console.log("one")
// console.log("two")
// setTimeout(() => {
// console.log("three"),2000}
// console.log("four")


// let mypromise = new Promise((resolve,reject)=>{
// let age=20;
// if(age>18){
//     throw new Error("Error...")
//     resolve("Eligible for voting")
    
// }
// else{
//     reject("Not eligible to voting")
// }
// })
// console.log(mypromise)
// mypromise.then((msg)=>console.log(msg))
// .catch(e=>console.log(e))
// .finally(()=>console.log("Hi... Resourse closed"))


// async function handlePromise(){
//     try{
//     const result = await mypromise;
//     }catch(e){
//         console.log(e)
//     }
//     finally{}}
//     handlePromise();
// mypromise.then(result => console.log(result))
// .catch(error => console.error(error))
// .finally(() => console.log("Done")); 
    // .then(result => console.log(result))
    // .catch(error => console.error(error));
    // .finally(() => console.log("Done"));  

    // const response=fetch("https://fakestoreapi.com/products")
    // response.then(res=>{
    //     // console.log(res);
    //     res.json().then((jsondata)=>{
    //         console.log(jsondata)
    //     }).catch(e=>{
    //         console.log(e)
    //     })
    // })

    const container = document.getElementById("container");
    const button=document.getElementById("btn");
     const loader=document.getElementById("loader");
    // console.log(container)
     console.log(button)
     let html="";
    async function getData(){
        try{
            loader.innerHTML=`<h2 style ='color:blue'>Data is loading </h2>`;
            const response = await fetch("https://fakestoreapi.com/products?limit=5");
            const jsonres= await response.json();
            

            jsonres.map((ele)=>{
                html+=` <div><h2>${ele.id}</h2></h2>
               <h2>${ele.title}</h2> </div>`})
               console.log(jsonres[0].title)
            // console.log(data)
            console.log(jsonres)
            container.innerHTML=html;

            // container.innerHTML=`<h2 style ='color:red'>${jsonres[0].title } ${jsonres[0].price} </h2>`
            // container.innerHTML=`<h2 style ='color:red'></h2>`
        }catch(e){
            console.log(e)
        }
        finally{
            loader.innerHTML="";
        }
    }
   button.addEventListener('click',()=>getData())
    // getData();