import { useState } from 'react';
import ItemList from './ItemList';

function Content({items, handleCheck, handleDelete}) {
    return (
        <>
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default Content
