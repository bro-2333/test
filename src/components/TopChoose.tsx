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
    <div className="box">
        <div className="top">
            {
                conarr && Object.entries(conarr).map((item,index)=>{
                    return <span>{item[1]} <span style={{paddingLeft:"20px"}} onClick={()=>delobj(item[0])}>X</span></span>
                })
            }
		</div>
      <div className="conbox">
        {
            data && data.map((item: any,index)=>{

				if(!conarr[item.title])
				{
					return  <div className="type">
                        <div className="typetitle">{item.title}</div>
                        {
                          item.conter && item.conter.map((obj: any)=>{
                            return <div onClick={()=>addconarr(item.title,obj)}>{obj}</div>
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
