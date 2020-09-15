import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { MainModule } from "../src/main.module";
import { getManager } from "typeorm";
import { CUser } from "../src/entities/CUser";

describe("Any Test", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [MainModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    
    it("User Test", async () => {
        const entityMaanager = getManager();
        const user = await entityMaanager.findOne(CUser, 1);
        console.log(user);
    });
});
