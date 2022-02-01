import ExploreContainer from '../components/ExploreContainer';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

import { IonApp, IonRouterOutlet, IonToolbar, IonCol, IonRow, IonGrid, IonIcon, IonHeader, IonItem, IonButton, IonLabel, IonCardContent, IonInput, IonCard, IonContent, setupIonicReact } from '@ionic/react';
import { useRef, useState } from 'react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */

//setupIonicReact();

const Tab1: React.FC = () => {
  const weightRef = useRef<HTMLIonInputElement>(null);
  const heightRef = useRef<HTMLIonInputElement>(null);
  const [calculatedBMI, setCalculatedBmi] = useState<number>();
  const calcBmi = () => {

    const height = +heightRef.current!.value!;
    const weight = +weightRef.current!.value!;
    const bmi = +weight / (height * height);
    setCalculatedBmi(bmi);
  };

  const refresh = () => {
    heightRef.current!.value = null;
    weightRef.current!.value = null;
    setCalculatedBmi(0);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          BMI CALCULATOR
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className='ion-text-left'>
              <IonItem>
                <IonLabel position="floating">
                  Enter height
            </IonLabel>
                <IonInput ref={heightRef} type='number'>
                </IonInput>

              </IonItem>
            </IonCol>
            <IonCol className='ion-text-right'>
              <IonItem>
                <IonLabel position="floating">
                  Enter Weight
        </IonLabel>
                <IonInput ref={weightRef} type='number'>
                </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton onClick={calcBmi}>
                <IonIcon slot='start' icon={calculatorOutline}>
                </IonIcon>
                Calculate
            </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={refresh}>
                <IonIcon slot='start' icon={refreshOutline}>
                </IonIcon>
                Reset
            </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard>
          <IonCardContent>
            <h2> {calculatedBMI}</h2>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp >
  );
};

export default Tab1;
