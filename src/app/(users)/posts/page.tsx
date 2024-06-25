import React from 'react';
import {PostsService} from "@/services/posts-service/postsApi.service";
import PostsComponents from "@/components/posts-components/PostsComponents";

const PostsPage = async () => {
    let allPosts = await PostsService.getAllPosts()

    return (
        <div>
            <p>Posts: </p>
            <div>
                {
                    allPosts.map((post: IPosts) => (<div key={post.id}><PostsComponents post={post}/></div>))
                }
            </div>
        </div>
    );
};

export default PostsPage;