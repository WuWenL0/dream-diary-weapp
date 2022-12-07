import { createApp } from 'vue'
import { Button, Toast, Icon, Navbar, Tabs, TabPane, Sticky, Avatar } from '@nutui/nutui-taro';
import './assets/font/iconfont.css';

import './app.less'

const App = createApp({
  onShow (options) {
    console.log(options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Icon).use(Navbar).use(Tabs).use(TabPane).use(Sticky).use(Avatar)

export default App
