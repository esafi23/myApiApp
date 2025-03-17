import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: '100vh', 
        background: '#e3f2fd'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Menu</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '200px' }}>
          <IonButton routerLink="/" style={{ fontSize: '16px' }}>🏠 Back to Home</IonButton>
          <IonButton routerLink="/joke" style={{ fontSize: '16px' }}>🎭 Get a Random Joke</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
