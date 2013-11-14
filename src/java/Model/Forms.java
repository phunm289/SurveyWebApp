/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author Wise-SW
 */
public class Forms {
    int form_id;
    String form_name, form_content, create_date;

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public String getCreate_date() {
        return create_date;
    }

    public Forms(String form_name, String form_content) {
        this.form_name = form_name;
        this.form_content = form_content;
    }

    public Forms() {
    }

    public int getForm_id() {
        return form_id;
    }

    public void setForm_id(int form_id) {
        this.form_id = form_id;
    }

    public String getForm_name() {
        return form_name;
    }

    public void setForm_name(String form_name) {
        this.form_name = form_name;
    }

    public String getForm_content() {
        return form_content;
    }

    public void setForm_content(String form_content) {
        this.form_content = form_content;
    }
    
}
