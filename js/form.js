(function($){

	"use strict";

	$.fn.formreact=function(options){

		var defauts={
			selector:'',
			wrapResult:'',
			resultMsg:function(){},
			wrapEnd:'',
			endMsg:'<p>End message</p>',
			'result':function(formValues){
					// handle the returned values
					$(this.wrapResult).html(this.resultMsg(formValues));
					$(this.wrapEnd).html(this.endMsg);
				}
			},
			param=$.extend(defauts, options),
			classActive='react-active',
			classCompleted='react-completed',
			classCursor='typed-cursor',
			elem=$(this),
			i=0;


		elem

			.each(function(){
				$(this)
					.children('p')
						.addClass(param.selector.replace('.',''));
			})

			// Put focus on the react-active input when hovering the wrapping div
			.on('mouseover click',function(){
				$(param.selector + '.' + classActive).find('input').focus();
			})

			.find(param.selector)

				.each(function(){

					i++;
					var $this=$(this);

					$this				
						// reset the input values on browser refresh if necessary & append the necessary elements
						.append('<input type="text" class="react-input" /><span class="content" ></span><span class="typed-cursor">&#9646;</span>')
						.find('input')
							.val('') ;

					if (i===1) { 
						//add an active class to the first selector and focus on the input
						$this
							.addClass(classActive)
							.find('input')
								.focus(); 
						} 				
				})

				

				// Actions when the enter key is pressed
				.children('input').on("keyup",function(e){

					var $this=$(this);
					if(e.keyCode === 13){
		 	   			if ($this.val()!==''){
		 	   				
		 	   				$this
		 	   					// prevents from going backwards and reediting a previous input
		 	   					.prop('readonly', true) 
		 	   					.closest(param.selector)
			 	   					.addClass(classCompleted)
					                .removeClass(classActive);
					    	$('.' + classCompleted + ' .' + classCursor).hide();
					        $('.' + classActive + ' .' + classCursor).show(); 
					                  
		 	   				// if another element exist, go to next input
		 	   				if ($this.closest(param.selector).next().hasClass(param.selector.replace('.',''))){ 
			 	   				$this
			 	   					.closest(param.selector)
						                .next(param.selector)
						                    .addClass(classActive)
						                    .find('input')
						                        .focus();
					    	}

					    	// else if there is no more element 
				        	else {
				        		var arrayReact=[];
				        		$(param.selector).each(function(){
				        			arrayReact.push($(this).find('input').val());
				        		});
				        		param.result(arrayReact);
				        	}
		 	   			}
					}
				})

				// On input change, change the text displayed in the next span.content
				.on("propertychange change click keyup input paste", function(){
			        var el=$(this),
			        	//finds the span where the text will be displayed
			            display=$(this).closest(param.selector).find('.content');

			        if (el.data('oldVal') != el.val()) {
			            el.data('oldVal', el.val());
			            display.html(el.val());
			        }
			        if (el.val()===''){
			        	// Fix for chrome losing focus on deleting content
			        	el.val('');
			        }
			    });

		//CSS
		$(param.selector).addClass('react-item');

		return this;
	};

})(jQuery);
