import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let moveArr: Square[] = []; // Array of squares to move to
        let currSquare: Square = board.findPiece(this);

        if (this.player === Player.WHITE) {
            // White moves up, row incremented
            let nextSquare: Square = new Square(currSquare.row + 1, currSquare.col);
            moveArr.push(nextSquare);
        } else if (this.player === Player.BLACK) {
            // Black moves down, row decremented
            let nextSquare: Square = new Square(currSquare.row - 1, currSquare.col);
            moveArr.push(nextSquare);
        }

        return moveArr;
    }
}
