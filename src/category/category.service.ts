import { Injectable } from '@nestjs/common'
import { Category } from './category.entity'
import { InsertResult, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository : Repository<Category>
    ){}

    async createCategory(category) : Promise<InsertResult> {
        return await this.categoryRepository.insert(category)
    }

    async getAllCategories() : Promise<Category[]>{
        return await this.categoryRepository.find()
    }
}
