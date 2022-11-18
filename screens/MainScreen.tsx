import React, { useContext, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Center from '../components/common/Center'
import CustomButton from '../components/common/CustomButton'
import CustomImage from '../components/common/CustomImage'
import CustomText from '../components/common/CustomText'
import AppBackgroundLayout from '../components/layouts/AppBackgroundLayout'
import { ColorModeContext } from '../navigation/Navigator'
type Props = {}

const MainScreen = (props: Props) => {
    const state = useContext(ColorModeContext)
    return (
        <AppBackgroundLayout>
            <Center>
                <View style={{ alignItems: 'center' }}>
                    <CustomText fz={16} primary>
                        {state?.colorMode}
                    </CustomText>
                    <CustomButton fz={16} onPress={state?.toggleColorMode} >Поменять цвет</CustomButton>
                    <CustomImage style={{ borderRadius: 20, resizeMode: 'center' }} w={200} h={200} source={require('../assets/icon.png')} />
                </View>

            </Center>
        </AppBackgroundLayout>



    )
}

export default MainScreen