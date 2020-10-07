import { Controller , Post , Body, Get } from '@nestjs/common';
import { CreateCategoryDto } from './dto/createCategoryDto'
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
    constructor(
        private categoryService : CategoryService
    ){}
    
    @Post('/create')
    async createCategory(@Body() createCategoryDto : CreateCategoryDto){
        this.categoryService.createCategory(createCategoryDto)
    }

    @Get('/')
    async getAllCategories(){
        return await this.categoryService.getAllCategories()
    }
}
