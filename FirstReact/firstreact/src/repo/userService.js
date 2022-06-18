import agent from '../agent'

class userService{

    getLoginInfo(){
        agent.getInfo();
    }
}

export default new userService();