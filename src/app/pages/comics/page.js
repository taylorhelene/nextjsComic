'use client'
import { ApolloProvider } from "@apollo/client";
import ComicList from "./ComicList";
import styles from '../../page.module.css'
import client from '../../pages/apollo-client';

const Comics=()=>{
    return(
        <main className={styles.main}>
             <ApolloProvider client={client}>
                <ComicList/>
             </ApolloProvider>
        </main>
    )

}

export default Comics;