// document.querySelector("button").addEventListener("click", function (){
//     alert("w");
// })

function sound(key){
    switch (key) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      default:
        console.log("please use the shown in the picture");
    }
}


var x = document.querySelectorAll(".drum");
document.addEventListener("keydown", function(event){
    sound(event.key);
    buttonAnimation(event.key);
})
for(let i = 0; i < x.length; i++){
     x[i].addEventListener("click", function (){
        sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
     })
}

function buttonAnimation(currKey){
    document.querySelector("."+currKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currKey).classList.remove("pressed")
    }, 100);
}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();