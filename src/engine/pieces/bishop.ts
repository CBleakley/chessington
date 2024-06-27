import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let diagonalSquares: Square[] = [];
        let startingSquare = board.findPiece(this);
        let currentRow= startingSquare.row;
        let currentCol= startingSquare.col;
        let pieceInPossibleSquare;

        for(let col = currentCol - 1, row = currentRow - 1; col >= 0 && row >= 0; col--, row--) {
            pieceInPossibleSquare = board.getPiece(new Square(row, col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            diagonalSquares.push(new Square(row, col));
        }

        for(let col = currentCol - 1, row = currentRow + 1; col >= 0 && row < GameSettings.BOARD_SIZE; col--, row++) {
            pieceInPossibleSquare = board.getPiece(new Square(row, col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            diagonalSquares.push(new Square(row, col));
        }

        for(let col = currentCol + 1, row = currentRow - 1; col < GameSettings.BOARD_SIZE && row >= 0; col++, row--) {
            pieceInPossibleSquare = board.getPiece(new Square(row, col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            diagonalSquares.push(new Square(row, col));
        }

        for(let col = currentCol + 1, row = currentRow + 1; col < GameSettings.BOARD_SIZE && row < GameSettings.BOARD_SIZE; col++, row++) {
            pieceInPossibleSquare = board.getPiece(new Square(row, col));
            if(pieceInPossibleSquare !== undefined) {
                break;
            }
            diagonalSquares.push(new Square(row, col));
        }

        return diagonalSquares;
    }

}
