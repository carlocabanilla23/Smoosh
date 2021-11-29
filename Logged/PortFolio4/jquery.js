$(document).ready(function(){
	$("#item2").hide();
	$("#item3").hide();
	$("#item4").hide();
	$("#ctrlDown2").hide();
	$("#ctrlUp").hide();
	$("#ctrlUp2").hide();
	
	
	
	$("#ctrlDown").click(function(){
		$("#item1").slideUp(1500);
		$("#item1").hide(1500);
		$("#item2").slideDown(1500);
		$("#ctrlUp2").show();
		$("#ctrlDown2").show();
		$("#ctrlDown").hide();
	})
	$("#ctrlDown2").click(function(){
		$("#item2").slideUp(1500);
		$("#item3").slideDown(1500);
		$("#ctrlUp2").hide();
		$("#ctrlUp").show();
		$("#ctrlDown").hide();
		$("#ctrlDown2").hide();
	})
	$("#ctrlUp").click(function(){
		$("#item3").slideUp(1500);
		$("#item2").slideDown(1500);
		$("#ctrlUp").hide();
		$("#ctrlUp2").show();
		
	})
	$("#ctrlUp2").click(function(){
		$("#item2").slideUp(1500);
		$("#item1").slideDown(1500);
		$("#ctrlUp").hide();
		$("#ctrlUp2").hide();
		$("#ctrlDown").show();
		$("#ctrlDown2").hide();
	})

})