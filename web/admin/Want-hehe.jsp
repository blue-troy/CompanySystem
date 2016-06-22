<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>hehe</title>
</head>
<body>
<form action="/customer/Want-hehe" method="post">

    <input name="wants[0].gid" value="1">
    <input name="wants[0].num" value="1">
    <s:submit></s:submit>

</form>
<s:debug></s:debug>
</body>
</html>
