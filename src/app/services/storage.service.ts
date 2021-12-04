import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/storage';

import { environment } from '../../environments/environment';

firebase.initializeApp(environment.firebase);

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    storareRef=firebase.app().storage().ref();

    constructor() { }

    getUrl(path:string){
        return this.storareRef.child(path).getDownloadURL();
    }
    
}
