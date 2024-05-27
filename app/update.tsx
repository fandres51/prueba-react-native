import React from 'react';
import Form from '../components/Form';
import { ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { Product } from '@/models/product';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function Update() {

    const prod: Product = useLocalSearchParams() as unknown as Product;

    function sendData(data: Product) {
        fetch(`http://10.0.2.2:3002/bp/products/${prod.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name":data.name,
                "description":data.description,
                "logo":data.logo,
                "date_release":data.date_release,
                "date_revision":data.date_revision
            })
        })
            .then(res => console.log('Data updated'))
            .catch(error => console.error(error))
            .finally(() => {
                router.navigate('/');
                Alert.alert('Producto actualizado');
            })
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Formulario de Actualización</Text>
            <Form 
                sendData={sendData}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                logo={prod.logo}
                date_release={String(prod.date_release)}
                date_revision={String(prod.date_revision)}
            ></Form>
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