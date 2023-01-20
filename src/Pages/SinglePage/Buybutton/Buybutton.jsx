import styles from "./Buybutton.module.css"

export const Buybutton=({data})=>{
    return(
        <div>
            <button className={styles.buystyle}>Buy Now</button>
        </div>
    )
}