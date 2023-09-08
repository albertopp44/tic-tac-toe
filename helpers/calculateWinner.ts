//helper that will calculate the winner of the game
export function calculateWinner(squares: string[]): string | null {
    //case 1: 3 in a row
    //case 2: 3 in a column
    //case 3: 3 in a diagonal
    const lines = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    //loop through the lines array
    for (let i = 0; i < lines.length; i++) {
        //get the current line
        const [a, b, c] = lines[i];
        //check if the squares are not null and equal
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            //return the winner
            return squares[a];
        }
    }
    //check if there is a draw
    if (!squares.includes(null)) {
        return 'draw';
    }
    //return null if there is no winner
    

    return null;

    
}