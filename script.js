
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [85, 85, 75, 70, 80,48,20];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});


var _CONTENT = [ 
	"17 JULI 2007", 
	"MEKARSARI, CIMANGGIS, DEPOK",
	"ANAK 1 DARI 2 BERSAUDARA",
	"SOFTWARE AND GAME DEVELOPMENT", 
	"SMK TARUNA BHAKTI DEPOK"
];

var _PART = 0; 
var _PART_INDEX = 0; 
var _INTERVAL_VAL; 
var _ELEMENT = document.querySelector("#text-name"); 
var _CURSOR = document.querySelector("#cursor"); 

function Type() { 
	
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}


function Delete() {
	
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
_INTERVAL_VAL = setInterval(Type, 100);