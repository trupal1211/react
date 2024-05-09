import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import  Card from'./my componants/demo'

const items = [
  {
    title: "Biryani",
    desc: "Aromatic rice dish with tender vegetables, fragrant spices.",
    img: "Biryani",
    ratings: 4.0,
    votes: 1200,
    pricing: 250
  },
  {
    title: "Butter Paneer",
    desc: "Creamy tomato-based curry with soft paneer cubes.",
    img: "curry",
    ratings: 4.5,
    votes: 850,
    pricing: 350
  },
  {
    title: "Supreme Pizza",
    desc: "Grilled cottage cheese marinated in spicy yogurt and Indian spices.",
    img: "Pizza",
    ratings: 4.2,
    votes: 650,
    pricing: 400
  },
  {
    title: "Masala Dosa",
    desc: "Thin, crispy crepe filled with spiced potato filling, served with chutney.",
    img: "dosa",
    ratings: 3.9,
    votes: 950,
    pricing: 250
  },
  {
    title: "Green Sald",
    desc: "Fluffy fried bread served with spicy chickpea curry and pickles.",
    img: "salad",
    ratings: 4.5,
    votes: 720,
    pricing: 130
  },
  {
    title: "Aloo Paratha",
    desc: "Stuffed Indian flatbread with spiced mashed potatoes.",
    img: "Paratha",
    ratings: 4.8,
    votes: 580,
    pricing: 120
  },
  {
    title: "Grilled Sandwitch",
    desc: "Crispy hollow balls filled with spicy tamarind water and potatoes.",
    img: "sandwitch",
    ratings: 4.9,
    votes: 1100,
    pricing: 160
  },
  {
    title: "Gulab Jamun",
    desc: "Soft, sweet milk dumplings soaked in fragrant sugar syrup.",
    img: "GulabJamun",
    ratings: 4.3,
    votes: 980,
    pricing: 100
  }
];

let name = 'what is your name ?   '

function print(){
  return " my name is devin AI";
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App />

    // <> 
    // <h1 className='trupal'>welcome to bootcamp!!!! {Math.random()*1000}</h1>
    //  // {fun.call , varialble , math equation etc.... }
    // <p>{name}{print()}</p>
    // </>

<>

    {/* <h1 className='title'>react componants</h1> */}

    <div className='container'>

      {/* <Card title='Burger' img='burger' desc='Our signatuse burger with Double filling Where Messiness at its best' />
      <Card title='Dosa' img='dosa' desc='Savory South Indian crepe made from fermented rice and urad dal.' />
      <Card title='Salad' img='salad' desc='Crisp greens, vibrant veggies, tossed in zesty vinaigrettea refreshing medl' /> */}

      {
        items.map((item)=>{
          return <Card title={item.title} desc={item.desc} img={item.img} price={item.pricing} 
                       ratings={item.ratings} votes={item.votes} />
        })

        
      }
    </div>

     {/* <App/> */}
</>
    
);

reportWebVitals();
