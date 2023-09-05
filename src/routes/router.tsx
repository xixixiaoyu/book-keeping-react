import { Outlet, createHashRouter } from 'react-router-dom'
import { WelcomeLayout } from '../layouts/WelcomeLayout'

export const router = createHashRouter([{
  path: '/',
  element: <Outlet />,
  // 知识点：errorElement 用来指定找不到匹配时的渲染组件
  errorElement: <div>404</div>,
  children: [
    { index: true, element: <div>Home</div> },
    {
      path: 'welcome',
      element: <WelcomeLayout />,
      children: [
        { index: true, element: <div>Welcome</div> },
        { path: '1', element: <div style={{ border: '1px solid red' }}>1</div> },
        { path: '2', element: <div style={{ border: '1px solid red' }}>2</div> },
        { path: '3', element: <div style={{ border: '1px solid red' }}>3</div> },
        { path: '4', element: <div style={{ border: '1px solid red' }}>4</div> },
      ]
    },
  ]
}])
