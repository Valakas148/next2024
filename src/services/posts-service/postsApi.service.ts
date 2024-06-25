import {urls} from "@/config/urls";

const PostsService = {
    getAllPosts: async ():Promise<IPosts[]> => {
        let posts = await fetch(urls.getAllPosts())
            .then(value => value.json())
        return posts
    },
    getPostById: async (id: string | number):Promise<IPosts> => {
        let post:IPosts = await fetch(urls.getPostById(id))
            .then(value => value.json())
        return post
    }
}

export {
    PostsService
}