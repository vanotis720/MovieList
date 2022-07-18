import React from 'react';
import { Platform, ActivityIndicator, View } from 'react-native';
import Colors from '../utilities/Color';

const Spinner = ({ style = {}, size = 50, color = Colors.BLUEBLACK }) => (
    <View style={style}>
        {Platform.OS === 'ios' ? (
            <ActivityIndicator
                testID="activity-indicator"
                size="small"
                color={color}
            />
        ) : (
            <ActivityIndicator
                testID="activity-indicator"
                size={size}
                color={color}
            />
        )}
    </View>
);

export default Spinner;