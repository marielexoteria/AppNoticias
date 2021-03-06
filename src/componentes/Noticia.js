//componente que despliega una sola noticia
import React from 'react'; 
import PropTypes from 'prop-types';

const Noticia = (props) => {
    const {urlToImage, url, title, description, source} = props.noticia; //haciendo destructuring para sacar de la info del API lo que se quiere desplegar en cada noticia

    const imagen = (urlToImage) 
        ?
            <div className = "card-image">
                <img src={urlToImage} alt={title} />
                <span className = "card-title">{source.name}</span>
            </div>
        :
            <div className = "card-image">
                <img src='https://raw.githubusercontent.com/marielexoteria/AppNoticias/master/src/img/fallback_no_image.png' alt={title} />
                <span className = "card-title">{source.name}</span>
            </div>  //haciendo un ternario para verificar si la noticia tiene imagen o no; en caso de no tenerla, se desplegará una imagen de fallback

        
    return (
        <div className = "col s12 m6 l4">
            <div className = "card">
                {imagen}

                <div className = "card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className = "card-action">
                    <a href={url} target = "_blank" rel="noopener noreferrer" className = "waves-effect waves-light btn">Noticia completa</a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        urlToImage: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.object
    })
}

export default Noticia;