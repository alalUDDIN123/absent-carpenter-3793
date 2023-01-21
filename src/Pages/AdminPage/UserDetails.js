import React from 'react'
import style from "./admin.module.css"
import LeftSide from './LeftSide'
import addformStyle from "./addProduct.module.css"
// import { useParams } from 'react-router-dom'
function UserDetails() {
    // const { id } = useParams()
    // const [user, setUser] = useState({});


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         setUser(resp)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])
    // console.log(user)

    return (
        <>
            <div className={style["main-wrapper"]} >
                <div className={style["container-wrapper"]}>

                    {/* Left Side Bar Component */}
                    <LeftSide />

                    {/* Right Side bar */}
                    <div>
                        <div className={addformStyle["main-cont"]} >
                            <div>
                                <img src="https://avatars.githubusercontent.com/u/103638279?s=120&v=4" alt="Avator" />
                                <div className={addformStyle["user-creden"]} >
                                    <h2>Email  :  <span>test@gmail.com</span> </h2>
                                    <h2>Phone  :  <span>test123@</span></h2>
                                    <h2>Password  :  <span>test123@</span></h2>

                                </div>
                            </div>


                            <div className={addformStyle.preview} >
                                <h1>User Info</h1>
                                <h2>Name : <span>Test</span> </h2>
                                <h2>Father name : <span>Abdul jabbar</span> </h2>
                                <h2>Mother name : <span>Malika jannath</span> </h2>
                                <h2>Profession :  <span>Lawyer</span> </h2>
                                <h2>Countery :  <span>India</span> </h2>
                                <h2>State : <span>Assam</span></h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails
