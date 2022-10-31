import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonButton
} from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { API } from "aws-amplify"
import * as types from "../API"
import { createPlace } from "../graphql/mutations"
import './Home.css';


const goomerInfoUrl = (link: string) => (
  `https://api-go.goomer.app/v2/establishments/${goomerStoreSlug(link)}/info?mode=slug&provider=ggo`
)

const goomerStoreSlug = (link: string) => (
  link.split('//')[1].split('.')[0]
)

const getGroups = (products: any, groups: types.MenuGroupInput[] = []): types.MenuGroupInput[] => {
  if (products.length == 0) {
    return groups
  }

  const group: types.MenuGroupInput = {
    name: products[0].group_name,
    items: [],
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    if (product.group_name !== group.name) continue

    const item: types.MenuItemInput = {
      name: product.name,
      description: product.description,
      price: product.price_tag,
      images: {
        small: product.images.small,
        medium: product.images.medium,
        large: product.images.large,
      },
    }
    group.items?.push(item)
    products.splice(i, 1)
    i--
  }

  groups.push(group)

  return getGroups(products, groups)
}

export const ImportPage: React.FC = () => {
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

    await API.graphql({ query: createPlace, variables: { input: newPlace } })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Importar Dados</IonTitle>
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