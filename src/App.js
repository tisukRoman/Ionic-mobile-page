import './App.css'
import '@ionic/react/css/ionic.bundle.css'
import { IonApp, IonContent } from '@ionic/react'
import { Subscribe } from './Screens/Subscribe'

function App() {
  return (
    <IonApp>
      <IonContent>
        <Subscribe />
      </IonContent>
    </IonApp>
  );
}

export default App;
