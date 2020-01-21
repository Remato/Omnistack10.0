import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';


function App() { 
  return(  
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlForm="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlForm="">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlForm="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlForm="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>

            <button type="submit">Salvar</button>
          </div> 
        </form>
      </aside> 
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src=""></img>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
