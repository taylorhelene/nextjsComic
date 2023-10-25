import styles from '../../page.module.css'
const Comic=(props)=>{
    return(
        <div className =""> 
            <div className={styles.card}>
            <img src={props.src} className={styles.image}/>
            <p>{props.name}</p>
            <p> {props.price} </p>
            </div>
        </div>
    )

}

export default Comic;