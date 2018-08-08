var labelGrinda = document.getElementById("label-grinda"),
		labelEuro = document.getElementById("label-euro"),
		imgReprezentare1 = document.getElementById("img-reprezentare1"),
		imgReprezentare2 = document.getElementById("img-reprezentare2"),
		inputOpeningImg = document.getElementById("deschidere"),
		spanOpeningImg = document.getElementsByClassName("opening"),
		inputHeightImg = document.getElementById("inaltime"),
		spanHeightImg = document.getElementById("height"),
		inputWidthImg = document.getElementById("lungime"),
		spanWidthImg = document.getElementById("width");
spanOpeningImg = Array.from(spanOpeningImg);

labelGrinda.addEventListener("click", function() {
	imgReprezentare1.src = "http://www.halemetalicesv.ro/images/calculator-11.png";
	inputOpeningImg.disabled = false;
});
labelEuro.addEventListener("click", function() {
	imgReprezentare1.src = "http://www.halemetalicesv.ro/images/calculator-12.png";
	inputOpeningImg.disabled = false;
});
inputOpeningImg.addEventListener("input", function() {
	spanOpeningImg.forEach(function(el) {
		el.innerText = inputOpeningImg.value + " m";
	});
	this.value != "" ? inputHeightImg.disabled = false : inputHeightImg.disabled = true;
});
inputHeightImg.addEventListener("input", function() {
	spanHeightImg.innerText = this.value + " m";
	this.value != "" ? inputWidthImg.disabled = false : inputWidthImg.disabled = true;
});
inputWidthImg.addEventListener("input", function() {
	spanWidthImg.innerText = this.value + " m";
	imgReprezentare2.src = "http://www.halemetalicesv.ro/images/calculator-13.png";
	this.value != "" ? document.getElementsByClassName("image")[1].classList.remove("hidden") : document.getElementsByClassName("image")[1].classList.add("hidden");
});