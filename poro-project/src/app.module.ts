import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PoroService } from './poro/poro.service';
import { PoroController } from './poro/poro.controller';
import { PoroModule } from './poro/poro.module';

@Module({
  imports: [AuthModule, PoroModule],
  providers: [PoroService],
  controllers: [PoroController],

})
export class AppModule {}
