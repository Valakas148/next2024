import {Metadata} from "next";
import React from "react";
import {CommentsService} from "@/services/comments-service/commentsApi.service";

/*export const metadata: Metadata = {
    title: 'Users metadata'
}*/

export const generateMetadata = async ({params}: {params: {id: string}}):Promise<Metadata> =>{
    let comment = await CommentsService.getCommentById(params.id)
    return {title: `Comment - ${comment.name}`}
}


type Props =  {children: React.ReactNode}

const CommentsLayout = ({children} :Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CommentsLayout;