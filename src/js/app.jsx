import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';
import ListaCartao from './cartao/lista-cartao';

let App = (
    <div>
        <Navbar titulo="React" cor="orange"/>
        <div className="container">
            <Titulo />
            <ListaCartao />
            <div className="row">
                <div className="col m3"><Cartao /></div>
                <div className="col m3"><Cartao /></div>
                <div className="col m3"><Cartao /></div>

            </div>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));