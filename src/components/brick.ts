import React from 'react'
import _ from 'lodash'

type Props = {
  gutter?: number
  column?: number
  breakPoint?: {
    [key: string]: any
  }
  rtl?: boolean
  className?: string
  animateOnResize?: boolean
  style?: React.CSSProperties
}

const defaultProps = {
  gutter: 10,
  column: 5,
  breakPoint: {
    350: 1,
    450: 2,
    645: 3,
    900: 4,
    1200: 5,
  },
  rtl: false,
  className: 'react-brick-layout',
  animateOnResize: false,
  style: {},
}

export class Brick implements Props {
  container: HTMLDivElement | null | any
  itemNodeList: HTMLCollection | undefined
  gutter: number | any
  breakPoint?: { [key: string]: any } | undefined
  rtl?: boolean | undefined
  column?: number | any
  style?: React.CSSProperties | undefined
  animateOnResize?: boolean | undefined
  props: {
    container: HTMLDivElement | null
    items: HTMLCollection | undefined
    gutter: number
    column: number
    breakPoint: { [key: string]: any } | undefined
    style: React.CSSProperties | undefined
    animateOnResize?: boolean | undefined
    rtl: boolean | undefined
  }
  d_props: object

  constructor({
    gutter = defaultProps.gutter,
    column = defaultProps.column,
    breakPoint = defaultProps.breakPoint,
    rtl = defaultProps.rtl,
    className = defaultProps.className,
    animateOnResize = defaultProps.animateOnResize,
    style = defaultProps.style,
  }) {
    this.container = document.querySelector(`.${className}`)
    this.itemNodeList = this.container?.children
    this.gutter = this.validate(gutter, 10)
    this.column = this.validate(column, 3)
    this.breakPoint = breakPoint

    this.d_props = {
      gutter,
      column,
      breakPoint,
      rtl,
      className,
      animateOnResize,
      style,
    }

    this.props = this.extend(this.d_props, {
      container: this.container,
      items: this.itemNodeList,
      gutter: this.gutter,
      column: this.column,
    })

    this.responsive()
    this.mount()
    this.resize()
  }

  extend(a: any, b: any) {
    for (const key in b) {
      if (Object.prototype.hasOwnProperty.call(b, key)) {
        a[key] = b[key]
      }
    }
    return a
  }

  validate(value: number, defaultValue: number) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value ? value : defaultValue
  }

  resize() {
    window.addEventListener(
      'resize',
      _.debounce(() => {
        this.responsive()
        this.mount()
      }, 500),
    )
  }

  responsive() {
    for (const key in this.breakPoint) {
      if (Object.prototype.hasOwnProperty.call(this.breakPoint, key)) {
        if (window.innerWidth >= Number(key)) {
          this.column = this.breakPoint[key]
        }
      }
    }
  }

  mount() {
    if (!this.props.container) {
      return false
    }
    if (!this.props.items || this.props.items.length === 0) {
      return false
    }

    let count = 0
    const gutter = this.gutter
    const column = this.column
    const container = this.container
    const itemNodeList = this.itemNodeList
    const animateOnResize = this.props.animateOnResize

    const forEach = Array.prototype.forEach
    const containerWidth = container.getBoundingClientRect().width
    const firstChildWidth = (containerWidth - gutter) / column

    container.style.position = 'relative'

    const itemsGutter: any[] = []
    const itemsPosX: any[] = []

    for (let i = 0; i < column; ++i) {
      itemsPosX.push(i * firstChildWidth + gutter)
      itemsGutter.push(gutter)
    }

    // RTL support
    if (this.props.rtl) {
      itemsPosX.reverse()
    }

    forEach.call(itemNodeList, function (item) {
      let itemIndex = itemsGutter
        .slice(0)
        .sort(function (a, b) {
          return a - b
        })
        .shift()
      itemIndex = itemsGutter.indexOf(itemIndex)

      const posX = parseInt(itemsPosX[itemIndex])
      const posY = parseInt(itemsGutter[itemIndex])

      item.style.width = firstChildWidth - gutter + 'px'
      item.style.position = 'absolute'
      item.style.webkitBackfaceVisibility = item.style.backfaceVisibility = 'hidden'
      // item.style.transformStyle = 'preserve-3d'
      // item.style.transform = 'translate3D(' + posX + 'px,' + posY + 'px, 0)'
      item.style.top = posY + 'px'
      item.style.left = posX + 'px'

      item.dataset.axisX = posX
      item.dataset.axisY = posY

      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter
      count = count + 1

      const containerHeight = itemsGutter
        .slice(0)
        .sort(function (a, b) {
          return a - b
        })
        .pop()

      container.style.height = containerHeight + 'px'

      // Animate on resize support
      if (animateOnResize) {
        item.style.transition = '300ms 100ms ease-in-out'
      }
    })

    return true
  }
}
