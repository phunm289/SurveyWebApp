<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="js/jquery.min.js" type="text/javascript" charset="UTF-8" ></script>
        <script src="js/jquery-1.10.2.js" type="text/javascript" charset="UTF-8"></script>
        <script type="text/javascript" src="js/jsPreview.js"></script>
        <link rel="stylesheet" href="css/preview.css" type="text/css"/>
        
        <script type="text/javascript" src="datepicker/javascript/zebra_datepicker.js"></script>
        <link rel="stylesheet" href="datepicker/css/default.css" type="text/css">

    </head>
    <body>
        <%
            String htmlContent = request.getAttribute("htmlContent").toString();
        %>
        <div id="form_container" class="form_container" align="center" >
            <div id="main_form" class="main_form" ><%= htmlContent %></div>
        </div>
    </body>
</html>
