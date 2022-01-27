

var color_list = ["red","yellow","green","blue"]
var random_sequence = Math.floor(Math.random() * 4);

var first_run=0
var pc_sequence = []
var user_input=0;
var counter=0

var round=0;



document.addEventListener("keypress", function(event) {
    if(first_run==0){
	generate_random() 
    
    }
});

document.getElementById("red").addEventListener("click",function() {
    var beat = new Audio('sounds/red.mp3')
    beat.play()
    muted="muted"
  user_input=0
  check_true(user_input,pc_sequence)
    
  }) 

document.getElementById("yellow").addEventListener("click",function() {
    var beat = new Audio('sounds/yellow.mp3')
     beat.play()
     muted="muted"
    user_input=1
    check_true(user_input,pc_sequence) 
      
    }) 

document.getElementById("green").addEventListener("click",function() {
    var beat = new Audio('sounds/green.mp3')
    beat.play()
    muted="muted"
     user_input=2
    check_true(user_input,pc_sequence)
          
 }) 
document.getElementById("blue").addEventListener("click",function() {
    var beat = new Audio('sounds/blue.mp3')
    beat.play()
    muted="muted"
    user_input=3
    check_true(user_input,pc_sequence)
              
            }) 



function generate_random() {   
    
    random_sequence = Math.floor(Math.random() * 4);
    pc_sequence.push(color_list[random_sequence])
   var color_choice=color_list[random_sequence]
    var beat = new Audio('sounds/'+color_choice+'.mp3')
    setTimeout(function(){
        beat.play()
    },1000)
   muted="muted"
   console.log(pc_sequence)//should be remove hay we need to add visuals
   first_run=1
   round=pc_sequence.length  

} 


function check_true(user_input,pc_sequence){
if (counter<round) {

    if(color_list[user_input]==pc_sequence[counter]) {
        console.log("correct")
        console.log("user int input: "+user_input)
        console.log("user color choice: "+color_list[user_input])
        counter++
    }
    else {
      console.log("wrong")
      console.log(user_input)
      console.log(pc_sequence[user_input])
      console.log(pc_sequence)
      
    
    }
}


if(counter==round) {
    generate_random()
    counter=0
}

}
    
      



