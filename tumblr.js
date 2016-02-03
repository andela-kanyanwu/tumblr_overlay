$(document).ready(function(){
    $('.inner-container').hide()

    // Show inner container on click of home button
    $('.home button').click(function(e) {
        e.preventDefault()
        $('.home').hide();
        $('.inner-container').show();
    });

    // Hide inner container on when you click outside
    $(document).mouseup(function (e){
        var container = $('.inner-container');

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
            $('.home').show();
        }
    });
});
