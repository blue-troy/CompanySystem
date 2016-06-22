<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>添加客户</title>
</head>
<body>
<form action="/customer/Customer-add" method="post">
    公司名称:<input name="customer.name"/>
    公司法人:<textarea name="customer.aperson"></textarea>
    开户银行:<textarea name="customer.bank"></textarea>
    邮政编码:<textarea name="customer.postcode"></textarea>
    公司地址:<textarea name="customer.address"></textarea>
    <input type="submit" value="add"/>
</form>
</body>
</html>
