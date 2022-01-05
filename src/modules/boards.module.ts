import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './user.module';
import { BoardRepository } from '../repositories/board.repository';
import { BoardsController } from '../controllers/boards.controller';
import { BoardsService } from '../services/boards.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
