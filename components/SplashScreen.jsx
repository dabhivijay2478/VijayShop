import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'white'
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/splash.json')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 200,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,

    },
    buttonContainer: {
        paddingTop: 20,
    },
});
