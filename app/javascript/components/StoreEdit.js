import React from 'react'

const StoreEdit = (props) => {
    const {name, id} = props.store
    return(
        <div>
            <h1>Edit Store Here</h1>
            <form action={`/stores/${id}`} method='post'>
                <input type='hidden' name='_method' value='patch' />
              <input defaultValue={name} placeholder='name' name="store[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default StoreEdit 
