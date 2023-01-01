import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require('../assets/logo_two.png')} />
            <Text style={styles.textMainContent}>PARTNER</Text>
            <Text>PARTNER COMPANION APP</Text>
            <Image style={styles.LogoOne} source={require('../assets/getty_images.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'Whitesmoke' },
    textMainContent: { fontSize: 42 },
    tinyLogo: { top: 66, left: 109, width: 270, height: 176 },
    LogoOne: { width: 400, height: 550 },
    logo: { width: 66, height: 58 },
});

export default Login