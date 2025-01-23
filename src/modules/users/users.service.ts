import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  getUserByID(userId: string) {
    return userId;
  }
}
