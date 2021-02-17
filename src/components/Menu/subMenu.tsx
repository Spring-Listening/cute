/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-15 22:37:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-17 23:46:20
 */
import React, { useState, FunctionComponentElement, useContext } from 'react';
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem';
import Transition from '../Transition/transition'
import Icon from '../Icon/icon'


export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  defaultOpenSubMenus?: string[]
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className, defaultOpenSubMenus}) => {
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpen = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpen)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('cute-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i)=> {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.log('Warning: SubMenu has a child which is not a MenuItem component');
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu