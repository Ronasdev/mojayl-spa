import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annonce-update',
  templateUrl: './annonce-update.component.html',
  styleUrls: ['./annonce-update.component.scss']
})
export class AnnonceUpdateComponent implements OnInit {

  annonceId:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.annonceId = this.route.snapshot.params['id'];
    console.log(this.annonceId);

  }

}
