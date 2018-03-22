import React from 'react';

class ListaCartao extends React.Component{
    render(){
        let noticias = [
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"},
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"},
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"},
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"},
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"},
            {titulo:"Titulo 1", descricao:"Descricao", detalhe:"Detalhe", imagem:"http://materializecss.com/images/office.jpg", link:"#Teste"}
        ];

        let aux=[];
        let novaLista = [];
        for(let k=0;k<noticias.length;k++){
            aux.push(noticias[k]);
            if(aux.length == 4 ){
                novaLista.push(aux);
                aux = [];
            }
            else if(k == noticias.length - 1){
                novaLista.push(aux);
            }
        }

        console.log(novaLista);

        return (
            <p>Tests</p>
        );
    }
}

export default ListaCartao;