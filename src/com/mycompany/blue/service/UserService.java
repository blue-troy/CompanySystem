package com.mycompany.blue.service;

import com.mycompany.blue.model.User;
import com.mycompany.blue.util.DB;
import com.opensymphony.xwork2.ActionContext;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class UserService {
    public UserService() {
    }

    public boolean login(User user) throws SQLException {
        Connection conn = DB.createConn();
        String sql = "select number,password,name from staff where number = ? and password = ? union all select number,password,name from linkman where number = ? and password = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, user.getNumber());
            ps.setString(2, user.getPassword());
            ps.setInt(3, user.getNumber());
            ps.setString(4, user.getPassword());
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                user.setNumber(e.getInt("number"));
                user.setName(e.getString("name"));
                if (user.getNumber() > 999999) {
                    user.setJob("系统管理员");
                } else if (user.getNumber() > 99999) {
                    user.setJob("采购员");
                } else {
                    System.out.println("查看公司");
                    user.setJob("联系人");
                }

                System.out.println("开始session测试");
                System.out.println("getuserjob" + user.getJob());
                ActionContext actionContext = ActionContext.getContext();
                Map session = actionContext.getSession();
                session.put("userjob", user.getJob());
                session.put("username", user.getName());
                return true;
            }
        } catch (SQLException var8) {
            var8.printStackTrace();
            throw var8;
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
        return false;
    }

    public void equerycustomer(User user) {
        Connection conn = DB.createConn();
        String sql = "select id from linkman where number=?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, user.getNumber());
            ResultSet e = ps.executeQuery();

            while (e.next()) {
                ActionContext actionContext = ActionContext.getContext();
                Map session = actionContext.getSession();
                session.put("customerid", Integer.valueOf(e.getInt("id")));
            }
        } catch (SQLException var8) {
            var8.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
    }
}
