import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import userstyle from "./user.module.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'

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


import { addUser, DeleteUser, getUser } from '../../redux/AppReducer/action'

const InitialState = {
    fullName: "",
    email: "",
    password: "",
    avator: "",
    phone: +910000000,

}

function Users() {
    const [userData, setUserData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [state, setState] = useState(InitialState)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [term,setTerm]=useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }


    const handleSubmit = () => {
        if (state.fullName === "" || state.email === "" || state.avator === "" || state.password === "") {
            alert("Please Enter all field")
        } else {
            const payload = {
                fullname: state.fullName,
                email: state.email,
                password: state.password,
                phone: state.phone,
                avator: state.avator,
                isAdmin: false,
                cart: [],
                purchase: [],
                favorite: []
            }

            dispatch(addUser(payload))
            dispatch(getUser())
            onClose()
        }

    }

    const DeleteHandle = (id) => {
        if (window.confirm(`Are you sure want to delete this  user`)) {
            dispatch(DeleteUser(id));
            dispatch(getUser());
        }
    };

    

      
    useEffect(() => {
        fetch(`${process.env.REACT_APP_JSON_SERVER_URL}/users?q=${term}&_page=${page}&_limit=7`).then((res) => {
            return res.json();
        }).then((resp) => {
            setUserData(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [page,term])





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
                                        <input placeholder="Search user" 
                                        className={userstyle.input} 
                                        value={term}
                                        onChange={(e)=>setTerm(e.target.value)} />
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
                                                    name="fullName"
                                                    value={state.fullName}
                                                    onChange={handleChange} />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input placeholder='Enter email'
                                                    name="email"
                                                    value={state.email} onChange={handleChange} />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input placeholder='Enter password'
                                                    name="password"
                                                    value={state.password} onChange={handleChange} />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Phone</FormLabel>
                                                <Input placeholder='Enter phone'
                                                    name="phone"
                                                    value={state.phone} onChange={handleChange} />
                                            </FormControl>

                                            <FormControl mt={4} isRequired>
                                                <FormLabel>Avator URL</FormLabel>
                                                <Input placeholder='Put Url' type="url"
                                                    name="avator"
                                                    value={state.avator} onChange={handleChange} />
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
                                                        <td>{item.fullname}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>
                                                            <a className="btn btn-success">Edit</a>
                                                            <a className="btn btn-danger" onClick={() => DeleteHandle(item.id)} >Remove</a>
                                                            <a className="btn btn-primary" onClick={() => navigate(`/admin/users/${item.id}`)} >Details</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className={userstyle["pagination"]} >
                                        <button onClick={() => setPage(prev => prev - 1)} disabled={page == 1} >Prev</button>
                                        <button>{page}</button>
                                        <button onClick={() => setPage(prev => prev + 1)} >Next</button>
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

