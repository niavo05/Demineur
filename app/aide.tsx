import { View, Text } from "react-native";

export default function Aide() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>
        Le démineur consiste à révéler toutes les cases sans cliquer sur une bombe. 
        Les chiffres indiquent le nombre de bombes autour d’une case.
      </Text>
    </View>
  );
}
