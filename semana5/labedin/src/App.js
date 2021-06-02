import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="http://power-blaster.surge.sh/media/20210203_112514.jpg" 
          nome="Danilo Chagas" 
          descricao="Oi, sou o Danilo!
          Após longa jornada na área comercial decidi atender ao chamado da área de tecnologia, a qual sempre tive interesse e busquei traze-la por onde passei. Hoje sou profissional em transição de carreira, sendo um estudante de Web Fullstack pela Labenu. Em breve espero poder ajudar você a atingir o seu propósito com as tecnologias de front e backend!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
        tipo="E-mail:"
        descricao="danilo.chagas@email.com.br"/>

        <CardPequeno
        imagem="https://i.pinimg.com/474x/ec/97/2f/ec972f58852a4571320fe627607f91c6.jpg"
        tipo="Endereço:"
        descricao="Rua Fictícia 310"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.arquitetas.net.br/imgempresas/engbras-software-e-projetos-re-4164-1ZvS.jpg" 
          nome="Engbras" 
          descricao="Atuação nas áreas de projetos, tecnologia e engenharia" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGKn4eiocssGA/company-logo_200_200/0/1519885698429?e=2159024400&v=beta&t=oLRYQkVOcz71PLsN_1K8g2AMKQhrpUZeNT_HcJJlL6E" 
          nome="Digifix" 
          descricao="Atuação na área de atendimento ao Cliente e Comercial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
