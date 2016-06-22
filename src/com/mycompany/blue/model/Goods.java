package com.mycompany.blue.model;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class Goods {
    int gid;
    String name;
    String packageway;
    String production;
    String date;
    String price;
    String description;
    String measurement;

    public Goods() {
    }

    public int getGid() {
        return this.gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPackageway() {
        return this.packageway;
    }

    public void setPackageway(String packageway) {
        this.packageway = packageway;
    }

    public String getProduction() {
        return this.production;
    }

    public void setProduction(String production) {
        this.production = production;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPrice() {
        return this.price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMeasurement() {
        return this.measurement;
    }

    public void setMeasurement(String measurement) {
        this.measurement = measurement;
    }
}
