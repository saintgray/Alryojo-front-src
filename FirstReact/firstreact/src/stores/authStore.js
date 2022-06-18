import { action, observable } from "mobx";
import agent from '../agent.js';
import { autobind } from "core-decorators";
import authService from "../repo/authService"
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
        let vm=this;
        let resp = authService.login(this.signInInfo);
        console.log(resp);
            //  .then((resp)=>{
            //     console.log('responsed successfully');
            //     let header = resp.headers;
            //     if(header.msg){
            //         vm.errorMsg=decodeURI(header.msg).replaceAll("+", " ");
            //     }else{
            //         if(header.msg){
            //             vm.errorMsg=header.msg;
            //         }else{
            //             vm.routerPath=header.routerpath;
            //             return header.jwt;
            //             // localStorage.setItem("jwt",header.jwt);
            //         }
            //     }
            //  })
            //  .catch((err)=>{
            //     console.log(err.response);
            //     alert('server exception occured');
            // })
    }
}


export default new AuthStore();