import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controllers/controllers.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [ControllersModule, UsecasesModule, ConfigModule.forRoot()],
})
export class AppModule {}
