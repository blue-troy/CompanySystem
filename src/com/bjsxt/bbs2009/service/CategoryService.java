package com.bjsxt.bbs2009.service;

import com.bjsxt.bbs2009.model.Category;
import com.bjsxt.bbs2009.util.DB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 何益鑫 on 2016/6/14.
 */
public class CategoryService {
    public CategoryService() {
    }

    public void add(Category c) {
        System.out.println("开始add serv");
        Connection conn = DB.createConn();
        String sql = "insert into _category values (null, ?, ?)";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, c.getName());
            ps.setString(2, c.getDescription());
            ps.executeUpdate();
            System.out.println("写入数据成功" + c.getName() + c.getDescription());
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }

    public List<Category> list() throws SQLException {
        System.out.println("开始 list sev");
        Connection conn = DB.createConn();
        System.out.println("sql开始");
        String sql = "select * from _category";
        System.out.println("sql jiesu");
        PreparedStatement ps = DB.prepare(conn, sql);
        ArrayList categories = new ArrayList();

        try {
            System.out.println("try");
            ResultSet e = ps.executeQuery();
            Category c = null;

            while (e.next()) {
                System.out.println("rsnext");
                c = new Category();
                c.setId(e.getInt("id"));
                c.setName(e.getString("name"));
                c.setDescription(e.getString("description"));
                System.out.println("查询结果显示" + c.getId());
                categories.add(c);
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
            throw var7;
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
        return categories;
    }

    public void delete(Category c) {
        this.deleteById(c.getId());
    }

    public void deleteById(int id) {
        Connection conn = DB.createConn();
        String sql = "delete from _category where id = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, id);
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public void update(Category c) {
        Connection conn = DB.createConn();
        String sql = "update _category set name = ?, description = ? where id = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, c.getName());
            ps.setString(2, c.getDescription());
            ps.setInt(3, c.getId());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public Category loadById(int id) {
        Connection conn = DB.createConn();
        String sql = "select * from _category where id = ?";
        PreparedStatement ps = DB.prepare(conn, sql);
        Category c = null;

        try {
            ps.setInt(1, id);
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                c = new Category();
                c.setId(e.getInt("id"));
                c.setName(e.getString("name"));
                c.setDescription(e.getString("description"));
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        return c;
    }
}
