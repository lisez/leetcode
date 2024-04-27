/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grids => grids
  .reduce((amount, currLine, lineId) => amount + currLine
    .reduce((total, grid, gridId) => {
      const hasTop    = grids[lineId - 1] && grids[lineId - 1][gridId] === 1 ? 2 : 0;
      const hasLeft   = currLine[gridId - 1] === 1 ? 2 : 0;
      const perimeter = grid === 1 ? 4 - hasLeft - hasTop : 0;
      return total + perimeter;
    }, 0), 0);

