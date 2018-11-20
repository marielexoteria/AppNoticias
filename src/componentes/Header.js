import React from 'react'; //el header es un react stateless component
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <nav>
            <div className = "nav-wrapper light-blue darken-3">
                <a href="/" className = "brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;