/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/
let button=document.querySelector("button")
console.log(button)


button.addEventListener("click", function(e){
    e.preventDefault()
    let a=document.getElementById("first-form").value
    let b=document.getElementById("second-form").value
    let h3=document.createElement("h3")
    document.body.appendChild(h3)


    let url="https://fcc-weather-api.glitch.me/api/current?lat="+a+"&lon="+b+""
    fetch(url)
    .then((result)=>result.json())
    .then((fetchedresult)=>{console.log(fetchedresult)
    
    h3.innerText=fetchedresult.main.temp
    }
    
    )

})