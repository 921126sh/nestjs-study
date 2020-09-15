import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { getConnection, getCustomRepository, getManager } from "typeorm";
import { CUser } from "../src/entities/CUser";
import { CUserRepository } from '../src/repository/CUserRepository';
import { conn } from '../src/main.module';

describe("Any Test", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [conn],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it.skip("User Save Test", async () => {

        const userRepositry = getCustomRepository(CUserRepository)
        const user = new CUser();

        user.email = "test@google.co.kr";
        user.pwd = "1111";
        user.nickname = "Test";

        userRepositry.save(user);
    });
    
    it("User Find One", async () => {
        const entityMaanager = getManager();
        const user = await entityMaanager.findOne(CUser, <CUser>{email: "test@google.co.kr"});
        console.log(new Date());
        console.log(user);


    });

    it("User Find One2", async () => {
        const entityMaanager = getManager();
        const user = await entityMaanager.findOne(CUser, <CUser>{email: "test@google.co.kr"});
        console.log(user);
    });    

    afterEach(async() => {
        const defaultConnection = getConnection('default')
        await defaultConnection.close()
    })
});
