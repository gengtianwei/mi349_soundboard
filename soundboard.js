// one
var oPlay1 = document.getElementById("Play1");
var audios = document.getElementById('audios');
oPlay1.onclick = function() {
	if(audios.paused) {
		audios.play();
	} else {
		audios.pause();
	}
}

//two
var oPlay2 = document.getElementById("Play2");
var audios2 = document.getElementById('audios2');
oPlay2.onclick = function() {
	if(audios2.paused) {
		audios2.play();
	} else {
		audios2.pause();
	}
}

//three
var oPlay3 = document.getElementById("Play3");
var audios3 = document.getElementById('audios3');
oPlay3.onclick = function() {
	if(audios3.paused) {
		audios3.play();
	} else {
		audios3.pause();
	}
}