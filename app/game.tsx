import { ScrollView, View, Text, Pressable, Vibration } from "react-native";
import { useState } from "react";
import { Box } from "@/components/box";
import { createMinesweeperBoard } from "@/utilities/create-board-values";
import { revealEmptyZone } from "../utilities/reveal-empty-zone";
import { useSettings } from "../utilities/useSettings";

export default function Game() {
  const { level, vibration } = useSettings();

  const config = {
    easy: { size: 10, bombs: 20 },
    medium: { size: 20, bombs: 40 },
    hard: { size: 30, bombs: 60 },
  };

  const { size, bombs } = config[level];

  const [board, setBoard] = useState(createMinesweeperBoard(size, bombs));
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePress = (y: number, x: number) => {
    const tempBoard = board.slice();
    const cell = tempBoard[y][x];

    if (cell.isBomb) {
      if (vibration) Vibration.vibrate(500);
      setIsGameOver(true);
      return;
    }

    if (!cell.isOpen && cell.value === 0) {
      setBoard(revealEmptyZone(tempBoard, y, x));
      return;
    }

    if (!cell.isOpen) {
      tempBoard[y][x] = { ...cell, isOpen: true };
      setBoard(tempBoard);
    }
  };

  const retry = () => {
    setBoard(createMinesweeperBoard(size, bombs));
    setIsGameOver(false);
  };

  return (
    <ScrollView horizontal>
      <ScrollView>
        {board.map((row, y) => (
          <View key={y} style={{ flexDirection: "row" }}>
            {row.map((cell, x) => (
              <Box
                key={`${y}-${x}`}
                value={cell}
                index1={y}
                index2={x}
                isGameOver={isGameOver}
                onPress={handlePress}
              />
            ))}
          </View>
        ))}

        {isGameOver && (
          <>
            <Text style={{ textAlign: "center", marginTop: 10 }}>💥 Game Over</Text>
            <Pressable onPress={retry}>
              <Text style={{ textAlign: "center" }}>Recommencer</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </ScrollView>
  );
}
