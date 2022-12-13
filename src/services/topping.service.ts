import { Injectable } from '@nestjs/common';
import { toppingRepo } from '../repository/topping.repo';
import { topping } from '../schemas/topping.schema';

@Injectable()
export class toppingService {
    constructor(
        private readonly toppingRepo: toppingRepo
    ) { }

    async findAll(): Promise<topping[]> {
        return this.toppingRepo.findAll();
    }

    async findById(id): Promise<topping> {
        return this.toppingRepo.findById(id);
    }

    async create(data): Promise<topping> {
        data.createddate = new Date();
        return this.toppingRepo.create(data);
    }

    async readById(id): Promise<topping> {
        return await this.toppingRepo.findById(id);
    }

    async update(toppingId, data): Promise<topping> {
        return this.toppingRepo.update(toppingId, data);
    }

    async delete(toppingId): Promise<topping> {
        return this.toppingRepo.delete(toppingId);
    }
}