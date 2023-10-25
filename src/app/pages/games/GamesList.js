'use Client'
import Footer from "../Footer";
import Header from "../Header";
import {useQuery , gql } from "@apollo/client";
import Game from "./Game";
import React from "react";
import styles from "../../page.module.css"
import GameDescription from "./GameDescription";

const GAMES= gql`
 query Games{
    games {
        name
        date
        developer
        publisher
        available_on
        overview
        src
        extras
        video
      }
 }

`
const FEATUREDGAMES = gql`
query FeaturedGame($action: Sort, $limit: ID) {
    featuredGame(action: $action, limit: $limit) {
      name
      date
      developer
      publisher
      available_on
      overview
      src
      extras
      video
    }
  }
`

const action = `DESC`;
const limit = 3;

const GamesList=()=>{
    const{ loading , error, data} = useQuery(GAMES);
    const a = loading ? 'Loading...' : '';
    const b = error ? `Error! ${error.message}`: '';
    const [id,setId]=React.useState({});
    const [dialog, setDialog] =React.useState(false);
    const queryfeature = useQuery(FEATUREDGAMES, {variables:{action,limit}})

    const Open=(game)=>{
      setId(game)
      setDialog(true)
    }

    const Close=()=>{
        setDialog(false);
      }
     

    return(
        <>
        <Header/>
        {dialog ? <GameDescription close={Close}  name={id.name} date={id.date} developer={id.developer} publisher={id.publisher} available_on={id.available_on} overview={id.overview} src={id.src} extras={id.extras} video={id.video}   /> : 
        <>
        <div className='container'>
            <h2 className={styles.description}>Featured Games :  </h2>
        </div>

        <div className="container">
            {
            queryfeature.loading?'Loading...' : ''
            }
            {
            queryfeature.error?`Error! ${error.message}`: ''
            }
            <div className="row ">
                {queryfeature.data?.featuredGame.map((game, id)=>{
                    return(
                        <div className='col-sm-3 m-2' onClick={()=> {game ? Open(game) : console.log("h")}}>
                        <Game key={id} src={game.src} name={game.name} date={game.date} />
                        </div>
                        )
                })}
            </div>
        </div>

        <div className='container'>
            <h2 className={styles.description}>All Games :  </h2>
        </div>
        <div className="container">
        {a} {b}

            <div className="row ">
                {data?.games.map((game, id)=>{
                    return(
                        <div className='col-sm-3 m-2' onClick={()=> {game ? Open(game) : console.log("h")}}>
                        <Game key={id} src={game.src} name={game.name} date={game.date} />
                        </div>
                        )
                })}
            </div>
        </div>
        </>
        }
        <Footer/>
        </>
    )
}
export default GamesList;