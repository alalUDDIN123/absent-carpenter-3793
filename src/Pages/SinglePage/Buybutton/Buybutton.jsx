// import { useNavigate } from "react-router-dom"
import styles from "./Buybutton.module.css"

export const Buybutton=({data})=>{
    // const navigate=useNavigate()

    const handlego=()=>{
        // navigate("/cart")
       }
    return(
        <div>
            <button className={styles.buystyle} onClick={handlego}>Buy Now</button>
        </div>
    )
}