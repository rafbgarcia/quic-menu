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

const fetchPlace = async (id: string, setPlace: any) => {
  const json = await API.graphql({ query: getPlace, variables: { id } })
  setPlace((json as any).data.getPlace)
}

export const MenuPage: React.FC = () => {
  const [place, setPlace] = useState<types.Place>()
  const { placeId } = useParams<{ placeId: string }>()
  useEffect(() => {
    fetchPlace(placeId, setPlace)
  }, [])

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

      <IonContent fullscreen>{place && <Menu place={place} />}</IonContent>
    </IonPage>
  )
}
