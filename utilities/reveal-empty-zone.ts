export const revealEmptyZone = (
  board: { isOpen: boolean; isBomb: boolean; value: number }[][],
  y: number,
  x: number
) => {
  const size = board.length;
  const stack = [[x, y]];
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

  while (stack.length) {
    const [cx, cy] = stack.pop()!;
    const cell = board[cy][cx];
    if (cell.isOpen || cell.isBomb) continue;
    board[cy][cx] = { ...cell, isOpen: true };
    if (cell.value !== 0) continue;
    dirs.forEach(([dx, dy]) => {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx >= 0 && ny >= 0 && nx < size && ny < size) {
        const n = board[ny][nx];
        if (!n.isOpen && !n.isBomb) stack.push([nx, ny]);
      }
    });
  }
  return board;
};
