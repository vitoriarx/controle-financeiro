import React from "react";
import Header from "./components/header";
import Resume from "./components/resume";
import GlobalStyle from "./styles/global"; 
import Form from "./components/form";

const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <Form />
            <GlobalStyle />
        </>
    )

};

export default App;
