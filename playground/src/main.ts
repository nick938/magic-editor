import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import TMagicDesign from '@tmagic/design'
import MagicEditor from '@tmagic/editor'
import MagicElementPlusAdapter from '@tmagic/element-plus-adapter'
import MagicForm from '@tmagic/form'

import './style.css'
import App from './App.vue'

import 'element-plus/dist/index.css'
import '@tmagic/editor/dist/style.css'
import '@tmagic/form/dist/style.css'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(TMagicDesign, MagicElementPlusAdapter)
app.use(MagicEditor)
app.use(MagicForm)
app.mount('#app')
