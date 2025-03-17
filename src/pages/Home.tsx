import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: '100vh', 
        background: '#f4f4f4'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Welcome to My Ionic App</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>An example app with API integration</p>
        <IonButton routerLink="/menu" style={{ marginTop: '20px', fontSize: '16px' }}>Go to Menu</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
