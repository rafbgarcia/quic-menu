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
  IonNavLink,
  IonPage,
} from "@ionic/react"
import { useEffect, useRef, useState } from "react"
import { useLocation, useParams } from "react-router"
import { MenuItem } from "../API"
import { usePlaceById } from "../hooks/usePlace"
import { OnsiteMenuPageItem } from "./OnsiteMenuPageItem"

export const OnsiteMenuPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>()
  const { placeId } = useParams<{ placeId: string }>()
  const { place, loading } = usePlaceById(placeId)
  const { search } = useLocation()
  const page = useRef(null)
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null)

  useEffect(() => {
    setPresentingElement(page.current)
  }, [page])

  const query = new URLSearchParams(search)

  if (loading || !place) return null

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{place.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {place.menuGroups?.items.map(
            (group) =>
              group && (
                <IonItemGroup key={group.name}>
                  <IonItemDivider color="light" sticky>
                    <IonLabel>{group.name}</IonLabel>
                  </IonItemDivider>
                  {group.items.map((item) => (
                    <IonItem
                      class="cursor-pointer bg-hover"
                      onClick={() => setSelectedItem(item)}
                      key={`${item.name}_${item.description}`}
                    >
                      <IonLabel>
                        <h3>{item.name}</h3>

                        <p>{item.description}</p>
                        <p>
                          {item.price &&
                            new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.price)}
                        </p>
                      </IonLabel>
                      <IonThumbnail slot="end">
                        <img alt="" src="https://via.placeholder.com/150" />
                        {/* <img src={item?.images?.small || undefined} /> */}
                      </IonThumbnail>
                    </IonItem>
                  ))}
                </IonItemGroup>
              )
          )}
        </IonList>
        <OnsiteMenuPageItem
          pageRef={page.current}
          item={selectedItem}
          setItem={setSelectedItem}
        />
      </IonContent>
    </IonPage>
  )
}
