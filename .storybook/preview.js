/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-16 21:12:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-17 23:06:20
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo); 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};