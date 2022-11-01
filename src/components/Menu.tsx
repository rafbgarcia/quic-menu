import {
  IonLabel,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonThumbnail,
} from '@ionic/react';
import * as types from "../API"

type MenuProps = {
  place: types.CreatePlaceInput | types.Place
}

export const Menu = ({ place }: MenuProps) => {
  return (
    <IonList>
      {place?.menu?.map((group) => (
        <IonItemGroup key={group?.name}>
          <IonItemDivider color="light" sticky>
            <IonLabel>{group?.name}</IonLabel>
          </IonItemDivider>
          {group?.items?.map((item) => (
            <IonItem key={item?.name}>
              <IonLabel>
                <h3>{item?.name}</h3>

                <p>{item?.description}</p>
                <p>{item?.price && new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
              </IonLabel>
              <IonThumbnail slot="end">
                <img src="https://via.placeholder.com/150" />
                {/* <img src={item?.images?.small || undefined} /> */}
              </IonThumbnail>
            </IonItem>
          ))}
        </IonItemGroup>
      ))}
    </IonList>
  );
};
