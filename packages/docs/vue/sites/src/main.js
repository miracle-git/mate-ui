import 'nprogress/nprogress.css'
import '@/styles/app.less'
import { createApp } from 'vue'
import router from '@/router'
import App from '@/views/app'

const app = createApp(App)

app.use(router)
app.mount('#app')
