import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let validMoves: Square[] = [];
        let currentSquare: Square = board.findPiece(this);

        for(let i: number = 0; i < 8; i++) {
            if (i !== currentSquare.col) validMoves.push(new Square(currentSquare.row, i));
            if (i !== currentSquare.row) validMoves.push(new Square(i, currentSquare.col));
        }

        return validMoves;
    }
}
