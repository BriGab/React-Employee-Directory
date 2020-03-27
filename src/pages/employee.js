import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from 'moment';


const Employee = () => {

    const [state, setState] = useState({
        search: '',
        employees: [],
        filtered: []
    })

    useEffect(() => {
        getProfileInfo();
        //call whatever we want to originally load on the page
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getProfileInfo = () => {
        API.getEmployees()
            // .then(res => setEmpProfile({...empProfile, first: res.data.results[0].name.first }));
            .then(res => {

                var mapped = res.data.results.map(emp => ({
                    img: emp.picture.thumbnail,
                    name: emp.name.first + " " + emp.name.last,
                    phone: emp.phone,
                    email: emp.email,
                    dob: emp.dob.date
                }))

                setState({
                    ...state,
                    employees: mapped,
                    filtered: mapped
                })
            })
            .catch(err => console.log(err));

    }

    const handleChange = (event) => {
        const { value } = event.target;

        setState({
            ...state,
            // filter: returns emp if evaluation is true
            // gather values off the employee object
            filtered: state.employees.filter(emp => {
                var allEmployeeValues = Object.values(emp)
                var cleanedEmployeeValues = allEmployeeValues.toString().toLowerCase()
                return cleanedEmployeeValues.includes(value.toLowerCase())
            })
        })
    }

    return (
        <>
            <div className="input-group mb-3">
                <input onChange={handleChange} name="search" type="text" className="form-control" placeholder="Start typing any employee information" aria-label="type in an employee's name" aria-describedby="basic-addon2"></input>

            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Profile Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.filtered.map((empProfile, i) => <tr key={i + "-employees"}>
                            <td><img src={empProfile.img} alt=""></img></td>
                            <td>{empProfile.name}</td>
                            <td>{empProfile.phone}</td>
                            <td>{empProfile.email}</td>
                            <td>{moment(empProfile.dob).format("MM/DD/YYYY")}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    )
}

export default Employee;


