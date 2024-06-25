import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    comment: IComments
}
const CommentsComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <hr/>
            <p>
                {comment.id} - {comment.name}
            </p>
            <button><Link href={`/comments/${comment.id}`}>Details</Link></button>
            <hr/>
        </div>
    );
};

export default CommentsComponent;