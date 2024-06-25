import React from 'react';
import UsersComponent from "@/components/users-copmonent/UsersComponent";
import {UserService} from "@/services/users-service/usersApi.service";

const UsersPage = async () => {
    let allUsers = await UserService.getAllUsers()


    return (
        <div>
            <p>Users: </p>
            <div>
            {
                allUsers.map((user: IUser) => (<div key={user.id}><UsersComponent user={user}/> </div>))
            }
            </div>
        </div>
    );
};

export default UsersPage;