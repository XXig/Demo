"use strict";
document.documentElement.style.fontSize = window.screen.width / 3.75 + "px";
var mcss = document.createElement("style");
mcss.innerHTML =
"body,html{width:100%;height:100%;-webkit-text-size-adjust:100%;-webkit-overflow-scrolling:touch}*{-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box}body,div,html,img,section{margin:0;padding:0}section{display:block}.m-voice{position:fixed;width:50%;padding-top:50%;background-color:#000;border-radius:.1rem;top:45%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);z-index:99999;opacity:0;-webkit-transition:all .25s linear;transition:all .25s linear;visibility:hidden}.m-voice.on{opacity:.6;visibility:visible}.m-voice div{position:fixed;width:75%;height:60%;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.m-voice div .h{position:absolute;width:45%;bottom:0;left:0}.m-voice div .h img{display:block;width:100%}.m-voice div i{position:absolute;background-color:#fff;height:6%;left:75%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);-webkit-transition:all .05s linear;transition:all .05s linear;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:.08s;animation-duration:.08s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.m-voice div i.on{-webkit-animation-name:fade;animation-name:fade;opacity:0}.m-voice div i:nth-child(2){width:15%;bottom:0;-webkit-animation-delay:0s;animation-delay:0s}.m-voice div i:nth-child(3){width:20%;bottom:15%;-webkit-animation-delay:.1s;animation-delay:.1s}.m-voice div i:nth-child(4){width:25%;bottom:30%;-webkit-animation-delay:.2s;animation-delay:.2s}.m-voice div i:nth-child(5){width:30%;bottom:45%;-webkit-animation-delay:.3s;animation-delay:.3s}.m-voice div i:nth-child(6){width:35%;bottom:60%;-webkit-animation-delay:.4s;animation-delay:.4s}.m-voice div i:nth-child(7){width:40%;bottom:75%;-webkit-animation-delay:.5s;animation-delay:.5s}.m-voice div i:nth-child(8){width:45%;bottom:90%;-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}",
document.getElementsByTagName("head")[0].appendChild(mcss);

var mhtml = document.createElement("section");
mhtml.className = "m-voice", mhtml.innerHTML =
'<div><span class=h><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABmCAMAAABP9WnvAAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMAWudm+etKBwTFlJGALtBXTBDBrO/gyJY9p/bXjTMmGSWZgVI39djerQAAAdlJREFUWMPtmMt6gyAQRgkgxHqpGjWaey/z/q/Yj9QpjUGYtJssOCsdPeG2iP+w52NdZSmXACB5mlXrh9w6T+A3SV7T5VcOc/grddJbcLFdk+QNuNlQ9BdY4oWwZlgmuPaae2we2vkcfOR+WSdeO9FeuwI/ldfOHAZ929OAnXrtJGAnXlsGbOm1IUS0ox3taEc72k9nKw5ckW18HeEAwOm2fd06K6q9AkO0ox3taDttae3W3Avq172YhYQOs1Y4WWBk66zdmPuRmmpGc9FY+83c76mJam8u3qwtwHCmpbkzGIS1CyyEkyQOdWIWjkshpNhm2jTLAQxFKEEnNc7zYF0sbSjpfcSB7vLnEO4cDK44qsBQ6lDXQpdgUOyWHn/d1zHBifVsxlGCQfi6NXha8riQ2+UHM9Tvs07Re23KH99DZHcyrkiKny5VP3Wp+qzS15qQuDv3XNppZzVzoqfDaE/Ox587uFIOrqdDCVd2n8yN2uHZFPNHxQYmWbElhhYmGnG25bNosN4ObJlLCT/sx1ysViIf97ZWXpgPnYGHTLMAx37J7Y+MgEpdbqoYkeLQ3ardoWCPcBLbpvs+gq04sT+Bfx/Rfj5bcXgErm5slMn6jQ2P8t+x/7/uL3g7y9a42GPTAAAAAElFTkSuQmCC"></span><i></i><i></i><i></i><i></i><i></i><i></i></div>';
document.body.appendChild(mhtml);
function modvoice(i) {
	var t, e = document.querySelector(".m-voice"),o = document.querySelectorAll(".m-voice i");
	if (i) {
		e.className += " on", n("on");
		o[5].addEventListener("webkitAnimationEnd", function () {
			n(""), t = setTimeout(function () {
				n("on")
			}, 20)
		}, !1)
	} else e.className = "m-voice", n(""), clearTimeout(t);
	function n(i) {
		for (var t = 0; t < o.length; t++) o[t].className = i
	}
}
document.addEventListener("touchstart", function () {
	modvoice(1)
}), 
document.addEventListener("touchend", function () {
	modvoice()
});