import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Login</Text>
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Passwod</Text>
        <TextInput style={styles.input} placeholder="Enter your password" />
      </View>
      <Button title="Login" style={{ marginTop: 44 }} onPress={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
