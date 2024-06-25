import React from 'react';
import {UserService} from "@/services/users-service/usersApi.service";

type Props = {params : {id:string}}
const UserPage = async ({params}: Props) => {
    let user = await UserService.getUserById(params.id)

    return (
        <div>
            user page {user.id}:
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserPage;