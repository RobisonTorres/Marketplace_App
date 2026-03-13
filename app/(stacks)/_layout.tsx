import { Stack } from "expo-router";

export default function RootLayout() {
  return (
       <Stack>
        <Stack.Screen
          name="product_details"
          options={{ 
            headerTitle: "",
            }}
        />
      </Stack>
  );
}