import React from 'react'
import { Title, TitleBar, StyledLink } from './style'

export default function Navbar() {
    return(
      <TitleBar>
          <Title> 
            <StyledLink href="/">
              Sugar and Spice! 
            </StyledLink>
          </Title> 
      </TitleBar>
    )
}