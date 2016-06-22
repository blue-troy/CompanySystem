<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>更新客户</title>
</head>
<body>
<form action="/customer/Linkman-update" method="post">
    <input type="hidden" name="linkman.pid" value="<s:property value="linkman.pid"/> "><br>
    联系人姓名:<input name="linkman.name" value="<s:property value="linkman.name"/>"/><br>
    联系人密码:<input name="linkman.password" value="<s:property value="linkman.password"/>"/><br>
    电话号码:<input name="linkman.telephone" value="<s:property value="linkman.telephone"/>"/><br>
    手机号码:<input name="linkman.mobilephone" value="<s:property value="linkman.mobilephone"/>"/><br>
    电子邮箱:<input name="linkman.email" value=" <s:property value="linkman.email"/>"/><br>
    <input type="submit" value="修改"/>
</form>
</body>
</html>
