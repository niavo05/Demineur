import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>💣 Démineur</Text>

      <Pressable onPress={() => router.push("/game")}>
        <Text style={{ fontSize: 20 }}>Nouveau jeu</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/game")}>
        <Text style={{ fontSize: 20 }}>Continuer le jeu</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/options")}>
        <Text style={{ fontSize: 20 }}>Options</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/aide")}>
        <Text style={{ fontSize: 20 }}>Aide</Text>
      </Pressable>
    </View>
  );
}
