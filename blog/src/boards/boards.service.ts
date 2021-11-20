import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v4 as uuid } from 'uuid';
import { CreateBoardDto } from '../boards/dto/create-board.dto';
@Injectable()
export class BoardsService {
    getBoard(): Board {
        throw new Error('Method not implemented.');
    }
    private boards: Board[] = [];
    
    getAllboards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }
}
