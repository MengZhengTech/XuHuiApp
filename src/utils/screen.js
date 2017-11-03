/**
 * Created by Huai on 17/11/3.
 */
'use strict';

import {
    Dimensions, Platform,
} from 'react-native';

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    bottomTabHeight: 60,
    headerHeight: 50,
    statesBarHeight: (Platform.OS === 'ios'? 20: 0),
}
