package com.mycompany.blue.service;

import com.mycompany.blue.model.Linkman;
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
public class LinkmanService {
    public LinkmanService() {
    }

    public List<Linkman> list(int ID) throws SQLException {
        System.out.println("开始 list sev");
        Connection conn = DB.createConn();
        String sql = "select * from linkman where id=" + ID + "";
        PreparedStatement ps = DB.prepare(conn, sql);
        ArrayList linkmens = new ArrayList();

        try {
            ResultSet e = ps.executeQuery();
            Linkman l = null;

            while (e.next()) {
                l = new Linkman();
                l.setPid(e.getInt("pid"));
                l.setId(e.getInt("id"));
                l.setNumber(e.getInt("number"));
                l.setPassword(e.getString("password"));
                l.setName(e.getString("name"));
                l.setTelephone(e.getString("telephone"));
                l.setMobilephone(e.getString("mobilephone"));
                l.setEmail(e.getString("email"));
                linkmens.add(l);
            }
        } catch (SQLException var8) {
            var8.printStackTrace();
            throw var8;
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
        return linkmens;
    }

    public void add(Linkman l) {
        System.out.println("linkman add serv");
        Connection conn = DB.createConn();
        String sql1 = "insert into linkman values (NULL,?,?,?,?,?,?,?)";
        PreparedStatement ps1 = DB.prepare(conn, sql1);
        Object rs1 = null;

        try {
            System.out.println("linkman add in");
            ps1.setInt(1, l.getId());
            ps1.setInt(2, 11111);
            ps1.setString(3, l.getPassword());
            ps1.setString(4, l.getName());
            ps1.setString(5, l.getTelephone());
            ps1.setString(6, l.getMobilephone());
            ps1.setString(7, l.getEmail());
            ps1.executeUpdate();
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps1);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }

    public void update(Linkman l) {
        Connection conn = DB.createConn();
        System.out.println("update linkman serv");
        System.out.println("1");
        String sql = "update linkman set name = ?, telephone = ?,mobilephone=?,email=? where pid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);
        System.out.println("2");

        try {
            System.out.println("try");
            ps.setString(1, l.getName());
            ps.setString(2, l.getTelephone());
            ps.setString(3, l.getMobilephone());
            ps.setString(4, l.getEmail());
            ps.setInt(5, l.getPid());
            System.out.println(l.getName() + l.getTelephone() + l.getMobilephone() + l.getEmail() + "pid=" + l.getPid());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public void delete(Linkman l) {
        this.deleteById(l.getPid());
    }

    public void deleteById(int pid) {
        Connection conn = DB.createConn();
        String sql = "delete from linkman where pid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, pid);
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public Linkman loadById(int pid) {
        Connection conn = DB.createConn();
        String sql = "select * from linkman where pid = ?";
        PreparedStatement ps = DB.prepare(conn, sql);
        Linkman l = null;

        try {
            ps.setInt(1, pid);
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                l = new Linkman();
                l.setId(e.getInt("id"));
                l.setPid(e.getInt("pid"));
                l.setNumber(e.getInt("number"));
                l.setPassword(e.getString("password"));
                l.setName(e.getString("name"));
                l.setTelephone(e.getString("telephone"));
                l.setMobilephone(e.getString("mobilephone"));
                l.setEmail(e.getString("email"));
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        return l;
    }
}
