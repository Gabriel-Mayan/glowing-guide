import {
    Entity,
    BaseEntity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class UserType extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
        id: string;

    @Column("varchar", { length: 100, nullable: false, unique: true })
        name: string;

    @CreateDateColumn({ type: "timestamp" })
        createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
        updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp", nullable: true })
        deletedAt: Date;
};
