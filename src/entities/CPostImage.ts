import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CPost } from "./CPost";

@Index("FK_c_post_image_c_post", ["postId"], {})
@Entity("c_post_image", { schema: "cheol_board" })
export class CPostImage {
  @PrimaryGeneratedColumn({ type: "bigint", name: "idx" })
  idx: string;

  @Column("bigint", { name: "postId" })
  postId: string;

  @Column("enum", { name: "type", enum: ["FILE", "URL"] })
  type: "FILE" | "URL";

  @Column("varchar", { name: "storedFilePath", length: 4096 })
  storedFilePath: string;

  @Column("tinyint", { name: "position", default: () => "'0'" })
  position: number;

  @ManyToOne(() => CPost, (cPost) => cPost.cPostImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "postId", referencedColumnName: "idx" }])
  post: CPost;
}
