import React from 'react';

class NavMenu extends React.Component{
    render(){
        let list = this.props.menu.map(function(value){
            return(
              <li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>
            );
        });

        return (
        <ul id="nav-mobile" className="right">
            {list}
        </ul>
      );
    }
}

export default NavMenu;