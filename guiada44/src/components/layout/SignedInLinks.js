import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Icon, Divider } from 'react-materialize';

import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  
    var firstNameOriginal = '' + props.profile.firstName;
    var firstNameFinal = firstNameOriginal.toUpperCase();

    return (
        <div>
            <ul className = 'right hide-on-med-and-down'>
                <li className = 'side-right'>
                    <Dropdown
                    options = { options }
                    trigger = { <a href = '/'> OLÁ, { firstNameFinal } </a> }
                >
                    <Link to = '/' style = {{color: 'black',
                backgroundColor: 'white'}}> Inicio </Link><Divider />
                    <Link to = '/' > Meus Pedidos </Link><Divider />
                    <Link to = '/' > Trocas e Devoluções </Link><Divider />
                    <Link to = '/' > Meus Favoritos </Link><Divider />
                    <Link to = '/' > Informações da Conta </Link><Divider />
                    <Link to = '/' > Meus Endereços </Link><Divider />
                    <Link to = '/' > Cartões e Vales </Link><Divider />
                    <Link to = '/' > Sair </Link><Divider />

                </Dropdown>
                {/* <Dropdown
                    options = { options }
                    trigger = { <a href = '/'> OLÁ, { firstNameFinal } </a> }
                >
                    <Link to = '/' > Victor </Link>
                </Dropdown> */}
                    {/* <NavLink to = '/create'> OLÁ, { firstNameFinal } </NavLink>  */}
                </li>
                {/* <Dropdown
                    options={ options }
                    trigger={<a href="#!">Dropdown{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <a href="#">
                    one
                    </a>
                    <a href="#">
                    two
                    </a>
                    <Divider />
                    <a href="#">
                    three
                    </a>
                </Dropdown> */}
                {/* <li><a onClick = { props.signOut } className = 'white-text' href = '/signin'>           LogOut 
                </a></li>
                <li> 
                    <NavLink to = '/' className = 'btn btn-floating pink lighten-1'> 
                        { props.profile.initials } 
                    </NavLink> 
                </li> */}
            </ul>
        </div>
    );
}

const options = {
    options: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);