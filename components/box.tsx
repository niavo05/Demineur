import { boxStyles } from "@/styles/box-styles";
import { FC } from "react";
import { Image, Pressable, Text, TextStyle } from "react-native";
import bombImage from "../assets/images/bomb.png";

interface BoxProps {
  value: { isBomb: boolean; isOpen: boolean; value: number };
  index1: number;
  index2: number;
  onPress: (index1: number, index2: number) => void;
  isGameOver: boolean;
}

const color: Record<number, string> = {
  0: "#00A2FF",
  1: "#00A2FF",
  2: "#00B300",
  3: "#FFD500",
  4: "#FF8C00",
  5: "#FF3B3B",
  6: "#B80000",
};

export const Box: FC<BoxProps> = (props) => {
  const { value, index1, index2, onPress, isGameOver } = props;

  const style = {
    ...boxStyles.squareBox,
    backgroundColor: !value.isOpen && !isGameOver ? "#1bb5fc" : "#858889",
  };

  const textStyle: TextStyle = {
    color: color[value.isBomb ? 1 : value.value],
    fontWeight: "bold",
  };

  return (
    <Pressable onPress={() => onPress(index1, index2)} style={style}>
      {!value.isBomb && (value.isOpen || isGameOver) && value.value !== 0 && (
        <Text style={textStyle}>{value.value}</Text>
      )}
      {isGameOver && value.isBomb && (
        <Image source={bombImage} style={boxStyles.squareBox} />
      )}
    </Pressable>
  );
};
