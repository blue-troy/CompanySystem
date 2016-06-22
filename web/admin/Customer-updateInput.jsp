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
<form action="/customer/Customer-update" method="post">
    <input type="hidden" name="customer.id" value="<s:property value="customer.id"/> "><br>
    公司名称:<input name="customer.name" value="<s:property value="customer.name"/>"/><br>
    公司法人:<textarea name="customer.aperson"><s:property value="customer.aperson"/></textarea><br>
    开户银行:<textarea name="customer.bank"><s:property value="customer.bank"/></textarea><br>
    邮政编码:<textarea name="customer.postcode"><s:property value="customer.postcode"/></textarea><br>
    公司地址:<textarea name="customer.address"><s:property value="customer.address"/></textarea><br>
    <input type="submit" value="update"/>
</form>
</body>
</html>
