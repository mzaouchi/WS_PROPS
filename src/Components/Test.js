import PropTypes from 'prop-types';
// const Test=(props)=>{
    const Test=({name,pays,age,user,handleAlert,handleName,children,show})=>{
    // console.log(props)
    var {nameU,address} = user
    return(
        <div>
            {/* <h2>Test Component</h2>
            <h2>I am {props.name}</h2>
            <h2>I am {props.age}</h2>
            <ul>
                {
                  props.pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>

            <h2>The user is : {props.user.name}</h2>
            <h2>{props.user.name} is from {props.user.address.street}</h2> */}
            <h2>Test Component</h2>
            <h2>I am {name}</h2>
            <h2>I am {age}</h2>
            <ul>
                {
                  pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
         
            <h2>The user is : {nameU}</h2>
            <h2>{nameU} is from {address.street}</h2>
            <button onClick={handleAlert}>Hello</button>
            <button onClick={()=>handleName(name)}>Name</button>
      

            {
                show == true && children
            }
        </div>
    )
}

Test.defaultProps = {
    name : "Zeineb"
}

Test.propTypes = {
     name: PropTypes.string,
  }

export default Test