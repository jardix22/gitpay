import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import SubscribeFrom from 'react-mailchimp-subscribe';
import Divider from 'material-ui/Divider';
import styled from 'styled-components'

import { withStyles } from 'material-ui/styles'

import HowItWorksPeople from '../welcome/how-it-works-people';
import WhoSubscribes from '../welcome/who-subscribes';
import Workflow from '../welcome/workflow';
import HowItWorksCompany from '../welcome/how-it-works-company';
import WhichCompanies from '../welcome/which-companies';
import Consulting from '../welcome/consulting';
import formProps from '../form/form-props';

import mainStyles from '../styles/style';
import logoCompleteGray from '../../images/logo-complete-gray.png';

import { FooterContainer } from '../styles/style'
import media from '../../styleguide/media'

const styles = (theme) => mainStyles(theme);

const SubscribeFromWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${media.phone`
    & input {
      display: block;
      margin: 0 auto 1rem auto;
      width: 90%;
      text-align: center;
    }
  `}
`

const BaseFooter = styled.div`
  padding-top: 20px;
`

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.secBlock}>
        <FooterContainer>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={3}>
              <Typography type="subheading">
                <strong>Para freelancers</strong>
              </Typography>
              <List component="nav">
                <HowItWorksPeople classes={classes}/>
                <WhoSubscribes classes={classes}/>
                <Workflow classes={classes}/>
              </List>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography type="subheading">
                <strong>Para empresas</strong>
              </Typography>
              <List component="nav">
                <HowItWorksCompany classes={classes}/>
                <WhichCompanies classes={classes}/>
                <Consulting classes={classes}/>
              </List>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography type="subheading">
                <strong>Parceiros</strong>
              </Typography>
              <Button label="Jooble" href="https://br.jooble.org/vagas-de-emprego-desenvolvedor">Jooble</Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography type="subheading">
                Tá na dúvida aí? Não se preocupe, deixe seu e-mail e fique sabendo de novos desafios!
              </Typography>

              <SubscribeFromWrapper className="subscribe-form">
                <SubscribeFrom  {...formProps} />
              </SubscribeFromWrapper>

              <Typography type="caption">
                <a href="http://worknenjoy.com">worknenjoy, Inc.</a> <br />
                2035 Sunset Lake Road, Suite B-2 <br />
                Newark, DE 19702 - US
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.spacedTop}/>
          <BaseFooter>
            <img className={classes.img} src={logoCompleteGray} width="100"/>
          </BaseFooter>
        </FooterContainer>
    </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
