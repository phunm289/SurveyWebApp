$(document).ready(function() {
    $('#buttonPreview').click(function() {
        preview("previewJSON");
    });

    $('#buttonCreate').click(function() {
        $('.confirm_container').show();
    });

    $('#create_btn').click(function() {
        var value = $('#form_name').val();
        preview("createJSON");
        $('#form_notation').val(value);
        $('#form_name').val("");
        $('.confirm_container').hide();
        $('#count_down').val(15);
    });

    $('#cancel_btn').click(function() {
        $('#form_name').val("");
        $('#count_down').val("15");
        $('.confirm_container').hide();
    });
    

    $('.letter-only').keyup(function() {
        if ($('#' + $(this).attr('id')).val() !== "" && !isNaN($('#' + $(this).attr('id')).val().charAt(0))) {
            alert("This field must be started with the letter!!!");
            $('#' + $(this).attr('id')).val("");
        }
    });
});
$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $('.confirm_container').hide();
    }
});