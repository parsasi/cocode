import { Controller , Post , Body, Get , Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/createCategoryDto'
import { CategoryService } from './category.service'
import { searchCategoryDto } from './dto/searchCategoryDto'

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

    @Get('/search')
    async getTermForSearch(@Query() searchCategoryDto : searchCategoryDto){
        return await this.categoryService.getCategoryForSearch(searchCategoryDto.text);
    }
}
