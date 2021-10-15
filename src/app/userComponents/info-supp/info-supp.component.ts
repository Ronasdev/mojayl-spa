import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-supp',
  templateUrl: './info-supp.component.html',
  styleUrls: ['./info-supp.component.scss']
})
export class InfoSuppComponent implements OnInit {

  form: FormGroup = new FormGroup({}) ;
  close:any=false;
  image="../../../assets/images/profil.png";

  constructor( private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      photo: '',
      card: ''
    });
  }

  selectFiles(event:any){
    if(event.target.files){
      let reader =new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =(event:any)=>{
        this.image= event.target.result;
      }
    }
  }

  submit(){
  //   const formData = this.form.getRawValue();
  //   const data = {
  //   photo: formData.photo,
  //   identity: formData.card
  //   };
  //   this.image= formData.value.photo;
  //   sessionStorage.setItem('photo', this.form.value.photo);
  //   sessionStorage.setItem('card', this.form.value.card);
  //  this.close=true;
    this.router.navigate(['/login']);

  }

}
