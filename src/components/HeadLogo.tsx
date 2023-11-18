
import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import AfterLoginn from './afterlogin/AfterLoginn'
import '../layout/sj_index.css'
import '../layout/sj_afterloginn.css'
function HeadLogo() {

    let [loginbol, setloginbol] = useState(false)

    const navData = [
        {
            'id': 2,
            'tit': '开通会员'
        }, {
            'id': 3,
            'tit': '解决方案'
        }, {
            'id': 4,
            'tit': '企业服务'
        }, {
            'id': 5,
            'tit': 'AI创作'
        }, {
            'id': 6,
            'tit': '内容中台'
        }, {
            'id': 7,
            'tit': '下载App'
        }
    ]

    let tokenvalue: any = localStorage.getItem('token')
    return (
        <div className='HeadLogo_box'>
            <div className="headlogo_main">
                <div className="img_box">
                    <img src="../../public/login_img/logo.jpg" alt="" />
                    <div className="logo_hover_box">
                        <img src="../../public/login_img/favorite-guide.webp" alt="" />
                    </div>
                </div>
                <ul>
                    <li className='active_box'>
                        免费模板
                        <div className="headlogo_main_active">

                        </div>
                        <div className="down">
                            ^
                        </div>
                        <div className="tiphot">
                            <img src="../../public/login_img/tiphot.svg" alt="" />
                        </div>
                    </li>
                    {
                        navData.map((item, index) => {
                            return <li key={index}>
                                {item.tit}
                            </li>
                        })
                    }
                </ul>

                <div className="button_box">
                    {
                        tokenvalue ? <AfterLoginn /> : <Login />
                    }
                   {
                       tokenvalue ? '' : <div className="coupons_box">
                        <img src="../../public/login_img/Coupons.webp" alt="" />
                    </div> 
                   }
                   
                </div>
            </div>
        </div>
    )
}

export default HeadLogo
