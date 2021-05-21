import React from 'react'

const ItemNew = (props) => {
    const { store } = props
    return(
        <div>
            <h1>New Item for: {store.name}</h1>
            <form action={`/stores/${store.id}/items`} method='post'>
                <p>body</p>
                <input name='item[body]' />
                <p>name</p>
                <input name='item[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default ItemNew
