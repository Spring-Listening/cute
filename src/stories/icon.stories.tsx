/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-17 15:02:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-24 22:12:26
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import '../styles/index.scss'
import Icon from '../components/Icon/icon'

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

storiesOf('Icon Component', module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(storyWrapper)
  .add('Icon', () => (
    <Icon icon="search" className="search"></Icon>
  ))

