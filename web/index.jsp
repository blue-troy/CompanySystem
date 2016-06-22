<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE html>
<html lang="zh">
<head>
    <base href="<%=basePath%>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>B-JUI 客户端框架</title>
    <meta name="Keywords" content="B-JUI,Bootstrap,DWZ,jquery,ui,前端,框架,开源,OSC,开源框架,knaan"/>
    <meta name="Description"
          content="B-JUI, Bootstrap for DWZ富客户端框架，基于DWZ富客户端框架修改。主要针对皮肤，编辑器，表单验证等方面进行了大量修改，引入了Bootstrap，Font Awesome，KindEditor，jquery.validationEngine，iCheck等众多开源项目。交流QQ群：232781006。"/>
    <!-- bootstrap - css -->
    <link href="BJUI/themes/css/bootstrap.css" rel="stylesheet">
    <!-- core - css -->
    <link href="BJUI/themes/css/style.css" rel="stylesheet">
    <link href="BJUI/themes/blue/core.css" id="bjui-link-theme" rel="stylesheet">
    <!-- plug - css -->
    <link href="BJUI/plugins/kindeditor_4.1.10/themes/default/default.css" rel="stylesheet">
    <link href="BJUI/plugins/colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet">
    <link href="BJUI/plugins/niceValidator/jquery.validator.css" rel="stylesheet">
    <link href="BJUI/plugins/bootstrapSelect/bootstrap-select.css" rel="stylesheet">
    <link href="BJUI/themes/css/FA/css/font-awesome.min.css" rel="stylesheet">
    <!--[if lte IE 7]>
    <link href="BJUI/themes/css/ie7.css" rel="stylesheet">
    <![endif]-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lte IE 9]>
    <script src="BJUI/other/html5shiv.min.js"></script>
    <script src="BJUI/other/respond.min.js"></script>
    <![endif]-->
    <!-- jquery -->
    <script src="BJUI/js/jquery-1.11.3.min.js"></script>
    <script src="BJUI/js/jquery.cookie.js"></script>
    <!--[if lte IE 9]>
    <script src="BJUI/other/jquery.iframe-transport.js"></script>
    <![endif]-->
    <!-- BJUI.all 分模块压缩版 -->
    <script src="BJUI/js/bjui-all.js"></script>
    <!-- 以下是B-JUI的分模块未压缩版，建议开发调试阶段使用下面的版本 -->
    <!--
    <script src="BJUI/js/bjui-core.js"></script>
    <script src="BJUI/js/bjui-regional.zh-CN.js"></script>
    <script src="BJUI/js/bjui-frag.js"></script>
    <script src="BJUI/js/bjui-extends.js"></script>
    <script src="BJUI/js/bjui-basedrag.js"></script>
    <script src="BJUI/js/bjui-slidebar.js"></script>
    <script src="BJUI/js/bjui-contextmenu.js"></script>
    <script src="BJUI/js/bjui-navtab.js"></script>
    <script src="BJUI/js/bjui-dialog.js"></script>
    <script src="BJUI/js/bjui-taskbar.js"></script>
    <script src="BJUI/js/bjui-ajax.js"></script>
    <script src="BJUI/js/bjui-alertmsg.js"></script>
    <script src="BJUI/js/bjui-pagination.js"></script>
    <script src="BJUI/js/bjui-util.date.js"></script>
    <script src="BJUI/js/bjui-datepicker.js"></script>
    <script src="BJUI/js/bjui-ajaxtab.js"></script>
    <script src="BJUI/js/bjui-datagrid.js"></script>
    <script src="BJUI/js/bjui-tablefixed.js"></script>
    <script src="BJUI/js/bjui-tabledit.js"></script>
    <script src="BJUI/js/bjui-spinner.js"></script>
    <script src="BJUI/js/bjui-lookup.js"></script>
    <script src="BJUI/js/bjui-tags.js"></script>
    <script src="BJUI/js/bjui-upload.js"></script>
    <script src="BJUI/js/bjui-theme.js"></script>
    <script src="BJUI/js/bjui-initui.js"></script>
    <script src="BJUI/js/bjui-plugins.js"></script>
    -->
    <!-- plugins -->
    <!-- swfupload for uploadify && kindeditor -->
    <script src="BJUI/plugins/swfupload/swfupload.js"></script>
    <!-- kindeditor -->
    <script src="BJUI/plugins/kindeditor_4.1.10/kindeditor-all.min.js"></script>
    <script src="BJUI/plugins/kindeditor_4.1.10/lang/zh_CN.js"></script>
    <!-- colorpicker -->
    <script src="BJUI/plugins/colorpicker/js/bootstrap-colorpicker.min.js"></script>
    <!-- ztree -->
    <script src="BJUI/plugins/ztree/jquery.ztree.all-3.5.js"></script>
    <!-- nice validate -->
    <script src="BJUI/plugins/niceValidator/jquery.validator.js"></script>
    <script src="BJUI/plugins/niceValidator/jquery.validator.themes.js"></script>
    <!-- bootstrap plugins -->
    <script src="BJUI/plugins/bootstrap.min.js"></script>
    <script src="BJUI/plugins/bootstrapSelect/bootstrap-select.min.js"></script>
    <script src="BJUI/plugins/bootstrapSelect/defaults-zh_CN.min.js"></script>
    <!-- icheck -->
    <script src="BJUI/plugins/icheck/icheck.min.js"></script>
    <!-- dragsort -->
    <script src="BJUI/plugins/dragsort/jquery.dragsort-0.5.1.min.js"></script>
    <!-- HighCharts -->
    <script src="BJUI/plugins/highcharts/highcharts.js"></script>
    <script src="BJUI/plugins/highcharts/highcharts-3d.js"></script>
    <script src="BJUI/plugins/highcharts/themes/gray.js"></script>
    <!-- ECharts -->
    <script src="BJUI/plugins/echarts/echarts.js"></script>
    <!-- other plugins -->
    <script src="BJUI/plugins/other/jquery.autosize.js"></script>
    <link href="BJUI/plugins/uploadify/css/uploadify.css" rel="stylesheet">
    <script src="BJUI/plugins/uploadify/scripts/jquery.uploadify.min.js"></script>
    <script src="BJUI/plugins/download/jquery.fileDownload.js"></script>
    <link href="http://demo.b-jui.com/doc/doc.css" rel="stylesheet">
    <!-- init -->
    <script type="text/javascript">
        $(function () {
            BJUI.init({
                JSPATH: 'BJUI/',         //[可选]框架路径
                PLUGINPATH: 'BJUI/plugins/', //[可选]插件路径
                loginInfo: {url: 'login_timeout.html', title: '登录', width: 400, height: 200}, // 会话超时后弹出登录对话框
                statusCode: {ok: 200, error: 300, timeout: 301}, //[可选]
                ajaxTimeout: 50000, //[可选]全局Ajax请求超时时间(毫秒)
                pageInfo: {
                    total: 'total',
                    pageCurrent: 'pageCurrent',
                    pageSize: 'pageSize',
                    orderField: 'orderField',
                    orderDirection: 'orderDirection'
                }, //[可选]分页参数
                alertMsg: {displayPosition: 'topcenter', displayMode: 'slide', alertTimeout: 3000}, //[可选]信息提示的显示位置，显隐方式，及[info/correct]方式时自动关闭延时(毫秒)
                keys: {statusCode: 'statusCode', message: 'message'}, //[可选]
                ui: {
                    windowWidth: 1200, //框架显示宽度，0=100%宽，> 600为则居中显示
                    showSlidebar: true, //[可选]左侧导航栏锁定/隐藏
                    clientPaging: true, //[可选]是否在客户端响应分页及排序参数
                    overwriteHomeTab: false //[可选]当打开一个未定义id的navtab时，是否可以覆盖主navtab(我的主页)
                },
                debug: true,    // [可选]调试模式 [true|false，默认false]
                theme: 'sky' // 若有Cookie['bjui_theme'],优先选择Cookie['bjui_theme']。皮肤[五种皮肤:default, orange, purple, blue, red, green]
            })

            // main - menu
            $('#bjui-accordionmenu')
                    .collapse()
                    .on('hidden.bs.collapse', function (e) {
                        $(this).find('> .panel > .panel-heading').each(function () {
                            var $heading = $(this), $a = $heading.find('> h4 > a')

                            if ($a.hasClass('collapsed')) $heading.removeClass('active')
                        })
                    })
                    .on('shown.bs.collapse', function (e) {
                        $(this).find('> .panel > .panel-heading').each(function () {
                            var $heading = $(this), $a = $heading.find('> h4 > a')

                            if (!$a.hasClass('collapsed')) $heading.addClass('active')
                        })
                    })

            $(document).on('click', 'ul.menu-items li > a', function (e) {
                var $a = $(this), $li = $a.parent(), options = $a.data('options').toObj(), $children = $li.find('> .menu-items-children')
                var onClose = function () {
                    $li.removeClass('active')
                }
                var onSwitch = function () {
                    $('#bjui-accordionmenu').find('ul.menu-items li').removeClass('switch')
                    $li.addClass('switch')
                }

                $li.addClass('active')
                if (options) {
                    options.url = $a.attr('href')
                    options.onClose = onClose
                    options.onSwitch = onSwitch
                    if (!options.title) options.title = $a.text()

                    if (!options.target)
                        $a.navtab(options)
                    else
                        $a.dialog(options)
                }
                if ($children.length) {
                    $li.toggleClass('open')
                }

                e.preventDefault()
            })

            //时钟
            var today = new Date(), time = today.getTime()
            $('#bjui-date').html(today.formatDate('yyyy/MM/dd'))
            setInterval(function () {
                today = new Date(today.setSeconds(today.getSeconds() + 1))
                $('#bjui-clock').html(today.formatDate('HH:mm:ss'))
            }, 1000)
        })

        //菜单-事件
        function MainMenuClick(event, treeId, treeNode) {
            event.preventDefault()

            if (treeNode.isParent) {
                var zTree = $.fn.zTree.getZTreeObj(treeId)

                zTree.expandNode(treeNode, !treeNode.open, false, true, true)
                return
            }

            if (treeNode.target && treeNode.target == 'dialog')
                $(event.target).dialog({id: treeNode.tabid, url: treeNode.url, title: treeNode.name})
            else
                $(event.target).navtab({
                    id: treeNode.tabid,
                    url: treeNode.url,
                    title: treeNode.name,
                    fresh: treeNode.fresh,
                    external: treeNode.external
                })
        }
    </script>
</head>
<body>
<!--[if lte IE 7]>
<div id="errorie">
    <div>您还在使用老掉牙的IE，正常使用系统前请升级您的浏览器到 IE8以上版本 <a target="_blank"
                                                 href="http://windows.microsoft.com/zh-cn/internet-explorer/ie-8-worldwide-languages">点击升级</a>&nbsp;&nbsp;强烈建议您更改换浏览器：<a
            href="http://down.tech.sina.com.cn/content/40975.html" target="_blank">谷歌 Chrome</a></div>
</div>
<![endif]-->
<header id="bjui-header">
    <div id="bjui-hnav">
        <!--横向导航菜单-->
        <div id="bjui-hnav-navbar-box">
            <ul id="bjui-hnav-navbar" style="left: 0px;">
                <li class="active">
                    <a href="javascript:;" data-toggle="slidebar">
                        <i class="fa fa-check-square-o"></i>客户信息
                    </a>
                    <div class="items hide" data-noinit="true">
                        <ul id="bjui-hnav-tree-input" class="ztree ztree_main" data-toggle="ztree"
                            data-on-click="MainMenuClick" data-expand-all="true" data-faicon="check-square-o"
                            data-title="客户信息">
                            <li data-id="1" data-pid="0" data-faicon="folder-open-o" data-faicon-close="folder-o">客户信息
                            </li>
                            <li data-id="10" data-pid="1" data-url="/customer/Customer-list" data-tabid="Customer-list"
                                data-faicon="hand-o-up">客户列表
                            </li>
                            <li data-id="12" data-pid="3" data-url="/customer/Goods-list" data-tabid="goods-list"
                                data-faicon="terminal">商品清单
                            </li>

                        </ul>
                        <%--<ul id="bjui-hnav-tree-form" class="ztree ztree_main" data-toggle="ztree"
                            data-on-click="MainMenuClick" data-expand-all="true" data-faicon="list" data-title="综合演示">
                            <li data-id="1" data-pid="0" data-faicon="folder-open-o" data-faicon-close="folder-o">表单演示
                            </li>
                            <li data-id="14" data-pid="1" data-url="form.html" data-tabid="form" data-faicon="list">
                                表单综合演示
                            </li>
                        </ul>--%>
                    </div>
                </li>
                <li class="dropdown"><a href="http://demo.b-jui.com/#" class="dropdown-toggle" data-toggle="dropdown">我的账户
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <s:if test="null==#session.userjob||#session.userjob.isEmpty()">
                            <li><a href="login/login.jsp" data-toggle="dialog" data-id="login" class="blue">&nbsp;<span
                                    class="glyphicon glyphicon-off"></span> 登陆</a></li>
                        </s:if>
                        <s:else>
                            <li><a href="#" data-toggle="dialog" data-id="login" class="blue">&nbsp;<span
                                    class="glyphicon glyphicon-off"></span> <s:property
                                    value="#session.userjob"></s:property> <s:property value="#session.username"/> </a>
                            </li>
                            <li><a href="/user/loginout" data-id="loginout" class="red">&nbsp;<span
                                    class="glyphicon glyphicon-off"></span> 注销登录<s:property
                                    value="#session.customerid"/> </a></li>
                        </s:else>


                    </ul>
                </li>
            </ul>
        </div>
    </div>
</header>
<div id="bjui-container" class="clearfix">
    <div id="bjui-leftside" style="height: auto">
        &lt;!&ndash;左侧导航&ndash;&gt;
        <div class="bjui-sidebar-s" style="height: auto">
            <div class="collapse"></div>
        </div>
        <div id="bjui-sidebar" style="height: auto">
            <div class="toggleCollapse">
                <h2>
                    <i class="fa fa-bars"></i>功能区<i class="fa fa-bars"></i>
                </h2>
            </div>
            <div class="panel-group panel-main collapse in" data-toggle="accordion" id="bjui-accordionmenu"
                 style="display: block;">
                &lt;!&ndash;一级面板&ndash;&gt;
                <div class="panel panel-default collapse in">
                    &lt;!&ndash;一级面板头&ndash;&gt;
                    <div class="panel-heading active">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#bjui-accordionmenu" href="#bjui-collapse0"
                               class="collapse"><i class="fa fa-star-o"></i>&nbsp;主要业务<b><i
                                    class="fa fa-angle-down"></i></b></a>
                        </h4>
                    </div>
                    &lt;!&ndash;一级面板内容&ndash;&gt;
                    <div id="bjui-collapse0" class="panel-collpase collapse in">
                        <div class="panel-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div id="bjui-navtab" class="tabsPage">
        <!--工作区-->
        <div class="tabsPageHeader">
            <div class="tabsPageHeaderContent">
                <ul class="navtab-tab nav nav-tabs">
                    <li><a href="javascript:;"><span>我的主页</span></a></li>
                </ul>
            </div>
            <div class="tabsLeft"><i class="fa fa-angle-double-left"></i></div>
            <div class="tabsRight"><i class="fa fa-angle-double-right"></i></div>
            <div class="tabsMore"><i class="fa fa-angle-double-down"></i></div>
        </div>
        <ul class="tabsMoreList">
            <li><a href="javascript:;">我的主页</a></li>
        </ul>
        <div class="navtab-panel tabsPageContent">
            <div class="page unitBox">
                <!-- 主页内容 -->
            </div>
            <!-- 各页片内容区域 -->
        </div>

    </div>
</div>
<footer id="bjui-footer"></footer>
</body>
</html>