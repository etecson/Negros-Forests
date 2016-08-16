window.addEventListener("resize", positionNavbar);
document.addEventListener("load",positionNavbar());

var height = document.getElementById("banner").height,
width = document.getElementById("banner").width;

function positionNavbar() {
	var height = document.getElementById("banner").height,
		width = document.getElementById("banner").width;

	document.querySelector(".navbar").style.marginTop = height -5 + "px";
	document.querySelector("#brand-name").style.top = height - 210 + "px";
	document.querySelector('#overlay').style.height = height + "px";
	document.querySelector('#overlay').style.width = width + "px";
}
