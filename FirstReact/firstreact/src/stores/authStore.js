import axios from "axios";
import { action, observable } from "mobx";
import UserStore from './userStore';


class AuthStore{

    @observable errorMsg = '';
    @observable routerPath='';
    @observable signInInfo ={
        username:'',
        password:''
    }

    @action login(){
        let vm= this;
        axios.post('/login',new URLSearchParams(vm.state))
            .then((resp)=>{
                console.log(resp);
                let header = resp.headers;
                if(header.msg){
                    vm.errorMsg=decodeURI(header.msg).replaceAll("+", " ");
                }else{
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