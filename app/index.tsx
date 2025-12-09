import { Box } from "@/components/box";
import { createMinesweeperBoard } from "@/utilities/create-board-values";
import { revealEmptyZone } from "@/utilities/reveal-empty-zone";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { indexStyles } from "../styles/index-styles";

const boardSize = 20;
const bombCount = 40;

export default function Index() {
  const boardValue = createMinesweeperBoard(boardSize, bombCount);

  const [board, setBoard] = useState(boardValue);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePress = (index1: number, index2: number) => {
    const tempBoard = board.slice();
    const currentValue = tempBoard[index1][index2];

    if (currentValue.isBomb) {
      setIsGameOver(true);
      return;
    }

    if (!currentValue.isOpen && currentValue.value === 0) {
      const newBoard = revealEmptyZone(tempBoard, index1, index2);
      setBoard(newBoard);
      return;
    }

    if (!currentValue.isOpen) {
      tempBoard[index1][index2] = { ...currentValue, isOpen: true };
      setBoard(tempBoard);
    }
  };

  const retry = () => {
    setBoard(createMinesweeperBoard(boardSize, bombCount));
    setIsGameOver(false);
  };

  return (
    <View>
      {board.map((tab, index1) => (
        <View
          key={`view-horizontal-${index1}`}
          style={indexStyles.horizontalView}
        >
          {tab.map((value, index2) => (
            <Box
              isGameOver={isGameOver}
              index1={index1}
              index2={index2}
              onPress={handlePress}
              value={value}
              key={`box-${index2}`}
            />
          ))}
        </View>
      ))}
      {isGameOver && (
        <View style={indexStyles.textContainer}>
          <Text>Boom!!! Vous avez perdu</Text>
        </View>
      )}
      {isGameOver && (
        <Pressable onPress={retry} style={indexStyles.bouton}>
          <Text style={indexStyles.boutonText}>Recommencer</Text>
        </Pressable>
      )}
    </View>
  );
}
