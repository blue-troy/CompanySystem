package com.mycompany.blue.service;

import com.mycompany.blue.model.Customer;
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
public class CustomerService {
    public CustomerService() {
    }

    public List<Customer> list() throws SQLException {
        System.out.println("开始 list sev");
        Connection conn = DB.createConn();
        String sql = "select * from customer";
        PreparedStatement ps = DB.prepare(conn, sql);
        ArrayList customers = new ArrayList();

        try {
            ResultSet e = ps.executeQuery();
            Customer c = null;

            while (e.next()) {
                c = new Customer();
                c.setId(e.getInt("id"));
                c.setName(e.getString("name"));
                c.setAperson(e.getString("aperson"));
                c.setAddress(e.getString("address"));
                c.setPostcode(e.getInt("postcode"));
                c.setBank(e.getString("bank"));
                customers.add(c);
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
            throw var7;
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("关闭数据库");
        return customers;
    }

    public void add(Customer c) {
        System.out.println("开始add serv");
        Connection conn = DB.createConn();
        String sql = "insert into customer values (NULL,?,?,?,?,?)";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, c.getName());
            ps.setString(2, c.getAperson());
            ps.setString(3, c.getBank());
            ps.setInt(4, c.getPostcode());
            ps.setString(5, c.getAddress());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }

    public void update(Customer c) {
        Connection conn = DB.createConn();
        String sql = "update customer set name = ?, aperson = ?,bank=?,postcode=?,address=? where id = ?";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setString(1, c.getName());
            ps.setString(2, c.getAperson());
            ps.setString(3, c.getBank());
            ps.setInt(4, c.getPostcode());
            ps.setString(5, c.getAddress());
            ps.setInt(6, c.getId());
            ps.executeUpdate();
        } catch (SQLException var6) {
            var6.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
    }

    public void delete(Customer c) {
        this.deleteById(c.getId());
    }

    public void deleteById(int id) {
        Connection conn = DB.createConn();
        String sql = "delete from customer where id = ?";
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

    public Customer loadById(int id) {
        Connection conn = DB.createConn();
        String sql = "select * from customer where id = ?";
        PreparedStatement ps = DB.prepare(conn, sql);
        Customer c = null;

        try {
            ps.setInt(1, id);
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                c = new Customer();
                c.setId(e.getInt("id"));
                c.setName(e.getString("name"));
                c.setAperson(e.getString("aperson"));
                c.setBank(e.getString("bank"));
                c.setPostcode(e.getInt("postcode"));
                c.setAddress(e.getString("address"));
            }
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        return c;
    }
}
