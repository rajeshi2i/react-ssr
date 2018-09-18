
import React from 'react';
import { Link, Route } from "react-router-dom";
import NestedComponent from "./NestedComponent";


const Nested = ({ match }) => {
  return (
    <div>
      {/*default message*/}
      <h3>Nested path Links</h3>
      {/*Nested Links*/}
      <Link to='/nested/1'>Path- 1</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/nested/2'>Path- 2</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/nested/3'>Path- 3</Link>
      <hr/>
      {/*Nested component rendering*/}
      <Route path='/nested/:path' component={NestedComponent}/>
    </div>
  )
};

export default Nested;

