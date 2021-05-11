import axios from "axios";

const employeesAPI = {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=500");
  }
}

export default employeesAPI;