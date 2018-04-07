$(document).ready(function() {
	var i = 1;
	var showDiv = null;
	var hideDiv = null;
	$("#type").click(function() {
		$("#type-div").show();
	});
	$("div.first-type:eq(0)").hover(function() {
		$(this).parent().next().show();
		$("#second-1").show();
	}, function() {
		$(this).parent().next().hide(1000);
		$("#second-1").hide(1000);
	});
	$("div.first-type:eq(1)").hover(function() {
		$(this).parent().next().show();
		$("#second-2").show();
	}, function() {
		$(this).parent().next().hide();
		$("#second-2").hide();
	});
	$("div.first-type:eq(2)").hover(function() {
		$(this).parent().next().show();
		$("#second-3").show();
	}, function() {
		$(this).parent().next().hide();
		$("#second-3").hide();
	});
	$("div.second-type:eq(0)").hover(function() {
		$("#second-1").parent().stop().show();
		$("#second-1").stop().show;
		$(this).parent().parent().next().show();
		$("#third-1-1").show();
	}, function() {
		$(this).parent().parent().next().hide(1000);
		$("#third-1-1").hide(1000);
	});
	$("div.second-type:eq(1)").hover(function() {
		$("#second-1").parent().stop().show();
		$("#second-1").stop().show;
		$(this).parent().parent().next().show();
		$("#third-1-2").show();
	}, function() {
		$(this).parent().parent().next().hide();
		$("#third-1-2").hide();
	});
	$("div.second-type:eq(2)").hover(function() {
		$("#second-1").parent().stop().show();
		$("#second-1").stop().show;
		$(this).parent().parent().next().show();
		$("#third-1-3").show();
	}, function() {
		$(this).parent().parent().next().hide();
		$("#third-1-3").hide();
	});
	$("div.second-type:eq(3)").hover(function() {
		$("#second-2").parent().stop().show();
		$("#second-2").stop().show;
		$(this).parent().parent().next().show();
		$("#third-2-1").show();
	}, function() {
		$(this).parent().parent().next().hide();
		$("#third-2-1").hide();
	});
	$("div.second-type:eq(4)").hover(function() {
		$("#second-3").parent().stop().show();
		$("#second-3").stop().show;
		$(this).parent().parent().next().show();
		$("#third-3-1").show();
	}, function() {
		$(this).parent().parent().next().hide();
		$("#third-3-1").hide();
	});

	$("div.third-type:eq(0)").hover(function() {
		$(this).parent().parent().stop().show();
		$(this).parent().stop().show();
	}, function() {
		$(this).parent().parent().hide();
		$(this).parent().hide();
		$("#type-div").hide();
		$("#second-1").parent().hide();
	});
	$("div.third-type:eq(0)").click(function() {
		$("#type-input").val("财务管理/资产评估/工程造价");
		$(this).parent().parent().hide();
		$(this).parent().hide();
		$("#type-div").hide();
		$("#second-1").parent().hide();
	});
})