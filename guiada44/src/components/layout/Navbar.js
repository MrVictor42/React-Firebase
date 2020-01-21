import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class NavbarCustom extends Component {

    render() {

        const { auth, profile } = this.props;
        const links = auth.uid ? <SignedInLinks profile = { profile } /> : <SignedOutLinks />

        return (

            <div className = 'navbar-fixed'>
                <nav>
                    <div className = 'nav-wrapper'>
                        <ul className = 'left'>
                            <li>
                                <a>
                                    <i className = 'hamburger material-icons hide-on-med-and-up'>
                                        menu
                                    </i>
                                </a>
                                <a href = '/' className = 'brand-logo logo'> Guia da 44 </a>
                            </li>
                        </ul>

                        <form>
                            <div className = 'input-field'>
                                <input 
                                    id = 'search' type = 'search' 
                                    name = 'search' placeholder = 'O que você procura ?'
                                    style = {{
                                        backgroundColor: 'white'
                                    }} 
                                />
                                <label className = 'label-icon' for = 'search'>
                                    <i className = 'material-icons black-text'>
                                        search
                                    </i>
                                </label>
                            </div>
                        </form>

                        { links }

                        {/* <ul className = 'right'>
                            <li>
                                <a>
                                    Entrar
                                    <i className="material-icons">notifications_none</i>
                                </a>
                            </li>
                            <li className="imgProfil">
                                <img src="http://maxpixel.freegreatpicture.com/static/photo/1x/Redhead-Girl-Person-People-Woman-Female-Avatar-995164.png" alt="" className="circle"/>
                            </li>
                                <ul id="AccountInfo" className="hidden z-depth-5">
                                    <li>sdfsdf</li>
                                    <li>fghfgh</li>
                                    <li>jkjkljkljkl</li>
                                    <li>xwcxwcwxcwxc</li>
                                </ul>
                            <li>
                                <a href="">
                                    <i className="material-icons">exit_to_app</i>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </div>

            // <Navbar
            //     className = 'navbar-fixed nav-wrapper transparent' 
            //     alignLinks = 'right'
            //     brand = { 
            //         <a className = 'brand-logo black-text text-navbar' href = '/'> 
            //             Guiada44 
            //         </a> 
            //     }
            //     menuIcon = { <Icon> menu </Icon> }
            //     options = { options }
            // >
            //     <TextInput 
            //         icon = { <Icon> search </Icon>}
            //         placeholder = 'O que você procura ?'
            //     />
            //     { links }
            // </Navbar>
        );
    }
}

const options = {
    options: {
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
    }
};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}

export default connect(mapStateToProps)(NavbarCustom);