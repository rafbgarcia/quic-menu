import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { API } from 'aws-amplify';
import { useState } from 'react';
import * as types from '../API';
import { listPlaces } from '../graphql/queries';
import { ImportPage } from './ImportPage';

export const DashboardPage: React.FC = () => {
  const [place, setPlace] = useState<types.Place>()
  API.graphql({ query: listPlaces })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <ImportPage />
        <IonContent className="ion-padding">
        </IonContent>
      </IonContent>
    </IonPage>
  );
};
