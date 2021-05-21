import React from 'react'

const ItemEdit = (props) => {
    const { store, item } = props
    return(
        <div>
            <h1>ItemEdit Page</h1>
            <form action={`/stores/${sub.id}/items/${item.id}`} method='post'>
                <input type='hidden' name='_method' value='patch'/>
                <p>body</p>
                <input defaultValue={item.body} name='item[body]' />
                <p>name</p>
                <input defaultValue={item.name} name='item[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default ItemEdit