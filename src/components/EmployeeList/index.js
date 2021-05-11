import React from "react";
import "./style.css";

function EmployeeList(props) {
  return (
   
        <tr>
          <th scope="col">{props.id}</th>
          <td scope="col"><img src={props.picture.large} /></td>
          <td scope="col">{props.name.title} {props.name.first} {props.name.last}</td>
          <td scope="col">{props.dob}</td>
        </tr>
     



  );
}

export default EmployeeList;
