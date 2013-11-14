package Controller;

import DAO.QuesDAO;
import Model.Questions;
import java.util.ArrayList;
import org.json.JSONObject;

public class JSONProcessing {

    private int form_id = 0;

    public JSONProcessing() {
    }

    public JSONProcessing(int form_id) {
        this.form_id = form_id;
    }

    public String processJSON(String strJSON) {
        JSONObject jsonO = new JSONObject(strJSON);
        String formTitle = jsonO.getString("title");
        String formDesc = jsonO.getString("description");
        JSONObject objSection = jsonO.getJSONObject("Sections");
        String htmlContent = "<div class=\"form-title\">\n" + formTitle + "</div>\n";
        htmlContent += "<div class=\"form-desc\">\n" + formDesc + "</div>\n";
        String type = "", required = "", question = "", help = "";
        JSONObject answer = null;
        ArrayList<Questions> questions = null;
        if (form_id > 0) {
            QuesDAO quesDAO = new QuesDAO();
            questions = quesDAO.getQuesByFormId(form_id);
        }
        for (int i = 0; i < objSection.length(); i++) {
            int ques_id = questions.get(i).getQues_id();
            JSONObject objChild = objSection.getJSONObject("Section_" + (i + 1));
            type = objChild.getString("type");
            required = objChild.getString("required");
            question = objChild.getString("question");
            help = objChild.getString("help");
            htmlContent += "<div id=\"ques_container_" + (i + 1) + "\" class=\"ques_container\">\n";

            htmlContent += "<div id=\"question_" + (i + 1) + "\" class=\"question\">\n";
            htmlContent += ("true".equals(required)) ? ("<b style=\"margin-right:5px;\">\nQuestion " + (i + 1) + ":</b>\n<span id=\"question_label_" + (i + 1) + "\" class=\"question_label\">\n" + question + "</span>\n<span class=\"required_label\">\n*</span>\n") : "<b style=\"margin-right:5px;\">\nQuestion " + (i + 1) + ":</b>\n<span id=\"question_label_" + (i + 1) + "\" class=\"question_label\">\n" + question + "</span>\n";
            htmlContent += "</div>\n";

            htmlContent += "<div id=\"help_" + (i + 1) + "\" class=\"help\">\n";
            htmlContent += (!"".equals(help) ? ("(" + help + ")") : "");
            htmlContent += "</div>\n";

            htmlContent += "<div id=\"answer_" + (i + 1) + "\" class=\"answer\">\n";
            answer = objChild.getJSONObject("answer");
            JSONObject options = null;
            switch (type) {
                case "text":
                    options = answer.getJSONObject("options");
                    htmlContent += "<div id=\"text_answer_" + (i + 1) + "\" class=\"text_answer\">\n";
                    if ("true".equals(options.getString("valid"))) {
                        String value_1 = options.getString("value_1");
                        String valid_condition = options.getString("valid_condition");
                        String value_2 = "";
                        if ("Between".equals(valid_condition) || "Not in range".equals(valid_condition)) {
                            value_2 = options.getString("value_2");
                        }

                        String valid_type = options.getString("valid_type");
                        htmlContent += "<textarea name=\"" + ques_id + "\" style=\"box-sizing: border-box;min-width:60%;width:100%;max-width:100%;max-height:100px;\" class=\"form-control\" rows=\"3\" id=\"text_answer_" + (i + 1) + "\" onblur=\"validate('text_answer_" + (i + 1) + "','" + valid_type + "','" + valid_condition + "','" + value_1 + "','" + value_2 + "');\">\n</textarea>\n";
                    } else {
                        htmlContent += "<textarea name=\"" + ques_id + "\" style=\"box-sizing: border-box;min-width:60%;width:100%;max-width:100%;max-height:100px;\" id=\"text_answer_" + (i + 1) + "\" class=\"form-control\" rows=\"3\">\n</textarea>\n";
                    }
                    htmlContent += "</div>\n";
                    break;
                case "radio button":
                    options = answer.getJSONObject("options");
                    htmlContent += "<div id=\"rdo_answer_" + (i + 1) + "\" class=\"radio_answer\">\n";
                    for (int x = 0; x < options.length(); x++) {
                        String option = options.getString("" + x);
                        htmlContent += "<label>\n<input style=\"margin:0px 5px;\" type=\"radio\" name=\"" + ques_id + "\" id=\"optionRadio_" + (i + 1) + "_" + (x + 1) + "" + "\" value=\"" + option + "\">\n" + option + "</label>\n";
                    }
                    htmlContent += "</div>\n";
                    break;
                case "check box":
                    options = answer.getJSONObject("options");
                    htmlContent += "<div id=\"cb_answer_" + (i + 1) + "\" class=\"checkbox_answer\">\n";
                    for (int x = 0; x < options.length(); x++) {
                        String option = options.getString("" + x);
                        htmlContent += "<label>\n<input style=\"margin:0px 5px;\" type=\"checkbox\" name=\"" + ques_id + "\" id=\"optionCheckbox_" + (i + 1) + "_" + (x + 1) + "" + "\" value=\"" + option + "\">\n" + option + "</label>\n";
                    }
                    htmlContent += "</div>\n";
                    break;
                case "combobox":
                    options = answer.getJSONObject("options");
                    htmlContent += "<div id=\"cbb_answer_" + (i + 1) + "\" class=\"combobox_answer\">\n";
                    htmlContent += "<select id=\"dropdown_" + (i + 1) + "\" class=\"form-control\" name=\"" + ques_id + "\">\n";
                    for (int x = 0; x < options.length(); x++) {
                        String option = options.getString("" + x);
                        htmlContent += "<option id=\"cbb_option" + (i + 1) + "_" + (x + 1) + "\" value=\"" + option + "\">\n" + option + "</option>\n";
                    }
                    htmlContent += "</select>\n";
                    htmlContent += "</div>\n";
                    break;
                case "rating":
                    options = answer.getJSONObject("options");
                    String maxLabel = options.getString("maxLabel");
                    String minLabel = options.getString("minLabel");
                    int totalOption = Integer.parseInt(options.getString("totalOption"));
                    htmlContent += "<div id=\"rating_answer_" + (i + 1) + "\" class=\"rating_answer\">\n";
                    htmlContent += "<span id=\"rating_" + (i + 1) + "_min_label\" class=\"rating_label\">\n" + minLabel + "</span>\n";
                    for (int j = 0; j < totalOption; j++) {

                        htmlContent += "<input style=\"margin:0px 5px;\" type=\"radio\" name=\"" + ques_id + "\" id=\"optionsRating_" + (i + 1) + "_" + (j + 1) + "\" value=\"" + (j + 1) + "\">\n";
                    }
                    htmlContent += "<span id=\"rating_" + (i + 1) + "_max_label\" class=\"rating_label\">\n" + maxLabel + "</span>\n";
                    htmlContent += "</div>\n";
                    break;
                case "table":
                    options = answer.getJSONObject("options");
                    JSONObject jsonCol = options.getJSONObject("cols");
                    JSONObject jsonRow = options.getJSONObject("rows");
                    htmlContent += "<div id=\"table_answer_" + (i + 1) + "\" class=\"table_answer\" >\n";
                    htmlContent += "<table id=\"table_" + (i + 1) + "\" class=\"table\">\n";
                    htmlContent += "<thead>\n";
                    htmlContent += "<tr>\n";
                    htmlContent += "<td>\n<div>\n</div>\n</td>\n";
                    for (int x = 0; x < jsonCol.length(); x++) {
                        String col = jsonCol.getString("col_" + (x + 1));
                        htmlContent += "<td>\n<div class=\"col_name\">\n" + col + "</div>\n</td>\n";
                    }
                    htmlContent += "</tr>\n";
                    htmlContent += "</thead>\n";

                    htmlContent += "<tbody>\n";
                    for (int y = 0; y < jsonRow.length(); y++) {
                        String row = jsonRow.getString("row_" + (y + 1));
                        htmlContent += "<tr>\n";
                        htmlContent += "<td>\n<div class=\"row_name\">\n" + row + "</div>\n</td>\n";
                        for (int x = 0; x < jsonCol.length(); x++) {
                            String col = jsonCol.getString("col_" + (x + 1));
                            htmlContent += "<td>\n";
                            htmlContent += "<div class=\"tbl_content\">\n";

                            htmlContent += "<input style=\"margin:0px 5px;\" type=\"radio\" name=\"" + ques_id + "_" + (y + 1) + "\" id=\"row" + (y + 1) + "_col" + (x + 1) + "\" value=\"" + row + ": " + col + "\">\n";
                            htmlContent += "</div>\n";
                            htmlContent += "</td>\n";
                        }
                        htmlContent += "</tr>\n";
                    }
                    htmlContent += "</tbody>\n";
                    htmlContent += "</table>\n";
                    htmlContent += "</div>\n";
                    break;
                case "date":
                    htmlContent += "<div id=\"date_answer\" class=\"date_answer\">\n";
                    htmlContent += "<div id=\"date_selector\">\n<input name=\"" + ques_id + "\" type=\"text\" id=\"datepicker_" + (i + 1) + "\" readonly style=\"cursor:text;\" onclick=\"showdatepicker('datepicker_" + (i + 1) + "');\"/>\n</div>\n";
                    htmlContent += "</div>\n";
                    break;
            }
            htmlContent += "</div>\n";

            htmlContent += "</div>\n";
            htmlContent += "<hr/>\n";
        }
        return htmlContent;
    }
}