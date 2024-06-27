import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let lateralSquares: Square[] = [];
        let currentSquare = board.findPiece(this);
        let pieceInPossibleSquare;

        for(let i = currentSquare.col - 1; i >= 0; i--) {
            pieceInPossibleSquare = board.getPiece(new Square(currentSquare.row, i));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            lateralSquares.push(new Square(currentSquare.row, i));
        }
        for(let i = currentSquare.col + 1; i < GameSettings.BOARD_SIZE; i++) {
            pieceInPossibleSquare = board.getPiece(new Square(currentSquare.row, i));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            lateralSquares.push(new Square(currentSquare.row, i));
        }
        for(let i = currentSquare.row - 1; i >= 0; i--) {
            pieceInPossibleSquare = board.getPiece(new Square(i, currentSquare.col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            lateralSquares.push(new Square(i, currentSquare.col));
        }
        for(let i = currentSquare.row + 1; i < GameSettings.BOARD_SIZE; i++) {
            pieceInPossibleSquare = board.getPiece(new Square(i, currentSquare.col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            lateralSquares.push(new Square(i, currentSquare.col));
        }

        return lateralSquares;

    }
}
