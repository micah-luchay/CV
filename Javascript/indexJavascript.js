class slideShowSlide {  // class for slide show objects
	constructor(index, description, photoSrc, photoAlt) {
		this.index = index; // order in slide
		this.description = description; // description for each map
		this.photoSrc = photoSrc;  // photo source
		this.photoAlt = photoAlt;  // alt text for photo unable to be shown
	}
}

let Irmo = new slideShowSlide(0, "Map detailing sewer assets in the Lexington area.", "Photos\\Examples\\Slideshow\\Town of Irmo Meeting.png", "City owned assets in Lexington area");
let FLOW = new slideShowSlide(1, "Deliverable depicting the upstream basin of a flow meter to isolate I&I.", "Photos\\Examples\\Slideshow\\Meter SR02A Basin.png", "Upstream basin of a flow meter");
let CIU = new slideShowSlide(2, "Presentation map to inform university officials of City owned utilities near CIU.", "Photos\\Examples\\Slideshow\\Columbia International University Infrastructure 24x36 V2.png", "Utilities near CIU");
let YCHA = new slideShowSlide(3, "Deliverable to Yacht Cove Homeowners Association regarding City vs. Privately owned utility assets.", "Photos\\Examples\\Slideshow\\Yacht Cove_Reduced.png", "Private vs. City owned assets at Yacht Cove");

slideShowData = []; // array to hold the objects
slideShowData.push(Irmo); // add the objects to the arrary
slideShowData.push(FLOW);
slideShowData.push(CIU);
slideShowData.push(YCHA);

var currentIndex = 0;  // set the slide show to begin at zero
var slideShowDataLength = slideShowData.length; // length of the slide show

function clickLeftSlideShowArrow() {
	if (currentIndex != 0) { // can't go backwards if the slideshow is on the first map
		currentIndex -= 1;
		changeSlideShow(currentIndex);
	}
}

function clickRightSlideShowArrow() {

	if (currentIndex != slideShowDataLength - 1) { // can't go forwards if the slideshow is on the last map
		currentIndex += 1;
		changeSlideShow(currentIndex);
	}
}	

function clickDot(index) {
	currentIndex = index;
	changeSlideShow(index);
}

function changeSlideShow(index) {
	for (i = 0; i < slideShowDataLength; i++) {
		if (slideShowData[i].index == currentIndex) {
			document.getElementById("photoSlide").src = slideShowData[i].photoSrc;
			document.getElementById("photoSlide").alt = slideShowData[i].photoAlt;
			document.getElementById("slideText").innerHTML = slideShowData[i].description;
		}
	}
	
}

changeSlideShow(0)
