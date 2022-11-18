import React from 'react'
import { Image, StyleSheet, ImageProps } from 'react-native'
import { CONSTS } from '../../consts/consts'
interface IProps extends ImageProps {
    w?: number,
    h?: number
}
const CustomImage = (props: IProps) => {
    const styles = StyleSheet.create({
        img: {
            //@ts-ignore
            ...props.style,

            width: props.w ? CONSTS.px * props.w : 150,
            height: props.h ? CONSTS.px * props.h : 150,
        }
    })
    return (
        <Image {...props} style={styles.img} />

    )
}


export default CustomImage