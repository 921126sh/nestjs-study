import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CUser } from "./CUser";

@Index("FK_h_login_time_c_user", ["userId"], {})
@Entity("h_login_time", { schema: "cheol_board" })
export class HLoginTime {
    @Column("bigint", { name: "userId" })
    userId: string;

    @Column("timestamp", { name: "loginDt", default: () => "CURRENT_TIMESTAMP" })
    loginDt: Date;

    @ManyToOne(
        () => CUser,
        cUser => cUser.hLoginTimes,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "userId", referencedColumnName: "idx" }])
    user: CUser;
}
