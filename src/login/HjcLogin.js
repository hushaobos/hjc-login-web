import React,{PureComponent,Fragment} from 'react';
import Login from 'hjc-web-fragments';
import {connect} from 'dva';
import 'hjc-web-fragments/src/login/Login.css';
import 'hjc-web-fragments/src/utils/styles.css';

@connect(({login}) => ({
  login
}))
class HjcLogin extends PureComponent{
  UNSAFE_componentWillMount = () =>{
    const {dispatch} = this.props;
    
    dispatch({
      type: 'login/initLogin',
      payload:{
      }
    });
  }
  requestLogin = (usn,pwd) =>{
    const {dispatch} = this.props;

    return dispatch({
      type: 'login/fetchLogin',
      payload:{
        username: usn,
        password: pwd,
      }
    });
  }

  handleSuccess = (location) =>{
    if(location !== undefined){
      window.location.href = location;
    }
  }

  render = () =>{
    const handleEvent = {
      requestLogin: this.requestLogin,
      loginSuccess: this.handleSuccess
    };
    
    return (
      <Fragment>
        <div className="wlf-page">
          <div className="wlf-header">
            <div className="logo">
              <h1>
                <a href="http://www.wlf.com:8080" className="logo-img"></a>
              </h1>
            </div>
          </div>
          <div className="content">
            <div className="login-bg"></div>
            <div className="login-layout">
              <Login
              {...handleEvent}
              ></Login>
            </div>
          </div>
        </div>
        <div className="footer">
          联系电话：0757-82784234 © 2018, 1.0.0.SNAPSHOT
        </div>
      </Fragment>
    );
  }
}

export default HjcLogin;