/* Put all javascript here. */

/* We must wait until the document is ready to be manipulated
    See: http://learn.jquery.com/using-jquery-core/document-ready/
 */

$(function() {
    $('.js-close-box').click(function(){
        $('.js-close-me').hide();
    });
});

