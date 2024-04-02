import { FindOptionsWhere } from "typeorm";

import { Image } from "@modules/image/image.entity";
import AppDataSource from "@/src/shared/services/typeorm.service";

const repository = AppDataSource.getRepository(Image);

export const RecoveryPasswordRepository = {
    findImage(query: FindOptionsWhere<any>): Promise<any | null> {
        return repository.findOneBy(query);
    },
};
