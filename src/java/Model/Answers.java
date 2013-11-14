/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author Wise-SW
 */
public class Answers {
    int answ_id, ques_id,index;
    String answer;
    

    public Answers() {
    }

    public Answers(int ques_id, String answer, int index) {
        this.ques_id = ques_id;
        this.answer = answer;
        this.index = index;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    
    public int getAnsw_id() {
        return answ_id;
    }

    public void setAnsw_id(int answ_id) {
        this.answ_id = answ_id;
    }

    public int getQues_id() {
        return ques_id;
    }

    public void setQues_id(int ques_id) {
        this.ques_id = ques_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
    
}
