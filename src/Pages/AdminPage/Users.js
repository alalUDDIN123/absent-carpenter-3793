import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import userstyle from "./user.module.css"
import { useNavigate } from "react-router-dom"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Button,
    Input
} from '@chakra-ui/react'
import axios from 'axios'

function Users() {
    const [userData, setUserData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const navigate = useNavigate()


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=7").then((res) => {
            return res.json();
        }).then((resp) => {
            setUserData(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const handleSubmit = () => { }

    const deleteUser = async (id) => {
        let res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(res)
    }

    const payload = {
        fullname: "",
        email: "",
        password: "",
        avtor: "",
        phone: "",
        cart: [],
        purchase: [],
        favorite: [],

    }



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
                                        <button onClick={onOpen}>Add User +</button>
                                    </div>
                                </div>


                                {/* Modal Box */}
                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Add New User</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>
                                            <FormControl isRequired>
                                                <FormLabel>Full Name</FormLabel>
                                                <Input ref={initialRef} placeholder='Enter full name'
                                                    value="alal" name="fullName" />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input placeholder='Enter email'
                                                    value="email" name="email" />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Phone</FormLabel>
                                                <Input placeholder='Enter phone'
                                                    value="phone" name="phone" />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Avator URL</FormLabel>
                                                <Input placeholder='Put Url' type="url"
                                                    value="vator" name="avator" />
                                            </FormControl>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
                                                Submit
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>


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
                                                        <td>{item.username}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.address.zipcode}</td>
                                                        <td>
                                                            <a className="btn btn-success">Edit</a>
                                                            <a className="btn btn-danger" onClick={() => deleteUser(item.id)} >Remove</a>
                                                            <a className="btn btn-primary" onClick={() => navigate(`/admin/users/${item.id}`)} >Details</a>
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