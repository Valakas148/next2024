import {urls} from "@/config/urls";

const CommentsService = {
    getAllComments: async ():Promise<IComments[]> => {
        let comments = await fetch(urls.getAllComments())
            .then(value => value.json())
        return comments
    },
    getCommentById: async (id: string | number):Promise<IComments> => {
        let comment:IComments = await fetch(urls.getCommentById(id))
            .then(value => value.json())
        return comment
    }
}

export {
    CommentsService
}