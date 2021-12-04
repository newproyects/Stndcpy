import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { StorageService } from '../../../services/storage.service';

@Component({
    selector: 'app-homepage1',
    templateUrl: './homepage1.component.html',
    styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {
    titulos: Observable<any[]>;
    
    imagen1="";
    
    constructor(firestore: AngularFirestore,private storageService:StorageService) {
	this.titulos = firestore.collection('titulos').valueChanges();
	this.sacarUrl('user/consultor 1638602043400');
    }

    sacarUrl(urlp:string): any{
        this.storageService.getUrl(urlp).then(async(downloadURL) => {
            this.imagen1=downloadURL;
        });
    }


    ngOnInit(): void {
    }

}
