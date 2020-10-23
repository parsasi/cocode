import { Module  , forwardRef} from '@nestjs/common';
import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tutor } from './tutor.entity'
import { UserModule } from '../user/user.module'
import { CategoryModule } from '../category/category.module'
import { TutorSearchHelperService } from './helpers/tutor-search.helper.service'


@Module({
  controllers: [TutorController],
  providers : [TutorSearchHelperService , TutorService],
  imports : [TypeOrmModule.forFeature([Tutor]) , forwardRef(() => UserModule) , CategoryModule],
  exports: [TutorService]
})
export class TutorModule {}