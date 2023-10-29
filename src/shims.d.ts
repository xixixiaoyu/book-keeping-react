import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
<<<<<<< HEAD
    flex?: boolean
    relative?: boolean
=======
    left?: string
    truncate?: boolean
    absolute?: boolean
    flex?: boolean
    relative?: boolean
    top?: string
>>>>>>> master
    text?: string
    grid?: boolean
    before?: string
    after?: string
    shadow?: boolean
    w?: string
    h?: string
<<<<<<< HEAD
=======
    bg?: string
    rounded?: string
    fixed?: boolean
    b?: string
    z?: string
    block?: boolean
    'focus:shadow'?: boolean
  }
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    w?: string
    h?: string
>>>>>>> master
  }
}
