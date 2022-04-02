import { createRouter, createWebHashHistory } from "vue-router"
import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"

import "./index.css"
import routes from "./routes"

const app = createApp(App)
app.use(createRouter({ history: createWebHashHistory(), routes }))
app.use(createPinia())
app.mount("#app")
