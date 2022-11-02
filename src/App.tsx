import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route } from "react-router-dom"

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

/* App specific */
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { I18n } from "aws-amplify"
import { translations } from "@aws-amplify/ui-react"

import awsExports from "./aws-exports"
import { Sidebar } from "./components/Sidebar"
import { MenuPage } from "./pages/MenuPage"
import { DashboardPage } from "./pages/DashboardPage"

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
      </IonRouterOutlet>
    </IonSplitPane>
  )
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Authenticator
          initialState="signIn"
          loginMechanisms={["email"]}
          variation="modal"
        >
          <IonRouterOutlet id="main">
            <Route path="/" exact={true} component={UserRoutes} />
            <Route path="/:placeId/menu" exact={true} component={MenuPage} />
          </IonRouterOutlet>
        </Authenticator>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
