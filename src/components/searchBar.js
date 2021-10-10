import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

 class SearchBar extends Component {

    handelFormSubmit = function({query}) {
        //navegado a una nueva ruta
        console.log('probando del boton enviar de la query', query);
    }

    renderInput(field){
        return <input type="text" placeholder="Search DailySmarty" {... field.input} />
    }

    render() {

        const { handleSubmit } = this.props;

        return (
           <form className="search-bar" onSubmit={handleSubmit(this.handelFormSubmit.bind(this))}>
               <Field name="query" component={this.renderInput} /> 
           </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;