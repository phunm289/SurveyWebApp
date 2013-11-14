/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import DAO.FormDAO;
import DAO.QuesDAO;
import Model.Forms;
import Model.Questions;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author Wise-SW
 */
public class Create extends HttpServlet {

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
        String form_content = request.getParameter("createJSON");
        String form_name = request.getParameter("form_notation");
        JSONObject jsonObj = new JSONObject(form_content);
        JSONObject objSections = jsonObj.getJSONObject("Sections");
        FormDAO formDAO = new FormDAO();
        QuesDAO quesDAO = new QuesDAO();
        int form_id = 0;
        Forms form = new Forms(form_name, form_content);
        form_id = formDAO.insertForm(form);
        int ques_id = 0;
        for (int i = 0; i < objSections.length(); i++) {
            JSONObject objSection = objSections.getJSONObject("Section_" + (i + 1));
            String ques = objSection.getString("question");
            
            Questions question = new Questions(form_id, ques);
            ques_id = quesDAO.insertQues(question);
        }
        if (form_id > 0 && ques_id > 0) {
            request.getRequestDispatcher("Form?id="+form_id).forward(request, response);
        } else {
            PrintWriter out = response.getWriter();
            try {
                /* TODO output your page here. You may use following sample code. */
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>ERROR</title>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Table name has already existed!</h1>");
                out.println("</body>");
                out.println("</html>");
            } finally {
                out.close();
            }
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
