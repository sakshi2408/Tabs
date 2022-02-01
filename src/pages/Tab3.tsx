import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className="ion-padding">

          <IonLabel position="floating">Message</IonLabel>
          <IonInput type="text" />
          </IonItem>

        <IonButton className="ion-margin-top" type="submit" expand="block">
          Send
          </IonButton>
        </form>

      </IonContent>
    </IonPage >
  );
};

export default Tab3;
