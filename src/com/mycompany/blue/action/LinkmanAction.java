package com.mycompany.blue.action;

import com.mycompany.blue.model.Customer;
import com.mycompany.blue.model.Linkman;
import com.mycompany.blue.service.LinkmanService;
import com.opensymphony.xwork2.ActionSupport;

import java.sql.SQLException;
import java.util.List;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class LinkmanAction extends ActionSupport {
    private Customer customer;
    private List<Linkman> linkmans;
    private Linkman linkman;
    private LinkmanService linkmanService = new LinkmanService();
    private int id;
    private int pid;

    public LinkmanAction() {
    }

    public String list() throws SQLException {
        this.linkmans = this.linkmanService.list(this.id);
        return "success";
    }

    public String add() {
        System.out.println("action add");
        this.linkmanService.add(this.linkman);
        return "list";
    }

    public String update() {
        System.out.println("action update");
        this.linkmanService.update(this.linkman);
        return "list";
    }

    public String delete() {
        this.linkmanService.deleteById(this.pid);
        return "list";
    }

    public String addInput() {
        return "input";
    }

    public String updateInput() {
        System.out.println("action updateinput");
        this.linkman = this.linkmanService.loadById(this.pid);
        return "input";
    }

    public List<Linkman> getCustomers() {
        return this.linkmans;
    }

    public void setCustomers(List<Linkman> linkmans) {
        this.linkmans = linkmans;
    }

    public Linkman getLinkman() {
        return this.linkman;
    }

    public void setLinkman(Linkman linkman) {
        this.linkman = linkman;
    }

    public LinkmanService getLinkmanService() {
        return this.linkmanService;
    }

    public void setLinkmanService(LinkmanService linkmanService) {
        this.linkmanService = linkmanService;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPid() {
        return this.pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Linkman> getLinkmans() {
        return this.linkmans;
    }

    public void setLinkmans(List<Linkman> linkmans) {
        this.linkmans = linkmans;
    }
}
