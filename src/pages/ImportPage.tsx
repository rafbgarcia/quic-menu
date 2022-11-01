import {
  IonContent,
  IonPage,
  IonInput,
  IonLabel,
  IonButton,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';
import { useState } from 'react';
import { API } from "aws-amplify"

import * as types from "../API"
import { createPlace } from "../graphql/mutations"
import { getGroups, goomerInfoUrl } from './ImportPageHelpers';
import { Menu } from '../components/Menu';

export const ImportPage: React.FC = () => {
  const [place, setPlace] = useState<types.CreatePlaceInput>()
  const [goomerLink, setGoomerLink] = useState("")

  const didClickImportFromGoomer = async () => {
    const { settings } = await fetch(goomerInfoUrl(goomerLink)).then(res => res.json())
    const menu = await fetch(settings.mm_onsite_menu_url).then(res => res.json())

    const groups = getGroups(menu.products)

    const newPlace: types.CreatePlaceInput = {
      name: settings.name,
      category: settings.specialty_name,
      menu: groups,
    }
    setPlace(place)

    await API.graphql({ authMode: "AMAZON_COGNITO_USER_POOLS", query: createPlace, variables: { input: newPlace } })
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Comece rápido!</IonCardTitle>
        <IonCardSubtitle>Importe seus dados do Goomer para começa a usar o Quic em minutos.</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonLabel position="stacked">Digite seu link Goomer</IonLabel>
        <IonInput onIonInput={(e: any) => setGoomerLink(e.target.value)} placeholder="Ex: https://sualoja.goomer.app/" clearInput />
        <IonButton expand="block" onClick={didClickImportFromGoomer}>Importar</IonButton>
        {place && <Menu place={place} />}
      </IonCardContent>
    </IonCard>
  );
};
