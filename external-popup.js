// Open external links in a popup modal notice
$(window).on('load', function(){
	
	$.expr[":"].external = function(a) {
		//var linkHref = a.hostname;
		//var domainHref = location.hostname;
		
		var linkhn = a.hostname.split('.').reverse();
		var linkHref = linkhn[1] + "." + linkhn[0];
		
		var domainhn = window.location.hostname.split('.').reverse();
		var domainHref = domainhn[1] + "." + domainhn[0];
	
		return !a.href.match(/^mailto\:/) && !a.href.match(/^tel\:/) && linkHref !== domainHref;
	};
	
	$("a:external").addClass("ext_link");
	
	$(function() {
		
		$('a.ext_link').click(function() {
			 // open a modal 
			$('a:external').attr('data-toggle', 'modal');
			$('a:external').attr('data-target', '#speedbump');
			//go to link on modal close
			var url = $(this).attr('href');
			$('.btn-modal.btn-continue').click(function() {
				window.open(url);
				$('.btn-modal.btn-continue').off();
			});
			$('.btn-modal.btn-close').click(function() {
				$('#speedbump').modal('hide');
				$('.btn-modal.btn-close').off();
			}); 
		});
		
	});  
});