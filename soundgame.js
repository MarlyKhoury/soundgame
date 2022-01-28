
var color_list = ["green","red","yellow","blue"]
var random_sequence = Math.floor(Math.random() * 4);

var first_run=0
var pc_sequence = []
var user_input=0;
var counter=0

var round=0;



document.addEventListener("keydown", function(event) {
  if(first_run==-1){
    restart_game()
    }
    else if(first_run==0){
        generate_random()  
     
    }
});

document.getElementById("red").addEventListener("click",function() {
  if(first_run!=-1){
    document.getElementsByClassName("btn")[1].classList.add("pressed");
    var beat = new Audio('sounds/red.mp3')
    beat.play()
    muted="muted"
  user_input=0
  check_true(user_input,pc_sequence)
  setTimeout(function(){
    document.getElementsByClassName("btn")[1].classList.remove("pressed");
  },100)

  }
    
  }) 

document.getElementById("yellow").addEventListener("click",function() {
  if(first_run!=-1){
    
    document.getElementsByClassName("btn")[2].classList.add("pressed");
    var beat = new Audio('sounds/yellow.mp3')
     beat.play()
     muted="muted"
    user_input=1
    check_true(user_input,pc_sequence) 
    setTimeout(function(){
      document.getElementsByClassName("btn")[2].classList.remove("pressed");
    },100)

  }
    }) 
    

document.getElementById("green").addEventListener("click",function() {
  if(first_run!=-1){

    document.getElementsByClassName("btn")[0].classList.add("pressed");
    var beat = new Audio('sounds/green.mp3')
    beat.play()
    muted="muted"
     user_input=2
    check_true(user_input,pc_sequence)
    setTimeout(function(){
      document.getElementsByClassName("btn")[0].classList.remove("pressed");
    },100)
  }    
 }) 
document.getElementById("blue").addEventListener("click",function() {
  if(first_run!=-1){

    document.getElementsByClassName("btn")[3].classList.add("pressed");
    var beat = new Audio('sounds/blue.mp3')
    beat.play()
    muted="muted"
    user_input=3
    check_true(user_input,pc_sequence)
    setTimeout(function(){
      document.getElementsByClassName("btn")[3].classList.remove("pressed");
    },100)
  }    
 }) 


function generate_random() {   

    random_sequence = Math.floor(Math.random() * 4);
    pc_sequence.push(color_list[random_sequence])
    document.getElementsByClassName("btn")[random_sequence].classList.add("pressed");

  
    var color_choice=color_list[random_sequence]
    var beat = new Audio('sounds/'+color_choice+'.mp3')
    setTimeout(function(){
       beat.play()
    },1000)
   muted="muted"
   
   first_run=1
   round=pc_sequence.length  
   document.getElementById("title").innerHTML="LeveL "+round
   setTimeout(function(){

  document.getElementsByClassName("btn")[random_sequence].classList.remove("pressed");
  },100)


} 


function check_true(user_input,pc_sequence){
    if (counter<round) {

        if(color_list[user_input]==pc_sequence[counter]) {
            console.log("correct")
            counter++
        }
        else {
          document.querySelector("#title").innerHTML= "Game Over, Press Any Key to Restart"
          var beat = new Audio("sounds/wrong.mp3")
        beat.play()
          muted="muted"
          console.log("wrong")
          first_run=-1       
        }
    }

    if(counter==round) {
      setTimeout(function(){
        generate_random()
        counter=0
      },1000)
    }
}

function restart_game(){

  first_run=0
  pc_sequence = []
  user_input=0;
  counter=0
  round=0;

}

