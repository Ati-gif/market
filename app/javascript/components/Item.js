import React from 'react'

const ItemNew = (props) => {
  const { store } = props
            return (
                <div>
                    <p>{item.body}</p>
                    <a href={`/items/${topic.id}/items`}>show</a>
                    <a href={`/items/${topic.id}/items`}>edit</a>
                    <a href={`/items/${topic.id}/items`} data-method='delete'>delete</a>
                </div>
            )
        }
    return(
        <div>
            <h1>Item Page</h1>
            <p>Store is {store.name}</p>
            <p>Store id is {store.id}</p>

            <h1>Item Info</h1>
            <h1>{item.name}</h1>
            <p>{item.body}</p>
            {renderItems()}

            <a href={`/items/${item.id}/items`}>view item page (ie index)</a>
        </div>
    )

export default Item
