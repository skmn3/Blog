import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from '../utils/modules/boards.module';
import { typeORMConfig } from '../utils/typrorm.config';
import { AuthModule } from '../utils/modules/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
})
export class AppModule {}
