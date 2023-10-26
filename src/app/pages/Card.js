import styles from './../page.module.css';
import { gql  , useMutation} from "@apollo/client";

import React from "react";


 
const INCREMENT_VIEW = gql`
  # Increments a back-end views and gets its resulting value
  mutation Mutation($heroId: ID!) {
    hero( id: $heroId) {
      id
      name
      xman
      snapped
      power
      image
      views
    }
  }
`;

const views = +1;

const Card = (props) =>{
    
    const heroId=props.id;
    const [incrementViews] = useMutation(INCREMENT_VIEW, {
        variables: {  heroId: heroId },
        onCompleted: (data) => {
            console.log(data);
          },
      });
    
    return(
        <div className ="col-sm-4"> 
            <div className={styles.card}>
                <img src={props.src} className={styles.image}/>
                <p>{props.name}</p>
                <p> {props.snapped} </p>
                <p>{props.power}</p>
                <p  onClick={props.id ? incrementViews : console.log('g')}>⭐{props.views}</p>
            </div>
        </div>
    )
}

export default Card;