import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonButton } from '@ionic/react';
import { useParams } from 'react-router';

import './Home.css';

const Home: React.FC = () => {
  const didClickMigrateData = () => {
    console.log("here")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Migrar Dados</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Migre seus dados existentes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonLabel position="stacked">Digite seu link Goomer</IonLabel>
          <IonInput placeholder="https://sualoja.goomer.app/" clearInput></IonInput>
          <IonButton onClick={didClickMigrateData}>Migrar Dados</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
