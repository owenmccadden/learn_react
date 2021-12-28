import Row from "./Row"

const Table = ({ reqType, items }) => {

    if (reqType ===  'users') {

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <Row
                        key={item.id}
                        item={item}
                        reqType={reqType}
                    />
                ))}
                </tbody>
            </table>
        )
    }

    if (reqType ===  'posts') {

        return (
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Post ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <Row
                            key={item.id}
                            item={item}
                            reqType={reqType}
                        />
                    ))}
                </tbody>
            </table>
        )
    }

    if (reqType ===  'comments') {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Comment ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <Row
                            key={item.id}
                            item={item}
                            reqType={reqType}
                        />
                    ))}
                </tbody>
            </table>
        )
    }

    
}

export default Table