import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Posts metadata'
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