var n=document.querySelectorAll(".drum").length;
var au1=new Audio('sounds/tom-1.mp3');

//document.querySelectorAll(".drum")[i].addEventListener("click",function (){alert("I Got Clicked..!")});
//clicking the button action
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var drumkey = this.innerHTML;
   makeSound(drumkey);
});
}
// key pressing action
document.addEventListener("keypress",function(event){makeSound(event.key)})

function makeSound(key){
 switch (key) {
        case "w":  var au1=new Audio('tom-1.mp3');
                     au1.play();
                     break;
        case "a":   var au2=new Audio('tom-2.mp3');
                     au2.play();    
                     break;
        case "s":   var au3=new Audio('tom-3.mp3');
                     au3.play();    
                     break;
        case "d":   var au4=new Audio('tom-4.mp3');
                     au4.play();    
                     break;
        case "j":   var au5=new Audio('crash.mp3');
                     au5.play();    
                     break;
        case "k":   var au6=new Audio('kick-bass.mp3');
                     au6.play();    
                     break;
        case "l":   var au7=new Audio('snare.mp3');
                     au7.play();    
                     break;                   
        default:
            break;
    }
}

