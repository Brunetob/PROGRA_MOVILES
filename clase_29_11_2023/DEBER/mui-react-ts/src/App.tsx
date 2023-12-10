
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  // No se por que pero cuando coloco el fragmente <></> me deja usar el resto de etiquetas html
  <> 
  <p>Este es un projecto de react para usar un comennte card con AntDesign</p>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </>
);

export default App;
