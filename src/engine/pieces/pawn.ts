import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import player from "../player";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let validMoves: Square[] = [];
        let currentSquare: Square = board.findPiece(this);
        let possibleNextSquare: Square;
        let startingRow: number;
        let pieceDirection: number; // positive for moving up board, negative for moving down

        if(this.player === player.WHITE) {
            startingRow = 1;
            pieceDirection = 1;
        }
        else {
            startingRow = 6;
            pieceDirection = -1;
        }

        if (currentSquare.row == startingRow){
            possibleNextSquare = new Square(currentSquare.row + (2 * pieceDirection), currentSquare.col);
            validMoves.push(possibleNextSquare);
        }
        possibleNextSquare = new Square(currentSquare.row + (1 * pieceDirection), currentSquare.col);
        validMoves.push(possibleNextSquare);

        return validMoves;
    }
}
