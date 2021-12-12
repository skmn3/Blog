import { Controller } from '@nestjs/common';
import { PoroService } from './poro.service';

@Controller('poro')
export class PoroController {

    constructor(
        private porosService: PoroService
    ) {}

    
    
}
