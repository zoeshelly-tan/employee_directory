import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import Search from "./components/Search"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import API from "./utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
    sortOrder: "asc",
    search: "",

  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res);
        this.setState({ employees: res.data.results })
        console.log(this.state.employees)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ search: event.target.value })
  }


  nameFilter = () => {
    console.log("working")
    if (this.state.sortOrder === "asc") {
      this.setState({
        employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0)),
        sortOrder: "dsc"
      })
    }
    else {
      this.setState({
        employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? -1 : ((b.name.first > a.name.first) ? 1 : 0)),
        sortOrder: "asc"
      })
    }
  }

  searchFilter = (employee) => {
    
   if (this.state.search === "") {
      return true
    }
    const fullName = employee.name.first + " " + employee.name.last;
    return fullName.toLowerCase().includes(this.state.search.toLowerCase())
    
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
        {/* <Wrapper> */}
        <div className="row">
          <Title>Employee List</Title>
        </div>
        <div className="row">
          <Search
            handleInputChange={this.handleInputChange}>
          </Search>
        </div>
        <div className="row">
          <table >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Photo</th>
                <th scope="col" onClick={this.nameFilter}>Name</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>

              {this.state.employees.filter(this.searchFilter).map((employee, index) => (
                <EmployeeList
                  id={employee.id.value}
                  key={index}
                  name={employee.name}

                  picture={employee.picture}
                  dob={employee.dob.date}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* </Wrapper> */}
      </div>
    );
  }
}




export default App;
