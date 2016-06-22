package com.mycompany.blue.action;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//


import com.mycompany.blue.model.Customer;
import com.mycompany.blue.service.CustomerService;
import com.opensymphony.xwork2.ActionSupport;

import java.sql.SQLException;
import java.util.List;

public class CustomerAction extends ActionSupport {
    private List<Customer> customers;
    private Customer customer;
    private CustomerService customerService = new CustomerService();
    private int id;

    public CustomerAction() {
    }

    public String list() throws SQLException {
        this.customers = this.customerService.list();
        return "success";
    }

    public String add() {
        System.out.println("action add");
        this.customerService.add(this.customer);
        return "list";
    }

    public String update() {
        System.out.println("action update");
        this.customerService.update(this.customer);
        return "list";
    }

    public String delete() {
        this.customerService.deleteById(this.id);
        return "list";
    }

    public String addInput() {
        return "input";
    }

    public String updateInput() {
        System.out.println("action updateinput");
        this.customer = this.customerService.loadById(this.id);
        return "input";
    }

    public List<Customer> getCustomers() {
        return this.customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public CustomerService getCustomerService() {
        return this.customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
