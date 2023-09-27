import React from 'react'
const ListGroup = (props) => { 
   // to make this flexible we have to make this 
  const { items, textPropety, valueProperty ,onitemSellect ,sellectedItem } = props 
    return (
      <ul className="list-group">
        {items.map((item) => (
           // <li key={item._id} className="list-group-item">{item.name}</li>  // for this implimentation we have to be these two property _id or name ->
            <li onClick={()=>onitemSellect(item)} key={item[valueProperty]} className={ item === sellectedItem ?"list-group-item active" :"list-group-item" }>{item[textPropety]}</li> // use [] for dynamic property doing this we can work with any kind of object 
        ))}
      </ul>
    );
}
 
ListGroup.defaultProps = {
  textPropety: "name",
  valueProperty:"_id"
};
export default ListGroup;