var buttons_list=document.querySelectorAll('.card-button');                             //selects the modal popups buttons
var buttons_like=document.querySelectorAll('.like-button');                             //select the like button                        
// console.log(buttons_like);
var current;
for(var i=0;i<buttons_list.length;i++){                                                      //assigned id to read more button
    buttons_list[i].setAttribute('id',i);
    //console.log("the id set for button "+i+" is "+ i);
}
for(var i=0;i<buttons_like.length;i++){                                                     //assigned id to like button
    buttons_like[i].setAttribute('id',"like-"+i);
    // console.log(buttons_like[i])
}
 var cards_list=document.querySelectorAll(".card");                                          
   //console.log(cards_list);   
function open1(current){                                                                    //open function for modals
   
    current= cards_list[current];
   var innerhead= current.getElementsByClassName('card-title')[0].innerText;
  // console.log(innerhead);
   var innercontent= current.getElementsByClassName('card-text')[0].innerText;
  // console.log(innercontent);
   var sethead=document.querySelector("#modal0 h2");
   //console.log(sethead);
   sethead.innerHTML=innerhead;
   var setbody=document.querySelector("#modal0 p");
   setbody.innerHTML=innercontent;
   document.getElementById("container1").classList.remove("hide");
   document.getElementById("container1").classList.add("show");
}
function closeme(){                                                                         //closing function for modals
    document.getElementById("container1").classList.add("hide");
}



//LIKES BUTTON JS
function like(id){                                                                          //function for the like buttons

    var curr=document.getElementById(id);
    if(curr.classList.contains("liked"))
   { curr.innerHTML="likes ="+0;
    curr.classList.remove("liked");}
    else {
        curr.classList.add("liked");
        curr.innerHTML="likes="+1;
    }
    
}
