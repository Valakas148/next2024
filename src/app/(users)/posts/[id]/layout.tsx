import {Metadata} from "next";
import React from "react";
import {PostsService} from "@/services/posts-service/postsApi.service";

export const generateMetadata = async ({params}: {params: {id: string}}):Promise<Metadata> =>{
    let post = await PostsService.getPostById(params.id)
    return {title : `Post - ${post.title}`}
}

type Props =  {children: React.ReactNode}

const PostsLayout = ({children} :Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PostsLayout;