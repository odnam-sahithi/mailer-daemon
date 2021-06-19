var buttons_list=document.querySelectorAll('.card button');
//console.log(buttons_list)
var current;
for(var i=0;i<buttons_list.length;i++){
    buttons_list[i].setAttribute('id',2*i);
    //console.log("the id set for button "+i+" is "+ 2*i);
}
var cards_list=document.querySelectorAll(".card");
   //console.log(cards_list);
function open1(current){
   current= cards_list[current];
   var innerhead= current.getElementsByClassName('card-title')[0].innerText;
   //console.log(innerhead);
   var innercontent= current.getElementsByClassName('card-text')[0].innerText;
   console.log(innercontent);
   var sethead=document.querySelector("#modal0 h2");
   console.log(sethead);
   sethead.innerHTML=innerhead;
   var setbody=document.querySelector("#modal0 p");
   setbody.innerHTML=innercontent;
   document.getElementById("container1").classList.remove("hide");
   document.getElementById("container1").classList.add("show");
}
function closeme(){
    document.getElementById("container1").classList.add("hide");
}