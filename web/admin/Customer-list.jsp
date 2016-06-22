<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <title>客户列表</title>
</head>
<body>
<div class="bjui-pageContent" style="top: 0px; bottom: 28px;">
    <div class="bjui-doc">
        <h3 class="page-header">客户列表</h3>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>id</th>
                    <th>公司名称</th>
                    <th>公司法人</th>
                    <th>开户银行</th>
                    <th>邮政编码</th>
                    <th>公司地址</th>
                    <th>联系人</th>
                    <th>更改用户信息</th>
                    <th>删除用户</th>
                </tr>
                </thead>
                <tbody>
                <s:iterator value="customers" var="c">
                    <tr>
                        <th scope="row"><s:property value="#c.id"></s:property></th>
                        <td><s:property value="#c.name"></s:property></td>
                        <td><s:property value="#c.aperson"></s:property></td>
                        <td><s:property value="#c.bank"></s:property></td>
                        <td><s:property value="#c.postcode"></s:property></td>
                        <td><s:property value="#c.address"></s:property></td>
                        <td><a href="/customer/Linkman-list?id=<s:property value="#c.id"/>" data-toggle="dialog"
                               data-id="mydialog1" data-title="查看联系人">查看联系人</a></td>
                        <td><a href="/customer/Customer-updateInput?id=<s:property value="#c.id"/>" data-toggle="dialog"
                               data-id="mydialog2" data-title="增加用户">更改用户信息</a></td>
                        <td><a href="/customer/Customer-delete?id=<s:property value="#c.id"/>">删除这个客户</a></td>
                    </tr>
                </s:iterator>
                </tbody>
            </table>
        </div>
        <div class="pull-right">
            <button type="button" class="btn btn-default" href="admin/Customer-add.jsp" data-toggle="dialog"
                    data-id="mydialog3" data-title="增加用户">增加用户
            </button>
        </div>

        <s:debug></s:debug>
    </div>
</div>
</body>
</html>
