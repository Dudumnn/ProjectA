import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../components/colors';

//icons
import Fontisto from '@expo/vector-icons/Fontisto';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

//navigate
import { useNavigation } from "@react-navigation/native";

//formik

SplashScreen.preventAutoHideAsync();

const Login = () => {
    const navigation = useNavigation();

    const handleSignup = () => {
        navigation.navigate("Signup");
    };

    const Aftervalidation = () => {
        navigation.navigate("Home");
    };

    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    //const [secureEntry, setSecureEntry] = useState(true);

    return (
        <View style={styles.container}>
            <Image source={require("../assets/icons/tea.png")} style={styles.logo}/>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.label}>Sign in to continue.</Text>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Fontisto name="email" size={30} color={colors.gray}/>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Enter email'
                        keyboardType='email-address'
                    >
                    </TextInput>
                </View>

                <View style={styles.inputContainer1}>
                    <EvilIcons name="lock" size={45} color={colors.gray}/>
                    <TextInput 
                        style={styles.textInput1} 
                        placeholder='Enter password'
                        //secureTextEntry={secureEntry}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            //setSecureEntry((prev) => !prev);
                        }}
                    >
                        <Ionicons name="eye-outline" size={25} color={colors.gray}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.forgotPass}>Forgot Password?</Text>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={Aftervalidation}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.continueText}>or continue with</Text>

                <TouchableOpacity style={styles.gButtonContainer}>
                    <Image 
                        source={require("../assets/icons/google.png")}
                        style={styles.googleImage}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.accText}>Don't have an account?</Text>
                    <TouchableOpacity 
                        onPress={handleSignup}
                    >
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    logo: {
        height: 170,
        width: 170,
        marginTop: 60,
        marginBottom: 10,
    },
    title: {
        fontSize: 50,
        fontFamily: 'Poppins-Bold',
        color: colors.main,
        marginBottom: -10,
    },
    label: {
        fontFamily: 'Poppins-Light',
        fontSize: 25,
        color: colors.primary,
    },
    formContainer: {
        width: '80%',
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.light,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginVertical: 20,
    },
    inputContainer1: {
        borderWidth: 2,
        borderColor: colors.light,
        paddingHorizontal: 9,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: -10,
        fontSize: 20,
        fontFamily: 'Poppins-Light',
        color: colors.primary,
    },
    textInput1: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        paddingBottom: -10,
        fontSize: 20,
        fontFamily: 'Poppins-Light',
        color: colors.primary,
    },
    forgotPass: {
        textAlign: 'right',
        color: colors.main,
        fontFamily: 'Poppins-SemiBold',
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: colors.light,
        width: '50%',
        alignSelf: 'center',
        marginTop: 10,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        color: colors.primary,
        fontFamily: 'Poppins-Regular',
    },
    gButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.light,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    googleImage: {
        height: 19,
        width: 19,
    },
    googleText: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: 'Poppins-SemiBold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 5,
    },
    accText: {
        color: colors.primary,
        fontFamily: 'Poppins-Regular',
    },
    signUpText: {
        color: colors.primary,
        fontFamily: 'Poppins-Bold',
    },
});