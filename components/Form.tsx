import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    id: Yup.string()
        .required('Campo requerido')
        .min(3, 'Mínimo 3 caracteres')
        .max(10, 'Máximo 10 caracteres'),
    name: Yup.string()
        .required('Campo requerido')
        .min(3, 'Mínimo 5 caracteres')
        .max(50, 'Máximo 100 caracteres'),
    description: Yup.string()
        .required('Campo requerido')
        .min(3, 'Mínimo 10 caracteres')
        .max(100, 'Máximo 200 caracteres'),
    logo: Yup.string()
        .required('Campo requerido'),
    date_release: Yup.date()
        .required('Campo requerido')
        .min(new Date(), 'Fecha no puede ser menor a la actual'),
    date_revision: Yup.date()

});

export default function Form(props: any) {
    return (
        <Formik
            initialValues={{ id: '', name: '', description: '', logo: '', date_release: '', date_revision: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                props.sendData(values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, handleReset }) => (
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Formulario de Registro</Text>
                    <Text style={styles.label}>ID</Text>
                    <TextInput
                        onChangeText={handleChange('id')}
                        onBlur={handleBlur('id')}
                        value={values.id}
                        style={[
                            styles.input,
                            (errors.id && touched.id) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.id && touched.id && <Text style={styles.error}>{errors.id}</Text>}
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        style={[
                            styles.input,
                            (errors.name && touched.name) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}
                    <Text style={styles.label}>Descripción</Text>
                    <TextInput
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                        style={[
                            styles.input,
                            (errors.description && touched.description) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.description && touched.description && <Text style={styles.error}>{errors.description}</Text>}
                    <Text style={styles.label}>Logo</Text>
                    <TextInput
                        onChangeText={handleChange('logo')}
                        onBlur={handleBlur('logo')}
                        value={values.logo}
                        style={[
                            styles.input,
                            (errors.logo && touched.logo) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.logo && touched.logo && <Text style={styles.error}>{errors.logo}</Text>}
                    <Text style={styles.label}>Fecha Liberación</Text>
                    <TextInput
                        onChangeText={handleChange('date_release')}
                        onBlur={handleBlur('date_release')}
                        value={values.date_release}
                        style={[
                            styles.input,
                            (errors.date_release && touched.date_release) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.date_release && touched.date_release && <Text style={styles.error}>{errors.date_release}</Text>}
                    <Text style={styles.label}>Fecha Revisión</Text>
                    <TextInput
                        onChangeText={handleChange('date_revision')}
                        onBlur={handleBlur('date_revision')}
                        value={values.date_revision}
                        // editable={false}
                        style={[
                            styles.input,
                            (errors.date_revision && touched.date_revision) ? styles.errorInput : null
                        ]}
                    ></TextInput>
                    {errors.date_revision && touched.date_revision && <Text style={styles.error}>{errors.date_revision}</Text>}
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#ffdd00'}]} onPress={()=>handleSubmit()} >
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#e9ecf3', marginBottom: 32}]} onPress={()=>handleReset()} >
                        <Text>Reiniciar</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    input: {
        borderColor: '#bfbfbf',
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        borderRadius: 8,
    },
    error: {
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    },
    btn: {
        width: '100%',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8
    }
});