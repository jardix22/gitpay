import styled from 'styled-components'
import media from '../../styleguide/media'

export const MainTitle = styled.div`
  text-align: center;
  display: block;
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 5px solid black;
  width: 30%;

  margin-top: 40px;
  margin-left: auto;
  margin-bottom: 40px;
  margin-right: auto;

  ${props => props.left && `
    margin-right: 18%;
  `}

  ${media.phone`
    width: 60%;
    margin: 20px auto;

    ${props => props.left && 'margin-left: auto;'}
  `}
`

export const MainList = styled.div`
  text-align: left;
  margin-left: 20%;

  ${media.phone`
    margin-left: 0;
  `}
`

export const ResponsiveImage = styled.img`
  ${media.phone`
    width: 100%;
  `}
`

export const InfoList = styled.div`
  text-align: left;
  margin-left: 10%;

  ${media.phone`
    margin-left: 0;
  `}
`