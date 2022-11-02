import { useAuthenticator } from "@aws-amplify/ui-react"
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { API } from "aws-amplify"
import { useEffect, useState } from "react"
import * as types from "../API"
import { listPlaces } from "../graphql/queries"
import { ImportFromGoomer } from "../components/ImportFromGoomer"

const fetchPlace = async (username: string, setPlace: any) => {
  const res: any = await API.graphql({
    query: listPlaces,
    variables: { limit: 1, filter: { owner: { beginsWith: username } } },
  })
  setPlace(res.data.listPlaces.items)
}

const Loading = ({ children, value }: any) => {
  if (!value) return null
  return children
}

export const DashboardPage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user])
  const [places, setPlaces] = useState<types.Place[]>()

  useEffect(() => {
    fetchPlace(user.getUsername(), setPlaces)
  }, [])

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
        <Loading value={places}>
          {places && places.length > 0 ? (
            <Dashboard place={places[0]} />
          ) : (
            <ImportFromGoomer setPlaces={setPlaces} />
          )}
        </Loading>
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
