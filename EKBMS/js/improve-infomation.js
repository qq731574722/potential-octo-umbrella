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
	
	$("span.good").toggle(function(e){
//					alert($("#label-input").offset().top);
					$(this).css('position','absolute');
					$(this).css({
						'top': $("#label-input").offset().top - $("#label-input").height()-355,
						'left': $("#label-input").offset().left + 2 + parseInt($("#label-input").css("padding-left"))-357,
					});
					$("#label-input").css("padding-left",parseInt($("#label-input").css("padding-left"))+parseInt($(this).width()));
				},function(e){
					$("#label-input").css("padding-left",parseInt($("#label-input").css("padding-left"))-parseInt($(this).width()));
					$(this).css('position','static');
				});
				$("#label-input").blur(function(e){
//					alert($(this).val()=="");
//					alert($(this).css("padding-left"));
					if($(this).val()==""){}else{
					$("span.good:last").after("<span class='bad'><span style='background-color: #EEEEEE;'>&nbsp;"+$(this).val()+ "&nbsp;</span><span class='glyphicon glyphicon-remove' aria-hidden='true' style='color: #797979;'></span><span style='background-color: white;'>&nbsp;</span></span>");
//											<span class="good"><span style="background-color: #EEEEEE;">&nbsp;标签1&nbsp;</span><span class="glyphicon glyphicon-remove" aria-hidden="true" style="color: #797979;"></span><span style="background-color: white;">&nbsp;</span></span>
					var $bad=$("span.bad:last");
					$bad.css('position','absolute');
					$bad.css({
						'top': $("#label-input").offset().top - $("#label-input").height()-355,
						'left': $("#label-input").offset().left + 2 + parseInt($("#label-input").css("padding-left"))-357,
					});
					$("#label-input").css("padding-left",parseInt($("#label-input").css("padding-left"))+parseInt($bad.width()));
					$(this).val("");
					$bad.click(function(e){
						$("#label-input").css("padding-left",parseInt($("#label-input").css("padding-left"))-parseInt($(this).width()));
						$(this).remove();
//						alert("sd");
					});
					}
				});
})