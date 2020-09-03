import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  rForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      "name": ['', [Validators.required, Validators.minLength(3)]],
      "price": ['', [Validators.required, Validators.min(5000)]],
      "shipping": ['',[Validators.required, Validators.max(500)]]
    });
   }

  ngOnInit(): void {
  }

}
