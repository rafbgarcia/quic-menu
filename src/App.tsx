import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route } from "react-router-dom"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"
import "./theme/tailwind.css"

/* App specific */
import { IonNav } from "@ionic/react"

import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { I18n } from "aws-amplify"
import { translations } from "@aws-amplify/ui-react"

import awsExports from "./aws-exports"
import { Sidebar } from "./components/Sidebar"
import { MenuPage } from "./pages/MenuPage"
import { DashboardPage } from "./pages/DashboardPage"
import { OnsiteMenuPage } from "./pages/OnsiteMenuPage"
import { QRCodesPage } from "./pages/QRCodesPage"

Amplify.configure(awsExports)
setupIonicReact()
I18n.putVocabularies(translations)
I18n.setLanguage("pt")
I18n.putVocabularies({
  pt: {
    "Your passwords must match": "As senhas não são iguais",
    Email: "E-mail",
    "Incorrect username or password.": "E-mail ou senha incorretos",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Um código de verificação foi enviado para",
    "Your code is on the way. To log in, enter the code we texted to":
      "Um código de verificação foi enviado para",
    "Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.":
      "Enviamos um código de verificação para fazer login. Pode levar um minuto para chegar.",
    "It may take a minute to arrive.": "Pode levar um minuto para chegar.",
  },
})

const UserRoutes = () => {
  return (
    <IonSplitPane contentId="authenticated">
      <Sidebar />

      <IonRouterOutlet id="authenticated">
        <Route path="/" exact={true} component={DashboardPage} />
        <Route path="/menu" exact={true} component={MenuPage} />
        <Route path="/qrcodes" exact={true} component={QRCodesPage} />
      </IonRouterOutlet>
    </IonSplitPane>
  )
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Authenticator
            initialState="signIn"
            loginMechanisms={["email"]}
            variation="modal"
          >
            <Route path="/" component={UserRoutes} />
          </Authenticator>
          <Route
            path="/:placeId/onsite-menu"
            exact={true}
            component={OnsiteMenuPage}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
