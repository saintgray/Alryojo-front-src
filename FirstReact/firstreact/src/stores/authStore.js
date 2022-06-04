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
}