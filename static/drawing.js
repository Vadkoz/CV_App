//Create canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Set background
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);

//Lines is default
lines();

//Initialize timer
var timer = null;

function lines() {

	//Initialize mouse coordinates to 0,0
    var mouse = { x: 0, y: 0};
    


	//Paint includes line width, line cap, and color
	paint = function() {
		ctx.lineTo(mouse.x, mouse.y);
		ctx.lineWidth = 75;
		ctx.lineJoin = 'round';
		ctx.lineCap = "round";
		ctx.strokeStyle = "black";
		ctx.stroke();
	};

	//Find mouse coordinates relative to canvas
	linesMousemove = function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	};

	//User clicks down on canvas to trigger paint
	linesMousedown = function(){
		clearTimeout(timer)
		ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 0, 0, 2*Math.PI);  //trigger single-click paint
        ctx.stroke();
		canvas.addEventListener('mousemove', paint, false);
	};

	//When mouse lifts up, line stops painting
	linesMouseup = function(){
		clearTimeout(timer)
        canvas.removeEventListener('mousemove', paint, false);
        timer = setTimeout(download, 1500)
	};

	//When mouse leaves canvas, line stops painting
	linesMouseout = function() {
		clearTimeout(timer)
		canvas.removeEventListener('mousemove', paint, false);
		timer = setTimeout(download, 1500)
	};

	//Event listeners that will trigger the paint functions when
	//mousedown, mousemove, mouseup, mouseout
	canvas.addEventListener('mousedown', linesMousedown, false);
	canvas.addEventListener('mousemove', linesMousemove, false);
	canvas.addEventListener('mouseup', linesMouseup, false);
	canvas.addEventListener('mouseout', linesMouseout, false);
};

//var download = function(){
//    var link = document.createElement('a');
 //   link.download = 'digit.png';
 //   link.href = document.getElementById('myCanvas').toDataURL()
 //   link.click();}


//Clear canvas
function erase() {
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	clearTimeout(timer)
	document.getElementById('answerarea').innerHTML = ''
};

var download = function(){
	var dataURL = document.getElementById('myCanvas').toDataURL();
	$.post({
	  url: "/upload_mnist",
	  data: { 
		imgBase64: dataURL
	  }
	}).done(
	  function(data) {
		console.log('mnist prediction done');
		$('#answerarea').text(data)
	  });
  }