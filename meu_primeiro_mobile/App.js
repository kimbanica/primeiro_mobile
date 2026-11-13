
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviar() {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome.');
    } else {
      setMensagem('Bem-vindo(a), ' + nome + '!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meu Primeiro Mobile
      </Text>

      <Text style={styles.subtitulo}>
        Aula de Desenvolvimento Mobile
      </Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={enviar}
        accessibilityRole="button"
      >
        <Text style={styles.textoBotao}>
          Enviar
        </Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F5F8FC',
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#174A80',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#8B9AAA',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 14,
    marginBottom: 18,
  },
  botao: {
    backgroundColor: '#174A80',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#174A80',
  },
});
