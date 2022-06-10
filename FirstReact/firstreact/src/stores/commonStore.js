// const { observable ,action} = require("mobx");
import { action, observable } from "mobx";

class CommonStore{

    @observable token=localStorage.getItem('jwt');

    @action setToken(token){
        this.token=token;
    }
}

export default new CommonStore();