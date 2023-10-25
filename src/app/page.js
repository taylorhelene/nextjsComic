"use client"

import React from "react";
import styles from './page.module.css'
import Body from './pages/page'
import { ApolloProvider } from "@apollo/client";
import client from './pages/apollo-client';

export default function Home() {
  return (
    
    <main className={styles.main}>
       <ApolloProvider client={client}>
        <Body/>
       </ApolloProvider>
    </main>
   
  )
}
