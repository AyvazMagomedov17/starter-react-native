import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/common/CustomButton';
import { CONSTS, height, width } from './consts/consts';
import Navigator from './navigation/Navigator';

export default function App() {
    return (
        <Navigator />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
