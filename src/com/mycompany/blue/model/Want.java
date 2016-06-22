package com.mycompany.blue.model;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class Want {
    private int wid;
    private int gid;
    private int num;
    private int cid;

    public Want() {
    }

    public int getCid() {
        return this.cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getWid() {
        return this.wid;
    }

    public void setWid(int wid) {
        this.wid = wid;
    }

    public int getGid() {
        return this.gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public int getNum() {
        return this.num;
    }

    public void setNum(int num) {
        this.num = num;
    }
}
