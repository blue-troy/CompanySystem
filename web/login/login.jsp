<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html lang="ZH-CN">
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>系统登录</title>
</head>


<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
<link rel="stylesheet" type="text/css" href="styles.css">
-->

</head>
<div class="container">
    <form action="user/login" method="post">
        <h2 class="form-signin-heading">请登陆</h2>
        <label for="inputNumber" class="sr-only">用户名</label>
        <input name="user.number" type="name" id="inputNumber" class="form-control" placeholder="用户名" required=""
               autofocus="">
        <br>
        <label for="inputPassword" class="sr-only">Password</label>
        <input name="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password"
               required="">
        <button class="btn-nm btn-blue" type="submit" value="login">登陆</button>
</div>
<s:debug></s:debug>
</body>
</html>
