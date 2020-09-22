// function setAlarm() {
//   console.log("hola")
//   let input=document.getElementById("alarmSet").value
  
//   console.log("hola"+input)
//   timer(parseInt(input))
//   }
  

// let button=document.getElementById("set")
// button.addEventListener("click", setAlarm())

// function timer(time){
//   let currentTime=time
//   setInterval(() => {
//     currentTime=currentTime-1;
//     updateTimeRemaining(currentTime)
//     }, 1000);
   
// }

// function updateTimeRemaining(value){
//   let b=document.getElementById("timeRemaining")  
//   b.innerText="Time Remaining: 00:"+value.toString();     
      
//}
/////////////////////////////////////////////////////////////////////////////////////
// let startButton=document.getElementById("set")
// let inputArea=document.getElementById("alaramSet").value

// function setAlarm(){
//   timeRemain.innerText="Time remaining is "+inputArea
  
// }
// let counter=inputArea
// console.log(counter)
// startButton.addEventListener("click", function(){
//   setInterval(() => {
//       timeRemain.innerText="Time remaining is "+counter
//   }, 1000);
  
//   if(counter>0){
//     counter=counter-1
//   }
//   else if(counter===0){
//     playAlarm()
//   }
// })

// function timer(){

// }
//////////////////////////////////////////////////////////////////////////////////



function setAlarm(){
  let startButton=document.getElementById("set")
  let inputArea=document.getElementById("alarmSet")
  let timeRemain2=document.getElementById("timeRemaining")
  let newnumber=inputArea.value
     
  let counter=newnumber
      function timer(counter){
        if(counter>0){
           counter--;
           setTimeout(function(){
            timer(counter)
            }, 1000)
          console.log(counter)
          if(counter<10){
            timeRemain2.innerText="Time remaining is 00:0"+counter
          }

          else{
            timeRemain2.innerText="Time remaining is 00:"+counter
          }
        }
        else if(counter<1){
          playAlarm()
        }

      }
      timer(counter);

      function pauseTimer(){
        document.getElementById("stop").addEventListener("click", () => {
          counter=counter;
        });
      
      }
}





// // DO NOT EDIT BELOW HERE
// let timeRemain=document.getElementById("timeRemaining")
// let settingAlarm=document.getElementById("alarmSet")
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    //timeRemain.innerText="Time remaining is "+settingAlarm.value
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

