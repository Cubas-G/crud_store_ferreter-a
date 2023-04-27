import { Column, Entity, PrimaryGeneratedColumn,OneToMany  } from "typeorm";
import { StoreImage } from './store-image.entity';

@Entity()
export class Store {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text',})
    name: string;

    @Column({type: 'text',})
    marketsegment: string;
    
    @Column({type: 'text',})
    street: string;

    @Column({type: 'text',})
    customersegment: string;

    @Column()
    phonenumber: number;
    
    //Relacion de uno a muchos
  //Un producto puede tener muchas imagenes
  @OneToMany(() => StoreImage, (storeImage) => storeImage.store, {
    cascade: true,
  })
  images?: StoreImage[];
}