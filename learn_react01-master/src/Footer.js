function Footer({ length }) {

    return (
        <footer>
            {length === 1 ? (
                <p>{length} List Item</p>
            ) : (
                <p>{length} List Items</p>
            )
            }
        </footer>
    )
}

export default Footer
