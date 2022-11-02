import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useLocation, useParams } from "react-router"
import { Menu } from "../components/Menu"
import { usePlaceById } from "../hooks/usePlace"

export const OnsiteMenuPage: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>()
  const { place, loading } = usePlaceById(placeId)
  const { search } = useLocation()

  const query = new URLSearchParams(search)

  if (loading || !place) return null

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{place.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Menu place={place} />
      </IonContent>
    </IonPage>
  )
}
