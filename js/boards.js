var BOARDS = (function (window){

	 'use strict';

	function init(){

    $("#modal").modal();
		$(".board-list").on("click", ".board", gotoBoard);
		$(".add-board-btn").on("click", showCreateBoardForm);
		$(".add-board-form .save").on("click", createNewBoard);

	}

	function showCreateBoardForm(){

		$('#modal').modal('open');

	}

	function createNewBoard(){

		var board_name = $(".board-name").val();

		if(board_name == ""){
			$(".warning").css("display","block");
			return;
		} else {
            $(".warning").css("display","none");
            var str = Template.board.replace(/\{\{input-value\}\}/gi,board_name);
            $(".board-name").val("");
            $("#modal").modal("close");
			$(".board-list").append(str);
		}

  }

	function gotoBoard(){

		window.location.href = ("board.html");

	}

	return {
		"init" : init
	}
})(window);

$(function(){
    BOARDS.init();
});
