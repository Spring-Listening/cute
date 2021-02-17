/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-17 14:21:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-17 16:57:49
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import '../styles/index.scss'
import Menu from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'
import SubMenu from '../components/Menu/subMenu'


const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
storiesOf('Menu Component', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    }
  })
  .addDecorator(storyWrapper)
  .add('Horizontal Menu', () => (
    <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => {console.log(index)}}>
      <MenuItem>cool link</MenuItem>
      <MenuItem>cool link2</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>dropdown1</MenuItem>
        <MenuItem>dropdown2</MenuItem>
      </SubMenu>
      <MenuItem>cool link3</MenuItem>
    </Menu>
  ))
  .add('Vertical Menu', () => (
    <Menu defaultIndex='0' mode='vertical' onSelect={(index) => {console.log(index)}} defaultOpenSubMenus={['2']}>
      <MenuItem>cool link</MenuItem>
      <MenuItem>cool link2</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>dropdown1</MenuItem>
        <MenuItem>dropdown2</MenuItem>
      </SubMenu>
      <MenuItem>cool link3</MenuItem>
    </Menu>
  ))
