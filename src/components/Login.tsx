import React, { useState } from 'react'
import '../layout/sj_index.css'
import { Button, message, Space } from 'antd';
import { Input } from 'antd';
import QRCode from 'qrcode.react';
import { UserOutlined } from '@ant-design/icons';
import axiosInstance from '../api/axiosInstance';
// import { message} from 'antd';
// const [messageApi] = message.useMessage();
function Login(prop: any) {
    let { onChangeLogintype } = prop
    const [messageApi, contextHolder] = message.useMessage();
    let [showElem, setshowElem] = useState(false);
    let [showCon, setshowCon] = useState("");
    let [userName, setuserName] = useState('')
    let [password, setpassword] = useState('')






    // 点击登录

    let [loginTrue, setloginTrue] = useState(false)
    const goLogin = (e: any) => {
        setshowElem(true)
        setshowCon(e)
        console.log(showCon, '56789087654678976543');

    }

    const pswValue = (value: any) => {
        setpassword(value.target.value)
    }
    const userNameValue = (value: any) => {
        setuserName(value.target.value)
    }
    const close = () => {
        // 判断登录,返回用户信息
        console.log(userName)
        console.log(password)
        axiosInstance.post('/user/list', {
            password: password,
            userName: userName
        }).then((res: any) => {
            console.log('res', res)
            if (res.code === 200) {
                messageApi.open({
                    type: 'success',
                    content: '登录成功',
                });

                localStorage.setItem('token', res.token)
                localStorage.setItem('userinfo', JSON.stringify(res.userInfo))
                setTimeout(() => { setshowElem(false) }, 1500)
            }
            if (res.code === 404) {
                messageApi.open({
                    type: 'error',
                    content: '账号不存在/密码错误',
                });
            }
        })


        
        // tokenvalue ? setloginTrue(true) : setloginTrue(false)
        // console.log('71892378127893', tokenvalue);


        // onChangeLogintype(loginTrue)



    }

    return (
        <div className="login_box">
            {contextHolder}
            <Button type="primary" size='middle' onClick={() => goLogin("登录")}>
                登录
            </Button>&nbsp;&nbsp;
            <Button size='middle' onClick={() => goLogin("注册")}>注册</Button>
            <div className="Mask_box" style={{ display: showElem ? 'block' : 'none' }}>
                <div className="login_main">
                    <div className="login_left">
                        <img src="../../public/login_img/left.webp" alt="" />
                    </div>
                    <div className="login_right">
                        <div className="login_head">
                            <h3>{showCon}</h3>
                            <p>{showCon === "登录" ? '还没有账号,去注册' : '已有账号,去登录'}</p>
                        </div>
                        <div className="userinfo_box">
                            <div className="userinfo_con">
                                <p>用户名:</p><Input size="large" onChange={userNameValue} placeholder="请输入用户名" prefix={<UserOutlined />} />
                            </div>
                        </div>
                        <div className="userinfo_box1">
                            <div className="userinfo_con1">
                                <p>密码:</p><Input.Password onChange={pswValue} placeholder="请输入密码" />
                            </div>
                        </div>
                        <div className="qrcode_box">
                            <p>用微信扫描二维码登录</p>
                            <QRCode
                                id="qrCode"
                                value="https://www.jianshu.com/u/992656e8a8a6"
                                size={150} // 二维码的大小
                                fgColor="#000000" // 二维码的颜色
                                style={{ margin: 'auto' }}
                                imageSettings={{ // 二维码中间的logo图片
                                    src: 'logoUrl',
                                    height: 100,
                                    width: 100,
                                    excavate: true, // 中间图片所在的位置是否镂空
                                }}
                            />
                        </div>
                        <Button size="large" type="primary" onClick={close}>登 &emsp;&emsp; 录</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
