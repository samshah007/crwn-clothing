import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartItemHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from "./header.style";

const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                :
                <OptionDiv to='/signin'>Sign In</OptionDiv>
            }
            <CartIcon></CartIcon>
            {
                hidden ? null: <CartDropdown></CartDropdown>
            }
        </OptionsContainer>
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartItemHidden
});
export default connect(mapStateToProps)(Header);