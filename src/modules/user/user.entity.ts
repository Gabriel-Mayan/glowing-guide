import {
    Entity,
    BaseEntity,
    Column,
    OneToOne,
    OneToMany,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Image } from "@modules/image/image.entity";
import { Phone } from "@modules/phone/phone.entity";
import { Address } from "@modules/address/address.entity";
import { UserType } from "@modules/user_type/user_type.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
        id: string;

    @Column("varchar", { length: 100, nullable: false })
        name?: string;

    @OneToMany(() => Address, (address) => address.name)
    @JoinColumn()
        address: Address;

    @OneToOne(() => Phone)
    @JoinColumn()
        phone: Phone;

    @OneToOne(() => Image)
    @JoinColumn()
        image: Image;

    @ManyToOne(() => UserType, { nullable: false, eager: true })
    @JoinColumn()
        userType: UserType;

    @CreateDateColumn({ type: "timestamp" })
        createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
        updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp", nullable: true })
        deletedAt: Date;
};
