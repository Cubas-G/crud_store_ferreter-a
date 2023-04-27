import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { StoreImage } from './entities/store-image.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Store, StoreImage])],
  controllers: [StoreController],
  providers: [StoreService]
})
export class StoreModule {}