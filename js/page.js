var TODO = (function (window){

	 'use strict';

	 var list_html = "<div class='list_wrapper'>" +
            "<div class='list_content z-depth-1'>" +
                "<div class='list_header'>"+
                 "<textarea class='list_header_name'>"+
                 " new Todo " +
                 "</textarea>"+
               "</div>" +
                "<div class='list_cards'></div>" +
              "<a class='add_card' href='#''>" + 
              "Add a Card..." + "</a>" +
            "</div>" +
          "</div>"

	function init(){

		$(".add_list").on("click", create_list);
	}

	function create_list(){

		$(".add_list").before(list_html);
	}
	

	return {
		"init" : init
	}
})(window);

$(function(){
    TODO.init();
});