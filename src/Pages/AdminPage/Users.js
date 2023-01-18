import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import { Link, useNavigate } from 'react-router-dom';

function Users() {

  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
      navigate("/employee/detail/" + id);
  }
  const LoadEdit = (id) => {
      navigate("/employee/edit/" + id);
  }
  const Removefunction = (id) => {
      if (window.confirm('Do you want to remove?')) {
          fetch("https://jsonplaceholder.typicode.com/todos" + id, {
              method: "DELETE"
          }).then((res) => {
              alert('Removed successfully.')
              window.location.reload();
          }).catch((err) => {
              console.log(err.message)
          })
      }
  }




  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
          return res.json();
      }).then((resp) => {
          empdatachange(resp);
      }).catch((err) => {
          console.log(err.message);
      })
  }, [])

  // console.log(empdata);

  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
          <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>Users</td>
                                        <td>users@gmail.com</td>
                                        <td>+91 56564875</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Users
