import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { COLORS, CONSTS } from '../../consts/consts'
import { ColorModeContext } from '../../navigation/Navigator'
type Props = {
    children: any,
    primary?: boolean,
    secondary?: boolean,
    fz?: number,
    fw?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",

}

const CustomText = ({ children, primary, secondary, fz, fw }: Props) => {
    const fontSize = fz ? CONSTS.px * fz : CONSTS.px * 14
    const colorModeState = useContext(ColorModeContext)
    const styles = StyleSheet.create({
        text: {
            color: colorModeState?.colorMode === 'light' && primary ? COLORS.textLightModePrimary : colorModeState?.colorMode === 'light' && secondary ? COLORS.textLightModeSecondary : colorModeState?.colorMode === 'dark' && primary ? COLORS.textDarkModePrimary : colorModeState?.colorMode === 'dark' && secondary ? COLORS.textDarkModeSecondary : 'red',
            fontSize,
            fontWeight: fw
        }
    })
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    )
}

export default CustomText