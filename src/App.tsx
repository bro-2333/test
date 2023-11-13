import  {FC,Suspense} from 'react'
import * as Type from './utils/index'
import {BrowserRouter,Route,Routes,Navigate,HashRouter} from 'react-router-dom'


type modeType = "history|hash"

type Props = {
  routes:Type.RouterList,
  mode?:modeType
}


const Loading = () =>{
  return <div>路由加载中......</div>
}


const RouterView : FC<Props> =({routes}) =>{
  const renderRoutes=(arr:Type.RouterList) =>{
    return arr?.map((item:Type.RouterItem,index:number) =>{
      return <Route key={index} path={item.path} element={item.to ?<Navigate to={item.to}></Navigate>:<item.element></item.element>}>
        {
          item.children && renderRoutes(item.children)
        }
      </Route>
    })
  }
  return (
    <Suspense fallback={<div><Loading></Loading></div>}>
      <Routes>
        {
          renderRoutes(routes)
        }
      </Routes>
    </Suspense>
  )

}


const App:FC<Props> =({routes,mode='history'}) =>{
  if(mode === 'history'){
    return (
      <BrowserRouter>
        <RouterView routes={routes}></RouterView>
      </BrowserRouter>
    )
  }else{
    return (
      <HashRouter>
        <RouterView routes={routes}></RouterView>
      </HashRouter>
    )
  }
}



export default App
