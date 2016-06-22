package com.bjsxt.bbs2009.action;

import com.bjsxt.bbs2009.model.Category;
import com.bjsxt.bbs2009.service.CategoryService;
import com.opensymphony.xwork2.ActionSupport;

import java.sql.SQLException;
import java.util.List;

/**
 * Created by 何益鑫 on 2016/6/14.
 */
public class CategoryAction extends ActionSupport {
    private List<Category> categories;
    private CategoryService categoryService = new CategoryService();
    private Category category;
    private int id;

    public CategoryAction() {
    }

    public String list() throws SQLException {
        System.out.println("调用list action");
        this.categories = this.categoryService.list();
        return "success";
    }

    public String add() {
        this.categoryService.add(this.category);
        return "success";
    }

    public String update() {
        this.categoryService.update(this.category);
        return "success";
    }

    public String delete() {
        this.categoryService.deleteById(this.id);
        return "success";
    }

    public String addInput() {
        return "input";
    }

    public String updateInput() {
        this.category = this.categoryService.loadById(this.id);
        return "input";
    }

    public List<Category> getCategories() {
        return this.categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public CategoryService getCategoryService() {
        return this.categoryService;
    }

    public void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
