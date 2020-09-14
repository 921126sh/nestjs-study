import { LoginService } from "./login.service";
import { TestingModule, Test } from "@nestjs/testing";
describe("LoginService", () => {
    let loginService: LoginService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [LoginService],
        }).compile();

        loginService = app.get<LoginService>(LoginService);
    });
});
