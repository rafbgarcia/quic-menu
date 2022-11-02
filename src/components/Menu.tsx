import {
  IonLabel,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonThumbnail,
  IonNavLink,
} from "@ionic/react"
import * as types from "../API"
import { DashboardPage } from "../pages/DashboardPage"
import { MenuPage } from "../pages/MenuPage"
import { OnsiteMenuPage } from "../pages/OnsiteMenuPage"
import { OnsiteMenuPageItem } from "../pages/OnsiteMenuPageItem"

type MenuProps = {
  place: types.Place
}

export const Menu = ({ place }: MenuProps) => {
  return (
    <IonList>
      {place.menu.map((group) => (
        <IonItemGroup key={group.name}>
          <IonItemDivider color="light" sticky>
            <IonLabel>{group.name}</IonLabel>
          </IonItemDivider>
          {group.items.map((item) => (
            <IonNavLink
              routerDirection="forward"
              component={() => <OnsiteMenuPageItem />}
              key={`${item.name}_${item.description}`}
            >
              <IonItem class="cursor-pointer bg-hover">
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
            </IonNavLink>
          ))}
        </IonItemGroup>
      ))}
    </IonList>
  )
}
