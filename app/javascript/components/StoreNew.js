import React from 'react'

const StoreNew = (props) => {
    return(
        <div>
            <h1>Add New Store Here</h1>
            <form action='/stores' method='post'>
              <input placeholder='name' name="store[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default StoreNew