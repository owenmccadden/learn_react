const Row = ({ item, reqType }) => {
    if (reqType ==='users') {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{JSON.stringify(item.address)}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{JSON.stringify(item.company)}</td>
            </tr>
        )
    }
    if (reqType ==='posts') {
        return (
            <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>
        )
    }
    if (reqType ==='comments') {
        return (
            <tr>
                <td>{item.postId}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
            </tr>
        )
    }
}

export default Row