let img = document.getElementById('eyesImg');
let container = document.getElementById('container');
let divLinkImg = document.querySelectorAll('.divLinkImg');
let tekstLink = document.querySelector('.tekstLink');

container.addEventListener('mousemove',moveBigPic,{once:true})
   function moveBigPic(){
    img.classList.add('oneEyes');
   
    divLinkImg.forEach(e=>e.classList.add('keyFrames'));
    divLinkImg.forEach(e=> e.style.visibility = 'visible');
    
}

divLinkImg.forEach(e=> e.addEventListener('click',clickHome))

function clickHome(){
	divLinkImg.forEach(e=> e.style.visibility = 'hidden');
	  tekstLink.style.display = 'block';
}
