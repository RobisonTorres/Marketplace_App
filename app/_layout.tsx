import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "../src/store/store";

function RootLayoutNav() {

  const user = useSelector((state: any) => state.user.user); 
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

     if (!user && !inAuthGroup) {
      router.replace("/(auth)");
    } else if (user && inAuthGroup) {
       router.replace("/(tabs)");
    }
  }, [user, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!user ? (
         <Stack.Screen name="(auth)" />
      ) : (
         <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(stacks)" />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}