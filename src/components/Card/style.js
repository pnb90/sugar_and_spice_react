import styled from 'styled-components'
import { device } from '../device'

export const Container = styled.div`
  width: 100%;
  height: 40%;
  margin: 1.25em;
  padding: 0.25em;
  border-style: solid;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 33%;
  }

  @media ${device.laptop} {
    width: 20%;
  }
`

export const RecipeName = styled.h2`
  font-size: 1.25em;
  overflow: auto;
  text-align: center;
`