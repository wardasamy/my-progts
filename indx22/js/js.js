// Make Line Scroller
let lineScroller = document.querySelector(".scv");

let documentHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", (e) => {
  let documentScrollTop = document.documentElement.scrollTop;

  lineScroller.style.width = `${(documentScrollTop / documentHeight) * 100}%`;
});


let span =document.querySelector("#myspan-2");


this .scrolly >= 1000 ? span.classList.add("show") :span.classList.remove("show");

span.onclick = function(){
    window.scrollTo({
top:0,
behavior:"smooth",
    })
    
}


let container = document.getElementById("container-2");

container.onclick = function(){
    container.style.background ="#118951";
    container.style.borderRadius ="20PX";



}
 let imgs = document.getElementById("imgs1")

 let myimgs =["imgs/pngwing.com(13).png","imgs/pngwing.com(14).png", "imgs/pngwing.com(15).png"]

  let i=0;



//   function slaydshow(){
// imgs.setAttribute("src",myimgs[i]); // myimgs [2]
 
// if(i == length.myimgs - 1 ) {
//     i = 0;
// } else {
//     i++; // i -2

// }

// setTimeout(function()  {
//     slaydshow();
// }, 2000)
//   }

//   slaydshow();
 
