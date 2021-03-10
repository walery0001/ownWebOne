//base with text underLink
const linkSources = [
{
	id:1,
	topic:'Home',
	source:' sprawiedliwie traktować innych. Przykładem może być  żeby została oddana sprawiedliwość Jego wybranym, którzy wołają do  W gruncie rzeczy słowa te są obietnicą: Nasz Bóg jest świadomy, przez co przechodzimy w dniach ostatnich, i w odpowiednim czasie uczyni zadość sprawiedliwości (2 Tes. 1:6). Kiedy stosujemy zasady, których uczył Jezus, traktujemy innych sprawiedliwie. A jeśli padliśmy ofiarą niesprawiedliwości panującej w świecie Szatana, pociesza nas świadomość, że Jehowa na pewno się tym zajmie. w19.05 s. 5, ak. 18, 19 ',

},
{
	id:2,
	topic:'Omnie',
	source:' miały pomóc jego naśladowcom sprawiedliwie uczył, że została oddana sprawiedliwość Jego wybranym, którzy wołają do Niego . W gruncie rzeczy słowa te są obietnicą: Nasz Bóg jest świadomy, przez co przechodzimy w dniach ostatnich, i w odpowiednim czasie uczyni zadość sprawiedliwości (2 Tes. 1:6). Kiedy stosujemy zasady, których uczył Jezus, traktujemy innych sprawiedliwie. A jeśli padliśmy ofiarą niesprawiedliwości panującej w świecie Szatana, pociesza nas świadomość, że Jehowa na pewno się tym zajmie. w19.05 s. 5, ak. 18, 19 ',

},
{
	id:3,
	topic:'portfolio',
	source:' sprawiedliwość Jego wybranym, którzy wołają do Niego',
},
{
	id:4,
	topic:'kontakt',
	source:' sprawiedliwość Jego wybranym, którzy wołają do Niego',
}
];

let img = document.getElementById('eyesImg');
let container = document.getElementById('container');
let divLinkImg = document.querySelectorAll('.divLinkImg');
let tekstLink = document.querySelector('.tekstLink');
let topicText = document.querySelector('.topicText');
let topicSourceLink = document.querySelectorAll('.topicSourceLink');
container.addEventListener('mousemove',moveBigPic,{once:true})
   function moveBigPic(){
    img.classList.add('oneEyes');
   
    divLinkImg.forEach(e=>e.classList.add('keyFrames'));
    divLinkImg.forEach(e=> e.style.visibility = 'visible');
    
}

divLinkImg.forEach(e=> e.addEventListener('click',clickHome))

function clickHome(){

const hideAllpic =	divLinkImg.forEach(e=> e.style.visibility = 'hidden');
	 // topicSourceLink.style.display = 'block';
	 topicSourceLink.forEach(e=> {

	 	e.style.display = 'block';
	 	
	 });

	divLinkImg.forEach(e=> {
	
if(e.id === 'divHome'){

}

	});



}




