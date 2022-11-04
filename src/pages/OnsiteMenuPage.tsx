import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonThumbnail,
  IonPage,
  IonImg,
  IonFooter,
  IonButton,
  IonButtons,
  IonIcon,
  IonNav,
} from "@ionic/react"
import { bagOutline } from "ionicons/icons"
import { useRef, useState } from "react"
import { useLocation, useParams } from "react-router"
import { CreateOrderInput, MenuItem } from "../API"
import { usePlaceById } from "../hooks/usePlace"
import { formatPrice } from "../lib/formatPrice"
import { OnsiteMenuPageItemModal } from "./OnsiteMenuPageItemModal"
import { OrderModal } from "./OrderModal"

const newOrder = (): CreateOrderInput => ({
  items: [],
})

export const OnsiteMenuPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>()
  const [order, setOrder] = useState<CreateOrderInput>(newOrder())
  const [showOrderModal, setShowOrderModal] = useState(false)
  const { placeId } = useParams<{ placeId: string }>()
  const { place, loading } = usePlaceById(placeId)
  const page = useRef(null)
  // const { search } = useLocation()
  // const query = new URLSearchParams(search)

  if (loading || !place) return null

  return (
    <>
      <IonPage ref={page}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{place.name}</IonTitle>
            {order.items.length > 0 && (
              <IonButtons slot="end">
                <IonButton className="relative" onClick={() => setShowOrderModal(true)}>
                  sacola ({order.items.length})
                  <IonIcon icon={bagOutline} size="small" slot="start" />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonList className="pb-10">
            {place.menuGroups?.items.map(
              (group) =>
                group && (
                  <IonItemGroup key={group.name}>
                    <IonItemDivider color="light" sticky>
                      <IonLabel>{group.name}</IonLabel>
                    </IonItemDivider>
                    {group.items.map((item) => (
                      <IonItem
                        class="cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                        key={`${item.name}_${item.description}`}
                      >
                        <IonLabel>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <p>{formatPrice(item.price)}</p>
                        </IonLabel>
                        <IonThumbnail slot="end">
                          <IonImg className="rounded-md" alt="" src="https://via.placeholder.com/150" />
                          {/* <IonImg alt="" src={item?.images?.small || undefined} /> */}
                        </IonThumbnail>
                      </IonItem>
                    ))}
                  </IonItemGroup>
                )
            )}
          </IonList>
        </IonContent>
      </IonPage>

      <OnsiteMenuPageItemModal
        pageRef={page.current}
        isOpen={!!selectedItem}
        item={selectedItem}
        onDismiss={() => setSelectedItem(undefined)}
        onAddOrderItem={(newItem) => setOrder({ ...order, items: [...order.items, newItem] })}
      />

      <OrderModal
        order={order}
        isOpen={showOrderModal}
        onDismiss={() => setShowOrderModal(false)}
        pageRef={page.current}
      />
    </>
  )
}
