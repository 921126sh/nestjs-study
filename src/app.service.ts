import { Injectable } from '@nestjs/common';

export type TgetUserInfo = {name: string, age: number};

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  postGoodBye(name: string): string {
    return `GoodBye ${name}`
  }

  getUserInfo(userInfo: TgetUserInfo) {
    return `NAME: ${userInfo.name} and AGE: ${userInfo.age}`;
  }
}
