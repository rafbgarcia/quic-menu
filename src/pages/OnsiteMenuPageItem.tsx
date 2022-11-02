import {
  IonBackButton,
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

export const OnsiteMenuPageItem: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>()
  const { place, loading } = usePlaceById(placeId)
  const { search } = useLocation()

  const query = new URLSearchParams(search)

  if (loading || !place) return null

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{place.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen></IonContent>
    </>
  )
}
