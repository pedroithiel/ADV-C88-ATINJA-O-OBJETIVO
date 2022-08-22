canvas = new fabric.Canvas('myCanvas');

BallX = 0;
BallY = 0;

HoleX = 800;
HoleY = 400;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg() {
	fabric.Image.fromURL("golf-h.png", function (img) {
		holeObj = img
		holeObj.scaleToWidth(50)
		holeObj.scaleToHeight(50)
		holeObj.set({
			top: HoleY,
			left: HoleX
		});
		canvas.add(holeObj)
	});
	newImage();
}

function newImage() {
	fabric.Image.fromURL("ball.png", function (img) {
		BallObj = img;
		BallObj.scaleToWidth(50);
		BallObj.scaleToHeight(50);
		BallObj.set({
			top: BallY,
			left: BallX
		});
		canvas.add(BallObj)
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((BallX == HoleX) && (BallY == HoleY)) {
		canvas.remove(BallObj);
		document.getElementById('myCanvas').style.borderColor = "red";
		document.getElementById('hd3').innerHTML = "você atingiu o objeto";
	}
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}
	
	function up() {
		if(BallY >=5) {
			BallY = BallY - blockImageHeight;
			canvas.remove(BallObj);
			}
			newImage()
	}

	function down() {
		if(BallY <=450) {
		BallY = BallY + blockImageHeight;
		canvas.remove(BallObj);
		}
		newImage()
	}

	function left() {
		if (BallX >= 5) {
			BallX = BallX - blockImageWidth;
			canvas.remove(BallObj);
		}
		newImage()
	}

	function right() {
		if (BallX <= 1050) {
			BallX = BallX + blockImageWidth;
			canvas.remove(BallObj);
		}
		newImage()
	}

}

