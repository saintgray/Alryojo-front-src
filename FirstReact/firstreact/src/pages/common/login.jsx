import React from 'react';
import '../../style/common/login.css';

const bgWhite={backgroundColor:'#fff'}


class Login extends React.Component{
    render(){
        return(
            <div className="container" id="loginglobalwrap">
                <div className="banner text-center">
                    로그인
                </div>
                <div className="container d-flex flex-wrap flex-column justify-content-center p-2" id="insertarea">
                
                    <form method="post">

                        
                        <div className="input-group">
                            <span className="input-group-text" style={bgWhite}><i className="bi bi-person-fill fs-4"></i></span>
                            <input type="text" className="form-control" placeholder="이메일" name="username" id="m_email" />
                        </div>
                        
                        <div id="w_email" className="warning my-2">
                        </div>
                        
                        
                        <div className="input-group">	
                            <span className="input-group-text" style={bgWhite}><i className="bi bi-key-fill fs-4"></i></span>
                            <input type="password" className="form-control" placeholder="비밀번호" name="password" id="m_pw" />					
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
                        <div id="auth_warning" className="warning text-center">
                        </div>
                        <div className="my-2" id="btnarea">
                            <button type="button" className="btn btn-general" id="loginbtn">로그인</button>
                        </div>	
                    </form>
                </div>
            </div>
        )
    }
}

export default Login