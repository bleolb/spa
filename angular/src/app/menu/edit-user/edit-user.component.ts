import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { CrudService } from '../../services/crud.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:any;
  createuserForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private CrudService:CrudService,) {
       if (sessionStorage.getItem("user")) {
       this.user=JSON.parse(sessionStorage.getItem("user"));
    }
  }

  ngOnInit(): void {
      this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
       rol: ['', [Validators.required]],
       apellido: ['', [Validators.required]],
       edad: ['', [Validators.required]],
       email: ['', [Validators.required]],
    //   passw: ['', [Validators.required]],
    verifypassw: ['', [Validators.required]],
   });
  }

}
