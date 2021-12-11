import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PoroRepository } from './poro.repositiry';

@Injectable()
export class PoroService {
    constructor(
        @InjectRepository(PoroRepository)
        private poroRepository: PoroRepository
    ) {}
}
