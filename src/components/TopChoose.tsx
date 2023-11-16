// import React from 'react'
import {useEffect,useState} from 'react'
import api from '../api/axiosInstance'
import React from 'react'
import '../layout/top_choose.css'

interface conarrType{
	[propName: string]: string
}
const TopChoose = () => {

  const [data,setdata]=useState([])

  const [conarr,setconarr]=useState<conarrType>({})

  useEffect(() => {
    api.get('/get/fourlist').then((res)=>{
      console.log(res,'123');
      setdata(res.data)
    })
  }, [])


  const addconarr=(title :string,value :string)=>{
	console.log('title',title);
	console.log('value',value);
	
	const arrobj={...conarr,[title]:value}
	setconarr(arrobj)
	// console.log('arrobj',conarr)
  }

  const delobj=(item: any)=>{

    delete conarr[item]
    console.log('conart',conarr);
    
    setconarr({...conarr})

  }

  return (
    <div className="topchoose_box">
        <div className="topchoose_top">
          <p>全部模板 
            {
                conarr && Object.entries(conarr).map((item,index)=>{
                    return <span key={index}> <span style={{fontSize:'13px',color:'#666'}}>&gt;</span> <span className='topchoose_top_con'>{item[1]}  <b style={{padding:"5px"}} onClick={()=>delobj(item[0])}>X</b></span></span>
                })
            }
            &emsp;约 <a href="#">10000+</a> 个搜索结果
            </p>
		</div>
      <div className="topchoose_conbox">
        {
            data && data.map((item: any,index)=>{

				if(!conarr[item.title])
				{
					return  <div className="topchoose_type" key={index}>
                        <div className="topchoose_typetitle">{item.title}</div>
                        {
                          item.conter && item.conter.map((obj: any)=>{
                            return <div className='topchoose_typetitle_con'  onClick={()=>addconarr(item.title,obj)}>{obj}</div>
                          })
                        }
                      </div>
				}
            })
        }
      </div>
    </div>
  )
}

export default TopChoose
