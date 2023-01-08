import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("users")
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({ length: 128, unique: true })
  username: string;

  @Column()
  password: string;
}
