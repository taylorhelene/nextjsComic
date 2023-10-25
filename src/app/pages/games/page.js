'use client'
import { ApolloProvider } from "@apollo/client";

import styles from '../../page.module.css'
import client from '../../pages/apollo-client';
import GamesList from "./GamesList";

const Games=()=>{
    return(
        <main className={styles.main}>
             <ApolloProvider client={client}>
                <GamesList/>
             </ApolloProvider>
        </main>
    )

}

export default Games;