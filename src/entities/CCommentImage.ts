import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CComment } from "./CComment";

@Index("FK__c_comment", ["commentId"], {})
@Entity("c_comment_image", { schema: "cheol_board" })
export class CCommentImage {
    @Column("bigint", { name: "commentId" })
    commentId: string;

    @Column("enum", { name: "TYPE", enum: ["FILE", "URL"] })
    type: "FILE" | "URL";

    @Column("varchar", { name: "storedFilePath", length: 4096 })
    storedFilePath: string;

    @Column("tinyint", { name: "position", default: () => "'0'" })
    position: number;

    @ManyToOne(
        () => CComment,
        cComment => cComment.cCommentImages,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    )
    @JoinColumn([{ name: "commentId", referencedColumnName: "idx" }])
    comment: CComment;
}
