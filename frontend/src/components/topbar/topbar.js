import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import { withRouter } from "react-router-dom"
import ReactPlaceholder from 'react-placeholder'
import { RoundShape } from 'react-placeholder/lib/placeholders'

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

import Tooltip from 'material-ui/Tooltip'
import { FormControl, FormHelperText } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import HomeIcon from 'material-ui-icons/Home'
import PlusIcon from 'material-ui-icons/Queue'
import UserIcon from 'material-ui-icons/AccountCircle'
import MoreIcon from 'material-ui-icons/MoreHoriz'
import { withStyles } from 'material-ui/styles'

import styled, { css }  from 'styled-components'
import media from '../../styleguide/media'

import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import nameInitials from 'name-initials'
import isGithubUrl from 'is-github-url'

import mainStyles from '../styles/style'

const classes = (theme) => mainStyles(theme)

import LoginButton from '../session/login-button'


const logo = require('../../images/gitpay-logo.png')
const logoGithub = require('../../images/github-logo.png')

const Bar = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: black;
  margin: 0;

  ${media.phone`
    padding: 10px 15px;
  `}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Side =  styled.div`
  display: flex;
  width: 32%;
`

const LeftSide = styled(Side)``

const RightSide = styled(Side)`
  justify-content: flex-end;
`

const Logo = styled.img`
  width: 140px;

  ${media.phone`width: 100px;`}
`

const StyledButton = styled(Button)`
  min-width: 40px !important;
  font-size: 12;
  cursor: pointer;

  ${props => props.padding === 'left' && `
    margin-left: 10px !important;
  `}
`

const LabelButton = styled.span`
  margin-right: 10px;

  ${media.phone`
    margin-right: 0;
    display: none;
  `}
`

const StyledAvatar = styled(Avatar)`
  margin-left: 20px;
  cursor: pointer;

  ${media.phone`margin-left: 15px;`}
`

const HiddenMobile = styled.div`
  ${media.phone`display: none;`}
`

const styles = {
  formControl: {
    width: '100%'
  }
};

class TopBar extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      task: {
        url: {
          error: false,
          value: null
        }
      },
      createTaskDialog: false,
      signUserDialog: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignIn = this.handleSignOut.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleClickDialogCreateTask = this.handleClickDialogCreateTask.bind(this);
    this.handleClickDialogCreateTaskClose = this.handleClickDialogCreateTaskClose.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClickDialogSignUser = this.handleClickDialogSignUser.bind(this);
    this.handleSignUserDialogClose = this.handleSignUserDialogClose.bind(this);
    this.handleGithubLink = this.handleGithubLink.bind(this);

  }

  componentDidMount() {
    this.props.isLogged();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.isLogged();
    }
  }

  handleChange(event, checked) {
    this.setState({ auth: checked });
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  handleClickDialogCreateTask() {
    this.setState({ createTaskDialog: true });
  }

  handleClickDialogCreateTaskClose() {
    this.setState({ createTaskDialog: false });
  }

  handleClickDialogSignUser(e) {
    this.setState(({signUserDialog: true}));
  }

  handleGithubLink() {
    window.location.href = 'https://github.com/worknenjoy/gitpay'
  }

  onChange(e) {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const task = this.state.task;
    task[e.target.name].value = e.target.value;
    task[e.target.name].error = false;
    this.setState(task);
  }

  validURL(url) {
    return isGithubUrl(url);
  }

  handleCreateTask(e) {
    const url = this.state.task.url.value;
    if(this.validURL(url)) {
      this.props.createTask({
        url: this.state.task.url.value,
        provider: 'github',
        userId: this.props.user ? this.props.user.id : null
      }, this.props.history);
      this.setState({createTaskDialog: false});
    } else {
      this.setState({
        task: {
          url: {
            error: true
          }
        }
      });
    }
  }

  handleSignIn() {

  }

  handleSignUserDialogClose() {
    this.setState({signUserDialog: false});
  }

  handleProfile() {
    window.location.assign("/#/profile");
  }

  handleSignOut() {
    this.props.history.replace({pathname: '/'});
    this.props.signOut();
  }

  render() {
    const { task, completed, user } = this.props;
    const isLoggedIn = this.props.logged;
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);

    const avatarPlaceholder = (
      <div className='avatar-placeholder'>
        <RoundShape color='#ccc' style={{width: 40, height: 40, margin: 10}}/>
      </div>
    );

    return (
      <Bar>
        <Container>
          <LeftSide>
            <StyledButton size="small" href="/"><HomeIcon color="primary"/></StyledButton>
          </LeftSide>

          <Logo src={ logo } />

          <RightSide>
              <StyledButton onClick={ this.handleClickDialogCreateTask } variant="raised" size="small" color="primary">
                <LabelButton>Criar tarefa</LabelButton><PlusIcon />
              </StyledButton>

              {!isLoggedIn && (
                <div>
                  <StyledButton onClick={this.handleClickDialogSignUser} variant="raised" size="small" color="secondary" padding='left' >
                    <LabelButton>Entrar</LabelButton><UserIcon />
                  </StyledButton>

                  <Dialog
                    open={this.state.signUserDialog}
                    onClose={this.handleSignUserDialogClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Entre para a comunidade do Gitpay</DialogTitle>
                    <DialogContent>
                      <div className={classes.mainBlock}>
                        <LoginButton referer={this.props.location} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              { (isLoggedIn && user.picture_url) &&
                <StyledAvatar
                  alt={user.username}
                  src={user.picture_url}
                  onClick={this.handleMenu}
                />
              }

              { (isLoggedIn && !user.picture_url) &&
                <StyledAvatar src=""
                  alt={user.username}
                  onClick={this.handleMenu}
                >
                  { nameInitials(user.username) }
                </StyledAvatar>
              }

              { isLoggedIn &&
                <HiddenMobile>
                  <Tooltip id="tooltip-github" title="Acessar nosso github" placement="bottom">
                    <StyledAvatar
                      alt={user.username}
                      src={logoGithub}
                      onClick={this.handleGithubLink}
                    />
                  </Tooltip>
                </HiddenMobile>
              }

              <form onSubmit={this.handleCreateTask} action="POST">
                <Dialog
                  open={this.state.createTaskDialog}
                  onClose={this.handleClickDialogCreateTaskClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Inserir uma nova tarefa</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      <Typography type="subheading" gutterBottom>
                        Para inserir uma nova tarefa, cole a URL de um incidente do <strong>Github</strong>
                      </Typography>
                    </DialogContentText>
                    <FormControl style={styles.formControl} error={this.state.task.url.error}>
                      <TextField error={this.state.task.url.error}
                        onChange={this.onChange}
                        autoFocus
                        margin="dense"
                        id="url"
                        name="url"
                        label="URL da tarefa"
                        type="url"
                        fullWidth
                      />
                      { this.state.task.url.error &&
                      <FormHelperText error={this.state.task.url.error}>A URL inserida não é válida</FormHelperText>
                      }
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClickDialogCreateTaskClose} color="primary">
                      Cancelar
                    </Button>
                    <Button disabled={!completed} onClick={this.handleCreateTask} variant="raised" color="secondary" >
                      Inserir
                    </Button>
                  </DialogActions>
                </Dialog>
              </form>

              { isLoggedIn &&
                <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={ avatarPlaceholder } ready={ completed }>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
                    transformOrigin={ { vertical: 'top', horizontal: 'right' } }
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleProfile}>Sua conta</MenuItem>
                    <MenuItem onClick={this.handleSignOut}>Sair</MenuItem>
                  </Menu>
                </ReactPlaceholder>
              }
          </RightSide>
        </Container>
      </Bar>
    )
  }
};

export default withRouter(withStyles(styles)(TopBar));

/* notification badge

<Badge badgeContent={4} color="secondary">
  <NotificationIcon color="primary"/>
</Badge>
*/
