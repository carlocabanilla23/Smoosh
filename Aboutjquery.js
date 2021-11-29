$(document).ready(function(){
  $("#contactDiv").hide();
  $("#creatorDiv").hide();
  
  
  $("#creator").click(function(){
		
	  $("#creatorDiv").slideDown(1000);  
	  $("#missionDiv").slideUp(1000);
	  $("#contactDiv").slideUp(1000);

  });
  
  
  $("#contact").click(function(){
	  $("#contactDiv").slideDown(1300);
	  $("#creatorDiv").slideUp(1300);
	  $("#missionDiv").slideUp(1300);
	 

  });
  $("#mission").click(function(){
	  $("#missionDiv").slideDown(1300);
	  $("#contactDiv").slideUp(1300);
	  $("#creatorDiv").slideUp(1300);
	 

  });
  
  
});