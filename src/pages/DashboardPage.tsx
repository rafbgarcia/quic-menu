import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import * as types from "../API"
import { ImportFromGoomer } from "../components/ImportFromGoomer"
import { Wait } from "../components/Wait"
import { usePlace } from "../hooks/usePlace"

export const DashboardPage = () => {
  const { place, loading } = usePlace()

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
        <Wait until={loading === false}>
          {place ? <Dashboard place={place} /> : <ImportFromGoomer />}
        </Wait>
      </IonContent>
    </IonPage>
  )
}

const Dashboard = ({ place }: { place: types.Place }) => {
  return (
    <IonContent className="ion-padding">
      <h3>{place.name}</h3>
    </IonContent>
  )
}
