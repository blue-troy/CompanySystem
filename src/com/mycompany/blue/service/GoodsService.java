package com.mycompany.blue.service;

import com.mycompany.blue.model.Goods;
import com.mycompany.blue.util.DB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class GoodsService {
    public GoodsService() {
    }

    public List<Goods> list() throws SQLException {
        System.out.println("开始 goods list sev");
        Connection conn = DB.createConn();
        String sql = "select * from goods";
        PreparedStatement ps = DB.prepare(conn, sql);
        ArrayList goodss = new ArrayList();

        try {
            ResultSet e = ps.executeQuery();
            Goods g = null;

            while (e.next()) {
                g = new Goods();
                g.setGid(e.getInt("gid"));
                g.setName(e.getString("name"));
                g.setPackageway(e.getString("packageway"));
                g.setProduction(e.getString("production"));
                g.setDate(e.getString("date"));
                g.setPrice(e.getString("price"));
                g.setDescription(e.getString("description"));
                g.setMeasurement(e.getString("measurement"));
                goodss.add(g);
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
            throw var7;
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
        return goodss;
    }

    public void add(Goods g) {
        System.out.println("开始add goods serv");
        Connection conn = DB.createConn();
        String sql = "insert into goods values (NULL,?,?,?,?,?,?,?)";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, g.getName());
            ps.setString(2, g.getPackageway());
            ps.setString(3, g.getProduction());
            ps.setString(4, g.getDate());
            ps.setString(5, g.getPrice());
            ps.setString(6, g.getDescription());
            ps.setString(7, g.getMeasurement());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }

    public void update(Goods g) {
        Connection conn = DB.createConn();
        String sql = "update goods set name = ?, packageway = ?,production=?,date=?,price=? ,description=? ,measurement=? where gid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, g.getName());
            ps.setString(2, g.getPackageway());
            ps.setString(3, g.getProduction());
            ps.setString(4, g.getDate());
            ps.setString(5, g.getPrice());
            ps.setString(6, g.getDescription());
            ps.setString(7, g.getMeasurement());
            ps.setInt(8, g.getGid());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public void delete(Goods c) {
        this.deleteById(c.getGid());
    }

    public void deleteById(int gid) {
        Connection conn = DB.createConn();
        String sql = "delete from goods where gid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, gid);
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public Goods loadById(int gid) {
        Connection conn = DB.createConn();
        String sql = "select * from goods where gid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);
        Goods g = null;

        try {
            ps.setInt(1, gid);
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                g = new Goods();
                g.setGid(e.getInt("gid"));
                g.setName(e.getString("name"));
                g.setPackageway(e.getString("packageway"));
                g.setProduction(e.getString("production"));
                g.setDate(e.getString("date"));
                g.setPrice(e.getString("price"));
                g.setDescription(e.getString("description"));
                g.setMeasurement(e.getString("measurement"));
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        return g;
    }
}
