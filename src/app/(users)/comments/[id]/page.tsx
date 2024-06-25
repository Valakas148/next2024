import React from 'react';
import {CommentsService} from "@/services/comments-service/commentsApi.service";

type Props = {params : {id:string}}
const CommentPage = async ({params}: Props) => {

    let comment = await CommentsService.getCommentById(params.id)
    return (
        <div>
            comment page {comment.id}:
            <p>{comment.name}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentPage;