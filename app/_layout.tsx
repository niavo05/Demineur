import { Stack } from "expo-router";
import { useEffect } from "react";
import { Audio } from "expo-av";
import { useSettings } from "../utilities/useSettings";

export default function RootLayout() {
  const volume = useSettings((s) => s.volume);

  useEffect(() => {
    let sound: Audio.Sound;

    const playMusic = async () => {
      sound = new Audio.Sound();
      await sound.loadAsync(require("../assets/song/La Marche Nuptiale (Wedding March) - musique de marriage - Mendelssohn(MP3_160K).mp3"));
      await sound.setIsLoopingAsync(true);
      await sound.setVolumeAsync(volume);
      await sound.playAsync();
    };

    playMusic();

    return () => {
      sound && sound.unloadAsync();
    };
  }, [volume]);

  return <Stack/>;
}
