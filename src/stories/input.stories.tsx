/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-17 15:40:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-24 23:28:29
 */
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from '../components/Input/input'
const ControlledInput = () => {
  const [value, setValue] = useState('')
  return <Input value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}
const defaultInput = () => (
  <>
  <Input
    style={{width: '300px'}}
    placeholder="placeholder"
    onChange={action('changed')}
  />
  <ControlledInput />
  </>
)
const disabledInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled 
  />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="search"
  />  
)

const sizeInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)

const pandInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="google"
      append=".com"
    />
    
  </>
)
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

storiesOf('Input component', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      ~~~jsx
      <Input placeholder="placeholder" disabled onChange={action('changed')} />
      <Input placeholder="placeholder" />
      ~~~
      `
    }
  })
  .addDecorator(storyWrapper)
  .add('Input', defaultInput)
  .add('被禁用的 Input', disabledInput)
  .add('带图标的 Input', iconInput)
  .add('大小不同的 Input', sizeInput)
  .add('带前后缀的 Input', pandInput)
