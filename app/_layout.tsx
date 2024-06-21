import { Slot, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.push('/(auth)/login');
  }, []);
  return <Slot />;
}
