var countlocation=0;
function mimic(locationSelect,paricalSelect,sensorSelect){
//	$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =800;
	var h = 800;

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
	var x=50;
	var y=50;
	
	var smk="";
	var audio= document.getElementById("myAudio"); 
	var txt1=paper.text(x+360,y-30,"Location").attr({'font-size':24});
	var bgFrame=paper.rect(x-40,y-10,780,700).attr({'stroke-width':5});
	var background=parseInt(locationSelect);
	var locationtype;
	var sdType=parseInt(sensorSelect);
	var partical=parseInt(paricalSelect);
	location();
	detectorType();
var stop=paper.rect((x+175),(y-50),100,30).attr({'fill':'pink'});
paper.text((x+225),(y-35),"STOP").attr({'font-size':14,'font-Weight':5});
function playAudio(){ 
    	audio.play(); 
    	}	
    	
 function pauseAudio() { 
    		audio.pause();
    	}
	
	function location(){
		$("#location").children(":selected").css("background-color","#f7dddd").prop('disabled',true);
		if(background==1)	{
			countlocation++;
			locationtype=paper.image("images/background.gif",x-38,y-8,776,696);
			playAudio();
			
		}else if(background==2){
			countlocation++
			locationtype=paper.image("images/AirDust.gif",x-38,y-8,776,696);
			playAudio();
		}else if(background==3){
			countlocation++;
			locationtype=paper.image("images/computerRoom.gif",x-38,y-8,776,696);
			playAudio();
		}else if(background==4){
			countlocation++;
			locationtype=paper.image("images/wareHouse.gif",x-38,y-8,776,696);
			playAudio();
		}else if(background==5){
			countlocation++;
			
			locationtype=paper.image("images/Corridor.jpg",x-38,y-8,776,696);
			smk=paper.image("images/smk1.gif",x-30,y+530,750,100).toFront();
			var transform_rImg3=Raphael.animation({ 'width': 750, 'height':850, 'x': (x-30), 'y': (y-110) },1000);
			smk.animate( transform_rImg3 );
			playAudio();
		
		}else{
			alert("Please Select Location");
		}
	}

stop.click(function(){
	//console.log(countlocation);
	$("#infoSpan").prop("hidden", false);
	audio.pause();
//	$("#modelMsgbody11").html("<b class='boldTextRed'>Select another configuration</b>");
	$("#location").prop("selectedIndex", 0);
	$("#particalSize").prop("selectedIndex", 0);
	$("#sensorType").prop("selectedIndex", 0);
	if(countlocation==5){
		$("#animation").prop("hidden",false);
//		$("#finish").prop("hidden",false);
	}else{
		
	}
	
		
	
	
})
	function detectorType(){
		if(sdType==1)	{
			var sensor=paper.image("images/smokeD1.png",x+290,y-10,90,60);
		}else{
			var sensor=paper.image("images/smokeD1.png",x+290,y-10,90,60);
		}
	}

}