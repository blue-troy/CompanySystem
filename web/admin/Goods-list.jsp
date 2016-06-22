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
        <form action="/customer/Want-addlist" method="post">
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>包装方式</th>
                        <th>产地</th>
                        <th>生产日期</th>
                        <th>价格</th>
                        <th>商品描述</th>
                        <th>计量单位</th>
                        <th>更改商品</th>
                        <th>删除商品</th>
                        <th>选择购买</th>
                        <th>购买数量</th>
                    </tr>
                    </thead>
                    <tbody>
                    <% int i = 0;%>
                    <s:iterator value="goodss" var="g" status="status">
                        <tr>
                            <th scope="row"><s:property value="#g.gid"></s:property></th>
                            <td><s:property value="#g.name"></s:property></td>
                            <td><s:property value="#g.packageway"></s:property></td>
                            <td><s:property value="#g.production"></s:property></td>
                            <td><s:property value="#g.date"></s:property></td>
                            <td><s:property value="#g.price"></s:property></td>
                            <td><s:property value="#g.description"></s:property></td>
                            <td><s:property value="#g.measurement"></s:property></td>
                            <td><a href="/customer/Goods-updateInput?gid=<s:property value="#g.gid"/>"
                                   data-toggle="dialog" data-id="mydialog2" data-title="更改商品信息">更改商品信息</a></td>
                            <td><a href="/customer/Goods-delete?gid=<s:property value="#g.gid"/>">删除商品</a></td>
                            <td><input type="checkbox" name="wants[<%=i%>].gid" data-toggle="icheck"
                                       value="<s:property value="#g.gid"/> "></td>
                            <td><input name="wants[<%=i++%>].num" style="width: 41.6px;"></td>
                                <%--<td><s:textfield name="want[%{#status.index}].num" style="width: 41.6px;"></s:textfield> </td>--%>
                        </tr>
                    </s:iterator>

                    </tbody>
                </table>
            </div>
            <button type="submit" class="btn btn-default">生成订单</button>
        </form>


        <div class="pull-right">
            <button type="button" class="btn btn-default" href="admin/Goods-add.jsp" data-toggle="dialog"
                    data-id="mydialog3" data-title="增加商品">增加商品
            </button>
        </div>
        <s:debug></s:debug>
    </div>
</div>
</body>
</html>
