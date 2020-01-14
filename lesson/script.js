$(function(){
	var itemId = 0;
	$('#add-button').click(function(){
			var itemId = new Date().getTime();
			var taskTitle = $('#name-field').val();
			var taskDescription = $('textarea').val();
			if (taskTitle.length >= 1 && taskDescription.length >= 1) {
				var newTask = $('<div class="task-item" id="item-'+ itemId +'">' +
									'<div class="item-header">' +
									'<div class="item-text">' + taskTitle +'</div>' +
									'<div class="item-delete"><a data-id="' + itemId + 
									'" href="#">x</a></div>' +
									'<div class="item-slide"><a data-id="' + itemId + 
									'" href="#"><img id="img-' + itemId + '" src="img/arrow.png"></a></div></div>' +	
								'<div class="item-descr" id="descr-'+ itemId +'">' + taskDescription + '</div></div>');
				$('#tasks-list').append(newTask);
					$('#name-field').val('');
					$('textarea').val('');
				//alert(itemCounter);
			} else {alert('Заполнены не все поля!')};
	});

	//Событие клика по ссылки будем цеплять на весь окумент, т.к. объекты добавляются динамически.
	$(document).on('click','.item-delete a', function(){
		//alert('delete');
		var item = '#item-'+ $(this).data('id');
		$(item).remove();
		//$(this).parent().parent().parent().remove();
		return false;
	});

	$(document).on('click','.item-slide a', function(){
		var rollid = $(this).data('id');
			if ($('#descr-'+ rollid).is(':visible')){
					$('#descr-'+ rollid).animate({
							height : '0'
							},500, function (){$('#descr-'+ rollid).hide();
											   //$('#img-' + $(this).data('id')).attr('src','img/arrow-b.png');	
											   $('#img-' + rollid).attr('src','img/arrow-b.png');
											   //alert('#img-' + rollid);	
							});
		} else {
				$('#descr-'+ rollid).show();
				$('#img-' + rollid).attr('src','img/arrow.png');
				$('#descr-'+ rollid).animate({
							height : '100px'
							},500);
				};
		return false;
	});
});
