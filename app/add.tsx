import React from 'react';
import Form from '../components/Form';
import { View, StyleSheet } from 'react-native';
import { Product } from '@/models/product';
import { router } from 'expo-router';

export default function Add() {

    function sendData(data: Product) {
        fetch('http://10.0.2.2:3002/bp/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log('Data added'))
            .catch(error => console.error(error))
            .finally(()=>{
                router.navigate('/');
            })
        // console.log(data);
    }

    return (
        <View style={styles.container}>
            <Form sendData={sendData}></Form>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});