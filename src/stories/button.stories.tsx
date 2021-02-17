import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../styles/index.scss'
import Button from '../components/Button/button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>&emsp;
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>&emsp;
    <Button btnType="danger"> danger button </Button>&emsp;
    <Button btnType="link" href="https://google.com"> link button </Button>
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
storiesOf('Button Component', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `
      ~~~jsx
      <Button onClick={action('clicked')}> default button </Button>

      <Button size="lg"> large button </Button>

      <Button size="sm"> small button </Button>

      <Button btnType="primary"> primary button </Button>

      <Button btnType="danger"> danger button </Button>
      
      <Button btnType="link" href="https://google.com"> link button </Button>
      ~~~
      `
    }
  })
  .addDecorator(storyWrapper)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)

