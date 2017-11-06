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
    bottomTabHeight: 60, //底部导航栏高度
    headerHeight: 50, // 标题栏高度
    tabIconSize: 25, //底部tab图标大小
    statesBarHeight: (Platform.OS === 'ios'? 20: 0),
}
