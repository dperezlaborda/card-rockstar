import React from 'react';
import './App.css';
import Header from './Sections/Header/Header';
import Card from './Components/Card/Card';
import ImageOne from './Images/prince.jpeg';
import ImageTwo from './Images/david.jpg';
import ImageThree from './Images/lennon.jpg';
import ImageFour from './Images/thom.jpg';
import ImageFive from './Images/madonna2.jpg';
import Footer from './Sections/Footer/Footer';

function App() {
  const cards = [
    {
      img: ImageOne,
      title:"PRINCE",
      subtitle: "THE ARTIST",
      text:"Fue un cantante, compositor, bailarín y músico estadounidense, conocido por su ecléctico trabajo, su extravagante puesta en escena, vestuario y aspecto; su vida llena de controversias y su amplio registro vocal.Prince nació en Mineápolis y desarrolló gran interés por la música desde muy joven. Firmó su primer contrato discográfico con Warner Bros. Records a los 18 años. Durante esta época, sus letras contenían mensajes sexuales explícitos y combinaba géneros como el funk, el dance y el rock. En 1984 lanzó junto con su banda, en ese entonces llamada The Revolution, el álbum Purple Rain",
      color:"#AF6FE8"
    },
    {
      img:ImageTwo,
      title:"DAVID BOWIE",
      subtitle:"STARMAN",
      text:"Figura importante de la música popular durante casi cinco décadas, Bowie es considerado un innovador, en particular por sus trabajos de la década de 1970 y por su peculiar voz, además de la profundidad intelectual de su obra. Nacido en Brixton, en el sur de Londres, Bowie mostró gran interés por la música en su niñez, finalmente estudiando arte, música y diseño antes de embarcarse en su carrera profesional como músico en 1963. A pesar de haber lanzado un álbum  varios sencillos antes, Bowie consiguió notoriedad en julio de 1969, cuando su sencillo «Space Oddity» llegó al top 5 de la lista británica de sencillos. ",
      color:"#E54747"
    },
    {
      img:ImageThree,
      title: "JOHN LENNON",
      subtitle: "JEALOUS GUY",
      text:"Fue el mejor artista, músico, genio, multinstrumentista, gran cantautor, compositor, poeta, dibujante, escritor, pacifista, activista y actor inglés, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles. Demostró un carácter rebelde y un ingenio mordaz en su música, el cine, la literatura y el dibujo, así como en sus declaraciones en conferencias de prensa y entrevistas. Además, la polémica lo persiguió debido a su constante activismo por la paz junto a Ono. En 1971 se mudó a Manhattan, donde su oposición a la guerra de Vietnam dio lugar a numerosos intentos por parte del gobierno de Richard Nixon de expulsarlo del país; mientras, sus canciones fueron adoptadas como himnos por el movimiento contra la guerra y la contracultura.",
      color:"#1B3452"
    },
    {
      img:ImageFour,
      title: "THOM YORKE",
      subtitle: "CREEPY",
      text:"Es un músico inglés conocido por ser el vocalista y compositor principal del grupo de rock alternativo Radiohead. Es conocido por su voz de falsete. Los instrumentos principales de Yorke son la guitarra y el piano, pero también toca el sintetizador, el bajo y la batería. Thom nació en 1968 en Northamptonshire y posteriormente se trasladó con su familia a Oxfordshire, donde asistió a la Abingdon School y fundó Radiohead con compañeros de escuela.Ha sido crítico con la industria musical y ha sido pionero en fórmulas alternativas de publicación de la música, como pay-what-you-want (paga-lo-que-quieras) y BitTorrent, con Radiohead y en solitario.",
      color:"#64483D"
    },
    {
      img:ImageFive,
      title: "MADONNA",
      subtitle: "MATERIAL GIRL",
      text:"Es una cantante, compositora, actriz, empresaria e ícono LGBT+, feminista, sexual, comercial y de la moda estadounidense. Pasó sus primeros años en Bay City y en 1977 se mudó a la ciudad de Nueva York para realizar una carrera de danza contemporánea. Su carrera se vio reforzada por sus papeles en diversas películas por las que recibió comentarios variados. Su protagónico más elogiado es el de Eva Perón para Evita, por el que incluso ganó un Globo de Oro a la mejor actriz de comedia o musical; sin embargo, ha recibido críticas negativas por otros papeles.",
      color:"#B54182"
    }
  ]
    return (
      <div className="App">
        <Header></Header>
        {cards.map (card=>{
          return(
            <Card key={card.title}
                  img={card.img}
                  title={card.title}
                  subtitle={card.subtitle}
                  text={card.text}
                  color={card.color}>
            </Card>
          )
        })}
        <Footer></Footer>
      </div>
    );
}

export default App;
