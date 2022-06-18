import agent from '../agent'


class authService{

    login(param){
        console.log('authService send agent request');
        agent.post('login',param)
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            return err.response;
        })
    }
}


export default new authService;