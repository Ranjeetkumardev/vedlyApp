import React from 'react'

// class Like extends Component { 
    
//     render() { 
//         let classes = "fa fa-heart";
//         if(!this.props.liked) classes += "-o" 
//         return <i className={classes} aria-hidden="true" onClick={this.props.onLiked} style={{cursor : "pointer"}} />;
//     }
// }
 
const Like = (props) => {
     {
       let classes = "fa fa-heart";
       if (!props.liked) classes += "-o";
       return (
         <i
           className={classes}
           aria-hidden="true"
           onClick={props.onLiked}
           style={{ cursor: "pointer" }}
         />
       );
     }
}
 
 
export default Like;