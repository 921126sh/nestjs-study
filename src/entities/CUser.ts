import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CComment } from "./CComment";
import { CPost } from "./CPost";
import { CUserToken } from "./CUserToken";
import { HLoginTime } from "./HLoginTime";

@Index("email", ["email"], { unique: true })
@Index("nickname", ["nickname"], { unique: true })
@Entity("c_user", { schema: "cheol_board" })
export class CUser {
  @PrimaryGeneratedColumn({ type: "bigint", name: "idx" })
  idx: string;

  @Column("varchar", { name: "email", unique: true, length: 50 })
  email: string;

  @Column("varchar", { name: "pwd", length: 4096 })
  pwd: string;

  @Column("varchar", { name: "nickname", unique: true, length: 10 })
  nickname: string;

  @Column("enum", {
    name: "isWithdrawal",
    enum: ["Y", "N"],
    default: () => "'N'",
  })
  isWithdrawal: "Y" | "N";

  @Column("timestamp", {
    name: "registerDt",
    default: () => "CURRENT_TIMESTAMP",
  })
  registerDt: Date;

  @Column("timestamp", { name: "withdrawalDt", nullable: true })
  withdrawalDt: Date | null;

  @OneToMany(() => CComment, (cComment) => cComment.user)
  cComments: CComment[];

  @OneToMany(() => CPost, (cPost) => cPost.user2)
  cPosts: CPost[];

  @OneToMany(() => CUserToken, (cUserToken) => cUserToken.user)
  cUserTokens: CUserToken[];

  @OneToMany(() => HLoginTime, (hLoginTime) => hLoginTime.user)
  hLoginTimes: HLoginTime[];
}
