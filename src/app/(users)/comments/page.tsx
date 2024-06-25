import React from 'react';
import {CommentsService} from "@/services/comments-service/commentsApi.service";
import CommentsComponent from "@/components/comments-component/CommentsComponent";

const CommentsPage = async () => {
    let allComments = await CommentsService.getAllComments()

    return (
        <div>
            <p>Comments: </p>
            <div>
                {
                    allComments.map((comment: IComments) => (<div key={comment.id}><CommentsComponent comment={comment}/></div>))
                }
            </div>
        </div>
    );
};

export default CommentsPage;