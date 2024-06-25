interface IUser{
    id: number,
    name: string,
    username: string,
    email: string
}
interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface IPosts{
    userId: number,
    id: number,
    title: string,
    body: string
}