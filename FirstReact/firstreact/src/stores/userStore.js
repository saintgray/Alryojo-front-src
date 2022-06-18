// const { observable, action } = require("mobx");
import { action, observable } from "mobx";

class UserStore{
    @observable loginInfo={username:'testname',password:'testpassword'}

    @action pullUser(loginInfo){
        this.loginInfo = loginInfo;
    }
}

export default new UserStore();