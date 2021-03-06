import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './models/users/users.module';
import { UsersController } from './models/users/users.controller';
import { UsersService} from './models/users/users.service';


@Module({
  imports: [UsersModule],
  controllers: [UsersController,AppController],
  providers: [UsersService,AppService,],
})
export class AppModule {}
