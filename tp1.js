$(document).ready(function() {
    $('#tp1-1 ul li:first').wrap('<strong></strong>');
    $('#tp1-1 p.description').insertAfter($('#tp1-1 h2'));
    $('#tp1-2 input').focusout(function() { console.log($(this).val()); });
    $('.todo').hide(100);
    $.get( "chuck.html", function(data) {
        $('#tp1-4 #chuck').html(data);
    });
});
