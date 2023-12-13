import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from '@/auth/firebase/service-account-key.json';

@Injectable()
export class FirebaseService {
  firebaseApp: admin.app.App;

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.firebaseApp.auth().verifyIdToken(token);
      return true;
    } catch (error) {
      // throw new Error(error);
      return false;
    }
  }
}
