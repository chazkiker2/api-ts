import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreatePostDto } from "./dto/create-post.dto"
import { UpdatePostDto } from "./dto/update-post.dto"
import { Post, PostDocument } from "./schemas/post.schema"

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return this.postModel.create(createPostDto)
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec()
  }

  async findOne(id: number): Promise<Post> {
    return this.postModel.findById(id).exec()
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, updatePostDto).exec()
  }

  async remove(id: number): Promise<Post> {
    return this.postModel.findByIdAndDelete(id).exec()
  }
}
