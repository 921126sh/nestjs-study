import { Controller, Get, Post, Body, Req } from "@nestjs/common";
import { AppService, TgetUserInfo } from "./app.service";
import { Request } from "express";

interface getGoodBye {
    name: string;
}

@Controller("/")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    /**
     * Body Data 받아오기
     * @Body Decorator를 이용한다.
     */
    @Post()
    postGoodBye(@Body() body: getGoodBye): string {
        return this.appService.postGoodBye(body.name);
    }

    // @Get("/:age")
    // getUserInfo(@Query("name") name: string, @Param("age") age: number): string {
    //   const param: TgetUserInfo = {
    //     name: name,
    //     age: age
    //   };
    //   return this.appService.getUserInfo(param);
    // }

    /**
     * Query Param 및 Path Data 받아오기
     * req의 Request 타입은 package.json의 @types/express를 추가 되어있기에 가능
     */

    @Get("/:age")
    getUserInfo(@Req() req: Request): string {
        const param: TgetUserInfo = {
            name: req.query["name"] as string,
            age: +req.params["age"],
        };
        return this.appService.getUserInfo(param);
    }
}
