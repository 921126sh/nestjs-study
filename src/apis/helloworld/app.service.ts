import { Injectable } from "@nestjs/common";

export type TgetUserInfo = { name: string; age: number };

// Service를 서비스로 등록하고, @Module을 통해 컨트롤러에 DI 주입을 한다.\

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }

    postGoodBye(name: string): string {
        return `GoodBye ${name}`;
    }

    getUserInfo(userInfo: TgetUserInfo) {
        return `NAME: ${userInfo.name} and AGE: ${userInfo.age}`;
    }
}
