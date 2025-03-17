import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import axios from 'axios';

const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>('Click the button to get a joke');

  const fetchJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        setJoke(`${response.data.setup} - ${response.data.punchline}`);
      })
      .catch(() => {
        setJoke('Failed to load joke.');
      });
  };

  useEffect(() => {
    fetchJoke(); // Load a joke when the page opens
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Random Joke</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: '100vh', 
        background: '#fff3cd'
      }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{joke}</p>
        <IonButton onClick={fetchJoke} style={{ marginTop: '20px', fontSize: '16px' }}>🔄 Get New Joke</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Joke;
