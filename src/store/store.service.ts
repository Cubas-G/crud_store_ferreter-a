import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto} from './dto/create-store.dto';
 import { Store } from './entities/store.entity';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreImage } from './entities/store-image.entity';




@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRpsitory:Repository<Store>,
    
    @InjectRepository(StoreImage)
    private readonly imageRepository: Repository<StoreImage>,
  ){}
  
  //Comentado por feo

  // async create(createStoreDto: CreateStoreDto) {
  //   const store = await this.storeRpsitory.create(createStoreDto)
  //   await this.storeRpsitory.save(store)
  //   return store;
  // }
  
  //Agregado de ultimo
  
  async create(storesDto: CreateStoreDto) {
    const { images = [], ...detalleStores } = storesDto;
    const store = await this.storeRpsitory.create({
      ...detalleStores,
      images: images.map((image) =>
        this.imageRepository.create({ url: image }),
      ),
    });
    await this.storeRpsitory.save(store);
    return store;
  }

  findAll() {
    return this.storeRpsitory.find();
  }

  findOne(id: string) {
    return this.storeRpsitory.findOneBy({id});
  }
  //Comentado tambien por feo
  
  // async update(id: string, updateStoreDto: UpdateStoreDto) {
  //   const findStore = await this.findOne(id);
  //   const updateStore = await this.storeRpsitory.merge(findStore, updateStoreDto)
  //   return this.storeRpsitory.save(updateStore);
  // }
  
  async update(id: string, cambios: CreateStoreDto) {
    const store = await this.storeRpsitory.preload({
      id: id,
      ...cambios,
      images: [],
    });
    await this.storeRpsitory.save(store);
    return store;
  }

  async remove(id: string) {
    const store = await this.findOne(id)
    await this.storeRpsitory.remove(store)
    return "Store is removed successfully";
  }
}