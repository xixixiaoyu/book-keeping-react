import { animated, useTransition } from '@react-spring/web'
import * as React from 'react'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
const initStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  top: 0,
  left: 0,
}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const [style, setStyle] = useState<CSSProperties>(initStyle)
  const transitions = useTransition(location.pathname, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
    config: { duration: 1000 },
    onStart() {
      setStyle({ ...initStyle, position: 'absolute' })
    },
    onRest() {
      setStyle({ ...initStyle, position: 'relative' })
    }
  })
  return location.pathname === '/welcome/1'
    ? (
      <div>
        <Outlet />
      </div>
      )
    : transitions((animation, item) => {
      return (
        <animated.div key={item} style={{ ...animation, ...style }}>
          <Outlet />
        </animated.div>
      )
    })
}
