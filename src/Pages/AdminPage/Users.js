import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import userstyle from "./user.module.css"


function Users() {

  const [usersData, setUsersData] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
      return res.json();
    }).then((resp) => {
      setUsersData(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          <LeftSide />

          {/* Right Side bar */}
          <div>
            {/* Top Bar */}
            <div className={userstyle['top-search']} >
              <div>
                <input placeholder="Search user" className={userstyle.input} />

              </div>
              <div>
                <button>Add User +</button>
              </div>

            </div> <br /> <br /> <br /> <br /> <br />

            {/* User table */}

            <div className={userstyle.table} >
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {usersData &&
                    usersData.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>user1</td>
                        <td>user1@gmail.com</td>
                        <td>Phone4564356394865</td>
                        <td>
                          <a  className="btn btn-success">Edit</a>
                          <a  className="btn btn-danger">Remove</a>
                          <a  className="btn btn-primary">Details</a>
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
    </>
  )
}

export default Users
