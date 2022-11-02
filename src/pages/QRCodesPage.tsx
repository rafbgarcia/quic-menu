import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useState } from "react"
import QRCode from "react-qr-code"
import { usePlace } from "../hooks/usePlace"

export const QRCodesPage: React.FC = () => {
  const { place, loading } = usePlace()
  const [count, setCount] = useState("1")

  if (count === "") setCount("1")
  if (!place || loading || count === "") return null

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
      <IonContent className="ion-padding">
        <IonLabel position="stacked">
          Digite o numero de mesas para gerar QRCodes
        </IonLabel>
        <IonInput
          onIonInput={(e: any) => setCount(e.target.value)}
          placeholder="Ex: 10"
          clearInput
        />
        <div style={{ columns: 3 }}>
          {Array(parseInt(count))
            .fill(1)
            .map((_, i) => (
              <div>
                <QRCode
                  value={`http://10.0.0.149:8100/${place.id}/onsite-menu?mesa=${
                    i + 1
                  }`}
                />
              </div>
            ))}
        </div>
      </IonContent>
    </IonPage>
  )
}
