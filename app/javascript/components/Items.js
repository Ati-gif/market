import React from 'react'

const Items = (props) => {
    const { store, items } = props

    const renderItems = ()=>{
        return items.map( item=>{
            return (
                <div>
                    <p>{item.body}</p>
                    <a href={`/stores/${store.id}/items/${item.id}`}>show</a>
                    <a href={`/stores/${store.id}/items/${item.id}/edit`}>edit</a>
                    <a href={`/stores/${store.id}/items/${item.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Items page</h1>
            <p>Item for this Store is {store.id}</p>
            <a href={`/stores/${item.id}/items/new`}>new item</a>
            {renderItems()}
        </div>
    )
}

export default Items