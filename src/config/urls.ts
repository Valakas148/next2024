const baseUrl = 'https://jsonplaceholder.typicode.com'

const urls = {
    getAllUsers:() => baseUrl + '/users',
    getUserById:(id: string | number) => baseUrl + '/users/' + id,
    getAllPosts: () => baseUrl + '/posts',
    getPostById:(id: string | number) => baseUrl + '/posts/' + id,
    getAllComments: () => baseUrl + '/comments',
    getCommentById:(id: string | number) => baseUrl + '/comments/' + id,

}

export {
    baseUrl,
    urls,
}