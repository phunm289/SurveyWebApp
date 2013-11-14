

<%@page import="DAO.FormDAO"%>
<%@page import="Model.Forms"%>
<%@page import="Model.Questions"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Model.Answers"%>
<%@page import="java.util.ArrayList"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Answers List</title>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/showanswer.css" />
        <link rel="stylesheet" href="css/menubar.css"/>
    </head>
    <body>
        <%
            ArrayList<Answers> listansw = (ArrayList<Answers>) request.getAttribute("listasnwer");
            ArrayList<Integer> indexes = (ArrayList<Integer>) request.getAttribute("indexes");
            ArrayList<Questions> listques = (ArrayList<Questions>) request.getAttribute("listques");
            String form_name = (String) request.getAttribute("form_name");
            String form_id = (String) request.getAttribute("form_id");
        %>
        <div class="container" align="center">
            <div id="top_menu_bar" align="left" style="height: 40px;">
                <a href="GetAllForm" target="_self"><input type="button" class="button" id="buttonPreview" value="Back to form list"/></a>
            </div>
            <div class="content">
                <div class="banner">Form <%= form_name%>'s answers</div>
                <div class="result">
                    <table class="table table-hover tbl_result">
                        <thead>
                            <tr>
                                <td><div class="order">#</div></td>
                                <%
                                    for (int x = 0; x < listques.size(); x++) {
                                %>
                                <td><div class="col_name"><%= listques.get(x).getQuestion()%></div></td>
                                    <%
                                        }
                                    %>
                                <td><div class="col_name">Action</div></td>
                            </tr>
                        </thead>
                        <tbody>
                            <%
                                for (int i = 0; i < indexes.size(); i++) {
                                    int index = indexes.get(i);
                            %>
                            <tr>
                                <td>
                                    <div class="order"><%= i + 1%></div>
                                </td>
                                <%
                                    for (int j = 0; j < listques.size(); j++) {
                                        int ques_id = listques.get(j).getQues_id();
                                        for (int z = 0; z < listansw.size(); z++) {
                                            if (listansw.get(z).getQues_id() == ques_id) {
                                                if (listansw.get(z).getIndex() == index) {
                                %>
                                <td>
                                    <div class="text"><%= listansw.get(z).getAnswer()%></div>
                                </td>
                                <%
                                                }
                                            }
                                        }
                                    }
                                %>
                                <td>
                                    <div class="text"><a href="DeleteAnswer?index=<%= index%>&form_id=<%= form_id%>" style="cursor: pointer;">Delete</a></div>
                                </td>
                            </tr>
                            <%
                                }
                            %>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>
