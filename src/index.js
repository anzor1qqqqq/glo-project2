'use strict';

import time from './modules/time';
import menu from './modules/menu';
import modal from './modules/modal';
import reg from './modules/regular';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculated from './modules/calculated';
import db from './modules/db-fetch';

time('15 march 2023');
menu();
modal();
reg();
tabs();
slider();
calculated(100);
db();
