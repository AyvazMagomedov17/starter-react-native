import React from 'react'
import { View, StyleSheet } from 'react-native'
import { height, width } from '../../consts/consts'
type Props = {
    children: React.ReactNode
}

const Center = ({ children }: Props) => {
    return (
        <View style={styles.center}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        width: width(1),
        height: height(1) * 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Center