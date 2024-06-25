import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    user: IUser
}
const UsersComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <hr/>
            <p>
                {user.id} - {user.name}
            </p>
            <button><Link href={`/users/${user.id}`}>Details</Link></button>
            <hr/>
        </div>
    );
};

export default UsersComponent;