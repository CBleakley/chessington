import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let currentSquare: Square = board.findPiece(this);
        let diagonalSquares: Square[] = [];
        let currentRow = currentSquare.row;
        let currentCol = currentSquare.col;
        let displacement;

        for (let i = 0; i <8; i++){
            displacement = Math.abs(currentRow - i);
            if(displacement === 0) continue;
            diagonalSquares.push(new Square(i, currentCol - displacement));
            diagonalSquares.push(new Square(i, currentCol + displacement));
        }

        const validMoves = diagonalSquares.filter(square => board.isSquareOnBoard(square));

        return validMoves;
    }

}
