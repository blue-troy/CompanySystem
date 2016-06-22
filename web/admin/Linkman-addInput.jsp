<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>添加联系人</title>
</head>
<body>

<form action="/customer/Linkman-add" method="post">
    <input type="hidden" name="linkman.id" value="<s:property value="id"/> ">
    联系人姓名:<input name="linkman.name"/>
    联系人密码：<input name="linkman.password"/>
    电话号码:<textarea name="linkman.telephone"></textarea>
    手机号码:<textarea name="linkman.mobilephone"></textarea>
    电子邮箱:<textarea name="linkman.email"></textarea>
    <input type="submit" value="添加"/>
</form>
<s:debug></s:debug>
</body>
</html>
