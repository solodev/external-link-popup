# external-link-popup
Anyone with a website normally wants to keep people on the page as long as they possibly can with as few distractions as possible. However, there are moments when it’s necessary for a user to exit your page and visit a third-party organization linked through your website. Sometimes it’s to fill out forms. Maybe it’s to see a special offering from a partnering business or group. But regardless of where your user will end up, it’s important to tell them they won’t be on your website once they click that link.
  		  
## Tutorial		  
For detailed instruction's, view Solodev's [How to Make an External Link Popup Box](https://www.solodev.com/blog/web-design/how-to-make-an-external-link-pop-up-modal.stml) article.
 
## Demo
  		  
Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/0dtmcaxh/).

## HTML

The tutorial contains the following basic HTML markup.

```
<div class="container">
  <div class="row mt-5">
	  <div class="col-sm-12">
		  <p class="text-center">
		    <a href="https://www.solodev.com" class="btn btn-info btn-lg cta-open">External Link</a> <a href="#" class="btn btn-info btn-lg cta-open">Internal Link</a>
		  </p>
	  </div>
  </div>
</div>

<!-- start modal-->
<div class="modal fade" id="speedbump" role="dialog">
	<div class="modal-dialog">
	  <!-- Modal content-->
	  <div class="modal-content">
		<div class="modal-header">
		  <button type="button" class="close" data-dismiss="modal">&times;</button>
		  <h4 class="modal-title">Notice</h4>
		</div>
		<div class="modal-body">
		  <p>You are now leaving the our website website.</p>
		</div>
		<div class="modal-footer text-center">
		  <button type="button" title="continue" class="btn btn-modal btn-continue" data-dismiss="modal">Continue</button>
		  <button type="button" title="go back" class="btn btn-modal btn-close" data-dismiss="modal">Go Back</button>
		</div>
	  </div>

	</div>
</div>
<!--end modal-->
```

## CSS

All required CSS is contained with external-popup.css

## JavaScript

All required JS is contained with external-popup.js

## External Resources

This tutorial includes the following third party resources.

```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
```

