import React, { useState, useEffect } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>API Fetch Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {data.map((item: any) => (
            <IonItem key={item.id}>{item.title}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default App;
