import React, { useState } from 'react'
import Login from '../components/Login'
import '../layout/sj_index.css'
import { Input, Select, Space } from 'antd';
function AfterHeadLogo() {
    const { Search } = Input;
    const options = [
        {
            value: '全部',
            label: '全部',
        },
        {
            value: 'H5',
            label: 'H5',
        },
        {
            value: '表单',
            label: '表单',
        },
        {
            value: '长图',
            label: '长图',
        },
        {
            value: '互动',
            label: '互动',
        },
        {
            value: '电子画册',
            label: '电子画册',
        },
        {
            value: '视频',
            label: '视频',
        },
        {
            value: '解决方案',
            label: '解决方案',
        },
    ];
    let [defaultValue, setdefaultValue] = useState('邀请函')
    const onSearch: any = (value: any) => console.log(value);
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
    return (
        <div className='AfterHeadLogo_box'>
            <div className="Afterheadlogo_main">
                <div className="afterimg_box">
                    <img src="../../public/login_img/new_logo.svg" alt="" />
                    <div className="afterlogo_hover_box">
                        <img src="../../public/login_img/favorite-guide.webp" alt="" />
                    </div>
                </div>
                <ul>
                    <li className='afteractive_box'>
                        免费模板
                        <div className="after_headlogo_main_active">

                        </div>
                        <div className="afterdown">
                            ^
                        </div>
                        <div className="aftertiphot">
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
                <div className="details_search">
                    <div className="all_main_head_search">
                        <Space.Compact>
                            <Select defaultValue="全部" options={options} />
                            <Search allowClear defaultValue={defaultValue} onSearch={onSearch} enterButton />
                        </Space.Compact>
                    </div>
                </div>
                <div className="afterbutton_box">
                    <Login />
                    <div className="aftercoupons_box">
                        <img src="../../public/login_img/Coupons.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterHeadLogo
