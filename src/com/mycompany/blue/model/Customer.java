package com.mycompany.blue.model;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class Customer {
    private int id;
        private String name;
        private String aperson;
        private int postcode;
        private String address;
        private String bank;

        public Customer() {
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAperson() {
        return this.aperson;
    }

    public void setAperson(String aperson) {
        this.aperson = aperson;
    }

    public int getPostcode() {
        return this.postcode;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBank() {
        return this.bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }
}
