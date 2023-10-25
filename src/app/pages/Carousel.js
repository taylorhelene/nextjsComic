'use client' 

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from './../page.module.css'

const Carousel = ()=>{
    const classImage="img-fluid opacity-100"
    const arr = [<img className={classImage} src='/images/hulk.png'/>,<img className={classImage} src='/images/starwars.png'/>,<img className={classImage} src='/images/naruto.png'/>]
    let [imgArr,setImage]=React.useState(0);

    setTimeout(()=>{
        if (imgArr<arr.length-1){setImage(imgArr+1)} else setImage(imgArr=0)
    },2000)
    return(
        <div className={styles.carousel}>
            {arr[imgArr]}
        </div>
    )
}
export default Carousel;