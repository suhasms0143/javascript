let x = document.getElementById("first");
x.addEventListener("mouseenter",function(){
    x.style.color = "red";
x.style.backgroundColor = "yellow";
})
let y = document.getElementById("second");
x.addEventListener("click",function(){
    y.style.color = "green";
y.style.backgroundColor = "yellow";
})

let d = document.getElementById("three");
d.addEventListener("click",function(){
    d.style.color = "green";
d.style.backgroundColor = "purple";
})

x.addEventListener("click",function(){
    d.style.color = "pink";
d.style.backgroundColor = "black";
})
