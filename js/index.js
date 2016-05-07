var TODO = (function (window){

	 'use strict';

	 var board_btn = " <li class='board waves-effect waves-light btn'>" +		
	 						"New Project" +
	 					"</li>"

	function init(){

		$("#boards_list .board").on("click", page_nav);
		$("#create_board").on("click", create_board);
	}

	function page_nav(){

		window.location.href = ("page.html");
	}

	function create_board(){

		$("#boards_list").prepend(board_btn);
	}
	

	return {
		"init" : init
	}
})(window);

$(function(){
    TODO.init();
});