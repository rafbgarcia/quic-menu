import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { Menu } from "../components/Menu"
import { usePlace } from "../hooks/usePlace"

export const MenuPage: React.FC = () => {
  const { place, loading } = usePlace()

  if (loading || !place) return null

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{place.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Menu place={place} />
      </IonContent>
    </IonPage>
  )
}
