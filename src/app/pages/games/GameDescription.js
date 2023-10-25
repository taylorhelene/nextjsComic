import styles from '../../page.module.css'
const GameDescription =(props)=>{
    return(
        <> 
        <dialog className={styles.modal} open  >
            <h3 onClick={props.close} className='close float-end'> X </h3>
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-6"> 
                        <h2 >{props.name}</h2>
                        <p >Developer : {props.developer}</p>
                        <p >Publisher: {props.publisher}</p>
                        <p >Date Published : {props.date}</p>
                        <p >overview: {props.overview}</p>
                    </div>

                    <div className="col-sm-4">
                        <img src={props.src} className={styles.image}/>
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col-sm-8">
                        <p> Trailer</p>
                        <iframe src={props.video} className={styles.video}></iframe>
                    </div>
                    <div className="col-sm-4">
                    <p > Available On : {props.available_on}</p>
                    <p > Extras: {props.extras}</p>
                    <a href='https://www.marvel.com/games'> More Info </a>
                    </div>
                </div>
            </div>
           
            </dialog>
        </>
    )
}
export default GameDescription;