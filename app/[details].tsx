import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function Details() {

  const prod = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>{prod.id}</Text>
          <Text style={styles.subtitle}>Información extra</Text>
        </View>
        <View style={styles.dataSegment}>
          <Text>Nombre:</Text>
          <Text style={styles.data}>{prod.name}</Text>
        </View>
        <View style={styles.dataSegment}>
          <Text>Descripción:</Text>
          <Text style={styles.data}>{prod.description}</Text>
        </View>
        <View style={styles.dataSegment}>
          <Text>Logo:</Text>
          <Text style={styles.data}>{prod.logo}</Text>
        </View>
        <View style={styles.dataSegment}>
          <Text>Fecha de liberación:</Text>
          <Text style={styles.data}>{prod.date_release}</Text>
        </View>
        <View style={styles.dataSegment}>
          <Text>Fecha de revisión:</Text>
          <Text style={styles.data}>{prod.date_revision}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Editar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Eliminar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 30,
    justifyContent: 'space-between'
  },
  dataSegment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    marginHorizontal: 16
  },
  title: {
    fontSize: 35,
    marginTop: 32
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 64
  },
  data: {
    fontSize: 15,
    fontWeight: 'bold',
    maxWidth: 210,
    textAlign: "right"
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 16,
  }
})
