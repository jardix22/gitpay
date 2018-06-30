import styled from 'styled-components'
import media from '../../styleguide/media'

const styles = (theme) => ({
  appBarHeader: {
    color: theme.palette.primary
  },
  appBar: {
    height: '100%',
    widht: '100%'
  },
  root: {
    flexGrow: 1,
    marginTop: 0,
    overflowX: 'hidden'
  },
  icon: {
    marginTop: -4,
    marginRight: 5
  },
  button: {
    margin: theme.spacing.unit,
    padding: [theme.spacing.unit*2, theme.spacing.unit*4],
    color: 'white'
  },
  altButton: {
    margin: [theme.spacing.unit],
    padding: [theme.spacing.unit/2, theme.spacing.unit*6],
    color: 'white',
    fontSize: 12
  },
  mainBlock: {
    textAlign: 'center',
      padding: 8,
      color: theme.palette.text.primary
  },
  secBlock: {
    textAlign: 'center',
      padding: 8,
      backgroundColor: '#f1f0ea'
  },
  seclist: {
    textAlign: 'left',
      width: '100%'
  },
  listIconTop: {
    alignItems: 'flex-start'
  },
  spacedTop: {
    marginTop: 20
  },
  defaultCenterBlock: {
    textAlign: 'center',
    padding: 10,
    color: theme.palette.text.primary
  },
  logoSimple: {
    textAlign: 'left',
    overflow: 'hidden',
    paddingTop: 20
  },
  tagline: {
    fontSize: 45,
    color: 'black'
  }
})

export const MainDivider = styled.div`
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

    ${props => props.left && `margin-left: auto;`}
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
export const FooterContainer = styled.div`
  text-align: left;
  padding: 80px;
  padding-top: 40px;

  ${media.phone`
    text-align: center;
    padding: 25px 10px 5px 10px;

    a {
      text-align: center;
    }
  `}
`

export default styles;
