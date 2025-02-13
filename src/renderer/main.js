import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'

const StringUtils = require('./utils/StringUtils')
Vue.prototype.getLength = StringUtils.getLength
Vue.prototype.getLengthGtZone = StringUtils.getLengthGtZone
Vue.prototype.getLengthGtZone = StringUtils.getLengthGtZone
Vue.prototype.getLengthGtZone = StringUtils.getLengthGtZone
Vue.prototype.stringFormat = StringUtils.format
Vue.prototype.isEmpty = StringUtils.isEmpty
Vue.prototype.isNotEmpty = StringUtils.isNotEmpty

import { getFaIcon, getTrackColor } from './utils/Utils'
Vue.prototype.getFaIcon = getFaIcon
Vue.prototype.getTrackColor = getTrackColor

import { SERVER, DATABASE, TABLE, COLUMN, EDIT, ADD } from './utils/Support'

Vue.prototype.SERVER = SERVER
Vue.prototype.DATABASE = DATABASE
Vue.prototype.TABLE = TABLE
Vue.prototype.COLUMN = COLUMN
Vue.prototype.ADD = ADD
Vue.prototype.EDIT = EDIT

const TableEngine = require('./utils/TableEngineUtils')
Vue.prototype.TableEngine = TableEngine

const ColumnTypeUtils = require('./utils/ColumnTypeUtils')
Vue.prototype.ColumnTypeUtils = ColumnTypeUtils

const SqlUtils = require('./utils/SqlUtils')
Vue.prototype.SqlUtils = SqlUtils

import config from '../../package.json'

Vue.prototype.VERSION = config.version

import fontawesome from '@fortawesome/fontawesome'
import free from '@fortawesome/fontawesome-free'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

fontawesome.library.add(free)
fontawesome.library.add(fas)
fontawesome.library.add(fab)

// Support message
import { Message } from 'element-ui'

Vue.prototype.$message = Message

// Support i18n
import { i18n } from './i18n'

// Support highcharts
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue)

// Support clipboard
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

import VueContextMenu from 'vue-context-menu'

Vue.use(VueContextMenu)

Vue.prototype.onCopy = function() {
  Message.success({
    message: StringUtils.format('{0} {1}', [i18n.t('common.copy'), i18n.t('common.success')])
  })
}

Vue.prototype.onError = function() {
  Message.error({
    message: StringUtils.format('{0} {1}', [i18n.t('common.copy'), i18n.t('common.error')])
  })
}

// Support sqlFormatter
import { format } from 'sql-formatter'

Vue.prototype.sqlFormatter = format

// Support CodeMirror
require('./editor')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.prototype.commonLabelWidth120 = '120px'

ElementUI.Dialog.props.closeOnClickModal.default = false

new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
