import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = "general") => { //categoria aquí sería el parámetro que se le pasa al arrow function consultarNoticias(), con el valor "general" como default en caso de algún error en pasarle el valor por vía de Formulario.js
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=903c8f80e07c4cc2921d6738e73455dd`;

    //query al API 
    fetch(url)
      .then(respuesta => {
        return respuesta.json(); //convirtiendo el query a JSON
      })
      .then(noticias =>{
        this.setState({
          noticias: noticias.articles
        }) //para acceder a las noticias según como el API funciona y mandarlas al state
      })     
  }

  render() {
    return (
      <div className="contenedor-app">
          <Header titulo = "Noticias" />

          <div className = "container white contenedor-noticias">
            <Formulario 
              consultarNoticias = {this.consultarNoticias}
            />
            <Noticias 
              noticias = {this.state.noticias}
            />
          </div>
          
      </div>
    );
  }
}

export default App;
