/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
//Task 1
let bdy=document.querySelector("body")
setTimeout(function(){
        bdy.style.backgroundColor="green"
}, 5000)

//Task 2
let colors=["red", "blue", "green", "orange"]
let next=0

let g=setInterval(function(){
        bdy.style.backgroundColor=colors[next]
        next=next+1
        if(next>4){
        next=0        
        }
}, 1000)
