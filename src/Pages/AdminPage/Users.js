import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import userstyle from "./user.module.css"

function Users() {
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=7").then((res) => {
            return res.json();
        }).then((resp) => {
            setUserData(resp)
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
                    <div className={userstyle["main-userTable"]}>
                            <div className="card">

                                <div className={userstyle['top-search']} >
                                    <div>
                                        <input placeholder="Search user" className={userstyle.input} />

                                    </div>
                                    <div>
                                        <button>Add User +</button>
                                    </div>

                                </div>

                                <div className="card-body">

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

                                            {userData &&
                                                userData.map(item => (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>alal</td>
                                                        <td>alal@gmail.com</td>
                                                        <td>+91 43254359874385</td>
                                                        <td>
                                                            <a className="btn btn-success">Edit</a>
                                                            <a className="btn btn-danger">Remove</a>
                                                            <a className="btn btn-primary">Details</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                    <div className={userstyle["pagination"]} >
                                        <button>Prev</button>
                                        <button>1</button>
                                        <button>Next</button>
                                    </div>
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

