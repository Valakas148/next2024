import {urls} from "@/config/urls";

const UserService = {
    getAllUsers: async ():Promise<IUser[]> => {
        let users = await fetch(urls.getAllUsers())
            .then(value => value.json())
        return users
    },
    getUserById: async (id: string | number):Promise<IUser> => {
        let user:IUser = await fetch(urls.getUserById(id))
            .then(value => value.json())
        return user
    }
}

export {
    UserService
}