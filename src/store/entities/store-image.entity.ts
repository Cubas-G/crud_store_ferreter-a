import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store, } from './store.entity';

@Entity()
export class StoreImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  //Relacion de muchos a uno
  //Muchas imagenes pueden ser de un producto
  @ManyToOne(() => Store, (store) => store.images)
  store: Store;
}