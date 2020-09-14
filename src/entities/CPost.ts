import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CComment } from "./CComment";
import { CUser } from "./CUser";
import { CPostImage } from "./CPostImage";

@Index("FK__c_user", ["user"], {})
@Entity("c_post", { schema: "cheol_board" })
export class CPost {
    @Column("bigint", { primary: true, name: "idx", default: () => "'0'" })
    idx: string;

    @Column("bigint", { name: "user", default: () => "'0'" })
    user: string;

    @Column("varchar", { name: "title", length: 1024 })
    title: string;

    @Column("text", { name: "contents", nullable: true })
    contents: string | null;

    @Column("enum", { name: "isDeleted", enum: ["Y", "N"], default: () => "'N'" })
    isDeleted: "Y" | "N";

    @Column("timestamp", {
        name: "registerDt",
        default: () => "CURRENT_TIMESTAMP",
    })
    registerDt: Date;

    @OneToMany(
        () => CComment,
        cComment => cComment.post,
    )
    cComments: CComment[];

    @ManyToOne(
        () => CUser,
        cUser => cUser.cPosts,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "user", referencedColumnName: "idx" }])
    user2: CUser;

    @OneToMany(
        () => CPostImage,
        cPostImage => cPostImage.post,
    )
    cPostImages: CPostImage[];
}
