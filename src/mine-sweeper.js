const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    
    let mineArr = []
    const rows = matrix.length;
    const cols = matrix[0].length;

    for ( let i = 0; i < rows; i++) {
        const row = [];
        for ( let j  = 0; j < cols; j++) {
            let counter = 0;
            if (i > 0 && matrix[i-1][j]) counter++
            if (i < rows-1 && matrix[i+1][j]) counter++
            if ( j > 0 && matrix[i][j-1] ) counter++
            if ( j < cols - 1 && matrix[i][j+1] ) counter++
            if (i > 0 && j > 0 && matrix[i-1][j-1]) counter++
            if (i > 0 && j < cols - 1 && matrix[i-1][j+1]) counter++
            if (i < rows - 1 && j > 0 && matrix[i+1][j-1]) counter++
            if (i < rows - 1 && j < cols - 1 && matrix[i+1][j+1]) counter++

            row.push(counter)
        }
        mineArr.push(row)
    }
    return mineArr
}

module.exports = {
  minesweeper
};
