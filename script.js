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
      " miały pomóc jego naśladowcom sprawiedliwie uczył, że została oddana sprawiedliwość Jego wybranym, którzy wołają do Niego . W gruncie rzeczy słowa te są obietnicą: Nasz Bóg jest świadomy, przez co przechodzimy w dniach ostatnich, i w odpowiednim czasie uczyni zadość sprawiedliwości (2 Tes. 1:6). Kiedy stosujemy zasady, których uczył Jezus, traktujemy innych sprawiedliwie. A jeśli padliśmy ofiarą niesprawiedliwości panującej w świecie Szatana, pociesza nas świadomość, że Jehowa na pewno się tym zajmie. w19.05 s. 5, ak. 18, 19 ",
  },
  {
    id: 3,
    topic: "portfolio",
    source: " sprawiedliwość Jego wybranym, którzy wołają do Niego",
  },
  {
    id: 4,
    topic: "kontakt",
    source: " sprawiedliwość Jego wybranym, którzy wołają do Niego",
  },
];

let img = document.getElementById("eyesImg");
let container = document.getElementById("container");
let divLinkImg = document.querySelectorAll(".divLinkImg");
let tekstLink = document.querySelector(".tekstLink");
let topicText = document.querySelector(".topicText");
let topicSourceLink = document.querySelectorAll(".topicSourceLink");
let navLink = document.querySelectorAll(".navLink");
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
  }, 1000);
}

//click navLink and change tekst topic


//show Topic_menu Text topic_Links
function clickHome(f) {
const targetLink =	f.target.textContent
  divLinkImg.forEach((e) => {
	  
	  e.style.visibility = "hidden";
	  
	});
//show h1 and text and links
  topicSourceLink.forEach((e) => {
    e.style.display = "block";
	e.addEventListener('click' ,el=>{
		const targetel =	el.target.textContent
		if(targetel === 'Home'){
			divLinkImg.forEach((e) => {
				e.classList.add("keyFrames");
				e.style.visibility = "visible";
				topicSourceLink.forEach((e) => {
					e.style.display = "none"})
			  });

		}
		if(targetel === 'Omnie'){
			topicText.innerText = linkSources[1].topic;
			tekstLink.innerText = linkSources[1].source;
		}
		if(targetel === 'Portfolio'){
			topicText.innerText = linkSources[2].topic;
			tekstLink.innerText = linkSources[2].source;
		}
		if(targetel === 'Kontakt'){
			topicText.innerText = linkSources[3].topic;
			tekstLink.innerText = linkSources[3].source;
		}
	})
  });

if(targetLink === 'Home'){
	topicText.innerText = linkSources[0].topic;
	tekstLink.innerText = linkSources[0].source;
}
if(targetLink === 'Omnie'){
	topicText.innerText = linkSources[1].topic;
	tekstLink.innerText = linkSources[1].source;
}
if(targetLink === 'Portfolio'){
	topicText.innerText = linkSources[2].topic;
	tekstLink.innerText = linkSources[2].source;
}
if(targetLink === 'Kontakt'){
	topicText.innerText = linkSources[3].topic;
	tekstLink.innerText = linkSources[3].source;
}

}