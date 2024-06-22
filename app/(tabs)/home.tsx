import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const loggedIn = useSelector((state: any) => state.loggedIn);
  const user = useSelector((state: any) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!loggedIn) {
      // Redirect to login if not logged in
      router.push('/(auth)/login');
    }
  }, []);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              marginBottom: 20,
            }}>
            Welcome {user.username}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
