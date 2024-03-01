import type { PropsWithChildren } from 'react'
import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element =>{
    return(
        <View style={styles.ButtonContainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

export default CurrencyButton

const styles = StyleSheet.create({
    ButtonContainer: {
        alignItems: 'center'
    },
    flag:{
        fontSize: 28,
        color: '#ffffff',
        marginBottom: 4,
    },
    country:{
        fontSize: 12,
        color: '#2d3436',
        paddingBottom: 4,
        
    }

})