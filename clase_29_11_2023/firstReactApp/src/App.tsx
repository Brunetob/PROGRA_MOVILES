import React from "react";
import Gallery from "./Gallery";

export default function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

/* // Todos: Clase 15/12/2023 gallery.tsx
//import Gallery from './Gallery.tsx';
import {Gallery} from './Gallery.tsx';

export default function App(){
  return (
    <div>
      <Gallery />
      <Gallery />
      <Gallery />
    </div>
  )

}*/

// Todos: Añadir un componente con ant design
/*import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img id='#fotito' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default App;*/