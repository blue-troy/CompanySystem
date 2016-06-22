package com.mycompany.blue.action;

import com.mycompany.blue.model.User;
import com.mycompany.blue.service.UserService;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import java.util.Map;

/**
 * Created by 何益鑫 on 2016/6/21.
 */
public class LoginAction extends ActionSupport {
    private User user;
    private UserService userService = new UserService();

    public LoginAction() {
    }

    public UserService getUserService() {
        return this.userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public String login() throws Exception {
        if (this.userService.login(this.user)) {
            if (this.user.getJob().equals("系统管理员")) {
                return "success";
            } else if (this.user.getJob().equals("采购员")) {
                return "success";
            } else {
                this.userService.equerycustomer(this.user);
                return "success";
            }
        } else {
            return "error";
        }
    }

    public String loginout() throws Exception {
        ActionContext actionContext = ActionContext.getContext();
        Map session = actionContext.getSession();
        session.clear();
        return "success";
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

