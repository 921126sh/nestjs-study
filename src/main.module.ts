import { Module } from "@nestjs/common";
import { AppModule } from "./apis/helloworld/app.module";
import { LoginModule } from "./apis/login/login.module";
import { TypeOrmModule } from "@nestjs/typeorm";

// typeorm-modelt-generator https://www.npmjs.com/package/typeorm-model-generator
// auto import ormconfig.json
export const conn = TypeOrmModule.forRoot({});

@Module({
    imports: [AppModule, LoginModule, conn],
})
export class MainModule {}
