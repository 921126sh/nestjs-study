import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { CPost } from "./CPost";
import { CUser } from "./CUser";
import { CCommentImage } from "./CCommentImage";

@Index("FK_c_comment_c_post", ["postId"], {})
@Index("FK_c_comment_c_user", ["userId"], {})
@Index("FK_c_comment_c_comment", ["sideId"], {})
@Entity("c_comment", { schema: "cheol_board" })
export class CComment {
    @PrimaryGeneratedColumn({ type: "bigint", name: "idx" })
    idx: string;

    @Column("bigint", { name: "postId" })
    postId: string;

    @Column("bigint", { name: "userId" })
    userId: string;

    @Column("text", { name: "contents", nullable: true })
    contents: string | null;

    @Column("enum", { name: "isDeleted", enum: ["Y", "N"], default: () => "'N'" })
    isDeleted: "Y" | "N";

    @Column("timestamp", {
        name: "registerDt",
        default: () => "CURRENT_TIMESTAMP",
    })
    registerDt: Date;

    @Column("bigint", { name: "sideId" })
    sideId: string;

    @Column("bigint", { name: "depth" })
    depth: string;

    @ManyToOne(
        () => CComment,
        cComment => cComment.cComments,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "sideId", referencedColumnName: "idx" }])
    side: CComment;

    @OneToMany(
        () => CComment,
        cComment => cComment.side,
    )
    cComments: CComment[];

    @ManyToOne(
        () => CPost,
        cPost => cPost.cComments,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "postId", referencedColumnName: "idx" }])
    post: CPost;

    @ManyToOne(
        () => CUser,
        cUser => cUser.cComments,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "userId", referencedColumnName: "idx" }])
    user: CUser;

    @OneToMany(
        () => CCommentImage,
        cCommentImage => cCommentImage.comment,
    )
    cCommentImages: CCommentImage[];
}
