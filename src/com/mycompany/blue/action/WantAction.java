package com.mycompany.blue.action;

import com.mycompany.blue.model.Want;
import com.mycompany.blue.service.WantService;
import com.opensymphony.xwork2.ActionSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class WantAction extends ActionSupport {
    private Want want;
    private List<Want> wants = new ArrayList();
    private WantService wantService = new WantService();

    public WantAction() {
    }

    public String hehe() {
        System.out.println("want.gid=" + ((Want) this.wants.get(0)).getGid());
        return "list";
    }

    public String addlist() {
        this.wantService.adddindan();
        this.wantService.getdindan();
        this.wantService.addlist(this.wants);
        return "list";
    }

    public List<Want> getWants() {
        return this.wants;
    }

    public void setWants(List<Want> wants) {
        this.wants = wants;
    }

    public Want getWant() {
        return this.want;
    }

    public void setWant(Want want) {
        this.want = want;
    }

    public WantService getWantService() {
        return this.wantService;
    }

    public void setWantService(WantService wantService) {
        this.wantService = wantService;
    }
}
