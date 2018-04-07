$(function() {
	$("#NewFileBtn").bind("click", function(event) {
		//var $tbody=$(this).parents("table").children("tbody");
		$("tr.table-light").before("<tr class='table-danger' id='new-file' style='cursor: pointer;'><td><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' value=''>&nbsp;<span class='glyphicon glyphicon-folder-open' style='color: #F4C63D;width: 15.5px;height: 14px;'></span>&nbsp;新建文件夹</label></div></td><td>创建</td><td>2018-1-18</td></tr>");
		trover();
		$("#new-file").click(function(){
		$("#one-tbody").hide();
		$("#two-tbody").show();
		});
	});
	$("#BackBtn").bind("click",function(){
		$("#one-tbody").show();
		$("#two-tbody").hide();
	});
	$("#downLoadBtn").bind("click",function(){
		alert("添加下载成功！");
	});
	$("#checkAllBox").bind("click", function(event) {
		if($(this).attr('checked')) {
			$("input.form-check-input").prop("checked", false);
			$(this).attr("checked", false);
		} else {
			$("input.form-check-input").prop("checked", true);
			$(this).attr("checked", true);
		}
	});
	$("#RemoveFile").bind("click", function(event) {
		if(confirm("确定删除吗？")){
			$("input.form-check-input:gt(0):checked").parents("tr").remove();
		}
		event.stopPropagation();
	});

	function trover() {
		$("#head-tr").nextAll("tr").hover(function() {
			//		alert("ssad");
			$(this).addClass("new-file-hover");
		}, function() {
			$(this).removeClass("new-file-hover");
		});
	}
	trover();
	dragPanelMove("#show-message");

	function dragPanelMove(moveDiv) {
		$("#head-tr").nextAll("tr").mousedown(function(e) {
			var $downDiv = $(this);
			var isMove = true;
			var isClick = false;
			var div_x = e.pageX - $(this).position().left;
			var div_y = e.pageY - $(this).position().top;
			$(document).mousemove(function(e) {
				if(isMove) {
					var obj = $(moveDiv);
					obj.show();
					obj.css('position', 'absolute');
					obj.css({
						"left": e.pageX - div_x,
						"top": e.pageY - div_y,
					});
					obj.html($downDiv.html());
					isClick = true;
				}
			}).mouseup(
				function(e) {
					if(isClick) {
						$("#two-tbody").empty();
						$($downDiv).clone(true).appendTo("#two-tbody");
						$($downDiv).hide();
						$(moveDiv).hide();
					} else {;
					}
					$(document).off();
				});
		});

	}
	
	function  openBody() {
		alert("husa");
		$("#one-body").hide();
		$("#two-body").show();
	}
})