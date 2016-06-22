package com.mycompany.blue.service;

import com.mycompany.blue.model.Want;
import com.mycompany.blue.util.DB;
import com.opensymphony.xwork2.ActionContext;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class WantService {
    int dindanid;

    public WantService() {
    }

    public void addlist(List<Want> wants) {
        System.out.println("add want list");
        Connection conn = DB.createConn();
        String sql = "insert into want values (NULL,?,?,?)";
        PreparedStatement ps = DB.prepare(conn, sql);

        for (int i = 0; i < wants.size(); ++i) {
            try {
                ps.setInt(1, ((Want) wants.get(i)).getGid());
                System.out.println("订单号=" + this.dindanid);
                ps.setInt(2, this.dindanid);
                ps.setInt(3, ((Want) wants.get(i)).getNum());
                ps.executeUpdate();
            } catch (SQLException var7) {
                var7.printStackTrace();
            }
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }

    public void adddindan() {
        ActionContext actionContext = ActionContext.getContext();
        Map session = actionContext.getSession();
        System.out.println("add want dindan");
        Connection conn = DB.createConn();
        String sql = "insert into dindan values (NULL,?)";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ps.setInt(1, ((Integer) session.get("customerid")).intValue());
            ps.executeUpdate();
        } catch (SQLException var7) {
            var7.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("生成了订单");
        System.out.println("成功关闭数据库");
    }

    public void getdindan() {
        Connection conn = DB.createConn();
        String sql = "select max(did) from dindan";
        PreparedStatement ps = DB.prepare(conn, sql);

        try {
            ResultSet e = ps.executeQuery();
            if (e.next()) {
                this.dindanid = e.getInt("max(did)");
                System.out.println("得到订单号为" + e.getInt("max(did)"));
            }
        } catch (SQLException var5) {
            var5.printStackTrace();
        }

        DB.close(ps);
        DB.close(conn);
        System.out.println("成功关闭数据库");
    }
}

