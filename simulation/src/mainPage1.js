tableReading2=0;
var ArrayJson2=[];
var configDataMasterJson={};
var cntCalculateMainPage2 = 0;
var cntCalMain2ArrayJson = [];
var cntCalMain2MasterJson = {};
var locationSelectName;
var paricalSelectName;
var sensorSelectName;

function mainPage1() {
	$("#main-div-conf").html('');
	$("#canvas-div").html('');
	$("#tableDesign").html('');
	$("#centerText1").html('WORKING OF SMOKE DETECTOR');
	$("#centerText2").html('CONFIGURATION');
	var htm = '<img src="images/smkDetector.jpeg" class="img-fluid" >'
	$("#canvas-div").html(htm);
	//      animation();
	var selection = '<div class="row afterAnimHide" ><div class="col-sm-6" >'
		+ '<label class="labelstyle"> Select Location : </label>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		+ '<select  class="form-control selectConf" id="location"  style="height:auto;">'
		+ '<option value="0">--- Select Location --- </option>'
		+ '<option value="1">Clean Room</option>'
		+ '<option value="2">Air Dust</option>'
		+ '<option value="3">Computer Room</option>'
		+ '<option value="4">Ware House</option>'
		+ '<option value="5">Corridor</option>'
		+ '</select>'
		+ '</div>'
		+ '</div>'
		+ '<br>'
		+ '<div class="row afterAnimHide">'


		+ '<div class="col-sm-6">'
		+ '<label class="labelstyle"> Select Partical Size (&micro;m) : </label>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		+ '<select  class="form-control selectConf" id="particalSize" " style="height:auto;">'
		+ '<option value="0">--- Select Partical Size --- </option>'
		+ '<option value="1" >less than 0.3 &micro;m</option>'
		+ '<option value="2">greater than 0.3 &micro;m</option>'

		//	     +'<option value="400">400&deg;</option>'
		+ '</select>'
		+ '</div>'
		+ '</div>'
		+ '<br>'
		+ '<div class="row afterAnimHide">'

		+ '<div class="col-sm-6">'
		+ '<label class="labelstyle"> Select Sensor Type : </label>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		+ '<select  class="form-control selectConf" id="sensorType" " style="height:auto;">'
		+ '<option value="0">--- Select Sensor Type --- </option>'
		+ '<option value="1" >Ionization Sensor</option>'
		+ '<option value="2">Photoelectric Sensor</option>'
		+ '</select>'
		+ '</div>'
		+ '</div>'
		+ '<br>'
		+ '<div class="col-sm-12 afterAnimHide" id="buttonDiv">'
		+ '<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>'
		+ '</div>'
		
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
		+ '</div>'
		+ '</div>'
		+ ' </div>'
	$("#main-div-conf").html(selection);

	//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;

	$("#submitconfig").click(function() {
		cntCalculateMainPage2++;
	//	console.log("cntCalculateMainPage2 = "+cntCalculateMainPage2);
		$("#infoSpan").prop("hidden", true);
		locationSelect = $("#location").val();
		paricalSelect = $("#particalSize").val();
		sensorSelect = $("#sensorType").val();
		
		locationSelectName = $("#location").children(":selected").text();
		paricalSelectName = $("#particalSize").children(":selected").text();
		sensorSelectName = $("#sensorType").children(":selected").text();
		
		if (paricalSelect == 1 && sensorSelect == 2 || paricalSelect == 2 && sensorSelect == 1) {
			$("#modelMsg123").html("<b class='boldTextRed'>Wrong sensor selected</b>");
			
		} else {

			if (locationSelect == 0) {
				$("#errorPanel").prop("hidden", false);
				$("#modelMsg123").html("<b class='boldTextRed'>Select Location</b>");
			} else if (paricalSelect == 0) {
				$("#errorPanel").prop("hidden", false);
				$("#modelMsg123").html("<b class='boldTextRed'>Select Partical Size</b>");
			} else if (sensorSelect == 0) {
				$("#errorPanel").prop("hidden", false);
				$("#modelMsg123").html("<b class='boldTextRed'>Select Sensor Type</b>");
			} else {

				$("#errorPanel").prop("hidden", true);
				$("#modelMsg123").html("<b class='boldTextGreen'>Configured successfully. Click on stop button.</b>");
				addToMasterJSONforTable();
				mimic(locationSelect, paricalSelect, sensorSelect);
			//	console.log("cntCalculateMainPage2 = > "+cntCalculateMainPage2);
				$("#submitconfig").prop("hidden", true);

			}
		}
	});


	


}

locationSelect = $("#location").val();
		paricalSelect = $("#particalSize").val();
		sensorSelect = $("#sensorType").val();

function addToMasterJSONforTable() {
	tempJsonConfigData = {};
	tempJsonConfigData.locationSelectName = locationSelectName;
	tempJsonConfigData.paricalSelectName = paricalSelectName;
	tempJsonConfigData.sensorSelectName = sensorSelectName;
	
	ArrayJson2.push(tempJsonConfigData);
	configDataMasterJson.demo = ArrayJson2;
	//console.log(configDataMasterJson);
	tableCreate2(configDataMasterJson);
}



function addToCntCalMain22MasterJson(){
 			var cntCalMain22tempJson={};
				cntCalMain22tempJson.cntCalculateMainPage2= cntCalculateMainPage2;

			
   			cntCalMain2ArrayJson.push(cntCalMain22tempJson);
			counterMasterJson.cntCalMain2MasterJson = cntCalMain2ArrayJson;
		
						

}
