<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="shortcut icon" href="img/icon.ico" >
        
        <script type="text/javascript" src="js/javascript.js" charset="UTF-8"></script>
        <script src="js/jquery.min.js" type="text/javascript" charset="UTF-8" ></script>
        <script src="js/jquery-1.10.2.js" type="text/javascript" charset="UTF-8"></script>
        <script src="js/jquery.elastic.source.js" type="text/javascript" charset="UTF-8"></script>
        <link rel="stylesheet" href="css/button_bootstrap.css" type="text/css"/>
        <link rel="stylesheet" href="css/Stylesheet.css" type="text/css" />
        <link rel="stylesheet" href="css/menubar.css"/>
        <script type="text/javascript" charset="UTF-8" src="js/javascript2.js">
        </script>
        <title>Survey Application</title>
    </head>
    <body>
        
        <div id="confirm_container" class="confirm_container">
            <center>
                <div id="confirm" class="confirm">
                    <span style="font-size: 20px; font-weight: bold;"><b>Type form's notation here.</b></span>
                    <br/>
                    <span style="font-size: 11px; font-family: cursive;">(This is unique, maximum 50 characters)</span>
                    <input id="form_name" type="text" placeholder="Form's notation" name="form_name" class="input input_formname" style="
                           border: 1px solid #cccccc;
                           margin-top: 10px;
                           width: 80%;
                           " onkeyup="limitText('form_name', 'count_down', 20);"
                           >
                    <input readonly id="count_down" type="text" name="countdown" size="3" value="20" style="width:18px; margin-top: 10px;">
                    <form action="Create" name="create_form" method="post" target="_blank" style="display: inline-block;" >
                        <input type="hidden" name="createJSON" id="createJSON" value=""/>
                        <input type="hidden" name="form_notation" id="form_notation" value=""/>
                        <input style="margin-right: 40px; outline: none;" type="submit" class="btn btn-primary" id="create_btn" value="Create"/>
                        <button style="outline: none;" type="button" class="btn btn-primary" id="cancel_btn">Cancel</button>

                    </form>

                </div>
            </center>
        </div>
        <div id="content" style="z-index: 1;">
            <div id="top_menu_bar">

                <form action="Preview" name="preview" method="post" target="_blank" style="display: inline-block;">
                    <input type="submit" class="button" id="buttonPreview" value="Preview"/>
                    <input type="hidden" name="JSONObject" id="previewJSON" value=""/>
                </form>
                <input type="button" class="button" id="buttonCreate" value="Create form"/>
                <a href="GetAllForm" target="_blank"><input type="button" class="button" id="buttonAllForm" value="All form"/></a>

            </div>

            <div id="survey_container" align="center">
                <div id="survey_form">
                    <div id="form_editor" class="form_editor">
                        <div id="container" class="input_container">
                            <input id="input_title" class="input input_title" placeholder="Form Title" onfocus="input_onClick('input_title', 'Form Title');" onblur="input_onBlur('input_title', 'Form Title');"/>
                        </div>
                        <div id="container" class="input_container">
                            <textarea id="input_desc" class="input input_desc" onfocus="input_onClick('input_desc', 'Form Description');" onblur="input_onBlur('input_desc', 'Form Description');" onkeypress="$('#input_desc').elastic();" placeholder="Form Description"></textarea>
                        </div>
                    </div> 
                    <div id="section_holder" class="section_holder">
                    </div>
                    <div id="section_editor" class="section_editor">
                        <div id="form_text_container" class="widget_container form_text_container">
                            <div id="widget_control" class="widget_control">
                                <div id="control_item" class="control_item" style="float: right;">
                                    <div id="cancel_control_item" class="cancel" onclick="cancel_edit();"></div>
                                </div>
                            </div>


                            <div id="form_div" class="form_div">
                                <div id="question" class="question">
                                    <div id="q_item">
                                        <div class="label_text">Question Text</div> <input id="input_question" class="input input_question" value=""/>
                                    </div>
                                    <div id="q_item">
                                        <div class="label_text">Help Text</div> <input id="input_help" class="input input_question" value=""/>
                                    </div>
                                    <div id="q_item">
                                        <div class="label_text">Question Type</div> <div id="q_type" class="q_type" onclick="q_type_option_visible();">Text<div id="arrow_down"></div></div>
                                        <div id="q_type_option" tabindex="5" onblur="document.getElementById('q_type_option').style.visibility = 'hidden';">
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('text');">
                                                <div id="text" class="text">Text</div>
                                            </div>
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('rdo_btn');">
                                                <div id="rdo_btn" class="text">Radio Button</div>
                                            </div>
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('cb');">
                                                <div id="cb" class="text">Check Box</div>
                                            </div>
                                            <div id="menu_item" class=" menu_item" onclick="q_type_selected('cbb');">
                                                <div id="cbb" class="text">Combobox</div>
                                            </div>
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('rating');">
                                                <div id="rating" class="text">Rating</div>
                                            </div>
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('table_type');">
                                                <div id="table_type" class="text">Table</div>
                                            </div>
                                            <div id="menu_item" class="menu_item" onclick="q_type_selected('date');">
                                                <div id="date" class="text">Date</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="answer" class="answer">
                                    <div id="answer_container" class="answer_container">

                                        <div class="label_text">Answer</div><input id="input_answer" class="input_answer" value="" disabled/>
                                        <div id="validate_container" tabindex="3" class="validate_container" onfocus="document.getElementById('validate_container').style.backgroundColor = '#dedede';" onblur="document.getElementById('validate_container').style.backgroundColor = '#ffffff';"><input id="cb_validate" type="checkbox" name="validate" onclick="checked_val();" style="margin-top: 0px;" />Validate Input</div>

                                        <div id="validate" tabindex="4" class="validate">

                                            <div id="input_type" class="input_type" onclick="input_type_onclick();">
                                                <span id="span_input_type">Text</span><div id="arrow_down"></div>
                                            </div>
                                            <div tabindex="5" id="input_type_option" class="input_type_option" onfocus="document.getElementById('validate_container').style.backgroundColor = '#dedede';" onblur="document.getElementById('input_type_option').style.visibility = 'hidden';">
                                                <div id="menu_item" class="valid_type">
                                                    <div id="text_type" onclick="selected_type('text_type');">Text</div>
                                                </div>
                                                <div id="menu_item" class="valid_type">
                                                    <div id="number_type" onclick="selected_type('number_type');">Number</div>
                                                </div>
                                            </div>

                                            <div id="valid_option" tabindex="4" class="valid_option" onclick="valid_option_onclick();">
                                                <span id="span_valid_option">Contain</span><div id="arrow_down"></div>
                                            </div>
                                            <div tabindex="6" id="valid_text_item_container" class="valid_text_item_container" onfocus="document.getElementById('validate_container').style.backgroundColor = '#dedede';" onblur="document.getElementById('valid_text_item_container').style.visibility = 'hidden';">
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_contain" onclick="text_valid('option_contain');">Contain</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_not_contain" onclick="text_valid('option_not_contain');">Does not contain</div>
                                                </div>
                                            </div>
                                            <div tabindex="6" id="valid_number_item_container" class="valid_number_item_container" onfocus="document.getElementById('validate_container').style.backgroundColor = '#dedede';" onblur="document.getElementById('valid_number_item_container').style.visibility = 'hidden';">
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_smaller" onclick="number_valid('option_smaller');">Smaller</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_smaller_or" onclick="number_valid('option_smaller_or');">Smaller or equal</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_lager" onclick="number_valid('option_lager');">Larger</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_larger_or" onclick="number_valid('option_larger_or');">Larger or equal</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_between" onclick="number_valid('option_between');">Between</div>
                                                </div>
                                                <div id="menu_item" class="valid_option_item">
                                                    <div id="option_not_in_range" onclick="number_valid('option_not_in_range');">Not in range</div>
                                                </div>
                                            </div>
                                            <div id="input_validation_container" class="input_validation_container"><input id="input_validation" class="input input_validation" value="" onfocus="document.getElementById('validate_container').style.backgroundColor = '#dedede';"></div>
                                        </div>
                                    </div>
                                    <div id="div_confirm" align="left" style="font-family: arial; font-size: 12px; font-weight: normal; height: 50px;line-height: 50px; margin-top: 20px;">

                                        <div align="center" id="btn_ok" class="btn_ok" onclick="onclick_done();">Done</div>
                                        <div id="div_required" style="line-height: 14px; display: inline">
                                            <input type="checkbox" id="required" name="required" style="margin:0px 5px 0px 20px;"/>Required Question
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="page_device" class="page_device"></div>

                    </div>
                    <div id="form_editor" class="form_editor" align="left">
                        <div id="add_section_container" class="add_section_container">
                            <div id="add_section" class="add_section" tabindex="1" onselectstart='return false;' onclick="show_section_editor();">Add Section</div>
                            <div id="add_section_type" class="add_section_type" align="center" tabindex="1" onclick="show_menu();">
                                <div class="button-caption"></div>
                                <div class="dropdown-button"></div>
                            </div>
                        </div>
                        <div id="section_type_menu" class="section_type_menu" style="display: none; float: left; outline: none;" tabindex="2" onblur="hide_menu();">
                            <div id="menu_column" class="menu_column" style="float: left;border-right: 1px solid #ebebeb;">
                                <div id="menu_item" class="menu_item 1" onclick="menu_item_click(1);" >
                                    <div id="text_icon" class="text_icon icon"></div><div id="text" class="text">Text</div>
                                </div>
                                <div id="menu_item" class="menu_item 2" onclick="menu_item_click(2);">
                                    <div id="rdo_icon" class="rdo_icon icon"></div><div id="text" class="text">Radio Button</div>
                                </div>
                                <div id="menu_item" class="menu_item 3" onclick="menu_item_click(3);">
                                    <div id="cb_icon" class="cb_icon icon"></div><div id="text" class="text">Check Box</div>
                                </div>
                                <div id="menu_item" class=" menu_item 4" onclick="menu_item_click(4);">
                                    <div id="cbb_icon" class="cbb_icon icon"></div><div id="text" class="text">Combobox</div>
                                </div>

                            </div>
                            <div id="menu_column" class="menu_column" style="float: left;">
                                <div id="menu_item" class="menu_item 5" onclick="menu_item_click(5);">
                                    <div id="ruler_icon" class="ruler_icon icon"></div><div id="text" class="text">Rating</div>
                                </div>
                                <div id="menu_item" class="menu_item 6" onclick="menu_item_click(6);">
                                    <div id="table_icon" class="table_icon icon"></div><div id="text" class="text">Table</div>
                                </div>
                                <div id="menu_item" class="menu_item 7" onclick="menu_item_click(7);">
                                    <div id="date_icon" class="date_icon icon"></div><div id="text" class="text">Date</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>
