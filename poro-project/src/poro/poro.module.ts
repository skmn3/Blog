import { Module } from '@nestjs/common';
import { PoroController } from './poro.controller';
import { PoroService } from './poro.service';

@Module({
    imports: [],
    controllers: [PoroController],
    providers: [PoroService]
})

export class PoroModule {}
