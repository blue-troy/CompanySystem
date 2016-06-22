<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>添加商品</title>
</head>
<body>
<form action="/customer/Goods-add" method="post">
    商品名称:<input name="goods.name"/>
    包装方式:<input name="goods.packageway"/>
    产地:<input name="goods.production"/>
    生产日期:<input name="goods.date"/>
    价格:<input name="goods.price"/>
    计量单位:<input name="goods.measurement"/>
    商品描述:<textarea name="goods.description"></textarea>
    <input type="submit" value="添加商品"/>
</form>
</body>
</html>
