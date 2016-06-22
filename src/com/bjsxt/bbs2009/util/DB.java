package com.bjsxt.bbs2009.util;

import java.sql.*;

/**
 * Created by 何益鑫 on 2016/6/14.
 */
public class DB {
    public DB() {
    }

    public static Connection createConn() {
        Connection conn = null;

        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bbs2009?user=root&password=&useUnicode=true&characterEncoding=UTF8");
            System.out.println("成功加载mysql驱动");
            System.out.println();
        } catch (ClassNotFoundException var2) {
            var2.printStackTrace();
        } catch (SQLException var3) {
            var3.printStackTrace();
        }

        return conn;
    }

    public static PreparedStatement prepare(Connection conn, String sql) {
        PreparedStatement ps = null;

        try {
            ps = conn.prepareStatement(sql);
        } catch (SQLException var4) {
            var4.printStackTrace();
        }

        return ps;
    }

    public static void close(Connection conn) {
        try {
            conn.close();
            conn = null;
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }

    public static void close(Statement stmt) {
        try {
            stmt.close();
            stmt = null;
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }

    public static void close(ResultSet rs) {
        try {
            rs.close();
            rs = null;
        } catch (SQLException var2) {
            var2.printStackTrace();
        }

    }
}
