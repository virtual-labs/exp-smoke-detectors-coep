tableReading=0;
var ArrayJson=[];
var calculationDataMasterJson={};
var selection1;
var selection2;
var selection3;
var AreaWall = 0;
var placementCnt = 0;
var cntCalMain1ArrayJson=[];
var cntCalMain1MasterJson={};
var CalculateCnt = 0;

var hightWallSelect = 3;
var widthWallSelect = 10;
var lengthWallSelect;
var noOfDetectorsWall;

var hightCeilingSelect = 3;
var widthCeilingSelect ;
var lengthCeilingSelect ;
var noOfDetectorsCeiling;

var hightSlopeSelect = 5;
var widthSlopeSelect = 10;
var lengthSlopeSelect ;
var noOfDetectorsSlope;
var tbcnt = 0;

var PlacementName;
var placementVAl;
var animCounterWall=0;
var animCounterCeiling=0;
var animCounterSlope=0;

function mainPage() {
	$("#main-div-conf").html('');
	$("#canvas-div").html('');
	$(".labelstyle").prop('hidden',false);
	$("#dlocation").prop('hidden',false);
	$('#dlocation').prop('disabled', false);
	$("#centerText1").html('PLACEMENT OF DETEDTOR');
	$("#centerText2").html('CONFIGURATION');
	var htm = '<img src="images/typePlacement.png" class="img-fluid" >'
	$("#canvas-div").html(htm);
	//      animation();
//	var selection = '
//	$("#main-div-conf").html(selection);



	$('#dlocation').change(function() {
		placementVAl = $("#dlocation").val();
	//	console.log("placementVAl=" + placementVAl);
		PlacementName = $("#dlocation").children(":selected").text();
		//console.log("placement Name =" + PlacementName);
		$('#dlocation').prop('disabled', true);
		$("#dlocation").children(":selected").css("background-color", "#f7dddd");

		if (placementVAl == 1) {
			placementCnt++;
			var selection1 = '<div class="row">'
				+ '<div class="col-sm-2" >'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '<span  class="labelstyle"   style="color:blue;font-weight:bold"> Height = 3m </span>'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '<span  class="labelstyle"   style="color:blue;font-weight:bold"> Width = 10m </span>'
				+ '</div>'
				+ '<div class="col-sm-2" >'
				+ '</div>'
				+ '</div>'
				+ '<br>'
				+ '<div class="row">'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle"> Select Length(m) :</label>'
				+ '</div>'
				+ '<div class="col-sm-6">'
				+ '<div class="slidecontainer"  id="lengthSliderWall" >'
				+ '<input type="range" min="10" max="100" value="0" class="slider" id="myRangeLengthWall" >'
				+ '<p><center><b><span id="Wlengthdemo"></span> meter </b></center></p>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '<div class="row">'
				+ '<div class="col-sm-12" id="buttonDiv">'
				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="submitconfigWall" data-toggle="modal" data-target="#selectCheck1" ><b> CHECK CONFIGURATION </b></button>'
				+ '</div>'
				+ '</div>'
				+ '<br>'
				+ '<div class="row calRowBorder" id="DetectorVal"  hidden>'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle" style="margin-top: 5px;">Calculate Number of Detectors: </label>'
				+ '</div>'
				+ '<div class="col-sm-3">'
				+ '<input type="number" id="wallDVal" style= "padding: 10px;width:100%;"  class=" form-control" />'
				+ '</div>'
				+ '<div class="col-sm-3">'   
				+ '<button type="button"  "  class="btn btn-danger btnStyle" id="wDetectorValSubmit" data-toggle="modal" data-target="#selectCheck1" ><b>SUBMIT</b></button>'
				+ '</div>'
				+ '</div>'
				+ '<br>'
				+'<div class="row" id="anotherPlacement"  >'
				+ '<div class="col-sm-12" >'
				+ '<span class="col-sm-12 col-lg-12 blinkInfoSpan" id="anotherPlacementInfoSpan" style="padding: 8px; font-size: 16px;color:red;font-weight:bold;background-color:#d4f7b8" hidden><center></> Select another detector placement</center></span>'
				+ '</div>'
				+ '</div>'
//				+ '<div class="row" id="goToApplicationLevel" hidden>'
//				+ '<div class="col-sm-12" id="buttonDiv">'
//				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="ALevel"  ><b>GO TO APLICATION LEVEL</b></button>'
//				+ '</div>'
//				+ '</div>'
//				+ '<br>'
			$("#main-div-conf").html(selection1);
			var wallLengthSlider = document.getElementById("myRangeLengthWall");
			var wallLength = document.getElementById("Wlengthdemo");
			wallLength.innerHTML = wallLengthSlider.value;
			wallLengthSlider.oninput = function() {
				wallLength.innerHTML = this.value;
			//	console.log("length Width=" + wallLength.innerHTML);
			}

			$("#submitconfigWall").click(function() {

				placementSelect = $("#dlocation").val();
			//	console.log("placementSelect = " + placementSelect);
				lengthWallSelect = wallLength.innerHTML;
			//	console.log("lengthWallSelect = " + lengthWallSelect);

				AreaWall = lengthWallSelect * widthWallSelect;
				noOfDetectorsWall22 = lengthWallSelect / 9;
				noOfDetectorsWall33 = noOfDetectorsWall22.toFixed(2);

				if (lengthWallSelect == 10) {

					$("#modelMsgbody11").html("<b class='boldTextRed'>Select Length</b>");
				} else {
					$("#modelMsgbody11").html("<b class='boldTextGreen'>Configured successfully</b>");
					$("#DetectorVal").prop('hidden', false);
					$("#myRangeLengthWall").prop('disabled', true);
				}
			});


			var id1 = 0;
			$("#wDetectorValSubmit").click(function() {
					$("#submitconfigWall").prop('disabled', true);
				$("body").css("padding", "0px 0px 0px 0px");
				var DetectorNoWall = parseFloat($("#wallDVal").val());
				noOfDetectorsWall = Math.trunc(noOfDetectorsWall33);
			//	console.log("DetectorNoWall = " + DetectorNoWall + ",  noOfDetectorsWall = " + noOfDetectorsWall);
				if (DetectorNoWall == " ") {
					$("#modelMsgbody11").html("<b class='boldTextRed'>Enter numeric value </b> ");
				}
				else {
					if (id1 <= 2) {
						if (DetectorNoWall == noOfDetectorsWall) {
							//$("#DetectorVal").prop('hidden',true);
							id1 = 0;
							$("#wallDVal").val();
							$("#dlocation").prop('disabled', false);
					//		console.log("placementCnt = " + placementCnt)
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#wallDVal").prop('disabled', true);
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							animCounterWall++;
						//	console.log("animCounterWall =>  "+animCounterWall);
							addToMasterJSONforTableWall();
							

						} else if (DetectorNoWall != noOfDetectorsWall) {
							$("#modelMsgbody11").html("<b class='boldTextRed'>Entered value is incorrect.Try again</b> ");
						}
					} else if (id1 == 3) {
						$("#modelMsgbody11").html("<b class='boldTextBlue'>Formula : <br> Number of Detectors = Length/9 </b> ");


					} else {
						DetectorNoWall = parseFloat($("#wallDVal").val());

						if (DetectorNoWall == noOfDetectorsWall) {
							//$("#DetectorVal").prop('hidden',true);
							$("#dlocation").prop('disabled', false);
							DetectorNoWall = $("#wallDVal").val();
							id1 = 0;
						//	console.log("placementCnt = " + placementCnt);
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#wallDVal").prop('disabled', true);
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							animCounterWall++;
						//	console.log("animCounterWall =>  "+animCounterWall);
							addToMasterJSONforTableWall();
						} else {
							$("#modelMsgbody11").html("<b class='boldTextBlue'>Correct answer is  " + parseFloat(noOfDetectorsWall) + '</b>');
						}
					}
					id1++;
					CalculateCnt++;
					//console.log("CalculateCnt = " + CalculateCnt);
				}
			});

//			$('#ALevel').on('click', function() {
//				console.log("appli level" + placementCnt);
//				mainPage1();
//
//			});

		} else if (placementVAl == 2) {
			placementCnt++;
			var selection2 = '<div class="row">'
				+ '<div class="col-sm-4" >'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '<span  class="labelstyle"   style="color:blue;font-weight:bold"> Height = 3m </span>'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '</div>'
				+ '</div><br>'
				+ '<div class="row">'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle"> Select Width(m) : </label>'
				+ '</div>'
				+ '<div class="col-sm-6">'
				+ '<div class="slidecontainer"  id="widthSliderWall" >'
				+ '<input type="range" min="5" max="100" value="0" class="slider" id="CeilingWidthmyRange" >'
				+ '<p><center><b><span id="CeilingWidthdemo"></span> meter </b></center></p>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '<div class="row">'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle"> Select Length(m) :</label>'
				+ '</div>'
				+ '<div class="col-sm-6">'
				+ '<div class="slidecontainer"  id="lengthSliderCeiling" >'
				+ '<input type="range" min="5" max="100" value="0" class="slider" id="myRangeLengthCeiling" >'  
				+ '<p><center><b><span id="Ceilinglengthdemo"></span> meter </b></center></p>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '<div class="col-sm-12" id="buttonDiv">'
				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="submitconfigT2" data-toggle="modal" data-target="#selectCheck1" ><b>  CHECK CONFIGURATION </b></button>'
				+ '</div>'
				+ '<br><br>'
				+ '<div class="row calRowBorder" id="DetectorVal" hidden>'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle">Calculate Number of Detectors: </label>'
				+ '</div>'
				+ '<div class="col-sm-3">'
				+ '<input type="number" id="CeilingDVal" style= "padding: 10px;width:100%;"  class=" form-control" />'
				+ '</div>'
				+ '<div class="col-sm-3">'
				+ '<button type="button"  "  class="btn btn-danger btnStyle" id="CeilingDetectorValSubmit" data-toggle="modal" data-target="#selectCheck1" ><b>SUBMIT </b></button>'
				+ '</div>'
				+ '</div><br>'
				+'<div class="row" id="anotherPlacement"  >'
				+ '<div class="col-sm-12" >'
				+ '<span class="col-sm-12 col-lg-12 blinkInfoSpan" id="anotherPlacementInfoSpan" style="padding: 8px; font-size: 16px;color:red;font-weight:bold;background-color:#d4f7b8" hidden><center></> Select another detector placement</center></span>'
				+ '</div>'
				+ '</div>'
//				+ '<div class="row" id="goToApplicationLevel" hidden>'
//				+ '<div class="col-sm-12" id="buttonDiv">'
//				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="ALevel"><b>GO TO APLICATION LEVEL</b></button>'
//				+ '</div>'
//				+ '</div>'
//				+ '<br>'
			$("#main-div-conf").html(selection2);

			var CeilingWidthslider = document.getElementById("CeilingWidthmyRange");
			var CeilingWidth = document.getElementById("CeilingWidthdemo");
			CeilingWidth.innerHTML = CeilingWidthslider.value;
			CeilingWidthslider.oninput = function() {
				CeilingWidth.innerHTML = this.value;
			//	console.log("Ceiling Width=" + CeilingWidth.innerHTML);
			}

			var CeilingLengthSlider = document.getElementById("myRangeLengthCeiling");
			var CeilingLength = document.getElementById("Ceilinglengthdemo");
			CeilingLength.innerHTML = CeilingLengthSlider.value;
			CeilingLengthSlider.oninput = function() {
				CeilingLength.innerHTML = this.value;
			//	console.log("Ceiling Length=" + CeilingLength.innerHTML);
			}

			$("#submitconfigT2").click(function() {
				$("#DetectorVal").prop('hidden', false);
				//console.log("submit config Ceiling");
				placementSelect = $("#dlocation").val();
			//	console.log("placementSelect = " + placementSelect);
				widthCeilingSelect = CeilingWidth.innerHTML;
			//	console.log("widthCeilingSelect = " + widthCeilingSelect);

				lengthCeilingSelect = CeilingLength.innerHTML;
			//	console.log("lengthCeilingSelect = " + lengthCeilingSelect);

				AreaCeiling = lengthCeilingSelect * widthCeilingSelect;
				noOfDetectorsCeiling22 = AreaCeiling / 83.61;

				noOfDetectorsCeiling33 = noOfDetectorsCeiling22.toFixed(2);
			//	console.log("noOfDetectorsCeiling33 = " + noOfDetectorsCeiling33);
				
				if (widthCeilingSelect == 5) {

					$("#modelMsgbody11").html("<b class='boldTextRed'>Select Width(m)</b>");
				} else if (lengthCeilingSelect == 5) {

					$("#modelMsgbody11").html("<b class='boldTextRed'>Select Length(m)</b>");
				} else {

					$("#DetectorVal").prop('disabled', false);
					$("#modelMsgbody11").html("<b class='boldTextGreen'>Configured successfully</b>");
					$("#CeilingWidthmyRange").prop('disabled', true); 
					$("#myRangeLengthCeiling").prop('disabled', true);
					
				}
			});


			var id2 = 0;
			$("#CeilingDetectorValSubmit").click(function() {
					$("#submitconfigT2").prop('disabled', true);
				$("body").css("padding", "0px 0px 0px 0px");
				var DetectorNoCeiling = parseFloat($("#CeilingDVal").val());
				 noOfDetectorsCeiling = Math.trunc(noOfDetectorsCeiling33)
			//	console.log(" noOfDetectorsCeiling = " + noOfDetectorsCeiling);
				if (DetectorNoCeiling == " ") {
					$("#modelMsgbody11").html("<b class='boldTextRed'>Enter numeric value </b> ");
				}
				else {
					if (id2 <= 2) {
						if (DetectorNoCeiling == noOfDetectorsCeiling) {
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							$("#CeilingDVal").val();
							id2 = 0;
						//	console.log("placementCnt = " + placementCnt)
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							animCounterCeiling++;
							addToMasterJSONforTableCeil();
							$("#dlocation").prop('disabled', false);
							$("#CeilingDVal").prop('disabled', true);
							
//							}

						} else if (DetectorNoCeiling != noOfDetectorsCeiling) {
							$("#modelMsgbody11").html("<b class='boldTextRed'>Entered value is incorrect.Try again</b> ");
						}
					} else if (id2 == 3) {
						$("#modelMsgbody11").html("<b class='boldTextBlue'>Formula : <br> Number of Detectors = Area / 83.61 <br> Area = Length * Width </b> ");


					} else {
						DetectorNoCeiling = parseFloat($("#CeilingDVal").val());

						if (DetectorNoCeiling == noOfDetectorsCeiling) {
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							$("#CeilingDVal").val();
							id2 = 0;
						//	console.log("placementCnt = " + placementCnt)
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							animCounterCeiling++;
							addToMasterJSONforTableCeil();
							$("#dlocation").prop('disabled', false);
							$("#CeilingDVal").prop('disabled', true);
							
						} else {

							$("#modelMsgbody11").html("<b class='boldTextBlue'>Correct answer is  " + parseFloat(noOfDetectorsCeiling) + '</b>');
//							$("#CeilingDVal").prop('disabled', true);
						}
					}
					id2++;
					CalculateCnt++;
				//	console.log("CalculateCnt = "+CalculateCnt);

				}

			});

//			$('#ALevel').on('click', function() {
//				console.log("appli level" + placementCnt);
//
//				mainPage1();
//
//			});


		} else if (placementVAl == 3) {
			placementCnt++;

			var selection3 = '<div class="row">'
				+ '<div class="col-sm-2" >'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '<span  class="labelstyle"   style="color:blue;font-weight:bold"> Height = 5m </span>'
				+ '</div>'
				+ '<div class="col-sm-4" >'
				+ '<span  class="labelstyle"   style="color:blue;font-weight:bold"> Width = 10m </span>'
				+ '</div>'
				+ '<div class="col-sm-2" >'
				+ '</div>'
				+ '</div><br>'
				+ '<div class="row">'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle"> Select Length(m) :</label>'
				+ '</div>'
				+ '<div class="col-sm-6">'
				+ '<div class="slidecontainer"  id="lengthSliderSlope" >'
				+ '<input type="range" min="5" max="100" value="0" class="slider" id="myRangeLengthSlope" >'
				+ '<p><center><b><span id="Slopelengthdemo"></span> meter </b></center></p>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '<div class="row">'
				+ '<div class="col-sm-12" id="buttonDiv">'
				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="submitconfigSlope" data-toggle="modal" data-target="#selectCheck1" ><b> CHECK CONFIGURATION </b></button>'
				+ '</div>'
				+ '</div>'
				+ '<br>'
				+ '<div class="row calRowBorder" id="DetectorVal"  hidden>'
				+ '<div class="col-sm-6">'
				+ '<label class="labelstyle" style="margin-top: 5px;">Calculate Number of Detectors: </label>'
				+ '</div>'
				+ '<div class="col-sm-3">'
				+ '<input type="number" id="SlopeDVal" style= "padding: 10px;width:100%;"  class=" form-control" />'
				+ '</div>'
				+ '<div class="col-sm-3">'
				+ '<button type="button"  "  class="btn btn-danger btnStyle" id="SlopeDetectorValSubmit" data-toggle="modal" data-target="#selectCheck1" ><b>SUBMIT</b></button>'
				+ '</div>'
				+ '</div>'
				+ '<br>'
				+'<div class="row" id="anotherPlacement"  >'
				+ '<div class="col-sm-12" >'
				+ '<span class="col-sm-12 col-lg-12 blinkInfoSpan" id="anotherPlacementInfoSpan" style="padding: 8px; font-size: 16px;color:red;font-weight:bold;background-color:#d4f7b8" hidden><center></> Select another detector placement</center></span>'
				+ '</div>'
				+ '</div>'
//				+ '<div class="row" id="goToApplicationLevel" hidden>'
//				+ '<div class="col-sm-12" id="buttonDiv">'
//				+ '<button type="button" style="padding: 10px; margin-bottom: 10px;"  class="btn btn-danger btnStyle" id="ALevel"  ><b>GO TO APLICATION LEVEL</b></button>'
//				+ '</div>'
//				+ '</div>'
//				+ '<br>'
			$("#main-div-conf").html(selection3);

			var SlopeLengthSlider = document.getElementById("myRangeLengthSlope");
			var SlopeLength = document.getElementById("Slopelengthdemo");
			SlopeLength.innerHTML = SlopeLengthSlider.value;
			SlopeLengthSlider.oninput = function() {
				SlopeLength.innerHTML = this.value;
				//console.log("SlopeLength=" + SlopeLength.innerHTML);
			}

			$("#submitconfigSlope").click(function() {
				$("#DetectorVal").prop('hidden', false);
				//console.log("submit config wall");
				placementSelect = $("#dlocation").val();
				lengthSlopeSelect = SlopeLength.innerHTML;
				AreaSlope = lengthSlopeSelect * widthSlopeSelect;
				 noOfDetectorSlop22 = lengthSlopeSelect / 9;
				 noOfDetectorSlop33 = noOfDetectorSlop22.toFixed(2);

				if (lengthSlopeSelect == 5) {

					$("#modelMsgbody11").html("<b class='boldTextRed'>Select Length(m)</b>");
				} else {
					$("#modelMsgbody11").html("<b class='boldTextGreen'>Configured successfully</b>");
					$("#myRangeLengthSlope").prop('disabled', true);
				}
			});


			var id3 = 0;
			$("#SlopeDetectorValSubmit").click(function() {
				$("#submitconfigSlope").prop('disabled', true);
				$("body").css("padding", "0px 0px 0px 0px");
				var DetectorNoSlope = parseFloat($("#SlopeDVal").val());
				 noOfDetectorsSlope = Math.trunc(noOfDetectorSlop33);
				//console.log("DetectorNoSlope = " + DetectorNoSlope + ",  noOfDetectorsSlope = " + noOfDetectorsSlope);
				if (DetectorNoSlope == " ") {
					$("#modelMsgbody11").html("<b class='boldTextRed'>Enter numeric value </b> ");
				}
				else {
					if (id3 <= 2) {
						if (DetectorNoSlope == noOfDetectorsSlope) {
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							id3 = 0;
							$("#SlopeDVal").val();
							$("#dlocation").prop('disabled', false);
							//console.log("placementCnt = " + placementCnt);
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#SlopeDVal").prop('disabled', true);
							animCounterSlope++;
							addToMasterJSONforTableSlope();
							

						} else if (DetectorNoSlope != noOfDetectorsSlope) {
							$("#modelMsgbody11").html("<b class='boldTextRed'>Entered value is incorrect.Try again</b> ");
						}
					} else if (id3 == 3) {
						$("#modelMsgbody11").html("<b class='boldTextBlue'>Formula : <br> Number of Detectors = Length/9 </b> ");


					} else {
						DetectorNoSlope = parseFloat($("#SlopeDVal").val());

						if (DetectorNoSlope == noOfDetectorsSlope) {
							$("#anotherPlacementInfoSpan").prop('hidden', false);
							id3 = 0;
							$("#SlopeDVal").val();
							$("#dlocation").prop('disabled', false);
							//console.log("placementCnt = " + placementCnt);
							$("#modelMsgbody11").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#SlopeDVal").prop('disabled', true);
							animCounterSlope++;
							addToMasterJSONforTableSlope();
							

						} else {

							$("#modelMsgbody11").html("<b class='boldTextBlue'>Correct answer is  " + parseFloat(noOfDetectorsSlope) + '</b>');

						}
					}
					id3++;
					CalculateCnt++;
					//console.log("CalculateCnt = "+CalculateCnt);
				}

				//					
			});

//			$('#ALevel').on('click', function() {
//				console.log("appli level" + placementCnt);
//
//				mainPage1();
//
//			});



		} else {
			$("#modelMsg123").html("<b class='boldTextRed'>Select detector placement</b>");
		}


	});


}

function addToMasterJSONforTableWall() {
	tbcnt++;
	tempJsonCalData = {};
	tempJsonCalData.placementVAl=placementVAl;
	tempJsonCalData.PlacementName = PlacementName;
	
	tempJsonCalData.hightWallSelect = hightWallSelect;
	tempJsonCalData.widthWallSelect = widthWallSelect;
	tempJsonCalData.lengthWallSelect = lengthWallSelect;
	tempJsonCalData.noOfDetectorsWall = noOfDetectorsWall;
	
	ArrayJson.push(tempJsonCalData);
	calculationDataMasterJson.demo = ArrayJson;
	calculationDataMasterJson.tbcnt = tbcnt;
//	console.log(calculationDataMasterJson);
	tableCreate(calculationDataMasterJson);

}

function addToMasterJSONforTableCeil() {
	tbcnt++;
	tempJsonCalData = {};
	tempJsonCalData.placementVAl=placementVAl;
	tempJsonCalData.PlacementName = PlacementName;
	
//	tempJsonCalData.hightWallSelect = hightWallSelect;
//	tempJsonCalData.widthWallSelect = widthWallSelect;
//	tempJsonCalData.lengthWallSelect = lengthWallSelect;
//	tempJsonCalData.noOfDetectorsWall = noOfDetectorsWall;
	
	tempJsonCalData.hightCeilingSelect = hightCeilingSelect;
	tempJsonCalData.widthCeilingSelect = widthCeilingSelect;
	tempJsonCalData.lengthCeilingSelect = lengthCeilingSelect;
	tempJsonCalData.noOfDetectorsCeiling = noOfDetectorsCeiling;
	
//	tempJsonCalData.hightSlopeSelect = hightSlopeSelect;
//	tempJsonCalData.widthSlopeSelect = widthSlopeSelect;
//	tempJsonCalData.lengthSlopeSelect = lengthSlopeSelect;
//	tempJsonCalData.noOfDetectorsSlope = noOfDetectorsSlope;
		
	
	ArrayJson.push(tempJsonCalData);
	calculationDataMasterJson.demo = ArrayJson;
	calculationDataMasterJson.tbcnt = tbcnt;
//	console.log(calculationDataMasterJson);
	tableCreate(calculationDataMasterJson);

}

function addToMasterJSONforTableSlope() {
	tbcnt++;
	tempJsonCalData = {};
	tempJsonCalData.placementVAl=placementVAl;
	tempJsonCalData.PlacementName = PlacementName;
	
//	tempJsonCalData.hightWallSelect = hightWallSelect;
//	tempJsonCalData.widthWallSelect = widthWallSelect;
//	tempJsonCalData.lengthWallSelect = lengthWallSelect;
//	tempJsonCalData.noOfDetectorsWall = noOfDetectorsWall;
//	
//	tempJsonCalData.hightCeilingSelect = hightCeilingSelect;
//	tempJsonCalData.widthCeilingSelect = widthCeilingSelect;
//	tempJsonCalData.lengthCeilingSelect = lengthCeilingSelect;
//	tempJsonCalData.noOfDetectorsCeiling = noOfDetectorsCeiling;
	
	tempJsonCalData.hightSlopeSelect = hightSlopeSelect;
	tempJsonCalData.widthSlopeSelect = widthSlopeSelect;
	tempJsonCalData.lengthSlopeSelect = lengthSlopeSelect;
	tempJsonCalData.noOfDetectorsSlope = noOfDetectorsSlope;
		
	
	ArrayJson.push(tempJsonCalData);
	calculationDataMasterJson.demo = ArrayJson;
	calculationDataMasterJson.tbcnt = tbcnt;
//	console.log(calculationDataMasterJson);
	tableCreate(calculationDataMasterJson);

}


function addToCntCalMain1MasterJson() {
	var cntCalMain1tempJson = {};
	cntCalMain1tempJson.CalculateCnt = CalculateCnt;
	//let lastEntry1 = cntCalMain1ArrayJson[cntCalMain1ArrayJson.length - 1] || {cntCalculateMainPage: 0 };
	//cntCalMain1tempJson.cntCalculateMainPage = lastEntry1.cntCalculateMainPage + cntCalculateMainPage; // Add the new count			  
	//cntCalMain1tempJson.cntSubmitConfig = lastEntry1.cntSubmitConfig + cntSubmitConfig; // Add the new count
	cntCalMain1ArrayJson.push(cntCalMain1tempJson);
	counterMasterJson.cntCalMain1MasterJson = cntCalMain1ArrayJson;



}