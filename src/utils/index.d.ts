// 定义类型

// 路由类型
import {JSXElement} from 'react'

export interface RouterItem{
    path:string,
    to?:string,
    title?:string,
    element?:JSXElement;
    children?:Array<RouterItem>;
}

type RouterList = Array<RouterItem>


