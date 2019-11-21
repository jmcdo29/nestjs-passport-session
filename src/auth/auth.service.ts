import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async findOrCreateUser(user: any) {
    return user;
  }
}
