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
          <IonTitle>
            Dashboard <small>({place?.id})</small>
          </IonTitle>
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
    <div className="ion-padding">
      <h3>{place.name}</h3>
    </div>
  )
}
