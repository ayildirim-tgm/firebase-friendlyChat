import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyD6fm35cWXdeYBzxvoWoY3FQuBoF36SuB0",
    authDomain: "friendlychat-878c4.firebaseapp.com",
    projectId: "friendlychat-878c4",
    storageBucket: "friendlychat-878c4.firebasestorage.app",
    messagingSenderId: "980092139000",
    appId: "1:980092139000:web:148d3eb4a971264d26d20d"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => {
        return getMessaging();
    }),
    provideStorage(() => getStorage()),
    provideRouter(routes)
  ],
};