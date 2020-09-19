import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import {  getConnection, getCustomRepository, getManager, QueryRunner } from "typeorm";
import { CUser } from "../src/entities/CUser";
import { CUserRepository } from '../src/repository/CUserRepository';
import { conn } from '../src/main.module';

describe("Any Test", () => {
    let app: INestApplication;
    let tracsaction: QueryRunner;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [conn],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        tracsaction = await getConnection("default").createQueryRunner();
        await tracsaction.startTransaction();
        
    });

    it("User Save Test", async () => {

        const userRepositry = getCustomRepository(CUserRepository)
        const user = new CUser();

        user.email = "test@google.co.kr";
        user.pwd = "1111";
        user.nickname = "Test";

        console.log("생성");
        console.log(await userRepositry.save(user));
    });
    
    it("User Find One", async () => {
        const entityMaanager = getManager();
        const user = await entityMaanager.findOne(CUser, <CUser>{email: "test@google.co.kr"});

        console.log("가져와라~");
        console.log(user);
    }); 

    afterAll(async() => {
        await tracsaction.rollbackTransaction();
        const defaultConnection = getConnection('default')
        await defaultConnection.close()
    })
});
