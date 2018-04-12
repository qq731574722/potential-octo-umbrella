$(function() {
			$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr(
					'title', 'Collapse this branch');
			$('.tree li.parent_li > span').on('click', function(e) {
				var children = $(this).parent('li.parent_li')
						.find(' > ul > li');
				if (children.is(":visible")) {
					$(this).find('span').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
					children.hide('fast');
					// $(this).attr('title', 'Expand this branch').find(' >
					// i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
				} else {
					$(this).find('span').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
					children.show('fast');
					// $(this).attr('title', 'Collapse this branch').find(' >
					// i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
				}
				e.stopPropagation();
			});
			$("#inlineRadio1").click(function(){
				$("#show1").hide();
				$("#show2").show();
			});
		})