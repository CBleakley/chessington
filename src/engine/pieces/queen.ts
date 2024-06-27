import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        return board.getDiagonalSquares(currentSquare).concat(board.getLateralSquares(currentSquare));
    }
}
