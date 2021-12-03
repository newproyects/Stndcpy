import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-homepage1',
    templateUrl: './homepage1.component.html',
    styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {
    titulos: Observable<any[]>;
    
    constructor(firestore: AngularFirestore) {
	this.titulos = firestore.collection('titulos').valueChanges();
    }

    ngOnInit(): void {
    }

}
