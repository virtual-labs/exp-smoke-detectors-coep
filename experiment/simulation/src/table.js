

//console.log(placementVAl);
function tableCreate(calculationDataMasterJson) {
	//console.log(calculationDataMasterJson);
	var tableMainDiv = '<div class="col-sm-12" style="overflow:auto;">'
		+ '<table class=" table table-bordered " style=" text-align: center">'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Detector placement</center></th>'
		+ '  <th scope="col"><center >Height(m)</center></th>'
		+ '  <th scope="col"><center>Width(m)</center></th>'
		+ '  <th scope="col"><center>Length(m)</center></th>'
		+ '  <th scope="col"><center>Number of detector</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < calculationDataMasterJson.tbcnt; i++, p++) {
		if (calculationDataMasterJson.demo[i].placementVAl == 1) {
			tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + calculationDataMasterJson.demo[i].PlacementName + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].hightWallSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].widthWallSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].lengthWallSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].noOfDetectorsWall + '</center></td>'
//			+ ' <td><center style="color:red;">' + masterJson.demo[i].hightWallSelect + '</center></td>'
			+ ' </tr>'
			$("#wDetectorValSubmit").prop('disabled', true);
		} else if (calculationDataMasterJson.demo[i].placementVAl == 2) {
			tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + calculationDataMasterJson.demo[i].PlacementName + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].hightCeilingSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].widthCeilingSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].lengthCeilingSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].noOfDetectorsCeiling + '</center></td>'
//			+ ' <td><center style="color:red;">' + masterJson.demo[i].hightWallSelect + '</center></td>'
			+ ' </tr>'
			$("#CeilingDetectorValSubmit").prop('disabled', true);
			
		}else if(calculationDataMasterJson.demo[i].placementVAl==3){
			tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + calculationDataMasterJson.demo[i].PlacementName + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].hightSlopeSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].widthSlopeSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].lengthSlopeSelect + '</center></td>'
			+ ' <td><center style="color:red;">' + calculationDataMasterJson.demo[i].noOfDetectorsSlope + '</center></td>'
//			+ ' <td><center style="color:red;">' + masterJson.demo[i].hightWallSelect + '</center></td>'
			+ ' </tr>'
			$("#SlopeDetectorValSubmit").prop('disabled', true);
				
		}else{
			
		}
		
		
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'

	if (tableReading >=2 &&  animCounterWall>=1 && animCounterCeiling>=1 && animCounterSlope>=1) {
		//console.log(animCounterWall+" , "+animCounterCeiling+" , "+animCounterSlope);
		tableMainDiv += '<div class="col-sm-12" id="buttonDiv"><button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="ALevel"  ><b>GO TO APPLICATION LEVEL</b></button></div>'
		$("#dlocation").prop('disabled', true);	
		$("#anotherPlacementInfoSpan").html('<center>CLICK ON "GO TO APPLICATION LEVEL" button </center>');
			
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading++;
	//console.log("tableReading " + tableReading);
	//console.log(animCounterWall+" , "+animCounterCeiling+" , "+animCounterSlope);
	
	$('#ALevel').on('click', function() {
				//console.log("appli level" + placementCnt);
				mainPage1();

			});


}

function tableCreate2(configDataMasterJson) {

	var tableMainDiv = '<div class="col-sm-12"  style="overflow:auto;">'
		+ '<table class=" table table-bordered " style="text-align: center">'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Location</center></th>'
		+ '   <th scope="col"><center >Partical Size (&micro;m)</center></th>'
		+ '  <th scope="col"><center>Sensor Type</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < configDataMasterJson.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + configDataMasterJson.demo[i].locationSelectName + '</center></td>'
			+ ' <td><center style="color:red;">' + configDataMasterJson.demo[i].paricalSelectName + '</center></td>'
			+ ' <td><center>' + configDataMasterJson.demo[i].sensorSelectName + '</center></td>'
			+ ' </tr>'
//			$("#submitconfig").prop('disabled',true);
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'

	if (tableReading2 >= 4) {
		tableMainDiv += '<div class="col-sm-12" id="buttonDiv2"><br/><button type="button" style="padding: 10px; height:auto; "  class="btn btn-danger btnStyle" id="finish" ><b> RESULT </b></button><br/></div>'
		
		$("#submitconfig").prop('hidden', true);
		$(".afterAnimHide").prop("hidden", true);
		$("#infoSpan").prop("hidden", true);
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading2++;
	//console.log("tableReading " + tableReading);
	
	$("#finish").click(function() {
		$("#finish").prop('hidden', true);		
		$("#location").prop('disabled', false);
		$("#particalSize").prop('disabled', false);
		$("#sensorType").prop('disabled', false);
		$("#submitconfig").prop('disabled', false);
		//			alert("Experiment successfully completed");
		//		$("#modelMsg123").html('<img src="images/cong.gif" class="img-fluid" >');
		resultAnalysis(counterMasterJson);
	});

}


