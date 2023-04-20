const title =document.getElementById("title");  //因為這的指令本身就是找ID所以不用下#

// const title1 =document.querySelector("h1");
const a =document.querySelector("#btn");//#用在id
//const[定義變數] =document.querySelector("#btn"); 按鈕請求回傳語法+addEventListener
//getElementById(#search)

const input =document.querySelector("#input");
const msg=document.querySelector("#msg");
// =document.querySelector (#ID.Html)

let arr=[];

// console.log(title);

// for (let i = 2; i < num; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0 && j !== 1 && j !== i) {
//             return;
//         }
//         if (i % j === 0 && j === i) {// 剩下等於自己的數
            
//             arr.push(i);
//         }
//     }}

a.addEventListener("click",function(){
    let num=input.value;//字串
    num=parseInt(num);
    // console.log(typeof num); 可以查型態
      for (let i = 2; i < num; i++) {
        // console.log(typeof i);
        //   i=parseInt(i);通常
        for (let j = 1; j <= i; j++) {
            // j=parseInt(j);

                if (i % j === 0 && j !== 1 && j !== i) {  //可以整除 ，也不是!， 不能自己等於自己
                   break;
                }
                if (i % j === 0 && j === i) {// 剩下等於自己的數
                    
                    arr.push(i);
                    
                    
                }
            }
            
    
        }
        
        msg.innerText=`${arr}`;

}
);