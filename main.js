
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
});

$('.delete-btn').on('click', function() {
    $('.image, .quantity, .description, .total-price').remove();
});

$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
});



/*$('.delete-btn').on('click', function() {
.remove('item');
});*/

