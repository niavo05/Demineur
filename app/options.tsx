import { View, Text, Pressable, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useSettings } from "../utilities/useSettings";

export default function Options() {
  const {
    tempVolume,
    tempVibration,
    tempLevel,
    setTempVolume,
    setTempVibration,
    setTempLevel,
    saveSettings,
  } = useSettings();

  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <Text>🔊 Volume</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={tempVolume}
        onValueChange={setTempVolume}
      />

      <Text>📳 Vibration</Text>
      <Switch value={tempVibration} onValueChange={setTempVibration} />

      <Text>🎯 Niveau</Text>
      <Picker selectedValue={tempLevel} onValueChange={setTempLevel}>
        <Picker.Item label="Facile" value="easy" />
        <Picker.Item label="Moyen" value="medium" />
        <Picker.Item label="Difficile" value="hard" />
      </Picker>

      <Pressable
        onPress={saveSettings}
        style={{ backgroundColor: "#1bb5fc", padding: 12, borderRadius: 8 }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Sauvegarder</Text>
      </Pressable>
    </View>
  );
}
