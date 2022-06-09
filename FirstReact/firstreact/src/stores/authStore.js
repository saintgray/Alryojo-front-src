import axios from "axios";
import { action, observable } from "mobx";
import UserStore from './userStore';
import agent from '../agent.js';



class AuthStore{

    @observable errorMsg = '';
    @observable routerPath='';
    @observable signInInfo ={
        username:'',
        password:''
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
                        localStorage.setItem("jwt",header.jwt);
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