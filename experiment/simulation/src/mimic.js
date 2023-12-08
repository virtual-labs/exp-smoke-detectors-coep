function mimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect){
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 900;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
//paper = new Raphael(document.getElementById('canvas'), 1000, 700);
var x1=200;
var y1=200;

var s=0;


	
	

}