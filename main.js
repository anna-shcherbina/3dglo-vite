import './src/css/bootstrap.min.css'
import './src/css/style.min.css'

import { timer } from './src/modules/timer'
import { menuFunc } from './src/modules/menu'
import { modalFunc } from './src/modules/modal'
import { calcFunc } from './src/modules/calculator'
import { tabsFunc } from './src/modules/tabs'
import { sliderFunc } from './src/modules/slider'

timer('31 december 2024')
menuFunc()
modalFunc()
calcFunc()
tabsFunc()
sliderFunc()