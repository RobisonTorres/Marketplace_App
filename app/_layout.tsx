import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store/slices/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  );
}