import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let validMoves: Square[] = [];
        let currentSquare: Square = board.findPiece(this);

        if (this.player === Player.WHITE) {
            let possibleNextSquare: Square = new Square(currentSquare.row + 1, currentSquare.col);
            validMoves.push(possibleNextSquare);
        } else if (this.player === Player.BLACK) {
            let possibleNextSquare: Square = new Square(currentSquare.row - 1, currentSquare.col);
            validMoves.push(possibleNextSquare);
        }

        return validMoves;
    }
}
