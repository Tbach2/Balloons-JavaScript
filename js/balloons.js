$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    // Hovering the mouse over a checkbox label should change the color of the h1 element 
    $('.form-check-label').on('mouseover', function () {
        $('h1').css({ color: this.id })
    })
    // Moving the mouse out of the label should reset the color.
    $('.form-check-label').on('mouseout', function () {
        $('h1').css({ color: "" })
    })
    // Create a toast when the submit button is clicked only if there are no balloons selected.
    $('#submit').on('click', function (e) {
        e.preventDefault();
        if ($('#red').prop('checked') == false && $('#blue').prop('checked') == false && $('#green').prop('checked') == false) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });
    // Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)
    $('#selectAll').on('click', function () {
        if ($(this).on(':checked')) {
            $('#red').prop('checked', true);
            $('#blue').prop('checked', true);
            $('#green').prop('checked', true);
        }
    });
    $('#selectAll').on('click', function () {
        if ($(this).prop('checked') == false) {
            $('#red').prop('checked', false);
            $('#blue').prop('checked', false);
            $('#green').prop('checked', false);
        }
    })
});
// Randomize the attention seeker in balloons.html. Choose a random animate.css attention seeker and apply when the page loads using JavaScript.
var animations = ["animate__animated animate__heartBeat", "animate__animated animate__bounce", "animate__animated animate__rubberBand"]
var animationValues = animations[Math.floor(Math.random() * animations.length)];
$(document).ready(function() {
    $('h1').attr('class', animationValues)
});

