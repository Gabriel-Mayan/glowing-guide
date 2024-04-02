import {
    Entity,
    BaseEntity,
    Column,
    OneToOne,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Image } from "@modules/image/image.entity";
import { UserType } from "@modules/user_type/user_type.entity";

@Entity()
export class Establishment extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
        id: string;

    @Column("varchar", { length: 100, nullable: false })
        name: string;

    @CreateDateColumn({ type: "timestamp" })
        createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
        updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp", nullable: true })
        deletedAt: Date;

    @OneToOne(() => Image)
    @JoinColumn()
        image: Image;

    @ManyToOne(() => UserType, { nullable: false, eager: true })
    @JoinColumn()
        userType: UserType;
};
