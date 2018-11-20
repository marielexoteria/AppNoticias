import React, { Component } from 'react'; //todas las noticias
import Noticia from './Noticia'; //componente que muestra una sola noticia
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group'; //para crear las animaciones cuando las noticias se despliegan

class Noticias extends Component {
    render() { 
        return (  
            <div className = "row">
                <TransitionGroup>
                    {this.props.noticias.map(noticia => ( //haciendo un loop para que cada noticia se despliegue en el componente Noticia
                        <CSSTransition
                            key = {noticia.url}
                            classNames = "fade"
                            timeout = {500}
                        >
                            <Noticia noticia = {noticia} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default Noticias;