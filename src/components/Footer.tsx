import React from 'react'
import '../layout/Footer.css'
import {MobileOutlined} from '@ant-design/icons'
import QRCode  from "qrcode.react";

const list:any = [
  {num:'700亿+',con:'作品传播次数'},
  {num:'3亿+',con:'累计作品数'},
  {num:'6500万+',con:'累计注册用户'},
  {num:'100万+',con:'正版模板素材'},
  {num:'3000+',con:'安全运行天数'},
]
const dataList:any = [
  ['产品矩阵','H5','海报','长页','表单','互动','视频','电子画册','秀站'],
  ['创意工具','红包','打赏','短信通知','二维码美化','智能抠图','文字云','拼图','智能海报','一键快闪'],
  ['灵感交流','用户社区','创意课堂','客户案例','精选推荐','热门作品','营销日历'],
  ['服务帮助','审核规则','作品审核','网站地图','热门模板','客服中心','帮助中心','隐私协议'],
  ['合作伙伴','设计师招募','合伙人招募','正版素材商','内容中台','内容安全审核'],
  ['公司信息','关于我们','人才招聘','公司动态','荣誉奖项','商务合作'],
  ['社交媒体','微信公众号','官方微博','视频号']
]

function Footer() {
  return (
    <div className='FooterBox'>
      <div className='headTop'>
        <div className='leftBox'>
          <img src="../../public/new_logo.svg" alt="" style={{width:'80%', height:'20%',marginLeft:'5%'}}/>
          <span style={{display:'block',marginLeft:'5%',marginTop:'-5%',fontSize:'16px'}}>全球1000强，中国100强网站</span>
          <div className='footerBox'>
                {
                  list.map((item:any)=>{
                    return <div className='box'>
                      <h2>{item.num}</h2>
                      <span>{item.con}</span>
                    </div>
                  })
                }
          </div>
        </div>
        <div className='mainBox'>
          {
            dataList.map((item:any)=>{
              return <ul className='ulList'>
                {
                  item.map((v:any,index:number)=>{
                    return <li className={index===0?'strong':''}>
                      {v}
                    </li>
                  })
                }
              </ul>
            })
          }
        </div>
        <div className='rightBox'>
          <MobileOutlined style={{fontSize:'25px',marginLeft:'10px',marginTop:'10px'}}/><span style={{fontSize:'20px'}}>手机APP</span>
          <p style={{marginLeft:'10px',lineHeight:'25px',marginTop:'10px'}}>扫码注册 3分钟做出好设计</p>
          <div className='QRCode'>
            <QRCode
              value={'https://th.bing.com/th?id=OIP.HgVQp3fdEWi7TGCsEc-XlQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'} //value参数为生成二维码的链接
              size={200} //二维码的宽高尺寸
              fgColor="#000000"//二维码的颜色
            />
          </div>
        </div>
      </div>
      <div className='mainFooter'>
          <h3 style={{color:'blue',marginTop:'10px',marginLeft:'10px'}}>友情链接</h3>
          <span style={{marginLeft:'10px',marginTop:'2%',display:'block'}}>热门模板</span>
      </div>
      <div className='footer2'>
          <span style={{display:'block',lineHeight:'30px',marginTop:'10px'}}>© 2023 eqxiu.com. All rights reserved 北京中网易企秀科技有限公司</span>
          <span style={{lineHeight:'30px',marginTop:'10px'}}>电信与信息服务业务经营许可证：京ICP证160037号 | 京ICP备15056244号 | 京公网安备11010802018300</span>
          <img src="../../public/brand_bottom_large.webp" style={{width:'100px',height:'38px',float:'right',marginRight:'10px'}} alt="" />
          <img src="../../public/kexin.svg" style={{width:'100px',height:'45px',float:'right',marginRight:'10px'}} alt="" />
      </div>
    </div>
  )
}

export default Footer