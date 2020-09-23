// Write your code here


let imagesarr=["https://images.unsplash.com/photo-1560689189-65b6ed6228e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", "https://images.unsplash.com/photo-1596588357871-10a1d24fc0d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1495315405795-feeac94b5a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80", "https://images.unsplash.com/photo-1596588338185-e8504b42e324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"]

let currentimageindex=0;

let firstInner=document.getElementById("firstinner")
let secondInner=document.getElementById("secondinner")

let imgs=document.getElementById("imagecollection")
let autoforward=document.getElementById("autoforward")
let autobackward=document.getElementById("autobackward")
let next=document.getElementById("nextbutton")
let back=document.getElementById("backbutton")
let stop=document.getElementById("stop")

imgs.src=imagesarr[currentimageindex]

next.addEventListener("click", function(){
    currentimageindex=currentimageindex+1
    if(currentimageindex>=imagesarr.length){
        currentimageindex=0
        }
        imgs.src=imagesarr[currentimageindex]
    

})

back.addEventListener("click", function(){
    currentimageindex=currentimageindex-1
    if(currentimageindex<=0){
        currentimageindex=imagesarr.length-1
    }
    imgs.src=imagesarr[currentimageindex]

})


autoforward.addEventListener("click", function(){
    const firstInterval=setInterval(function(){
        currentimageindex++
        if(currentimageindex>=imagesarr.length){
            currentimageindex=0}
            imgs.src=imagesarr[currentimageindex]
    }, 2000)
    stop.addEventListener("click", function(){
        clearInterval(firstInterval)
    })
    
})

autobackward.addEventListener("click", function(){
    const secondInterval=setInterval(function(){
        currentimageindex--
        if(currentimageindex<=0){
            currentimageindex=imagesarr.length-1}
            imgs.src=imagesarr[currentimageindex]
    }, 2000)
    stop.addEventListener("click", function(){
        clearInterval(secondInterval)
    })
    
})

stop.addEventListener("click", function(){

    
})