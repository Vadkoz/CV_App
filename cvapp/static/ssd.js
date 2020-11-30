var download = function(img){
	$.post({
	  url: "/upload_ssd",  
	  data: {
		  image: img
	  }
	}).done(
	  function(data) {
		$('#answer').text(data)
		document.getElementById('det_img').src = data;
		console.log('ssd done');
	  });
  }

var test = function() {
	var file = document.getElementById('image').files[0];
	var reader  = new FileReader();
	reader.onload = function(e)  {
		var image = e.target.result
		download(image)
	 }
	 reader.readAsDataURL(file);
 }
