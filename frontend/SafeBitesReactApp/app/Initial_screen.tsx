import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome!</Text>

        <Pressable
          onPress={() => router.push("/screening")}
        >
          <Text>next</Text>
        </Pressable>
    </View>
  );
}
