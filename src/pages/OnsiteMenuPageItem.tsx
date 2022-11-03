import {
  IonFabButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonFab,
  IonIcon,
  IonMenuButton,
  IonBackButton,
} from "@ionic/react"
import { arrowBackOutline, chevronBackOutline } from "ionicons/icons"
import { MenuItem } from "../API"

type Props = {
  item?: MenuItem
  setItem: (item?: MenuItem) => void
  pageRef: any
}

export const OnsiteMenuPageItem: React.FC<Props> = ({
  item,
  setItem,
  pageRef,
}) => {
  return (
    <IonModal
      canDismiss
      isOpen={item !== undefined}
      onWillDismiss={() => setItem(undefined)}
      presentingElement={pageRef!}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={() => setItem(undefined)}>
              <IonIcon ios={chevronBackOutline} md={arrowBackOutline} />
            </IonButton>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
      </IonContent>
    </IonModal>
  )
}
