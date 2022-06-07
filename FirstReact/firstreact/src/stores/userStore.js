const { observable } = require("mobx");

class UserStore{
    @observable loginInfo;

    @action pullUser(loginInfo){
        return 
    }
}

export default new UserStore();