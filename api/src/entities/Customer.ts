import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("customers")
export class Customer {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  phone: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 14, unique: true })
  cpf: string;
}
