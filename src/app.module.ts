import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [ControllersModule, UsecasesModule],
})
export class AppModule {}
