

    let firstbtn=document.querySelector("#blueBtn")
    let secondbtn=document.querySelector("#orangeBtn")
    let thirdbtn=document.querySelector("#greenBtn")
    let jumbo=document.querySelector(".jumbotron")
    let donabike=document.querySelector(".jumbotron .btn-primary")
    let volunt=document.querySelector(".jumbotron .btn-secondary")

    firstbtn.addEventListener("click", function(){
        jumbo.style.backgroundColor="#588fbd"
        donabike.style.backgroundColor="#ffa500"
        volunt.style.backgroundColor="black"
        volunt.style.color="white"});

    secondbtn.addEventListener("click", function(){
        jumbo.style.backgroundColor="#f0ad4e"
        donabike.style.backgroundColor="#5751fd"
        volunt.style.backgroundColor="#31b0d5"
        volunt.style.color="white"});

    thirdbtn.addEventListener("click", function(){
        jumbo.style.backgroundColor="#87ca8a"
        donabike.style.backgroundColor="black"
        volunt.style.backgroundColor="#8c9c08"
        //volunt.style.color="white"});
    });
    