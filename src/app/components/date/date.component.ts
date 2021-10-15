import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {


  constructor(private annonce:AnnonceService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  setDate(form:NgForm){
    if (form.value['date'].match(/^[^0]/)) {
      const date = form.value['date'];
      this.annonce.topicality.start_date = date;
     this.router.navigate(['transporter','weight']);
    }
    else{
        this.toastr.error("Votre date est incorecte");
    }


  }
}
