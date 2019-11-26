
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
    $(this).closest('.item').remove();
});


$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
});

$('.plus-btn').on('click', function() {
	var i = 1;
	var num1 = 549;
	var num2 = 1 * i++;
   alert(num1 * num2);
});


/*$('.delete-btn').on('click', function() {
.remove('item');
});*/

