import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react"
import { useLocation } from "react-router-dom"
import {
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons"

import { useAuthenticator } from "@aws-amplify/ui-react"
import "./Sidebar.css"

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Cardápios",
    url: "/menu",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "QRCodes",
    url: "/qrcodes",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
]

export const Sidebar: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const location = useLocation()

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{user.attributes?.email}</IonListHeader>
          <IonNote>
            Administrador |{" "}
            <a className="cursor-pointer" onClick={signOut}>
              Sair
            </a>
          </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
