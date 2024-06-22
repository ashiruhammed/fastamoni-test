import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '~/http';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  username: Yup.string().required('Username is required'),
});

export default function Login() {
  const router = useRouter();
  const loggedIn = useSelector((state: any) => state.loggedIn);
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);

  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      router.push('/(tabs)/home');
      dispatch({ type: 'ADD_USER', payload: data });
    },
    onError: (error) => {
      console.log('Error registering user', error);
    },
  });

  if (loggedIn) {
    router.push('/(tabs)/home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Login</Text>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: '', password: '', username: '' }}
        onSubmit={(values) => {
          mutate(values);
        }}>
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
          <View style={{ marginTop: 40, gap: 24 }}>
            <View>
              <Text>Username</Text>
              <TextInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={styles.input}
                placeholder="Username"
              />
              {errors.username && touched.username ? (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  {errors.username}
                </Text>
              ) : null}
            </View>
            <View>
              <Text>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  {errors.email}
                </Text>
              ) : null}
            </View>
            <View>
              <Text>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  {errors.password}
                </Text>
              ) : null}
            </View>

            <Button onPress={handleSubmit as any} title="Submit" />
            <View>
              <Button
                onPress={() => router.push('/(auth)/register')}
                title="Register"
                style={{
                  backgroundColor: '#43fa',
                  padding: 10,
                }}
              />
            </View>
          </View>
        )}
      </Formik>
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
