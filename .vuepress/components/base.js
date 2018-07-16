import Vue from 'vue';
import moment from 'moment';
import _ from 'lodash';

import VuePikaday from '@enrian/vue-pikaday';

import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';

Vue.use(VuePikaday);

Vue.prototype.$moment = moment;
Vue.prototype.$_ = _;
