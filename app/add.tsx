import React from 'react';
import Form from '../components/Form';
import { ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { Product } from '@/models/product';
import { router } from 'expo-router';

export default function Add() {

    function sendData(data: Product) {
        fetch(`http://10.0.2.2:3002/bp/products/verification/${data.id}`)
            .then(res => res.json())
            .then(json => {
                if (Boolean(json)) {
                    Alert.alert('ID ya existe');
                } else {
                    fetch('http://10.0.2.2:3002/bp/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => console.log('Data added'))
                        .catch(error => console.error(error))
                        .finally(() => {
                            router.navigate('/');
                            Alert.alert('Registro creado');

                        })
                    // // console.log(data);
                }
            })
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Formulario de Registro</Text>
            <Form sendData={sendData}></Form>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 16,
        marginLeft: 16
    },
});