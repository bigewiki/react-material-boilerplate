import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Grid } from 'react-bootstrap';
import MenuItems from './appData/MenuItems'
import { CSSTransition } from 'react-transition-group';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add({ faBars, faTimes });

export const AppContext = React.createContext();

class App extends Component {

  constructor(props) {
    const currentMenuItem = MenuItems.filter(menuItem => menuItem.link === window.location.hash);

    if(currentMenuItem.length===0){
      currentMenuItem.push({title: "Home", link: "#/"});
    }

    super(props);
    this.state = {
      mainMenuOpen : false,
      handleMainMenuClick : () => {
        if(this.state.mainMenuOpen===false){
          this.setState({mainMenuOpen:true});
        } else {
          this.setState({mainMenuOpen:false});
        }
      },
      menuItems : MenuItems,
      currentURL : currentMenuItem[0].link,
      currentTitle : currentMenuItem[0].title,
      activeMenuItem : document.querySelector(`#desktop-nav-1 a`),
      handleNavigation : (url, title, listNumber) => {
        this.setState({currentURL:url,currentTitle:title});
        this.setState({mainMenuOpen:false});
        document.querySelectorAll(`.desktop-nav-link`).forEach((i) => {
          i.style.color = "white";
        })
        document.querySelector(`#desktop-nav-${listNumber + 1} a`).style.color = "red";
        this.setState({activeMenuItem:document.querySelector(`#desktop-nav-${listNumber + 1} a`)})
      },
      handleNavMouseEnter : (i) => {if(this.state.activeMenuItem!==document.querySelector(`#desktop-nav-${i + 1} a`)){document.querySelector(`#desktop-nav-${i + 1} a`).style.color = "green"}},
      handleNavMouseLeave : (i) => {if(this.state.activeMenuItem!==document.querySelector(`#desktop-nav-${i + 1} a`)){document.querySelector(`#desktop-nav-${i + 1} a`).style.color = "white"} else {document.querySelector(`#desktop-nav-${i + 1} a`).style.color = "orange"}}
    }

  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
        <div className="App">
          <Header title="React Bootstrap"/>
          <Grid>
            <Body page={this.state.currentTitle}/>
          </Grid>
          <Footer/>
          <CSSTransition
            in={this.state.mainMenuOpen}
            timeout={500}
            classNames="overlay-animate"
            unmountOnExit
          >
            <div className="overlay"></div>
          </CSSTransition>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
