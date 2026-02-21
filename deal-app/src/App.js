import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import io from 'socket.io-client';

const socket = io('https://tu-url-de-render.com');

const DealApp = () => {
  useEffect(() => {
    socket.on('push-notification', (data) => {
      Alert.alert(data.title, data.message);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEAL CONTROL CENTER</Text>
      <View style={styles.card}>
        <Text style={styles.status}>G-AGI: MONITOREANDO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#39FF14', fontSize: 28, fontWeight: '900', letterSpacing: 4 },
  card: { padding: 20, borderColor: '#39FF14', borderWidth: 1, borderRadius: 10, marginTop: 20 },
  status: { color: '#fff', fontSize: 12 }
});

export default DealApp;
