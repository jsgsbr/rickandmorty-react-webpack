import React, {Fragment} from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.sass'
import './components/Header.css'
import './components/Characters.css'

const App = () => {
    return ( 
        <Fragment>
            <Header
                title="Rick and Morty API"
            />
            <Characters />
        </Fragment>
     );
}
 
export default App;