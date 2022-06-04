import axios from 'axios';
import React , {useState}from 'react';
import {Key,Person} from 'react-bootstrap-icons'
import '../../style/common/login.css';


const bgWhite={backgroundColor:'#fff'}

// 객체지향적 프로그래밍을 추구하는 React
// Component 들은 모두 React.Component 클래스를 상속한다.
// super(props) > 부모의 props 를 상속받으며
// 이 컴포넌트에서 사용하려는 state를 추가적으로 정의한다.
// JAVA 와 다른점은 이 클래스의 field 를 명시하지 않고 생성자에 state 로서 정의하는 것이다.
// state 또는 React.Component 의 field 로서 상속받아 사용하는 식이다.
class Login extends React.Component{

    constructor(props){
        super(props);
        // Login component 에 대한 state 지정
        this.state={
            username:'',
            password:'',
            errorMsg:'',
            testBoolean:false
        }
        // 아래 login method(function) 을 이 Login 이라는 생성자의 변수에 바인딩을 해줘야만
        // 호출시 정상적으로 작동된다.
        
        // codes >
        // this.login=this.login.bind(this);

        // 이를 생략하려면 login 함수를 arrow function 으로 구현하여야 한다.
        // Line 35.11
    }
            
    login=()=>{
        let vm= this;
        console.log(this.state);
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
    bindParamsinState=(event,param)=>{
        // input 값이 변했을때 다음과 같이 state 안의 변수 값을 바인딩 해줄 수 있지만
        // this.state.username=event.target.value;
        // 만약 실시간으로 화면에 그 값을 바인딩 해 주어야 할 때는 state 의 상태를 갱신해주는 작업이 필요하다.
        // 그 때에 필요한 method 가 setState 이다(React.Component 의 setState 메소드를 상속받으므로 사용 할 수 있는 것임)
        // 이 때에 주의해야 할 점이 있는데 이 class 의 state 가 관리하는 객체가 단 하나(username) 이라면
        // 상관이 없지만, 그 중에 일부만 바꾸어야 할 경우에는 (password 는 유지한 채로 username 만 바인딩 하고 싶을 때)
        // state 를 통채로 복사해서 (deep copy) 그 중 username 값만 바꾼 뒤에 state 를 변경한 state 로 통째로
        // 붙여넣는 방법이 있겠으나, 이렇게 하게 되면 바뀌지 않는 변수와 관련이 있는 모든 컴포넌트들이 재 렌더링 되는 문제가 발생한다(성능 저하)
        // 이를 해결 하기 위해서는 아래와 같은 (Line ) 전개구문을 통하여 state 의 일부 값만 변경하여 변경된 부분에 관련된
        // 가상 Dom 요소만 재 랜더링 해주는 방식으로 구현할 수 있다
        // Line 135 , Line 136 의 테스트 Html 을 주석 해제하고 확인해 보자

        if(param==='id'){
            this.setState({
                ...this.state,
                username:event.target.value
            })
        }else{
            this.setState({
                ...this.state,
                password:event.target.value
            })
        }
    }
    
    resetErrorMessage=()=>{
        this.setState({
            ...this.state,
            errorMsg:''
        })
    }

    test=()=>{
        axios.get('/locations',null,{headers:{'Authorization':'Bearer '}})
            .then((resp)=>{
                console.log(resp);
            })
            .catch((err)=>{
                console.log(err.response);
            })
        
    }

    adminTest=()=>{
        axios.post('/admin/adminTest',null,{headers:{'AUthorization':'Bearer 12345'}})
        .then((resp)=>{
            console.log(resp);
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }

    render(){
        return(
            <div className="container" id="loginglobalwrap">
                <div className="banner text-center">
                    로그인
                    {/* state 상태 값에 따라 요소를 보여주고 숨기는 방법 : Vue 의 v-if 와 동일한 결과 */}
                    {/* {this.state.testBoolean && <h1>testBoolean is true</h1>} */}
                </div>
                <div className="container d-flex flex-wrap flex-column justify-content-center p-2" id="insertarea">
                
                    {/* <form method="post"> */}
                        <div className="input-group">
                            <span className="input-group-text" style={bgWhite}>
                            <Person size={20}/>
                            </span>
                            <input type="text" className="form-control" placeholder="이메일" onChange={(e)=>this.bindParamsinState(e,'id')} onFocus={this.resetErrorMessage} / >
                        </div>
                        <div id="w_email" className="warning my-2">
                        </div>
                          
                        <div className="input-group">	
                            <span className="input-group-text" style={bgWhite}>
                            <Key size={20}/>
                            </span>
                            <input type="password" className="form-control" placeholder="비밀번호" onChange={(e)=>this.bindParamsinState(e,'pw')}  onFocus={this.resetErrorMessage} / >
                        </div>
                        <div id="w_pw" className="warning my-2">
                        </div>

                        <div className="d-flex flex-row flex-wrap justify-content-between">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="autoLogin" name="remember-me" />
                                <label className="form-check-label" htmlFor="autoLogin">자동 로그인</label>
                            </div>
                            <div>
                                <span id="forgetMe">비밀번호 찾기</span>
                            </div>
                        </div>
                        
                        {/* authentication failed message area */}
                        <div id="auth_warning" className="warning text-center my-2">
                            {this.state.errorMsg}
                        </div>
                        <div className="my-2" id="btnarea">
                            <button type="button" className="btn btn-general" id="loginbtn" onClick={this.login}>로그인</button>
                        </div>	
                    {/* </form> */}
                </div>

                {/* <h1>{this.state.username}</h1>
                <h1>{this.state.password}</h1> */}
                <button className="btn btn-primary" onClick={this.test}>지역정보</button>
                <button className="btn btn-danger" onClick={this.adminTest}>관리자테스트</button>
            </div>

            
        )
    }
}

export default Login