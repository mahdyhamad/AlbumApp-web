import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import "./App.css";
import AlbumList from "./components/AlbumList";
import Base from "./components/base";
import Footer from "./components/footer";

function App() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql/",
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Base />
        <AlbumList />
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
