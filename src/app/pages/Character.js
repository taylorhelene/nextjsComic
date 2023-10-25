import styles from './../page.module.css';


const Character = (props) =>{
    return(
        <div className ="col-sm-3 m-3"> 
            <div className={styles.card}>
                <img src={props.url} className={styles.image}/>
                <p> 🎇{props.superhero}</p>
                <p> 📖{props.publisher} </p>
                <p>{props.alter_ego}</p>
                <p>{props.first_appearance}</p>
                <p>{props.character}</p>
            </div>
        </div>
    )
}

export default Character;