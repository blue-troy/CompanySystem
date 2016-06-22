<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>更新商品</title>
</head>
<body>
<form action="/customer/Goods-update" method="post">
    <input type="hidden" name="goods.gid" value="<s:property value="goods.gid"/> "><br>
    商品名称:<input name="goods.name" value="<s:property value="goods.name"/> "/>
    包装方式:<input name="goods.packageway" value="<s:property value="goods.packageway"/>"/>
    产地:<input name="goods.production" value="<s:property value="goods.production"/>"/>
    生产日期:<input name="goods.date" value="<s:property value="goods.date"/>"/>
    价格:<input name="goods.price" value="<s:property value="goods.price"/>"/>
    计量单位:<input name="goods.measurement" value="<s:property value="goods.measurement"/>"/>
    商品描述:<textarea name="goods.description"><s:property value="goods.description"/></textarea>
    <input type="submit" value="更新商品"/>
</form>
</body>
</html>
