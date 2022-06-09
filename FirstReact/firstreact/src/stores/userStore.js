const { observable } = require("mobx");

class UserStore{
    @observable loginInfo;

    @action pullUser(loginInfo){
        
    }
}

export default new UserStore();