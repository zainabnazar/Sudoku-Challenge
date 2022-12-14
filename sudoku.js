

function sudoku(array) {
    if (array.length <= 0) {
        return { error: "Invalid input" }
    }
    let rows = [];
    let columns = [];
    let cross = [];
    for (let i = 0; i < 9; i++) {
        rows.push([]);
        columns.push([]);
        cross.push([]);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            let cell = array[i][j];
            if (rows[i].includes(cell)) {
                console.log(false);
                console.log('The duplication is in row:' + (i + 1) + ' coloumn:' + (j + 1));
                return false

            } else rows[i].push(cell);

            if (columns[j].includes(cell)) {
                console.log(false);
                console.log('The duplication is in row:' + (i + 1) + ' coloumn:' + (j + 1));
                return false;
            } else columns[j].push(cell);

            let crossIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

            if (cross[crossIndex].includes(cell)) {
                console.log(false);
                console.log('The duplication is in row:' + (i + 1) + ' coloumn:' + (j + 1));
                return false;
            } else cross[crossIndex].push(cell);

        }
    }
    console.log(true);
    return true;


}

sudoku([
    [8, 2, 9, 3, 6, 5, 1, 4, 7],
    [6, 4, 3, 7, 1, 8, 5, 1, 9],
    [7, 5, 1, 4, 9, 2, 6, 3, 8],
    [3, 1, 8, 5, 2, 7, 4, 9, 6],
    [5, 9, 6, 1, 4, 1, 7, 8, 2],
    [4, 7, 2, 9, 8, 6, 3, 1, 5],
    [9, 8, 4, 6, 5, 1, 2, 7, 3],
    [2, 6, 7, 8, 3, 4, 9, 5, 1],
    [9, 3, 5, 2, 7, 9, 8, 6, 4]
]);
sudoku([
    [5, 8, 6, 4, 3, 7, 1, 9, 2],
    [1, 9, 4, 5, 8, 2, 3, 6, 7],
    [7, 2, 3, 9, 6, 1, 4, 5, 8],
    [2, 4, 7, 1, 9, 8, 6, 3, 5],
    [8, 3, 9, 6, 2, 4, 7, 2, 1],
    [6, 5, 1, 7, 2, 3, 8, 4, 9],
    [9, 7, 5, 3, 1, 6, 7, 8, 4],
    [3, 1, 8, 2, 4, 5, 9, 7, 6],
    [4, 6, 2, 8, 7, 9, 5, 1, 3]
]);
sudoku([
    [1, 8, 3, 2, 7, 4, 6, 5, 9],
    [9, 7, 4, 5, 8, 6, 3, 2, 1],
    [2, 6, 5, 1, 9, 3, 7, 4, 8],
    [5, 9, 2, 8, 3, 1, 4, 6, 7],
    [8, 4, 6, 7, 2, 5, 9, 1, 3],
    [7, 3, 1, 4, 6, 9, 2, 8, 5],
    [3, 5, 9, 6, 4, 8, 1, 7, 2],
    [6, 1, 7, 3, 5, 2, 8, 9, 4],
    [4, 2, 8, 9, 1, 7, 5, 3, 6]
]);
module.exports = sudoku;