import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import Pessoas from './components/Pessoas';
import Animal from './components/Animal';

function App() {
      let http = 'http://www.google.com'
      let http2 = 'http://www.megacurioso.com.br'
      return (              
            <div className="App">
                  <Animal 
                        nome='Ringovisk' 
                        especie='Cachorro' 
                        idade='5' 
                        cor='branco'
                        temperamento='agressivo'
                        raiva='sim' 
                        olhos='castanho'  

                  > Passeando com o Cachorro </Animal> 

                  <Link Nomelink='Mega Curioso' http={http2} />  ||  
                  <Link Nomelink='Google' http={http} /> 
                  <Pessoas Nome='Carlos' idade= '20' DN='12/12/2000' genero='Masculino' > Não participara da votação </Pessoas>
                  <Pessoas Nome='Maria' idade= '25' DN='12/03/1995' genero='Feminino'> <Link Nomelink='Google' http={http} />  </Pessoas>
                  

             </div>
                  
       );
}

export default App;
