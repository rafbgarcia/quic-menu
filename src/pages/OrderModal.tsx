import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonImg,
  IonLabel,
  IonItem,
  IonList,
  IonThumbnail,
} from "@ionic/react"
import { chevronDownOutline } from "ionicons/icons"
import { useRef } from "react"
import { CreateOrderInput } from "../API"
import { formatPrice } from "../lib/formatPrice"

type Props = {
  order: CreateOrderInput
  isOpen: boolean
  pageRef: any
  onDismiss: () => void
}

export const OrderModal: React.FC<Props> = ({ order, onDismiss, isOpen, pageRef }) => {
  const modalRef = useRef<HTMLIonModalElement>(null)
  const didClickMakeOrder = () => {}
  console.log(order)
  return (
    <IonModal
      ref={modalRef}
      canDismiss
      isOpen={isOpen}
      presentingElement={pageRef!}
      onWillDismiss={() => onDismiss()}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modalRef!.current!.dismiss()}>
              <IonIcon icon={chevronDownOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Sacola</IonTitle>

          <IonButtons slot="end">
            <IonButton>Limpar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {order.items.map((item) => (
            <IonItem class="cursor-pointer" key={`${item.meta.name}_${item.meta.description}`}>
              <IonLabel>
                <h3>{item.meta.name}</h3>
                <p>{item.meta.description}</p>
                <p>{formatPrice(item.meta.price)}</p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonImg className="rounded-md" alt="" src="https://via.placeholder.com/150" />
                {/* <IonImg alt="" src={item.meta.images.small || undefined} /> */}
              </IonThumbnail>
            </IonItem>
          ))}
        </IonList>

        <footer className="ion-padding pb-[100px] flex items-center gap-2">
          <div className="w-full">
            <IonButton expand="block" onClick={didClickMakeOrder}>
              Fazer pedido
            </IonButton>
          </div>
        </footer>
      </IonContent>
    </IonModal>
  )
}
