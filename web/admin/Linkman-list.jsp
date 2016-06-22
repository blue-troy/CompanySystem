<%@ page import="com.sun.xml.internal.bind.v2.model.core.ID" %>
<%@ page import="com.mycompany.blue.model.Linkman" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>联系人列表</title>
</head>
<body>
<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th>账号</th>
            <th>姓名</th>
            <th>手机号码</th>
            <th>电话号码</th>
            <th>电子邮箱</th>
            <th>更改联系人</th>
            <th>删除联系人</th>
        </tr>
        </thead>
        <tbody>
        <s:iterator value="linkmans" var="l">
            <tr>
                <input type="hidden" name="#l.pid" value="<s:property value="#l.pid"/> "/>
                <input type="hidden" name="id" value="<s:property value="#l.id"/> "/>
                <td><s:property value="#l.number"></s:property></td>
                <td><s:property value="#l.name"></s:property></td>
                <td><s:property value="#l.telephone"></s:property></td>
                <td><s:property value="#l.mobilephone"></s:property></td>
                <td><s:property value="#l.email"></s:property></td>
                <td><a href="/customer/Linkman-updateInput?pid=<s:property value="#l.pid"/>" data-toggle="dialog"
                       data-id="mydialog4" data-title="更改用户">更改用户</a></td>
                <td><a href="/customer/Linkman-delete?pid=<s:property value="#l.pid"/>">删除联系人</a></td>
            </tr>
        </s:iterator>
        </tbody>
    </table>
</div>
<div class="pull-right">
    <button type="button" class="btn btn-default" href="/customer/Linkman-addInput?id=<s:property value="#l.id"/>"
            data-toggle="dialog" data-id="mydialog5" data-title="增加联系人">增加联系人
    </button>
</div>

<s:debug></s:debug>

</body>
</html>
