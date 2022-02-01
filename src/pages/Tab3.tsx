import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const printMeassage = () => {

    alert("your response has been submitted");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Contact us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Message</IonLabel>
            <IonInput type="text" />
          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block" onClick={printMeassage}>
            Send
        </IonButton>
        </form>


      </IonContent>
    </IonPage >
  );
};

export default Tab3;
