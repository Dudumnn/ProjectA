import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { colors } from '../components/colors';

//formik
import { Formik } from 'formik';

//icons
import Fontisto from '@expo/vector-icons/Fontisto';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

const Home = () => {

    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
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

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            
            validate={values => {
                const errors ={};
                if (!values.email) {
                    errors.email = 'Email Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                } else if (!values.password) {
                    errors.password = 'Password Required';
                }
                return errors;
            }}

            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, touched }) => (
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Fontisto name="email" size={30} color={colors.gray}/>
                        <TextInput 
                            name='email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='example@gmail.com'
                            keyboardType='email-address'

                            style={styles.textInput}
                        />
                    </View>
                    <Text>{errors.email && touched.email && errors.email}</Text>
                    <TextInput 
                        name='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder='********'
                        secureTextEntry={true}

                        style={styles.inputContainer}
                    />
                    <Text>{errors.password && touched.password && errors.password}</Text>
                    <Button 
                        onPress={handleSubmit} 
                        title="Submit"
                    />
                </View>
            )}
        </Formik>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        paddingTop: 40,
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
    textInput: {
        textAlignVertical: 'bottom',
        marginLeft: 5,
        fontSize: 18,
        color: colors.primary,
    },
});