import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../consts/consts'
import { ColorModeContext } from '../../navigation/Navigator'
type Props = {
    children: React.ReactNode
}

const AppBackgroundLayout = ({ children }: Props) => {
    const state = useContext(ColorModeContext)
    const styles = StyleSheet.create({
        layout: {
            backgroundColor: state?.colorMode === 'dark' ? COLORS.bgDarkPrimary : COLORS.bgLightPrimary,
            minHeight: '100%'
        }
    })

    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
}

export default AppBackgroundLayout