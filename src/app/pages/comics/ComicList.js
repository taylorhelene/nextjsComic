'use Client'
import Footer from "../Footer";
import Header from "../Header";
import Comic from "./Comic";
import {useQuery , gql } from "@apollo/client";
import ComicDescription from "./ComicDescription";
import React, { useEffect } from "react";

const COMICS = gql`
query Comics {
    comics {
      name
      date
      rating
      writer
      cover_artist
      editor
      digital
      link
      price
      url
    }
  }
`
const ComicList=()=>{

    const{ loading , error, data} = useQuery(COMICS);
    const a = loading ? 'Loading...' : '';
    const b = error ? `Error! ${error.message}`: '';
    const [id,setId]=React.useState({});
    const [dialog, setDialog] =React.useState(false);
    const Open=(comic)=>{
      setId(comic)
      setDialog(true)

    }

    const Close=()=>{
      setDialog(false);
    }
   
    return(
        <>
        <Header/>
        {dialog ? <ComicDescription  close={Close} name={id.name} src={id.url} date={id.date} rating={id.rating} writer={id.writer} cover_artist={id.cover_artist} editor={id.editor} digital={id.digital} link={id.link} price={id.price}  /> :
        <div className="container">
            {a} {b}

            <div className="row ">

             {data?.comics.map((comic , id)=>{
                return (
                <div className='col-sm-3 m-2' onClick={()=> {comic ? Open(comic) : console.log("h")}}>
                <Comic key={id} src={comic.url} name={comic.name} price={comic.price} />
                </div>)
             })}
             </div>
        </div>
        }
        <Footer/>
        </>
    )

}

export default ComicList;