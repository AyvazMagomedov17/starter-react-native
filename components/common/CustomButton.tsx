import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import { CONSTS } from '../../consts/consts'

interface IProps extends TouchableOpacityProps {
    children: any,
    w?: number | string,
    h?: number | string,
    fz?: number,
    secondary?: boolean,
    color?: string,
    fw?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
    textColor?: string
}

function CustomButton({ children, fz, h, w, color, secondary, fw, textColor, ...props }: IProps) {
    const width = w ? typeof w === 'string' ? CONSTS.px * Number(w) : typeof w === 'number' ? w : CONSTS.px * 150 : CONSTS.px * 150
    const height = h ? typeof h === 'string' ? CONSTS.px * Number(h) : typeof h === 'number' ? h : CONSTS.px * 40 : CONSTS.px * 40
    const fontSize = fz ? CONSTS.px * fz : CONSTS.px * 14
    const styles = StyleSheet.create({
        button: {
            borderRadius: CONSTS.px * 10,
            width,
            height,
            backgroundColor: color ? color : secondary ? '#ef4444' : '#a21caf',
            justifyContent: 'center',
            alignItems: 'center'

        },
        text: {
            fontSize,
            fontWeight: fw,
            color: textColor ? textColor : '#fefce8'

        }
    })
    return (
        <TouchableOpacity {...props} activeOpacity={0.9}>
            <View style={styles.button}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton