// const { observable, action } = require("mobx");
import { action, observable } from "mobx";

class UserStore{
    @observable loginInfo;

    @action pullUser(loginInfo){
        this.loginInfo = loginInfo;
    }
}

export default new UserStore();