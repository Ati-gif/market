import React from 'react'

const Stores = (props) => {
    const { stores } = props
    
  
    const renderStores = () => {
        return stores.map( store => {
            return (
                <div>
                    <h1>{store.name}</h1>
                    <a href={`/stores/${store.id}`}>show store</a> 
                    <a href={`/stores/${store.id}/edit`}>edit</a>
                    <a href={`/stores/${store.id}`} data-method='delete'>delete</a>
                    <a href={`/stores/${store.id}/items`}>item</a>
                </div>
            )
        })
    } 
   
    return(
        <div>
            <h1>Hokage Market</h1>
            <a href='/stores/new'>new store</a>
            {renderStores()}
        </div>
    )
}
export default Stores
