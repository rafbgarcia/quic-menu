import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { API } from "aws-amplify"
import * as types from "../API"
import { getPlace } from "../graphql/queries"
import { Menu } from "../components/Menu"

export const MenuPage: React.FC = () => {
  const place: any = {}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{place?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Menu place={place} />
      </IonContent>
    </IonPage>
  )
}
