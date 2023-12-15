import React from "react";
import Profile from "./Profile";
import CardComponent from "./CardComponent.tsx";

function Gallery() {
  return (
    <section>
      <h1>Gallery Section</h1>
      <Profile />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </section>
  );
}

export default Gallery;

/*function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherin Johnson" />;
}*/

//export /*default*/ function Gallery() {
/*return (
    <section>
      <h1>Amazing scienttists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

import React from 'react';
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
