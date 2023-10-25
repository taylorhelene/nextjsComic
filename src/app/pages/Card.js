import styles from './../page.module.css';


const Card = (props) =>{
    return(
        <div className ="col-sm-4"> 
            <div className={styles.card}>
                <img src={props.src} className={styles.image}/>
                <p>{props.name}</p>
                <p> {props.snapped} </p>
                <p>{props.power}</p>
                <p>⭐{props.views}</p>
            </div>
        </div>
    )
}

export default Card;