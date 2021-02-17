import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
import Upload, { UploadFile } from './components/Upload/upload'
import Icon from './components/Icon/icon';

function App() {
  const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]
  return (
    <div className="App" >
      <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => {console.log(index)}}>
        <MenuItem>cool link</MenuItem>
        <MenuItem>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <Menu defaultIndex='0' mode='vertical' onSelect={(index) => {console.log(index)}} defaultOpenSubMenus={['2']}>
        <MenuItem>cool link</MenuItem>
        <MenuItem>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <br />
      <Icon icon="coffee" theme="primary" size="10x" />
      <br />
      <br />
      <a href="http://baidu.com">
        Learn React
      </a>
      <Upload 
        action="https://mock.mengxuegu.com/mock/602cecf7d95f5e0d60304ac1/example/upload"
        onProgress={(e) => {console.log('progress', e)}}
        defaultFileList={defaultFileList}
        onSuccess={(data, file) => {console.log('success', data, file)}}
        onError={(e) => {console.log('error', e)}}
        onChange={(e) => {console.log('change', e)}}
        drag
      />
    </div>
  );
}

export default App;
