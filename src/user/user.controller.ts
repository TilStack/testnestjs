import { Body, Controller ,Delete,Get, Param, Patch, Post, Put, UseGuards} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guards';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService,private readonly commentService:CommentService){}
    @Get("all")
    findAll(){
        return 'All users';
    }

    @Get(':id')
    findById(@Param("id") id:number){
        return this.userService.findOne(id)
    }

    @Post()
    createuser(@Body() usercreateDto:CreateUserDto){
        return this.userService.create(usercreateDto)
    }

    @UseGuards(JwtGuard)
    @Get(":id/comment")
    getUserComment(@Param('id') id:number){
        return this.commentService.findUserComments(id)
    }


    // @Put(":id")
    // update(@Param("id") id:number,@Body() updateUserDto:UpdateUserDto){
    //     return this.userService.update(id,updateUserDto)
    // }

    
}
