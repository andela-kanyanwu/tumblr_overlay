$(document).ready(function(){
    $('.inner-container').hide()

    $('.home button').click(function(e) {
        e.preventDefault()
        $(this).hide();
        $('.inner-container').show();
    });
});
