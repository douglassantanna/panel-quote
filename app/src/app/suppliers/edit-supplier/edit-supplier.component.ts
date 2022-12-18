import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/suppliers/interfaces/ISupplier';

import { SupplierService } from './../service/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {
  supplierForm: FormGroup = {} as FormGroup;
  title = 'Novo Fornecedor';
  constructor(
    private _formBuilder: FormBuilder,
    private supplierservice: SupplierService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const supplier: Supplier = this.route.snapshot.data['supplier'];
    if (supplier.id) {
      this.title = 'Editar Fornecedor';
    }
    this.supplierForm = this._formBuilder.group({
      id: [supplier.id],
      name: [supplier.name, [Validators.required]],
      internalResponsable: [supplier.internalResponsable, [Validators.required]],
      phoneNumber: [supplier.phoneNumber, [Validators.required]],
      description: [supplier.description, [Validators.required]],
      email: [supplier.email, [Validators.required]],
      address: this._formBuilder.group({
        street: [supplier.address.street, [Validators.required]],
        number: [supplier.address.number, [Validators.required]],
        zipcode: [supplier.address.zipcode, [Validators.required]],
        neighborhood: [supplier.address.neighborhood, [Validators.required]],
        city: [supplier.address.city, [Validators.required]],
        country: [supplier.address.country, [Validators.required]],
      })
    })
  }

  submit() {
    if (this.supplierForm.valid) {
      if (this.supplierForm.value.id) {
        this.supplierservice.updateSupplier(this.supplierForm.value).subscribe((x) => {
          this.router.navigate(["/suppliers"]);
          alert('Fornecedor atualizado');
        }, e => {
          alert('Ocorreu um erro ao atualizar o Fornecedor')
        })
      }
      else {
        this.supplierservice.createSupplier(this.supplierForm.value).subscribe((x) => {
          this.router.navigate(["/suppliers"]);
          alert("Fornecedor cadastrado.")
        }, e => {
          alert("ocorreu um erro ao criar o Fornecedor")
        })
      }
    }
  }
}
