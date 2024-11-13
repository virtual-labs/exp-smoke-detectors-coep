


function resultAnalysis(counterMasterJson){
	$("#downloadResult").prop("hidden", false);
	    
	//	console.log(counterMasterJson);
				
$("#selectMethod").prop('hidden',false);
$(".labelstyle").prop('hidden',true);
$("#dlocation").prop('hidden',true);
$("#simDemo").prop('hidden',true);
$("#procedure").prop('hidden',true);

counterMasterJson = {
    "questionary": {
        "totalQues": 5,
       
    },
    "cntCalMain1MasterJson": {
        "CalculateCnt": CalculateCnt
        
    },
   "cntCalMain2MasterJson": {
        "cntCalculateMainPage2": cntCalculateMainPage2
        
    }
}	
	
//basic knowledge	
var correctVal = (answerTotCount/5).toFixed(2);
var quesPercent1 = (correctVal*100).toFixed(1);
var quesPercent = parseFloat(quesPercent1);
//console.log(quesPercent);

//configuration
var correctValConfigType11 = (5/counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2).toFixed(2);
//console.log("JSON CONFIG VAL = "+counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
//console.log(configPercent);

//calculation 
var correctValnpnConnect = (3/counterMasterJson.cntCalMain1MasterJson.CalculateCnt).toFixed(2);
var correctValnpnConnect1 = (correctValnpnConnect*100).toFixed(1);
var CalculationPercent = parseFloat(correctValnpnConnect1);
//console.log(CalculationPercent);

//Animation
var correctValCalculation = (5/5).toFixed(2);
var CalculationPercent1 = (correctValCalculation*100).toFixed(1);
var animPercent = parseFloat(CalculationPercent1);
//console.log(animPercent);

//Observation
var correctValObsevation = (5/5).toFixed(2);
var observationPercent1 = (correctValObsevation*100).toFixed(1);
var observationPercent = parseFloat(observationPercent1);
//console.log(observationPercent);

var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'


		+'<div class="col-md-12">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center>Smoke detector experiment completed successfully!!</center></div>'
		+'</div>'
		+'</div>'
		
		+' </div>'
		
		//Close 1 Row
		+'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-6">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">PHASES OF SMOKE DETECTOR SENSOR</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'	  <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
//		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   if(configPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm += '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Calculation</center></td>'
		   if(CalculationPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'		  
		   htm +='  </tr>'
		   +'  <tr>'
	       +'     <td class=""><center>Animation</center></td>'
	       if(animPercent>=60){
			 htm +='     <td class=""><center class="attained">Attained</center></td>'  
		   }else{
			  htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'  
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'
		   htm += ' </tr>'
		   +'   <tr>'
		   +'      <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1tableAndGraph+'</center></td>'		  
		   +'  </tr>'
		  
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-6" id="graph-div" >'

		+' </div>'
		+' </div>'
		+' </div>'
			
		
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic knowledge</b></span></center>'
		+'</div>'
		+'</div>'		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="margin-bottom: 28px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-md-6">'
		+'<div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Right Answer</span></center>'
		+'<div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+answerTotCount+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+'</div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>COFIGURATION</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style=" margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2 +'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">CALCULATION</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>3</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attemptt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain1MasterJson.CalculateCnt+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
//		+' </div>'
//		+' </div>'
		
		$("#mainDiv").html(htm);
		



		let initialData = [
		    { name: 'Questionaries', y: quesPercent },
		    { name: 'Configuration', y: configPercent },
		    { name: 'Calculation', y: CalculationPercent },
		    { name: 'Animation', y: animPercent },
			{ name: 'Observation', y: observationPercent },
		];

		// Create the pie chart
		let chart = Highcharts.chart('graph-div', {
			credits: { enabled: false},
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: ''
		    },
		    series: [{
		        name: 'Observed',
		        colorByPoint: true,
		        data: initialData
		    }],
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.name}: {point.percentage:.1f} %'
		            }
		        }
		    }
		});
		
		
		$("#downloadResult").prop("hidden",false);
	

	
	function generatePDF() {
    // Select the div by its ID
    const element = document.querySelector("#mainDiv");

    // Use html2canvas to capture the element as a canvas
    html2canvas(element, {
        scale: 3,  // Increase the scale for better resolution (adjustable)
        useCORS: true // In case of cross-origin issues with external resources like images
    }).then(function (canvas) {
        // Convert the canvas to image data in PNG format
        const imgData = canvas.toDataURL("image/png", 1.0); // No compression

        // Initialize the PDF document in landscape mode ('l') and A4 size
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        
        // Define the width and height for the image to fit in the landscape A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Keep aspect ratio

        // Define the top margin (in mm)
        const topMargin = 10;

        // Check if the image height exceeds the landscape page height minus the top margin
        if (pdfHeight > pdf.internal.pageSize.getHeight() - topMargin) {
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight() - topMargin;

            // Loop over the content to fit into multiple pages in landscape
            while (position < canvas.height) {
                const pageData = canvas.getContext('2d').getImageData(0, position, canvas.width, canvas.height - position);

                // Create a new image element from the slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = canvas.width;
                pageCanvas.height = canvas.height - position < pageHeight ? canvas.height - position : pageHeight;
                pageCanvas.getContext('2d').putImageData(pageData, 0, 0);

                const imgData = pageCanvas.toDataURL('image/png', 1.0);  // Avoid compression
                
                pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, (pdfWidth * pageCanvas.height) / pageCanvas.width);

                position += pageHeight;

                if (position < canvas.height) {
                    pdf.addPage();
                }
            }
        } else {
            // If it fits on one page, simply add the image to the PDF in landscape with the top margin
            pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, pdfHeight);
        }

        // Save the generated PDF
        pdf.save("Smoke_Detector_Report.pdf");
    });
}

// Set up the button click event to generate the PDF
$("#downloadResult").on("click", function(){
    generatePDF();
});

$("#downloadResult").on("click", function(){
//	console.log("click event generated");
	generatePDF();
})		


  }
