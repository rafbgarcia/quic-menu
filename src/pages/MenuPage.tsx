import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonButton,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonAvatar,
  IonThumbnail,
  IonNote
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from "aws-amplify"
import * as types from "../API"
import { getPlace } from "../graphql/queries"

const fetchPlace = async (id: string, setPlace: any) => {
  const json = await API.graphql({ query: getPlace, variables: { id } })
  setPlace((json as any).data.getPlace)
}

export const MenuPage: React.FC = () => {
  const [place, setPlace] = useState<types.Place>()
  const { placeId } = useParams<{ placeId: string }>()
  useEffect(() => {
    fetchPlace(placeId, setPlace)
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{place?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{place?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
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
        </IonContent>
      </IonContent>
    </IonPage >
  );
};
