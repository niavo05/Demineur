export const createMinesweeperBoard = (size: number, bombs: number) => {
  const total = size * size;
  const positions = [...Array(total)].map((_, i) => i);
  const bombPositions = [...positions]
    .sort(() => Math.random() - 0.5)
    .slice(0, bombs);

  const board = [...Array(size)].map((_, y) =>
    [...Array(size)].map((_, x) => ({
      isOpen: false,
      isBomb: bombPositions.includes(y * size + x),
      value: 0,
    }))
  );

  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  return board.map((row, y) =>
    row.map((cell, x) => {
      if (cell.isBomb) return cell;
      const value = dirs.reduce((acc, [dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        const inside = nx >= 0 && ny >= 0 && nx < size && ny < size;
        return inside && board[ny][nx].isBomb ? acc + 1 : acc;
      }, 0);
      return { ...cell, value };
    })
  );
};
