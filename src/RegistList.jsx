import React from 'react'
import "./RegistList.css"


const RegistList = (props) => {
    return (
        <div>
            <h2>Registration Data</h2>
          {props.registration.map((el)=>{
                return(
                    <div key={el.id} className='studentList'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Login</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Selected Course</th>
                                    <th>Message</th>
                                </tr>
                                <tr>
                                    <td>{el.login}</td>
                                    <td>{el.fname}</td>
                                    <td>{el.lname}</td>
                                    <td>{el.email}</td>
                                    <td>{el.selected}</td>
                                    <td>{el.message}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
          })} 
        </div>
    )
}

export default RegistList