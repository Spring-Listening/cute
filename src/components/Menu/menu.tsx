/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-15 15:35:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-24 22:41:55
 */
import React, { createContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames'
import { MenuItemProps } from "./menuItem";
// 类型别名 
type MenuMode = 'horizontal' | 'vertical'
// onSelect 类型
type SelectCallback = (selectedIndex: string) => void

// MenuProps 接口
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectIndex: string) => void;
  defaultOpenSubMenus?: string[];
}
// context 类型接口
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus} = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  const classes = classNames('cute-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      
      const childElement = child as FunctionComponentElement<MenuItemProps>
      
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.log("warning: Menu has a child which is not a MenuItem component");
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
      {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}
export default Menu