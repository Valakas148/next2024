import {Metadata} from "next";
import React from "react";
import {UserService} from "@/services/users-service/usersApi.service";

/*export const metadata: Metadata = {
    title: 'Users metadata'
}*/

export const generateMetadata = async ({params}: {params: {id: string}}):Promise<Metadata> =>{
    let user = await UserService.getUserById(params.id)
    return {title : user.name}
}

type Props =  {children: React.ReactNode}

const UsersLayout = ({children} :Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default UsersLayout;