import axios from "axios";
import { action, observable, inject } from "mobx";
@inject
class AuthStore{
    @observable loginInfo =undefined

    @action
    login = () =>{
        axios.post('/login',new URLSearchParams(vm.state))
            .then((resp)=>{
                console.log(resp);
                let header = resp.headers;
                console.log(decodeURI(header.msg).replaceAll("+", " "));
                console.log(header.routerpath);
                if(header.msg){
                    vm.setState({
                        ...vm.state,
                        errorMsg:decodeURI(header.msg).replaceAll("+", " ")
                    })
                }
            })
            .catch((err)=>{
                console.log(err.response);
            })
    }
    
    @action
    logout =() =>{
        axios.post('/logout')
        .then((resp)=>{
            console.log(resp);
        })
        .catch((err)=>{
            alert('오류가 발생하였습니다. 잠시 후 다시 시도하세요');
        })
    }
}vsc