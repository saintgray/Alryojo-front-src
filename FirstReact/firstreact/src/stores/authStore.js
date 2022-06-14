import { action, observable } from "mobx";
import agent from '../agent.js';
import { autobind } from "core-decorators";
@autobind
class AuthStore{

    @observable errorMsg = '';
    @observable routerPath='';
    @observable signInInfo ={
        username:'',
        password:''
    }

    @action bindUserName(id){
        this.signInInfo.username=id;
    }
    @action bindPassword(password){
        this.signInInfo.password=password;
    }

    // debug - bind test
    @action observeInfo(){
        console.log(this.signInInfo);
        return this.signInInfo;
    }


    @action login(){
        let vm= this;
        agent.post('login',new URLSearchParams(vm.signInInfo))
             .then((resp)=>{
                console.log('responsed successfully');
                let header = resp.headers;
                if(header.msg){
                    vm.errorMsg=decodeURI(header.msg).replaceAll("+", " ");
                }else{
                    if(header.msg){
                        vm.errorMsg=header.msg;
                    }else{
                        // localStorage.setItem("jwt",header.jwt);
                        //
                        // userStore.js 에 있는 pullUser action 을 사용하고싶음
                        // ex ) userStore.pullUser({id : header.id})
                    }
                    vm.routerPath=header.routerpath;
                }
             })
             .catch((err)=>{
                console.log(err.response);
                alert('server exception occured');
            })
    }
}


export default new AuthStore();