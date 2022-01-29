var pc_choice =[]
var user_choice=[]
var first_run=0


document.addEventListener('keydown', function(){
    if(first_run==0){
      pcRandom()
      first_run=1
    }
    
})

function pcRandom(){
  var random= Math.floor((Math.random() * 4))
  pc_choice.push(random) 
  console.log(pc_choice)
  
}

document.addEventListener("onclick",function(){
  var red = document.getElementById("red").id
  console.log(red)
  console.log("red")
     
})
