import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DealApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEAL APP SOBERANA</Text>
      <Text style={styles.status}>Estado G-AGI: Activo</Text>
      <Button title="Analizar RWA" onPress={() => alert('G-AGI: Iniciando Escaneo...')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#39FF14', fontSize: 24, fontWeight: 'bold' },
  status: { color: '#D4AF37', marginVertical: 20 }
});

export default DealApp;
