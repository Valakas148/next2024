import React from 'react';
import {PostsService} from "@/services/posts-service/postsApi.service";

type Props = {params : {id:string}}
const PostPage = async ({params}: Props) => {
    let post = await PostsService.getPostById(params.id)
    return (
        <div>
            post page {post.id}:
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostPage;