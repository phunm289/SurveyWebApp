<%-- 
    Document   : AllForm
    Created on : Oct 30, 2013, 9:09:39 AM
    Author     : Wise-SW
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Form List</title>
        <link rel="stylesheet" href="css/button_bootstrap.css"/>
        <link rel="stylesheet" href="css/allform.css"/>
        <link rel="stylesheet" href="css/menubar.css"/>
    </head>
    <body>
        <div id="top_menu_bar">
            <a href="index.jsp" target="_self"><input type="button" class="button" id="buttonPreview" value="Create a new form"/></a>
        </div>
        <div class="container" align="center">
            <div class="form-list">
                <div class="banner">Form List</div>
                <table id="form-list">
                    <thead>
                        <tr>
                            <td><div class="col_name">Form name</div></td>
                            <td><div class="col_name">Actions</div></td>
                            <td><div class="col_name">Created date</div></td>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach items="${allform}" var="form">
                            <tr>
                                <td>
                                    <div class="form-name"><a href="Form?id=${form.form_id}" target="_self"><c:out value="${form.form_name}"></c:out></a></div>
                                    </td>

                                    <td>
                                        <div class="link show-answer"><a href="ShowAnswer?id=${form.form_id}" target="_self">Show answers</a></div>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <div class="link delete-form"><a href="DeleteForm?id=${form.form_id}" target="_self">Delete</a></div>
                                </td>

                                <td>
                                    <div class="create-date">${form.create_date}</div>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>
