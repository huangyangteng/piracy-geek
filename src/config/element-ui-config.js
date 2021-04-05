import Vue from 'vue'
import {
    Message,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Tooltip,
    Loading,
    Input,
    Button,
    Popover,
    Drawer,
    Link,
    Slider,
    Card,
    Form,
    FormItem,
    Col,
    DatePicker,
    Radio,
    RadioGroup
} from 'element-ui'

Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Slider)
Vue.use(Dialog)
Vue.use(Link)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Button)
Vue.use(Popover)
Vue.use(Drawer)
Vue.use(Card)
Vue.use(Loading.directive)

Vue.prototype.$Message = Message
