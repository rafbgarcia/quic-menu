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
  IonImg,
  IonLabel,
  IonFooter,
} from "@ionic/react"
import {
  addOutline,
  arrowBackOutline,
  chevronBackOutline,
  chevronDownOutline,
  removeOutline,
} from "ionicons/icons"
import { useRef, useState } from "react"
import { MenuItem } from "../API"
import { formatPrice } from "../lib/formatPrice"

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
  const modalRef = useRef<HTMLIonModalElement>(null)
  const [orderItem, setOrderItem] = useState<any>({ quantity: 1 })
  const updateOrderItem = (field: string, value: any) => {
    setOrderItem({ ...orderItem, [field]: value })
  }

  if (!item) {
    return null
  }
  return (
    <IonModal
      ref={modalRef}
      canDismiss
      isOpen={item !== undefined}
      onWillDismiss={() => setItem(undefined)}
      presentingElement={pageRef!}
    >
      <IonContent>
        <IonFab vertical="top" horizontal="start">
          <IonFabButton
            color="light"
            style={{ opacity: 0.5 }}
            size="small"
            onClick={() => modalRef!.current!.dismiss()}
          >
            <IonIcon icon={chevronDownOutline} />
          </IonFabButton>
        </IonFab>
        <div style={{ height: "45vh", overflow: "hidden" }}>
          <IonImg alt="" src={item?.images?.large!} />
        </div>
        <div className="ion-padding">
          <IonLabel>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <br />
            <p>{formatPrice(item.price)}</p>
          </IonLabel>
        </div>
        <div className="ion-padding" style={{ paddingBottom: 100 }}>
          <div
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 4,
              padding: 3,
              display: "inline-flex",
            }}
          >
            <IonButton
              fill="clear"
              onClick={() =>
                updateOrderItem("quantity", orderItem.quantity - 1)
              }
              disabled={orderItem.quantity === 1}
            >
              <IonIcon icon={removeOutline} />
            </IonButton>
            <IonLabel>{orderItem.quantity}</IonLabel>
            <IonButton
              fill="clear"
              onClick={() =>
                updateOrderItem("quantity", orderItem.quantity + 1)
              }
            >
              <IonIcon icon={addOutline} />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonModal>
  )
}
