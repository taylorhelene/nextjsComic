import styles from '../../page.module.css'
const ComicDescription =(props)=>{
    return(
        <> 
        <dialog className={styles.modal} open  >
            <h3 onClick={props.close} className='close float-end'> X </h3>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <span>
                        <img src={props.src} className={styles.image}/>
                        </span>
                        
                    </div>
                    <div className="col-sm-6"> 
                        <h2 >{props.name}</h2>
                        <p >Writer : {props.writer}</p>
                        <p >Editor : {props.editor}</p>
                        <p >Cover artist: {props.cover_artist}</p>
                    </div>
                    
                </div>
                <div className="row m-2">
                    <div className="col-sm-4">
                        <p >{props.rating}</p>
                        <p >Published: {props.date}</p>
                    </div>
                    <div className="col-sm-6">
                    <p > Price : {props.price}</p>
                    <p > Digital Copy: {props.digital}</p>
                    <a href={props.link}> Read</a>
                    </div>
                </div>
            </div>
           
            </dialog>
        </>
    )
}
export default ComicDescription;