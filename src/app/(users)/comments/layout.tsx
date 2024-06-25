import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Comments metadata'
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