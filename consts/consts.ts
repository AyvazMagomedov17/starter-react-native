import { Dimensions } from "react-native"



export const width = (w: number) => {
    const width = Dimensions.get('window').width * w
    return width
}
export const height = (h: number) => {
    const height = Dimensions.get('window').height * h
    return height
}
export const CONSTS = {
    px: height(0.0014714285714286)
}



export const COLORS = {
    bgDarkPrimary: '#18181b',
    bgDarkSecondary: '#27272a',
    bgLightPrimary: "#f4f4f5",
    bgLightSecondary: '#fafafa',
    textDarkModePrimary: '#e7e5e4',
    textDarkModeSecondary: '#a1a1aa',
    textLightModePrimary: '#18181b',
    textLightModeSecondary: '#52525b'
}