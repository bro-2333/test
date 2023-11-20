import React from 'react';
import {message} from 'antd';
import axios from 'axios'  //你自己封装的调用接口的方法
export default class DingCode extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // 你们申请的appid
            APPID: 'dingfjhdfbbyscyhklmx',
            // 跳转当前页面
            REDIRECT_URI: encodeURIComponent('http://10.31.72.54:5173/login')//http://XXX/#/login 你的登录页面
        }
    }
    
    componentDidMount () {
        let URL=encodeURIComponent(`https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.state.APPID}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${this.state.REDIRECT_URI}`)
        // 实例化对象
        var obj =window.DDLogin({
            id:"login_container",
            goto: URL,
            style: "border:none;background-color:#ffffff;",
            width : "300",
            height: "300",
        });
        let loginTmpCode
        if(typeof window.addEventListener != "undefined"){
            window.addEventListener('message', (res)=>{
                loginTmpCode = res.data
                const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.state.APPID}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${this.state.REDIRECT_URI}&loginTmpCode=${loginTmpCode}`
                window.open(encodeURI(url),'_parent')
            }, false);
            console.log(loginTmpCode);
        }
    }
    render(){
        return (
                <div id='login_container' style={{marginTop: '-40px',marginLeft:'20px'}}></div>
        )
    }
}