import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CUser } from "./CUser";

@Index("FK_c_user_token_c_user", ["userId"], {})
@Entity("c_user_token", { schema: "cheol_board" })
export class CUserToken {
  @PrimaryGeneratedColumn({ type: "bigint", name: "idx" })
  idx: string;

  @Column("bigint", { name: "userId" })
  userId: string;

  @Column("varchar", { name: "token", length: 4096 })
  token: string;

  @Column("timestamp", {
    name: "legisterDt",
    default: () => "CURRENT_TIMESTAMP",
  })
  legisterDt: Date;

  @ManyToOne(() => CUser, (cUser) => cUser.cUserTokens, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "idx" }])
  user: CUser;
}
