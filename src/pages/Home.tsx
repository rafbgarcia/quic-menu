import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import './Home.css';


const goomerInfo = (storeSlug: string) => (
  `https://api-go.goomer.app/v2/establishments/${storeSlug}/info?mode=slug&provider=ggo`
)

const goomerOnSiteMenu = (storeSlug: string) => (
  "https://www.goomer.app/webmenu/confeitos-e-afetos/localmenu/1667072749976"
)

const goomerStoreSlug = (link: string) => (
  link.split('//')[1].split('.')[0]
)

const Home: React.FC = () => {
  const [goomerLink, setGoomerLink] = useState("")
  const didClickImportFromGoomer = () => {
    // goomerInfo(goomerStoreSlug(goomerLink))
    console.log(goomerLink)
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
            <IonTitle size="large">Importe seus dados do Goomer</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonLabel position="stacked">Digite seu link Goomer</IonLabel>
          <IonInput onIonInput={(e: any) => setGoomerLink(e.target.value)} placeholder="Ex: https://sualoja.goomer.app/" clearInput></IonInput>
          <IonButton onClick={didClickImportFromGoomer}>Importar</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
