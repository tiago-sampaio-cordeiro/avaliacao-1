import {View, Text, StyleSheet } from 'react-native'
import {useRouter} from "expo-router";
import InputField from "@/src/components/inputField";
import ImageButton from "@/src/components/imageButton";
import loginIcon from "../../assets/images/homer.png";
import { useState } from "react";


export  default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

  const handleLogin = () => {
    if ((username === 'Admin' && password === 'teste123') ||
        (username === 'fulano' && password === '123456')){
      setError('');
      router.push("/listagem");
    } else {
      setError('Usuário ou senha incorretos');
    }
  };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputField
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
          {error ? <Text style={styles.error}>{error}</Text> : null}
            <ImageButton
                source={loginIcon}
                onPress={handleLogin}
                width={100}
                height={100}
            />
        </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
