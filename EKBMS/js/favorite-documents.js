$(function(){
	$("#NewFileBtn").bind("click",function(event){
		//var $tbody=$(this).parents("table").children("tbody");
		$("tr.table-light").before("<tr class='table-danger' id='new-file'><td><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' value=''>&nbsp;<span class='glyphicon glyphicon-folder-open' style='color: #F4C63D;width: 15.5px;height: 14px;'></span>&nbsp;新建文件夹</label></div></td><td>创建</td><td>2018-1-18</td></tr>"
		);
		trover();
	});
	$("#checkAllBox").bind("click",function(event){
		if($(this).attr('checked')){
			$("input.form-check-input").prop("checked",false);
			$(this).attr("checked",false);
		}else{
			$("input.form-check-input").prop("checked",true);
			$(this).attr("checked",true);
		}
	});
	$("#RemoveFile").bind("click",function(event){
		$("input.form-check-input:gt(0):checked").parents("tr").remove();
		event.stopPropagation();
	});
	function trover(){$("#head-tr").nextAll("tr").hover(function(){
//		alert("ssad");
		$(this).addClass("new-file-hover");
	},function(){
		$(this).removeClass("new-file-hover");
	});}
	trover();
})
