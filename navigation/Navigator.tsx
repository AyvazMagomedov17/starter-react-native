import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import React, { useState } from 'react';
import { COLORS } from '../consts/consts';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export const ColorModeContext = React.createContext<null | { colorMode: 'light' | 'dark', toggleColorMode: () => void }>(null);

type Props = {}
const Drawer = createDrawerNavigator()
const Navigator = (props: Props) => {
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')
    const toggleColorMode = () => {
        setColorMode(mode => {
            if (mode === 'light') {
                return 'dark'
            } else {
                return 'light'
            }
        })
    }
    return (
        <NavigationContainer>
            <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
                <Drawer.Navigator screenOptions={{
                    drawerStyle: { backgroundColor: colorMode === 'light' ? COLORS.bgLightSecondary : COLORS.bgDarkPrimary },
                    drawerActiveBackgroundColor: colorMode === 'light' ? COLORS.bgLightPrimary : COLORS.bgDarkSecondary,
                    headerStyle: { backgroundColor: colorMode === 'light' ? COLORS.bgLightSecondary : COLORS.bgDarkSecondary },
                    headerTitleStyle: { color: colorMode === 'light' ? COLORS.textLightModePrimary : COLORS.textDarkModePrimary },
                    headerTintColor: colorMode === 'light' ? COLORS.textLightModePrimary : COLORS.textDarkModePrimary,
                    headerRight: () => {
                        const icon = <Ionicons style={{ marginRight: 10 }} name={colorMode === 'dark' ? 'sunny' : 'moon'} size={24} color={colorMode === 'light' ? "#52525b" : '#e7e5e4'} />
                        return <TouchableOpacity activeOpacity={0.6} onPress={toggleColorMode}>
                            {icon}
                        </TouchableOpacity>
                    },

                }}>
                    <Drawer.Screen name='Main' component={MainScreen} />
                </Drawer.Navigator>
            </ColorModeContext.Provider>
            <StatusBar style={colorMode === 'light' ? 'dark' : 'light'} />
        </NavigationContainer>
    )
}

export default Navigator