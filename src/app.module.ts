import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ControllersModule } from './controllers/controllers.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [
    ControllersModule,
    UsecasesModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
