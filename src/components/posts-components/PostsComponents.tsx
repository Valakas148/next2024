import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    post: IPosts
}
const PostsComponents:FC<IProps> = ({post}) => {
    return (
        <div>
            <hr/>
            <p>
                {post.id} - {post.title}
            </p>
            <button><Link href={`/posts/${post.id}`}>Details</Link></button>
            <hr/>
        </div>
    );
};

export default PostsComponents;