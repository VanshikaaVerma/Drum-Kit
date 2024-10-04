//eventlistener to keyboard.
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
    console.log(event.key)
})

//using mouse
var length= document.querySelectorAll(".drum").length;
for (var x=0;x<=length;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",function (){
        var button =this.innerHTML;
        makesound(button);  
        animation(button);
    }
    );
}
 function makesound(a){
    switch (a) {
        case "w":
        case "W":
            var audio =new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
       case "a":
       case "A":
            var audio =new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
        case "S":
            var audio =new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
        case "D":
            var audio =new Audio('./sounds/tom-4.mp3');
            audio.play();
            break; 
        case "j":
        case "J":
            var audio =new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
        case "K":
            var audio =new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
        case "L":
            var audio =new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;          
        
       }
 }
 function animation(active_button){
 document.querySelector("."+active_button).classList.add("pressed");
 setTimeout(function(){
    document.querySelector("."+active_button).classList.remove("pressed");
 },300)
 }



//  we can use this code instead of looping.

// document.querySelectorAll("button").forEach( button => { button.addEventListener("click", function (){ alert("I got clicked"); }); });