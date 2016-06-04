var TODO = (function (window){

	 'use strict';

	 // var $parnet = $("..");

	 var list_html = "<div class='list_wrapper'>" +
            "<div class='list_content z-depth-1'>" +
                "<div class='list_header'>"+
                 "<textarea class='list_header_name'>{{input-value}}</textarea>"+
               "</div>" +
                "<div class='list_cards'></div>" +
				"<div class='card_composer'>" +
                    "<div class='add_card_form'>" +
                      "<textarea class='list_card_composer_textarea'></textarea>" +
                       "<a class='waves-effect  waves-light btn card_save blue-grey lighten-5'>save</a>" +
                       "<a class='waves-effect waves-light btn card_cancel blue-grey lighten-5'>cancel</a>" +
                    "</div>" +
                    "<a class='add_card' href='#''>Add a Card...</a>" +
                "</div>" +
            "</div>" +
          "</div>"

      var card_html = "<div class='list_card'>" +
      						"<div class='list_card_detail'>" +
                      	 		"<a class='list_card_title modal-trigger' dir='auto' href='#modal1'>{{value}}</a>" +
                     	 	"</div>" +
                      "</div>"

	function init(){

		$(".btn-floating").on("click", create_list);
		$(".save").on("click", add_list);
		$("#board_canvas").on("click",".add_card", add_card);
		$("#board_canvas").on("click",".card_save", card_save);
		$("#board_canvas").on("click",".card_cancel", card_cancel);
		$(".list_cards").on("dblclick", "a", modal);
		$( "#sortable" ).sortable({
    		  placeholder: "ui-state-highlight",
    		  cancel: ".add_list"
   		 });
		$(".add_list").removeClass("ui-sortable-handle");
   		$( "#sortable" ).disableSelection();
		$(".add_list a.cancel").on("click", cancel);
		$("#board_canvas").on("click", ".list_card", modal_trigger);
	}

	function modal_trigger(e){
		$('.modal-trigger').leanModal();
	}

	function card_cancel(e){

		console.log("cancel event");

		$(e.target).closest(".card_composer .add_card_form").css('display', 'none');
		$(e.target).closest(".card_composer").find("a.add_card").css('display', 'block');
		
	}

	function cancel(){

		$(".btn-floating").css('display','block');
		$(".add_list_form").css('display','none');

	}

	function modal(){
		$('.modal-trigger').leanModal();
	}

	function create_list(){

		$(".btn-floating").css('display','none');
		$(".add_list_form").css('display','block');
	}

	function add_card(e){

		console.log("asd");
		// $(this).closest(".card_composer").find()
		$(e.target).parent().find(".add_card_form").css('display', 'block');
		$(e.target).parent().find("a.add_card").css('display', 'none');
	}
	function card_save(e){

		$(".add_card_form").css('display', 'none');
		var card_text = $(e.target).parent(".add_card_form").find(".list_card_composer_textarea").val();
		var $list_wrapper = $(e.target).closest(".list_wrapper");
		var str = card_html.replace(/\{\{value\}\}/gi,card_text);
		$list_wrapper.find(".list_cards").append(str);
		$(e.target).parent(".add_card_form").find(".list_card_composer_textarea").val("");
		$(e.target).parents(".card_composer").find("a.add_card").css('display', 'block');

	}
	
	function add_list(){

		var list_name = $("#add_list").val();
		var str = list_html.replace(/\{\{input-value\}\}/gi,list_name);
		$(".add_list").before(str);
		$("#add_list").val("");
		$(".add_list_form").css('display','none');
		$(".btn-floating").css('display','block');


	}

	return {
		"init" : init
	}
})(window);

$(function(){
    TODO.init();
});