/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import DAO.AnswerDAO;
import DAO.QuesDAO;
import Model.Answers;
import Model.Questions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Wise-SW
 */
public class Submit extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        Enumeration<String> parameterNames = request.getParameterNames();
        int form_id = Integer.parseInt(request.getParameter("-1"));
        AnswerDAO answerDAO = new AnswerDAO();
        QuesDAO quesDAO = new QuesDAO();
        ArrayList<Questions> quesByFormId = quesDAO.getQuesByFormId(form_id);
        int index = answerDAO.getLastIndex();
        int insert_row = 0;
        ArrayList<String> listParam = new ArrayList<>();
        while (parameterNames.hasMoreElements()) {
            listParam.add(parameterNames.nextElement());
        }


        ArrayList<ArrayList<String>> list_tbl_param = new ArrayList<>();

        ArrayList<String> all_table_param = new ArrayList<>();


        for (String param : listParam) {
            if (param.contains("_")) {
                all_table_param.add(param);
            }
        }

        for (int y = 0; y < all_table_param.size(); y++) {
            String param = all_table_param.get(y);
            String ques_id = param.substring(0, param.indexOf("_"));
            if (y == 0) {
                ArrayList<String> arrList = new ArrayList<>();
                arrList.add(param);
                list_tbl_param.add(arrList);
            } else {
                boolean isExisted = false;
                String zParam = all_table_param.get(y - 1);
                String z_ques_id = zParam.substring(0, zParam.indexOf("_"));
                if (ques_id.equals(z_ques_id)) {
                    isExisted = true;
                    list_tbl_param.get(list_tbl_param.size() - 1).add(param);
                }
                if (!isExisted) {
                    ArrayList<String> arrList = new ArrayList<>();
                    arrList.add(param);
                    list_tbl_param.add(arrList);
                }
            }
        }

        for (ArrayList<String> arrayList : list_tbl_param) {
            String param = arrayList.get(0);
            String ques_id = "0";
            if (param.contains("_")) {
                ques_id = param.substring(0, param.indexOf("_"));
            }
            int id = Integer.parseInt(ques_id);
            String values = "";
            for (String string : arrayList) {
                String value = request.getParameter(string);
                values += value;
                values += ", ";
            }
            values = values.substring(0, values.length() - 2);
            Answers answ = new Answers();
            answ.setQues_id(id);
            answ.setAnswer(values);

            answ.setIndex(index);
            insert_row = answerDAO.insertAnswer(answ);
        }


        for (int i = 0; i < listParam.size(); i++) {
            Answers answ = new Answers();
            String parameterName = listParam.get(i);
            String strId = parameterName;
            int x = parameterName.indexOf("_");
            if (x < 0) {
                int ques_id = Integer.parseInt(strId);
                answ.setQues_id(ques_id);
                String[] values = request.getParameterValues(parameterName);
                if (values.length > 1) {
                    String value = "";
                    for (int j = 0; j < values.length; j++) {
                        value += values[j];
                        if (j != (values.length) - 1) {
                            value += ", ";
                        }
                    }
                    answ.setAnswer(value);
                } else {
                    answ.setAnswer(values[0]);
                }

                answ.setIndex(index);
                insert_row = answerDAO.insertAnswer(answ);
            }
        }

        for (int q = 0; q < quesByFormId.size(); q++) {
            Questions ques = quesByFormId.get(q);
            boolean check = false;
            for (int i = 0; i < listParam.size(); i++) {
                String param = listParam.get(i);
                if (param.contains("_")) {
                    param = param.substring(0, param.indexOf("_"));
                }
                int ques_id = Integer.parseInt(param);
                if(ques_id == ques.getQues_id()){
                    check = true;
                }
            }
            if (!check) {
                Answers answ = new Answers();
                answ.setIndex(index);
                answ.setQues_id(ques.getQues_id());
                answ.setAnswer("null");
                insert_row = answerDAO.insertAnswer(answ);
            }
        }

        if (insert_row > 0) {
            response.sendRedirect("thanks.jsp");
        } else {
            response.sendRedirect("error.jsp");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
