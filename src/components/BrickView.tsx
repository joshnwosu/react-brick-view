import React, { useEffect } from 'react'
import { Brick } from './brick'

interface Props {
  gutter?: number | undefined
  column?: number | undefined
  breakPoint?:
    | {
        [key: string]: any
      }
    | any
  rtl?: boolean
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  animateOnResize?: boolean
}

const defaultProps = {
  gutter: 10,
  column: 5,
  breakPoint: {},
  rtl: false,
  className: 'react-brick-layout',
  style: {},
  animateOnResize: false,
}

const BrickView = ({
  children,
  gutter = defaultProps.gutter,
  column = defaultProps.column,
  rtl = defaultProps.rtl,
  className = defaultProps.className,
  breakPoint = defaultProps.breakPoint,
  style = defaultProps.style,
  animateOnResize = defaultProps.animateOnResize,
}: Props) => {
  useEffect(() => {
    new Brick({
      gutter,
      column,
      rtl,
      className,
      breakPoint,
      style,
      animateOnResize,
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default BrickView
