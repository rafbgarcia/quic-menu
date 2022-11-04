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
  IonInput,
  IonItem,
  IonTextarea,
} from "@ionic/react"
import {
  addOutline,
  arrowBackOutline,
  chevronBackOutline,
  chevronDownOutline,
  removeOutline,
} from "ionicons/icons"
import { useEffect, useRef, useState } from "react"
import { useImmer } from "use-immer"
import { MenuItem, OrderItemInput } from "../API"
import { formatPrice } from "../lib/formatPrice"

type Props = {
  item?: MenuItem
  isOpen: boolean
  onDismiss: () => void
  onAddOrderItem: (orderItem: any) => void
  pageRef: any
}

export const OnsiteMenuPageItemModal: React.FC<Props> = ({
  item,
  onDismiss,
  onAddOrderItem,
  pageRef,
  isOpen,
}) => {
  const modalRef = useRef<HTMLIonModalElement>(null)
  const [orderItem, setOrderItem] = useImmer<OrderItemInput | undefined>(undefined)
  useEffect(() => {
    item && setOrderItem({ quantity: 1, meta: item })
  }, [item])

  if (!item || !orderItem?.meta) {
    return null
  }
  const setNotes = (notes: string) =>
    setOrderItem((draft) => {
      draft!.notes = notes
    })

  const setQuantity = (quantity: number) =>
    setOrderItem((draft) => {
      draft!.quantity = quantity
    })

  const didClickAdd = () => {
    onAddOrderItem(orderItem)
    modalRef!.current!.dismiss()
  }

  return (
    <IonModal
      ref={modalRef}
      canDismiss
      isOpen={isOpen}
      onWillDismiss={() => onDismiss()}
      presentingElement={pageRef!}
    >
      <IonContent>
        <IonFab vertical="top" horizontal="start">
          <IonFabButton
            color="light"
            className="opacity-50"
            size="small"
            onClick={() => modalRef!.current!.dismiss()}
          >
            <IonIcon icon={chevronDownOutline} />
          </IonFabButton>
        </IonFab>
        <div className="h-[40vh] bg-gray-100 overflow-hidden">
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
        <div className="mb-5">
          <IonItem>
            <IonLabel position="floating">Alguma observação?</IonLabel>
            <IonTextarea
              autoGrow
              maxlength={200}
              rows={1}
              placeholder="Digite..."
              onChange={(e: any) => setNotes(e.target.value)}
            />
          </IonItem>
        </div>

        <footer className="ion-padding pb-[100px] flex items-center gap-2">
          <div className="border rounded-md inline-flex items-center">
            <IonButton
              mode="md"
              size="small"
              fill="clear"
              onClick={() => setQuantity(orderItem.quantity - 1)}
              disabled={orderItem.quantity === 1}
            >
              <IonIcon icon={removeOutline} />
            </IonButton>
            <IonLabel>{orderItem.quantity}</IonLabel>
            <IonButton
              mode="md"
              size="small"
              fill="clear"
              onClick={() => setQuantity(orderItem.quantity + 1)}
            >
              <IonIcon icon={addOutline} />
            </IonButton>
          </div>
          <div className="w-full">
            <IonButton expand="block" onClick={didClickAdd}>
              Adicionar
            </IonButton>
          </div>
        </footer>
      </IonContent>
    </IonModal>
  )
}
