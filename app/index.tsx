import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Page() {
  const loggedIn = useSelector((state: any) => state.loggedIn);
  const router = useRouter();
  useEffect(() => {
    if (!loggedIn) {
      // Redirect to login if not logged in
      router.push('/(auth)/login');
    }
    setTimeout(() => {
      router.push('/(tabs)/home');
    }, 3000);
  }, []);
  return <ActivityIndicator size="large" color="#0000ff" />;
}
