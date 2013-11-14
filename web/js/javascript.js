function limitText(limitField, limitCount, limitNum) {
    if ($('#' + limitField).val().length > limitNum) {
        $('#' + limitField).val($('#' + limitField).val().substring(0, limitNum));
    } else {
        $('#' + limitCount).val(limitNum - $('#' + limitField).val().length);
    }
}

function input_onClick(id) {
    var elem = document.getElementById(id);
    elem.parentNode.style.borderLeftColor = "#4d90fe";
}
function input_onBlur(input_id) {
    var elem = document.getElementById(input_id);
    elem.parentNode.style.borderLeftColor = "#ffffff";
}

function show_menu() {
    $('#section_type_menu').slideDown(300);
    document.getElementById('section_type_menu').focus();
}

function hide_menu() {
    $('#section_type_menu').slideUp(300);
}

function menu_item_click(class_name) {
    var i = class_name;
    var div_editor = document.getElementById("answer_container");
    switch (i) {
        case 1:
            document.getElementById("q_type").innerHTML = "Text<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div class=\"label_text\">Answer</div><input id=\"input_answer\" class=\"input_answer\" value=\"\" disabled/>\n\
    <div id=\"validate_container\" tabindex=\"3\" class=\"validate_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('validate_container').style.backgroundColor = '#ffffff';\"><input id=\"cb_validate\" type=\"checkbox\" name=\"validate\" onclick=\"checked_val();\" />Validate Input</div>\n\
    \n\
    <div id=\"validate\" tabindex=\"4\" class=\"validate\">\n\
    \n\
            <div id=\"input_type\" class=\"input_type\" onclick=\"input_type_onclick();\">\n\
                    <span id=\"span_input_type\">Text</span><div id=\"arrow_down\"></div>\n\
            </div>\n\
            <div tabindex=\"5\" id=\"input_type_option\" class=\"input_type_option\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('input_type_option').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_type\">\n\
                            <div id=\"text_type\" onclick=\"selected_type('text_type');\">Text</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_type\">\n\
                            <div id=\"number_type\" onclick=\"selected_type('number_type');\">Number</div>\n\
                    </div>\n\
            </div>\n\
    \n\
            <div id=\"valid_option\" tabindex=\"4\" class=\"valid_option\" onclick=\"valid_option_onclick();\">\n\
                    <span id=\"span_valid_option\">Contain</span><div id=\"arrow_down\"></div>\n\
            </div>\n\
            <div tabindex=\"6\" id=\"valid_text_item_container\" class=\"valid_text_item_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('valid_text_item_container').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_contain\" onclick=\"text_valid('option_contain');\">Contain</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_not_contain\" onclick=\"text_valid('option_not_contain');\">Does not contain</div>\n\
                    </div>\n\
            </div>\n\
            <div tabindex=\"6\" id=\"valid_number_item_container\" class=\"valid_number_item_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('valid_number_item_container').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_smaller\" onclick=\"number_valid('option_smaller');\">Smaller</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_smaller_or\" onclick=\"number_valid('option_smaller_or');\">Smaller or equal</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_lager\" onclick=\"number_valid('option_lager');\">Larger</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_larger_or\" onclick=\"number_valid('option_larger_or');\">Larger or equal</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_between\" onclick=\"number_valid('option_between');\">Between</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_not_in_range\" onclick=\"number_valid('option_not_in_range');\">Not in range</div>\n\
                    </div>\n\
            </div>\n\
            <div id=\"input_validation_container\" class=\"input_validation_container\"><input id=\"input_validation\" class=\"input input_validation\" value=\"\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\"></div>\n\
    </div>";
            break;
        case 2:
            document.getElementById("q_type").innerHTML = "Radio Button<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div class=\"label_text\">Option</div><div id=\"rdo_option_container\" class=\"rdo_option_container\">\n\
                                                                                    <div id=\"rdo_option\" class=\"rdo_option\">\n\
                                                                                        <div id=\"circle\" class=\"circle\"></div>\n\
                                                                                        <input id=\"rdo_option_input\" class=\"input rdo_option_input\" value=\"\">\n\
                                                                                    </div>\n\
                                                                                </div>\n\
                                                                                <div id=\"add_rdo_option\" class=\"add_rdo_option\">\n\
                                                                                    <div id=\"circle\" class=\"circle\"></div>\n\
                                                                                    <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_radio_option();\">\n\
                                                                                        Click to add option\n\
                                                                                    </div>\n\
                                                                                </div>";
            break;
        case 3:
            document.getElementById("q_type").innerHTML = "Check Box<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div class=\"label_text\">Option</div><div id=\"cb_option_container\" class=\"rdo_option_container\">\n\
                                                                                    <div id=\"cb_option\" class=\"rdo_option cb_option\">\n\
                                                                                        <div id=\"square\" class=\"square\"></div>\n\
                                                                                        <input id=\"cb_option_input\" class=\"input rdo_option_input\" value=\"\">\n\
                                                                                    </div>\n\
                                                                                </div>\n\
                                                                                \n\
                                                                                <div id=\"add_cb_option\" class=\"add_rdo_option\">\n\
                                                                                    <div id=\"square\" class=\"square\"></div>\n\
                                                                                    <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_cb_option();\">\n\
                                                                                        Click to add option\n\
                                                                                    </div>\n\
                                                                                </div>";
            break;
        case 4:
            document.getElementById("q_type").innerHTML = "Combobox<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div class=\"label_text\">Option</div><div id='cbb_option_container' class='rdo_option_container'>                                        <div id='cbb_option_0' class='rdo_option cbb_option' style=''>                                            <input id='cbb_option_input' class='input rdo_option_input' value=''>                                        </div>                                    </div>                                    <div id='add_cbb_option' class='add_rdo_option'>                                        <div id='div_add_option' class='div_add_option' onclick='add_cbb_option();'>                                            Click to add option                                        </div>                                    </div>";
            break;
        case 5:
            document.getElementById("q_type").innerHTML = "Rating<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div class=\"label_text\">Ratio</div>\n\
    <div id=\"rating_container\" class=\"rdo_option_container\">\n\
            <div id=\"rate_start\" class=\"rate_button\" onclick=\"rate_start_onclick();\">1<div id=\"up_down\"></div></div>\n\
            <div id=\"rate_start_option\" tabindex=\"1\" class=\"rate_option\" onblur=\"document.getElementById('rate_start_option').style.visibility = 'hidden';\">\n\
                    <div id=\"rate_start_item\" onclick=\"rate_start_option_onclick(0);\" class=\"menu_item bold\">0</div>\n\
                    <div id=\"rate_start_item\" onclick=\"rate_start_option_onclick(1);\" class=\"menu_item bold\">1</div>\n\
            </div>\n\
            <span style=\"margin:0px 40px; font-family: arial; font-weight: normal; font-size: 14px;\">To</span>\n\
            <div id=\"rate_end\" class=\"rate_button\" onclick=\"rate_end_onclick();\">5<div id=\"up_down\"></div></div>\n\
            <div id=\"rate_end_option\" tabindex=\"1\" class=\"rate_option\" onblur=\"document.getElementById('rate_end_option').style.visibility = 'hidden';\">\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(2);\" class=\"menu_item bold\">2</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(3);\"class=\"menu_item bold\">3</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(4);\" class=\"menu_item bold\">4</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(5);\" class=\"menu_item bold\">5</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(6);\" class=\"menu_item bold\">6</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(7);\" class=\"menu_item bold\">7</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(8);\" class=\"menu_item bold\">8</div>\n\
                    <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(9);\" class=\"menu_item bold\">9</div>\n\
            </div>\n\
            <div id=\"rate_info\" class=\"rate_info\">\n\
                    <div id=\"start_info\" class=\"info\" style=\"margin-bottom: 10px\"><div id=\"rate_start_label\" class=\"rate_label\">1</div>:&nbsp;&nbsp;<input type=\"text\" id=\"rate_start_info_input\" class=\"input info_input\" value=\"\" placeholder=\"Label\"/></div>\n\
                    <div id=\"end_info\" class=\"info\"><div id=\"rate_end_label\" class=\"rate_label\">5</div>:&nbsp;&nbsp;<input type=\"text\" id=\"rate_end_info_input\" class=\"input info_input\" value=\"\" placeholder=\"Label\"/></div>\n\
            </div>\n\
    </div>";
            break;
        case 6:
            document.getElementById("q_type").innerHTML = "Table<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div id=\"table_row_option_container\" class=\"rdo_option_container\" style=\"\">\n\
            <div class=\"label_text\" style=\"width: 100px;\">Row</div>\n\
            <div id=\"row_option\" class=\"table_content_option\" ><input id=\"row_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;\"></div>\n\
    </div>\n\
    \n\
    <div id=\"add_row_option\" class=\"add_rdo_option\">\n\
            <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_table_row();\">\n\
                    Click to add row\n\
            </div>\n\
    </div>\n\
    \n\
    <hr/>\n\
    \n\
    <div id=\"table_col_option_container\" class=\"rdo_option_container\" style=\"\">\n\
            <div class=\"label_text\" style=\"width: 100px;\">Column</div>\n\
            <div id=\"col_option\" class=\"table_content_option\"><input id=\"col_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;\"></div>\n\
    </div>\n\
    \n\
    <div id=\"add_col_option\" class=\"add_rdo_option\">\n\
            <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_table_column();\">\n\
                    Click to add column\n\
            </div>\n\
    </div>";
            break;
        case 7:
            document.getElementById("q_type").innerHTML = "Date<div id=\"arrow_down\"></div>";
            div_editor.innerHTML = "<div id=\"date_container\" class=\"date_container\">\n\
            <div id=\"select_date\" class=\"select_date\">\n\
                    <div id=\"option_date\" class=\"date_option\">\n\
                            <select id=\"cbb_date\" class=\"cbb_date\">\n\
                                    <option value=\"Date\">Date</option>\n\
                            </select>\n\
                    </div>\n\
                    <div id=\"option_month\" class=\"date_option\">\n\
                            <select id=\"cbb_month\" class=\"cbb_month\">\n\
                                    <option value=\"Month\">Month</option>\n\
                            </select>\n\
                    </div>\n\
                    <div id=\"option_year\" class=\"date_option\">\n\
                            <select id=\"cbb_year\" class=\"cbb_year\">\n\
                                    <option value=\"Year\">Year</option>\n\
                            </select>\n\
                    </div>\n\
            </div>\n\
    </div>";
            break;
    }
    $('#section_editor').slideDown(300);
    hide_menu();
}

function q_type_option_visible() {
    document.getElementById("q_type_option").style.visibility = "visible";
    document.getElementById("q_type_option").focus();
}

function q_type_selected(id) {
    document.getElementById('q_type').innerHTML = (document.getElementById(id).innerHTML + "<div id='arrow_down'></div>");
    document.getElementById("q_type_option").style.visibility = "hidden";
    var answer = document.getElementById('answer_container');
    switch (id) {
        case "text":
            answer.innerHTML = "<div class=\"label_text\">Answer</div><input id=\"input_answer\" class=\"input_answer\" value=\"\" disabled/>\n\
    <div id=\"validate_container\" tabindex=\"3\" class=\"validate_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('validate_container').style.backgroundColor = '#ffffff';\"><input id=\"cb_validate\" type=\"checkbox\" name=\"validate\" onclick=\"checked_val();\" />Validate Input</div>\n\
    \n\
    <div id=\"validate\" tabindex=\"4\" class=\"validate\">\n\
    \n\
            <div id=\"input_type\" class=\"input_type\" onclick=\"input_type_onclick();\">\n\
                    <span id=\"span_input_type\">Text</span><div id=\"arrow_down\"></div>\n\
            </div>\n\
            <div tabindex=\"5\" id=\"input_type_option\" class=\"input_type_option\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('input_type_option').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_type\">\n\
                            <div id=\"text_type\" onclick=\"selected_type('text_type');\">Text</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_type\">\n\
                            <div id=\"number_type\" onclick=\"selected_type('number_type');\">Number</div>\n\
                    </div>\n\
            </div>\n\
    \n\
            <div id=\"valid_option\" tabindex=\"4\" class=\"valid_option\" onclick=\"valid_option_onclick();\">\n\
                    <span id=\"span_valid_option\">Contain</span><div id=\"arrow_down\"></div>\n\
            </div>\n\
            <div tabindex=\"6\" id=\"valid_text_item_container\" class=\"valid_text_item_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('valid_text_item_container').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_contain\" onclick=\"text_valid('option_contain');\">Contain</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_not_contain\" onclick=\"text_valid('option_not_contain');\">Does not contain</div>\n\
                    </div>\n\
            </div>\n\
            <div tabindex=\"6\" id=\"valid_number_item_container\" class=\"valid_number_item_container\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\" onblur=\"document.getElementById('valid_number_item_container').style.visibility = 'hidden';\">\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_smaller\" onclick=\"number_valid('option_smaller');\">Smaller</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_smaller_or\" onclick=\"number_valid('option_smaller_or');\">Smaller or equal</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_lager\" onclick=\"number_valid('option_lager');\">Larger</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_larger_or\" onclick=\"number_valid('option_larger_or');\">Larger or equal</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_between\" onclick=\"number_valid('option_between');\">Between</div>\n\
                    </div>\n\
                    <div id=\"menu_item\" class=\"valid_option_item\">\n\
                            <div id=\"option_not_in_range\" onclick=\"number_valid('option_not_in_range');\">Not in range</div>\n\
                    </div>\n\
            </div>\n\
            <div id=\"input_validation_container\" class=\"input_validation_container\"><input id=\"input_validation\" class=\"input input_validation\" value=\"\" onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\"></div>\n\
    </div>";
            break;
        case "rdo_btn":
            answer.innerHTML = "<div class=\"label_text\">Option</div><div id='rdo_option_container' class='rdo_option_container'>                                                                             <div id='rdo_option_0' class='rdo_option'>                                                                                 <div id='circle' class='circle'></div>                                                                                 <input id='rdo_option_input' class='input rdo_option_input' />                                                                             </div>                                                                         </div>                                                                         <div id='add_rdo_option' class='add_rdo_option'>                                                                             <div id='circle' class='circle'></div>                                                                             <div id='div_add_option' class='div_add_option' onclick='add_radio_option();'>                                                                                 Click to add option                                                                             </div>                                                                         </div>";
            break;
        case "cb":
            answer.innerHTML = "<div class=\"label_text\">Option</div><div id='cb_option_container' class='rdo_option_container'>                                                                            <div id='cb_option_0' class='rdo_option cb_option'>                                                                                <div id='square' class='square'></div>                                                                                <input id='cb_option_input' class='input rdo_option_input' value=''>                                                                            </div>                                                                        </div>                                                                                                                                                <div id='add_cb_option' class='add_rdo_option'>                                                                            <div id='square' class='square'></div>                                                                            <div id='div_add_option' class='div_add_option' onclick='add_cb_option();'>                                                                                Click to add option                                                                            </div>                                                                        </div>";
            break;
        case "cbb":
            answer.innerHTML = "<div class=\"label_text\">Option</div><div id='cbb_option_container' class='rdo_option_container'>                                        <div id='cbb_option_0' class='rdo_option cbb_option' style=''>                                            <input id='cbb_option_input' class='input rdo_option_input' value=''>                                        </div>                                    </div>                                    <div id='add_cbb_option' class='add_rdo_option'>                                        <div id='div_add_option' class='div_add_option' onclick='add_cbb_option();'>                                            Click to add option                                        </div>                                    </div>";
            break;
        case "rating":
            answer.innerHTML = "<div class=\"label_text\">Ratio</div>                                        <div id=\"rating_container\" class=\"rdo_option_container\">                                            <div id=\"rate_start\" class=\"rate_button\" onclick=\"rate_start_onclick();\">1<div id=\"up_down\"></div></div>                                            <div id=\"rate_start_option\" tabindex=\"1\" class=\"rate_option\" onblur=\"document.getElementById('rate_start_option').style.visibility = 'hidden';\">                                                <div id=\"rate_start_item\" onclick=\"rate_start_option_onclick(0);\" class=\"menu_item bold\">0</div>                                                <div id=\"rate_start_item\" onclick=\"rate_start_option_onclick(1);\" class=\"menu_item bold\">1</div>                                            </div>                                            <span style=\"margin:0px 40px; font-family: arial; font-weight: normal; font-size: 14px;\">To</span>                                            <div id=\"rate_end\" class=\"rate_button\" onclick=\"rate_end_onclick();\">5<div id=\"up_down\"></div></div>                                            <div id=\"rate_end_option\" tabindex=\"1\" class=\"rate_option\" onblur=\"document.getElementById('rate_end_option').style.visibility = 'hidden';\">                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(2);\" class=\"menu_item bold\">2</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(3);\"class=\"menu_item bold\">3</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(4);\" class=\"menu_item bold\">4</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(5);\" class=\"menu_item bold\">5</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(6);\" class=\"menu_item bold\">6</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(7);\" class=\"menu_item bold\">7</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(8);\" class=\"menu_item bold\">8</div>                                                <div id=\"rate_end_item\" onclick=\"rate_end_option_onclick(9);\" class=\"menu_item bold\">9</div>                                            </div>                                            <div id=\"rate_info\" class=\"rate_info\">                                                <div id=\"start_info\" class=\"info\" style=\"margin-bottom: 10px\"><div id=\"rate_start_label\" class=\"rate_label\">1</div>:&nbsp;&nbsp;<input type=\"text\" id=\"rate_start_info_input\" class=\"input info_input\" value=\"\" placeholder=\"Label\"/></div>                                                <div id=\"end_info\" class=\"info\"><div id=\"rate_end_label\" class=\"rate_label\">5</div>:&nbsp;&nbsp;<input type=\"text\" id=\"rate_end_info_input\" class=\"input info_input\" value=\"\" placeholder=\"Label\"/></div>                                            </div>                                        </div>";
            break;
        case "table_type":
            answer.innerHTML = "<div id=\"table_row_option_container\" class=\"rdo_option_container\" style=\"\">                                            <div class=\"label_text\" style=\"width: 100px;\">Row</div>                                            <div id=\"row_option\" class=\"table_content_option\" ><input id=\"row_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;\"></div>                                        </div>                                        <div id=\"add_row_option\" class=\"add_rdo_option\">                                            <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_table_row();\">                                                Click to add row                                            </div>                                        </div>                                        <hr/>                                        <div id=\"table_col_option_container\" class=\"rdo_option_container\" style=\"\">                                            <div class=\"label_text\" style=\"width: 100px;\">Column</div>                                            <div id=\"col_option\" class=\"table_content_option\"><input id=\"col_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;\"></div>                                        </div>                                        <div id=\"add_col_option\" class=\"add_rdo_option\">                                            <div id=\"div_add_option\" class=\"div_add_option\" onclick=\"add_table_column();\">                                                Click to add column                                            </div>                                        </div>";
            break;
        case "date":
            answer.innerHTML = "<div id=\"date_container\" class=\"date_container\">                                            <div id=\"select_date\" class=\"select_date\">                                                <div id=\"option_date\" class=\"date_option\">                                                    <select id=\"cbb_date\" class=\"cbb_date\">                                                        <option value=\"Date\">Date</option>                                                    </select>                                                </div>                                                <div id=\"option_month\" class=\"date_option\">                                                    <select id=\"cbb_month\" class=\"cbb_month\">                                                        <option value=\"Month\">Month</option>                                                    </select>                                                </div>                                                <div id=\"option_year\" class=\"date_option\">                                                    <select id=\"cbb_year\" class=\"cbb_year\">                                                        <option value=\"Year\">Year</option>                                                    </select>                                                </div>                                            </div>                                        </div>";
            break;
    }
}

function selected_type(type) {
    var input_div = document.getElementById('input_validation_container');
    document.getElementById('input_type_option').style.visibility = "hidden";
    document.getElementById('span_input_type').innerHTML = (type === "text_type") ? "Text" : "Number";
    if (type === "text_type") {
        document.getElementById('span_valid_option').innerHTML = "Contain";
        input_div.innerHTML = "<input id='input_validation' class='input input_validation' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
    } else if (type === "number_type") {
        document.getElementById('span_valid_option').innerHTML = "Smaller";
        input_div.innerHTML = "<input id='input_validation' class='input input_validation' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
    }
}

function text_valid(option) {
    document.getElementById('valid_text_item_container').style.visibility = "hidden";
    document.getElementById('span_valid_option').innerHTML = ((option === "option_contain") ? "Contain" : "Dose not contain");
}

function number_valid(option) {
    var input_div = document.getElementById('input_validation_container');
    document.getElementById('valid_number_item_container').style.visibility = "hidden";
    switch (option) {
        case "option_smaller":
            document.getElementById('span_valid_option').innerHTML = "Smaller";
            input_div.innerHTML = "<input id='input_validation' class='input input_validation' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
        case "option_smaller_or":
            document.getElementById('span_valid_option').innerHTML = "Smaller or equal";
            input_div.innerHTML = "<input id='input_validation' class='input input_validation' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
        case "option_lager":
            document.getElementById('span_valid_option').innerHTML = "Lager";
            input_div.innerHTML = "<input id='input_validation' class='input input_validation' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
        case "option_larger_or":
            document.getElementById('span_valid_option').innerHTML = "Larger or equal";
            input_div.innerHTML = "<input id='input_validation' class='input input_validation'  value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
        case "option_between":
            document.getElementById('span_valid_option').innerHTML = "Between";
            input_div.innerHTML = "<input id='input_between1' class='input input_between1' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\"> <span class='label_between'>And</span> <input id='input_between2' class='input input_between2' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
        case "option_not_in_range":
            document.getElementById('span_valid_option').innerHTML = "Not in range";
            input_div.innerHTML = "<input id='input_not_from' class='input input_between1' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\"> <span class='label_between'>To</span> <input id='input_not_to' class='input input_between2' value='' onfocus=\"document.getElementById('validate_container').style.backgroundColor = '#dedede';\">";
            break;
    }
}

function valid_option_onclick() {
    var elem;
    var text_option = document.getElementById('valid_text_item_container');
    var number_option = document.getElementById('valid_number_item_container');
    if (document.getElementById('span_input_type').innerHTML === "Text") {
        elem = text_option;
    } else if (document.getElementById('span_input_type').innerHTML === "Number")
        elem = number_option;
    elem.style.visibility = 'visible';
    elem.focus();
}

function input_type_onclick() {
    document.getElementById('input_type_option').style.visibility = 'visible';
    document.getElementById('input_type_option').focus();
}

var count_radio_option = 0;
function add_radio_option() {
    count_radio_option++;
    $('#rdo_option_container').append("<div id=\"rdo_option_" + count_radio_option + "\" class=\"rdo_option\">"
            + "<div id=\"circle\" class=\"circle\"></div>"
            + "<input id=\"rdo_option_input\" class=\"input rdo_option_input\" style=\"margin:0px 4px\"/>"
            + "<div id=\"remove_option\" class=\"remove_option\" onclick=\"remove_rdo_option(this);\"></div>"
            + "</div>");
    $('#rdo_option_' + count_radio_option + ' :input').focus();
}

var count_cb_option = 0;
function add_cb_option() {
    count_cb_option++;
    $('#cb_option_container').append("<div id=\"cb_option_" + count_cb_option + "\" class=\"rdo_option cb_option\">"
            + "<div id=\"square\" class=\"square\"></div>"
            + "<input id=\"cb_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin:0px 4px\">"
            + "<div id=\"remove_option\" class=\"remove_option\" onclick=\"remove_cb_option(this);\"></div>"
            + "</div>");
    $('#cb_option_' + count_cb_option + " :input").focus();
}

var count_cbb_option = 0;
function add_cbb_option() {
    count_cbb_option++;
    $('#cbb_option_container').append("<div id=\"cbb_option_" + count_cbb_option + "\" class=\"rdo_option cbb_option\">"
            + "<input id=\"cbb_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;\">"
            + "<div id=\"remove_option\" class=\"remove_option\" onclick=\"remove_cbb_option(this);\"></div>"
            + "</div>");
    $('#cbb_option_' + count_cbb_option + " :input").focus();
}

function remove_rdo_option(elem) {
    var remove_item = elem.parentNode;
    remove_item.parentNode.removeChild(remove_item);
}

function createAnimation(id) {
    $('#section_' + id).hover(function() {
        $(this).children('#hidden_control_' + id).fadeTo(100, 1);
    }, function() {
        $(this).children('#hidden_control_' + id).fadeTo(100, 0);
    });
}

function remove_cb_option(elem) {
    var remove_item = elem.parentNode;
    remove_item.parentNode.removeChild(remove_item);
}

function remove_cbb_option(elem) {
    var remove_item = elem.parentNode;
    remove_item.parentNode.removeChild(remove_item);
}

function rate_start_onclick() {
    document.getElementById("rate_start_option").style.visibility = "visible";
    document.getElementById("rate_start_option").focus();
}

function rate_end_onclick() {
    document.getElementById("rate_end_option").style.visibility = "visible";
    document.getElementById("rate_end_option").focus();
}

function rate_start_option_onclick(value) {
    document.getElementById("rate_start_option").blur();
    document.getElementById('rate_start').innerHTML = value + "<div id='up_down'></div>";
    document.getElementById('rate_start_label').innerHTML = (value);
}

function rate_end_option_onclick(value) {
    document.getElementById("rate_end_option").blur();
    document.getElementById('rate_end').innerHTML = value + "<div id='up_down'></div>";
    document.getElementById('rate_end_label').innerHTML = (value);
}

var tbl_row_count = 0;
function add_table_row() {
    tbl_row_count++;
    $('#table_row_option_container').append("<div id=\"row_option_" + tbl_row_count + "\" class=\"table_content_option\" ><input id=\"row_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;margin-left:100px;\"><div id=\"remove_option\" class=\"remove_option\" onclick=\"remove_cbb_option(this);\"></div></div>");
    $('#row_option_' + tbl_row_count + ' :input').focus();
}

var tbl_col_count = 0;
function add_table_column() {
    tbl_col_count++;
    $('#table_col_option_container').append("<div id=\"col_option_" + tbl_col_count + "\" class=\"table_content_option\"><input id=\"col_option_input\" class=\"input rdo_option_input\" value=\"\" style=\"margin-right:4px;margin-left:100px;\"><div id=\"remove_option\" class=\"remove_option\" onclick=\"remove_cbb_option(this);\"></div></div>");
    $('#col_option_' + tbl_col_count + ' :input').focus();
}

var count = 0;
function onclick_done() {
    count++;
    var newId = "section_" + count;
    var ques = document.getElementById('input_question').value;
    var check = (document.getElementById('required').checked);
    var help = document.getElementById('input_help').value;
    var type = document.getElementById('q_type').innerHTML;
    type = type.substring(0, type.indexOf("<")).toLowerCase();
    var q_type = "";
    switch (type) {
        case "text":
            q_type = "<input id=\"input_answer\" class=\"input_answer\" value=\"Answer\" disabled=\"\" style=\"padding-left: 10px;\">";
            if ($('#cb_validate').is(':checked') === true) {
                var valid_type = $('#input_type #span_input_type').html();
                var valid_condition = $('#valid_option #span_valid_option').html();
                var value_1 = "";
                var value_2 = "";
                if (valid_condition === "Between") {
                    value_1 = $('#input_validation_container #input_between1').val();
                    value_2 = $('#input_validation_container #input_between2').val();
                    value_1 = '<span id="span_input_between1" style="margin:0px 5px;">' + value_1 + '</span>-';
                    value_2 = '<span id="span_input_between2" style="margin-left: 5px;">' + value_2 + '</span>';
                } else if (valid_condition === "Not in range") {
                    value_1 = $('#input_validation_container #input_not_from').val();
                    value_2 = $('#input_validation_container #input_not_to').val();
                    value_1 = '<span id="span_input_not_from" style="margin:0px 5px;">' + value_1 + '</span>-';
                    value_2 = '<span id="span_input_not_to" style="margin-left:5px;">' + value_2 + '</span>';
                } else {
                    value_1 = $('#input_validation_container #input_validation').val();
                    value_1 = '"<span id="span_input_validation" style="margin-right:5px;"">' + value_1 + '</span>"';
                    value_2 = "";
                }
                valid_type = '<span id="span_valid_type" style="margin-right:5px;">' + valid_type + '</span>';
                valid_condition = '<span id="span_valid_condition" style="margin-right:5px;">' + valid_condition + '</span>';
                q_type += '<div class="valid_infor">(' + valid_type + valid_condition + value_1 + value_2 + ')</div>';
            }
            break;
        case "radio button":

            jQuery.each($('.rdo_option'), function() {
                q_type += "<div class=\"rdo_label_container\"><div id=\"circle\" class=\"circle\"></div><div class=\"rdo_label\">" + $(this).children(".rdo_option_input").val() + "</div></div>";
            });
            break;
        case "check box":
            jQuery.each($('.cb_option'), function() {
                q_type += "<div class=\"rdo_label_container\"><div id=\"square\" class=\"square\"></div><div class=\"rdo_label\">" + $(this).children(".rdo_option_input").val() + "</div></div>";
            });
            break;
        case "combobox":
            var cbb_option = "";
            jQuery.each($('.cbb_option'), function() {
                cbb_option += "<option>" + $(this).children(".rdo_option_input").val() + "</option>";
            });
            q_type += "<select>" + cbb_option + "</select>";
            break;
        case "rating":
            var start_label = document.getElementById('rate_start_info_input').value;
            var end_label = document.getElementById('rate_end_info_input').value;
            var rate_min = document.getElementById('rate_start').innerHTML;
            var rate_max = document.getElementById('rate_end').innerHTML;
            rate_min = rate_min.substring(0, 1);
            rate_max = rate_max.substring(0, 1);
            q_type = "<span id='minLabel' style='font-family:arial;font-size:14px;margin-right:20px;'>" + start_label + "</span><div id='circle' class='circle'></div>";
            for (i = rate_min; i < rate_max - 1; i++) {
                q_type += "<div id='circle' class='circle'></div>";
            }
            q_type += "<div id='circle' class='circle'></div><span id='maxLabel' style='font-family:arial;font-size:14px;'>" + end_label + "</span>";
            break;
        case "table":
            var col_name = "";
            var row_name = "";
            var content = "";
            jQuery.each($('#table_col_option_container .table_content_option'), function() {
                col_name += "<td><div class='col_name'>" + $(this).children("#col_option_input").val() + "</div></td>";
                content += "<td><div id='circle' class='circle' style='margin:0px'></div></td>";
            });
            jQuery.each($('#table_row_option_container .table_content_option'), function() {
                row_name += "<tr>\n\
                                    <td><div class='row_name'>" + $(this).children('#row_option_input').val() + "</div></td>\n\
                                    " + content + "\n\
                                </tr>";
            });
            q_type += "<div id='table'>\n\
                            <table>\n\
                                <thead>\n\
                                    <tr>\n\
                                        <td><div></div></td>\n\
                                        " + col_name + "\n\
                                    </tr>\n\
                                </thead>\n\
                                <tbody>\n\
                                    " + row_name + "\n\
                                </tbody>\n\
                            </table>\n\
                        </div>";
            break;
        case "date":
            q_type += "<div id=\"select_date\" class=\"select_date\" style=\"margin-left:10px\">\n\
                                <div id=\"option_date\" class=\"date_option\">\n\
                                        <select id=\"cbb_date\" class=\"cbb_date\">\n\
                                                <option value=\"Date\">Date</option>\n\
                                        </select>\n\
                                </div>\n\
                                <div id=\"option_month\" class=\"date_option\">\n\
                                        <select id=\"cbb_month\" class=\"cbb_month\">\n\
                                                <option value=\"Month\">Month</option>\n\
                                        </select>\n\
                                </div>\n\
                                <div id=\"option_year\" class=\"date_option\">\n\
                                        <select id=\"cbb_year\" class=\"cbb_year\">\n\
                                                <option value=\"Year\">Year</option>\n\
                                        </select>\n\
                                </div>\n\
                        </div>";
            break;
    }


    $('#section_holder').append("<div id=\"" + newId + "\" class=\"section\" question-type=\"" + type + "\">\n\
                                        <div id=\"hidden_control_" + count + "\" class=\"hidden_control\">\n\
                                            <div id=\"control_item\" class=\"control_item\">\n\
                                                <div id=\"edit_control_item\" class=\"edit\" onclick=\"edit_section('hidden_control_" + count + "','" + type + "')\"></div>\n\
                                            </div>                                \n\
                                            <div id=\"control_item\" class=\"control_item\">\n\
                                                <div id=\"delete_control_item\" class=\"delete\" onclick=\"delete_section('hidden_control_" + count + "','" + type + "')\"></div>\n\
                                            </div>                            \n\
                                        </div>                            \n\
                                        <div id=\"question_label\" class=\"question_label demo\">" + ques + "</div>\n\
                                        <span id=\"required_label_" + count + "\" style='color:red;font-family=arial;font-size=14px;'></span>\n\
                                        <div id=\"help_label\" class=\"help_label demo\">" + help + "</div>\n\
                                        <div id=\"answer_type\" class=\"answer_type demo\">" + q_type + "</div>\n\
                                    </div>");
    if (check) {
        $('#required_label_' + count).html("*");
    }
    createAnimation(count);
    cancel_edit();
}

function checked_val() {
    if (document.getElementById('cb_validate').checked) {
        $('#validate').slideDown(400);
        document.getElementById('validate_container').style.backgroundColor = '#dedede';
    } else {
        $('#validate').slideUp(400);
        document.getElementById('validate_container').style.backgroundColor = '#ffffff';
    }
}

function show_section_editor() {
    $('#section_editor').slideDown(300);
}

function cancel_edit() {
    $('#section_editor').slideUp(300);
}

function edit_section(id, type) {
    alert("id: " + id + " type:");
}

function delete_section(id) {
    $('#' + id).parent().remove();
}


function preview(hiddden_id) {
    var section_count = 0;
    var form_title = $('#input_title').val();
    var form_desc = $('#input_desc').val();
    var JSONObject = '{"title":"' + form_title + '","description":"' + form_desc + '","Sections":{';
    var totalSection = $(".section").length;
    jQuery.each($(".section"), function(index) {
        section_count++;
        var type = $(this).attr("question-type");
        var ques = $(this).children("#question_label").html();
        var help = $(this).children("#help_label").html();
        var required = $(this).children("#required_label_" + section_count).html();
        JSONObject += '"Section_' + section_count + '":{';
        JSONObject += '"type": "' + type + '",';
        JSONObject += '"required": ';
        JSONObject += (required === "*") ? '"true", ' : '"false", ';
        JSONObject += '"question": "' + ques + '",';
        JSONObject += '"help": "' + help + '",';
        JSONObject += '"answer":';
        var options = '{"options": {';
        switch (type) {
            case "text":
                var isEnableValid = "false";
                if ($("#" + $(this).attr("id") + ' .valid_infor').attr("class") === "valid_infor") {
                    isEnableValid = "true";
                }
                var valid_type = $("#" + $(this).attr("id") + ' .valid_infor #span_valid_type').html();
                var valid_condition = $("#" + $(this).attr("id") + ' .valid_infor #span_valid_condition').html();
                var value_1 = "";
                var value_2 = "";
                if (valid_condition === "Between") {
                    value_1 = $("#" + $(this).attr("id") + ' .valid_infor #span_input_between1').html();
                    value_2 = $("#" + $(this).attr("id") + ' .valid_infor #span_input_between2').html();
                } else if (valid_condition === "Not in range") {
                    value_1 = $("#" + $(this).attr("id") + ' .valid_infor #span_input_not_from').html();
                    value_2 = $("#" + $(this).attr("id") + ' .valid_infor #span_input_not_to').html();
                } else {
                    value_1 = $("#" + $(this).attr("id") + ' .valid_infor #span_input_validation').html();
                }
                options += '"valid":' + '"' + isEnableValid + '",';
                options += '"valid_type":' + '"' + valid_type + '",';
                options += '"valid_condition":' + '"' + valid_condition + '",';
                options += '"value_1":' + '"' + value_1 + '"';
                (value_2 !== "") ? options += ',"value_2":' + '"' + value_2 + '"' : options += '';
                options += "}}";
                break;
            case "radio button":
                var total_options = $("#" + $(this).attr("id") + ' .answer_type .rdo_label_container').length;
                jQuery.each($("#" + $(this).attr("id") + ' .answer_type .rdo_label_container'), function(index) {
                    var option = $(this).children('.rdo_label').html();
                    options += '"' + index + '": "' + option + '"';
                    (index < total_options - 1) ? options += ',' : options += '';
                });
                options += "}}";
                break;
            case "check box":
                var total_options = $("#" + $(this).attr("id") + ' .answer_type .rdo_label_container').length;
                jQuery.each($("#" + $(this).attr("id") + ' .answer_type .rdo_label_container'), function(index) {
                    var option = $(this).children('.rdo_label').html();
                    options += '"' + index + '": "' + option + '"';
                    (index < total_options - 1) ? options += ',' : options += '';
                });
                options += "}}";
                break;
            case "combobox":
                var total_options = $("#" + $(this).attr("id") + ' .answer_type option').length;
                jQuery.each($("#" + $(this).attr("id") + ' .answer_type option'), function(index) {
                    var option = $(this).html();
                    options += '"' + index + '": "' + option + '"';
                    (index < total_options - 1) ? options += ',' : options += '';
                });
                options += "}}";
                break;
            case "rating":
                var total = $("#" + $(this).attr("id") + ' .answer_type .circle').length;
                var minLabel = $("#" + $(this).attr("id") + ' .answer_type #minLabel').html();
                var maxLabel = $("#" + $(this).attr("id") + ' .answer_type #maxLabel').html();
                options += '"totalOption":' + '"' + total + '",';
                options += '"minLabel":' + '"' + minLabel + '",';
                options += '"maxLabel":' + '"' + maxLabel + '"';
                options += "}}\n";
                break;
            case "table":
                var totalRow = $("#" + $(this).attr("id") + ' .answer_type #table .row_name').length;
                var totalCol = $("#" + $(this).attr("id") + ' .answer_type #table .col_name').length;
                options += '"rows": {';
                jQuery.each($("#" + $(this).attr("id") + ' .answer_type #table .row_name'), function(index) {
                    var option = $(this).html();
                    options += '"row_' + (index + 1) + '": "' + option + '"';
                    (index < totalRow - 1) ? options += ', ' : options += '';
                });
                options += '},"cols":{';
                jQuery.each($("#" + $(this).attr("id") + ' .answer_type #table .col_name'), function(index) {
                    var option = $(this).html();
                    options += '"col_' + (index + 1) + '": "' + option + '"';
                    (index < totalCol - 1) ? options += ', ' : options += '';
                });
                options += '}';
                options += "}}";
                break;
            case "date":
                var options = '{"options": ';
                options += '"date"';
                options += "}";
                break;
        }

        JSONObject += options;
        (index < totalSection - 1) ? JSONObject += '},\n' : JSONObject += '}\n';
    });
    JSONObject += "}}";
    $('#' + hiddden_id).val(JSONObject);
    console.log(JSONObject);
}


