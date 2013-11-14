<%-- 
    Document   : UserForm
    Created on : Oct 30, 2013, 10:48:18 AM
    Author     : Wise-SW
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="js/jquery.min.js" type="text/javascript" charset="UTF-8" ></script>
        <script src="js/jquery-1.10.2.js" type="text/javascript" charset="UTF-8"></script>
        <link rel="stylesheet" href="css/form.css" type="text/css"/>
        <link rel="stylesheet" href="css/button_bootstrap.css" type="text/css"/>
        <script type="text/javascript" src="js/jsPreview.js"></script>
        <script type="text/javascript" src="datepicker/javascript/zebra_datepicker.js"></script>
        <link rel="stylesheet" href="datepicker/css/default.css" type="text/css">
    </head>
    <body>
        <div id="form_container" class="form_container" align="center" >
            <div id="main_form" class="main_form" >
                <form action="Submit" name="submit-form" id="submit-form" method="get">
                    <%= request.getAttribute("content")%>
                    <input type="hidden" value="<%= request.getAttribute("form_id") %>" name="-1"/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </body>
</html>