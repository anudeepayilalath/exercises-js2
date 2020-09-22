/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6*/

    let para=document.querySelectorAll("p");
    console.log(para);

    /*2. the first div element node
    --> should log the ".site-header" node*/

let division=document.querySelector("div");
console.log(division);

   /* 3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/
    let jumbo=document.querySelector("#jumbotron-text");
    console.log(jumbo);

    /*4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/
let paras=document.querySelector(".primary-content p");
console.log(paras);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let exer=document.querySelector("#alertbtn");
 exer.addEventListener ("click", newfunc);
function newfunc(){
    alert ("Thanks for visiting Bikes for Refugees!");
};

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let chngcolor=document.querySelector("#bgrChangeBtn")
chngcolor.addEventListener("click", function(){
    let ydob=document.querySelector("body")
    ydob.style.backgroundColor="orange"
   
})


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let db=document.querySelector("#addTextBtn")
  console.log(db)  
db.addEventListener("click", function(){
    console.log("hola")
    let bd=document.querySelector(".heading-underline")
    let newpar=document.createElement("p")
   
    
    newpar.innerText="wbfowef"
    bd.appendChild (newpar);
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
// */
let largeBtn=document.querySelector("#largerLinksBtn")
let whole=document.querySelector("body")
largeBtn.addEventListener("click", function(){

    whole.style.fontSize="5em"
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let dk=document.querySelector("#addArticleBtn")

dk.addEventListener("click", function(event){
    event.preventDefault()
    let dhf=document.querySelector("input.addArticle")
    let innercont=dhf.value

    let bd=document.querySelector("#mainArticles")
    let newpar=document.createElement("p")
        newpar.innerText=innercont
        //p.classList.add
    bd.appendChild (newpar);
    dhf.value=""
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/



let colours=["red", "orange", "green", "blue", "yellow"]
let bdy=document.querySelector("body")
let bton=document.querySelector("#bgrChangeBtn")
let counter=0;
bton.addEventListener("click", function (){
    
    //let colorgroup=colours[counter]
    bdy.style.backgroundColor=colours[counter]
    counter=counter+1
    if(counter===5){
        counter=0
    }



})
