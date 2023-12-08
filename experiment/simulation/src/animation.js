function animation(){
	$("#canvas-div").html('');	
    $("#centerText1").html('ANIMATION');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =700;
	var h = 650;

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
	
//paper=new Raphael(document.getElementById('canvas'),1000,900);
var x=100;
var y=100;
var time=1000;
var stopflag=0;
var start=paper.rect((x+50),(y-80),100,30).attr({'fill':'pink'});
paper.text((x+100),(y-65),"START").attr({'font-size':14});

var stop=paper.rect((x+175),(y-80),100,30).attr({'fill':'pink'});
paper.text((x+225),(y-65),"STOP").attr({'font-size':14});

var frame=paper.rect(x-5,y-5,510,510).attr({'stroke-width':10,'stroke':'purple','fill':'#4b4e50'});
var audio= document.getElementById("myAudio"); 
var e=paper.ellipse(x+253,y+250,130,180).attr({'fill':'#414749','stroke':'#414749'});

var sensor=paper.image("images/smokeD1.png",x+165,y+8,180,130);
var c1;

//var	sensor2= paper.image("images/smokeD2.png",x+185,y+1,130,120);

 function playAudio(){ 
	stopflag==1;
    	audio.play(); 
    	} 

    	function pauseAudio() { 
    		audio.pause();
    	}
var detector,c1;    	
 
 start.click(function(){
	stopflag=1;
	 detector=paper.image("images/sd.gif",x,y,500,500);
	 playAudio();
 sensor=paper.image("images/smokeD1.png",x+165,y+8,180,130);
c1=paper.ellipse(x+324,y+88,4.3,3.4).attr({'fill':'red','stroke':'red'});


})

stop.click(function(){
	if(stopflag==1){
		$("#finish").prop("hidden",false);
	c1.remove();
	audio.pause();
	detector.remove();
	}else{
		alert("Click on START button");
	}
	
	
	
})


}