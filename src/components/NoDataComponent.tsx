import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fonts from '../utils/Fonts';

interface NoDataComponentProps {
    text?: string;
}

const NoDataComponent: React.FC<NoDataComponentProps> = ({ text }) => {
    const data = text === undefined ? 'No Data Available' : text
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text: {
        fontFamily: Fonts.AppRegular,
        fontSize: 14,
        color: 'black',
    },
});

export default NoDataComponent;