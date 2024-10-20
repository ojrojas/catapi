import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ConfigModule } from '@nestjs/config';
import { CatService } from './core/services/cat/cat.service';
import { CatController } from './controllers/cat.controller';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    ConfigModule.forRoot()
  ],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}