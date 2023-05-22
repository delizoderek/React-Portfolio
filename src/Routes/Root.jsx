import React from 'react'
import { Home, Experience } from "../Components/sections";
import ScrollingContainer from "../Components/containers/ScrollingContainer";

function Root() {
	return (
		<div className="App">
        <ScrollingContainer>
          <Home />
          <Experience />
        </ScrollingContainer>
      </div>
	)
}

export default Root