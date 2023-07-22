import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    findUserComments(userId:number){
        return 'this is the comment of the user '+ userId
    }
}
 