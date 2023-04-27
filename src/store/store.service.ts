import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto} from './dto/create-store.dto';
 import { Store } from './entities/store.entity';
// import { UpdateStoreDto } from './dto/update-store.dto';



@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRpsitory:Repository<Store>
  ){}

  async create(createstoretDto: CreateStoreDto) {
    const store = await this.storeRpsitory.create(createstoretDto)
    await this.storeRpsitory.save(store)
    return store;
  }

  findAll() {
    return this.storeRpsitory.find();
  }

  findOne(id: string) {
    return this.storeRpsitory.findOneBy({id});
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const findStore = await this.findOne(id);
    const updateStore = await this.storeRpsitory.merge(findStore, updateStoreDto)
    return this.storeRpsitory.save(updateStore);
  }

  async remove(id: string) {
    const store = await this.findOne(id)
    await this.storeRpsitory.remove(store)
    return "Store is removed successfully";
  }
}