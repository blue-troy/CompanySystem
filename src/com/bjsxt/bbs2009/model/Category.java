package com.bjsxt.bbs2009.model;

/**
 * Created by 何益鑫 on 2016/6/14.
 */
public class Category {
    private int id;
    private String name;
    private String description;

    public Category() {
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

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
