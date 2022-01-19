/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-18 00:31:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-19 11:08:47
 */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionProps } from "react-transition-group/Transition";

// type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
// interface CSSTransitionProps {
//   classNames?: string | CSSTransitionClassNames | undefined;
// };
// interface TransitionProps extends CSSTransitionProps {
//   animation?: AnimationName,
//   wrapper? : boolean,
// }

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition