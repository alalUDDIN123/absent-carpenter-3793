import styles from "./Addbutton.module.css"

export const Addbutton=({data,addcart})=>{
    return(
        <div>
            <button  className={styles.addstyle} >Add Cart</button>
        </div>
    )
}

// onClick={()=>{addcart()}}