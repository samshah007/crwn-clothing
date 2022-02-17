import React from "react";

import { HomePageContainer } from "./homepage.style";

import Directory from "../../components/directory/directory.component";

const HomePage = () => {
    return(
        <HomePageContainer>
            <Directory></Directory>
        </HomePageContainer>
    )
}
export default HomePage;