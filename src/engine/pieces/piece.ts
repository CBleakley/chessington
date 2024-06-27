import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getLateralSquares(board: Board) {
        let currentSquare: Square = board.findPiece(this);
        let lateralSquares: Square[] = [];

        for(let i: number = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentSquare.col) lateralSquares.push(new Square(currentSquare.row, i));
            if (i !== currentSquare.row) lateralSquares.push(new Square(i, currentSquare.col));
        }

        return lateralSquares;
    }

    public getDiagonalSquares(board: Board) {
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

        return diagonalSquares.filter(square => board.isSquareOnBoard(square));
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
