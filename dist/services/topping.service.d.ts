import { toppingRepo } from '../repository/topping.repo';
import { topping } from '../schemas/topping.schema';
export declare class toppingService {
    private readonly toppingRepo;
    constructor(toppingRepo: toppingRepo);
    findAll(): Promise<topping[]>;
    findById(id: any): Promise<topping>;
    create(data: any): Promise<topping>;
    readById(id: any): Promise<topping>;
    update(toppingId: any, data: any): Promise<topping>;
    delete(toppingId: any): Promise<topping>;
}
