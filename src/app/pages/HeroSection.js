import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import styles from '../page.module.css'

const HeroSection =()=>{
    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <h1 className={styles.description}> Comic Enthusiasts Assemble </h1>
                <p className={styles.code}> DC and Marvel Comics for fans. We rate our favourite superheroes and get a to see to some of our favourite characters and comic books .</p>
            </div>
            <div className="col-sm-4 bg-image " style={{borderRadius: "5%",
                                                        borderColor:"violet",
                                                        borderWidth:"2%",
                                                        marginLeft: "10%",
                                                        backgroundColor:"InactiveCaptionText",
                                                        }}>
                <Carousel/>
               
            </div>
        </div>
        </div>
    )
}
export default HeroSection;