//base with text underLink
const linkSources = [
  {
    id: 1,
    topic: "Home",
    source:
      " sprawiedliwie traktować innych. Przykładem może być  żeby została oddana sprawiedliwość Jego wybranym, którzy wołają do  W gruncie rzeczy słowa te są obietnicą: Nasz Bóg jest świadomy, przez co przechodzimy w dniach ostatnich, i w odpowiednim czasie uczyni zadość sprawiedliwości (2 Tes. 1:6). Kiedy stosujemy zasady, których uczył Jezus, traktujemy innych sprawiedliwie. A jeśli padliśmy ofiarą niesprawiedliwości panującej w świecie Szatana, pociesza nas świadomość, że Jehowa na pewno się tym zajmie. w19.05 s. 5, ak. 18, 19 ",
  },
  {
    id: 2,
    topic: "Omnie",
    source:
      "miały pomóc jego naśladowcom spremy innych sprawiedliwie. ",
  },
  {
    id: 3,
    topic: "portfolio",
    source: `<img class="clickImg" src="grafik/hubert/h00.jpeg"/>`,
  },
  {
    id: 4,
    topic: "Kontakt",
    source: `Kamienica 62-530 ${'\n'}telefon:345 432 908 ${'\n'}mail:hubert@gmail.com`,
  },
 
];

let img = document.getElementById("eyesImg");
let container = document.getElementById("container");
let divLinkImg = document.querySelectorAll(".divLinkImg");
let tekstLink = document.querySelector(".tekstLink");
let topicText = document.querySelector(".topicText");
let topicSourceLink = document.querySelectorAll(".topicSourceLink");
let navLink = document.querySelectorAll(".navLink");
let imgBlackBg = document.querySelector(".imgBlackBg");

//click and move big picture

container.addEventListener("mousemove", moveBigPic, { once: true });
function moveBigPic() {
  img.classList.add("oneEyes");
  //img visible
  divLinkImg.forEach((e) => {
    e.classList.add("keyFrames");
    e.style.visibility = "visible";
  });
  setTimeout(() => {
    divLinkImg.forEach((e) => e.addEventListener("click", clickHome));
  }, 2000);
}

//click navLink and change tekst topic


//show Topic_menu Text topic_Links
function clickHome(f) {
const targetLink =	f.target.className
console.log(f.target.classList)
  divLinkImg.forEach((e) => {
	  
	  e.style.visibility = "hidden";
	  
	});
//show h1 and text and links
  topicSourceLink.forEach((e) => {
    e.style.display = "block";
	e.addEventListener('click' ,el=>{
		let targetel = el.target.textContent
	
if(el.target.src === `https://walery0001.github.io/ownWebOne/grafik/hubert/h00.jpeg`){
	 el.target.src = `https://walery0001.github.io/ownWebOne/grafik/hubert/h1.jpeg`
	for(i=1;i<18;i++){	
	tekstLink.innerHTML += `<img class="firstFotoGalery" src="grafik/hubert/h${i}.jpeg"/>`}
	console.log(el.target.src)
}

//show small pic BIG
if(el.target.classList[0] === 'firstFotoGalery'){
	imgBlackBg.style.display = "block"
	
	let imgForDiv = el.target.src.split('https://raw.githubusercontent.com/walery0001/ownWebOne/master/')

	imgBlackBg.innerHTML =`<img class="fullImg" src="${imgForDiv[1]}"/>`

}
//close big pic
imgBlackBg.addEventListener('click',()=>
	imgBlackBg.style.display = "none")


	//link Home back to HOME
	
		if(targetel === 'Home'){
			divLinkImg.forEach((e) => {
				e.classList.add("keyFrames");
				e.style.visibility = "visible";
				topicSourceLink.forEach((e) => {
					e.style.display = "none"})

			  });

		}
	//	text links / links click
		if(targetel === 'Omnie'){
			topicText.innerText = linkSources[1].topic;
			tekstLink.innerText = linkSources[1].source;
		}
		if(targetel === 'Portfolio'){
			topicText.innerText = linkSources[2].topic;
			tekstLink.innerHTML = linkSources[2].source;

		}

		if(targetel === 'Kontakt'){
			topicText.innerText = linkSources[3].topic;
			tekstLink.innerText = linkSources[3].source;
		}
	})
  });
//pictures links / links click
if(targetLink === 'home'){
	topicText.innerText = linkSources[0].topic;
	tekstLink.innerText = linkSources[0].source;
}
if(targetLink === 'aboutMe' || 'Omnie'){
	topicText.innerText = linkSources[1].topic;
	tekstLink.innerText = linkSources[1].source;
}
if(targetLink === 'portfolio' || 'Portfolio'){
	topicText.innerText = linkSources[2].topic;
	tekstLink.innerHTML = linkSources[2].source;

}
if(targetLink === 'kontaktImg' || 'Kontakt'){
	topicText.innerText = linkSources[3].topic;
	tekstLink.innerText = linkSources[3].source;
}

}
//link	to foto galery

const widthWindow = window.screen.width;
widthWindow < 430 ?
	eyesImg.src = 'grafik/jankaa1.jpg':true
