let img = document.getElementById('eyesImg');
let container = document.getElementById('container');
let divLinkImg = document.querySelectorAll('.divLinkImg');

container.addEventListener('mousemove',()=>{
    img.classList.add('oneEyes');
   
    divLinkImg.forEach(e=>{e.classList.add('keyFrames')});
    divLinkImg.forEach(e=> e.style.visibility = "visible");
    
})


