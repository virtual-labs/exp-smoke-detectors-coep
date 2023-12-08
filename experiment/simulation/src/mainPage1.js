var ArrayJson=[];
function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('WORKING OF SMOKE DETEDTOR ');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/smkDetector.jpeg" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Location : </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="location"  style="height:auto;">'
	   +'<option value="0">--- Select Location --- </option>'
	   	+'<option value="1" >Clean room</option>'
	   +'<option value="2">Air Dust</option>'
	   +'<option value="3">Computer Room</option>'
	   +'<option value="4">Ware House</option>'
	   +'<option value="5">Corridors</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Partical Size (&micro;m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="particalSize" " style="height:auto;">'
	   +'<option value="0">--- Select Partical Size --- </option>'
	   +'<option value="1" >less than 0.3 &micro;m</option>'
	   +'<option value="2">greater than 0.3 &micro;m</option>'
	  
//	     +'<option value="400">400&deg;</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Sensor Type : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sensorType" " style="height:auto;">'
	   +'<option value="0">--- Select Sensor Type --- </option>'
	   +'<option value="1" >Ionization Sensor</option>'
	   +'<option value="2">PhotoElectric Sensor</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'
	    +'<br>'
	    +'<br>' 
	    +'<br>' 
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="finish" data-toggle="modal" data-target="#selectCheck" hidden><b> FINISH </b></button>' 
	    +'</div>'

	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg123">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
    
//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    
     $("#submitconfig").click(function() {
	 	 locationSelect=$("#location").val();
		 paricalSelect=$("#particalSize").val();
		 sensorSelect=$("#sensorType").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
//		   console.log("locationSelect  = "+ locationSelect);	  
//		     console.log("paricalSelect = "+paricalSelect);
//		    console.log("sensorSelect = "+sensorSelect);
//		   
		if(locationSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Location </b>");
	}else if(paricalSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Partical Size </b>");
	}else if(sensorSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Sensor Type </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#location").prop('disabled',true);
		$("#particalSize").prop('disabled',true);
		$("#sensorType").prop('disabled',true);	
		  animation();
	}	
	});
	
	$("#finish").click(function() {
//			alert("Experiment successfully completed");
		$("#modelMsg123").html('<img src="images/cong.gif" class="img-fluid" >');
		
	});
	
	
	             
}



