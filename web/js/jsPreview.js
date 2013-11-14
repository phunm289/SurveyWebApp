function validate(control, type, value_1, value_2) {

}

function showdatepicker(id) {
    $('#' + id).Zebra_DatePicker({
        onChange: function(view, elements) {
            if (view === 'days') {
                elements.each(function() {
                    if ($(this).data('date').match(/\-24$/))
                        $(this).css({
                            backgroundColor: '#C40000',
                            color: '#FFF'
                        });
                });
            }
        }
    });
}
