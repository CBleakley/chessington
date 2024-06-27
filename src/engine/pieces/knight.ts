import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let validMoves: Square[] = [];
        let currentSquare: Square = board.findPiece(this);
        let arrayOfDisplacements: number[][] = [    [2, 1], [2, -1], [-2, 1], [-2, -1],
                                                    [1, 2], [-1, 2], [1, -2], [-1, -2]  ];

        for (let i = 0; i < arrayOfDisplacements.length; i++) {
            validMoves.push(new Square(currentSquare.row + arrayOfDisplacements[i][0], currentSquare.col + arrayOfDisplacements[i][1]));
        }

        return validMoves;
    }
}
