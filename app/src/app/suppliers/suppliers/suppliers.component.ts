import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { Supplier } from '../interfaces/ISupplier';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})


export class SuppliersComponent implements OnInit {
  suppliers$!: Observable<Supplier[]>;
  displayedColumns: string[] = ['name', 'phoneNumber', 'internalResponsable', 'actions'];
  constructor(
    private router: Router,
    private supplierService: SupplierService,
    private dialog: MatDialog) {
    this.getSuppliers();
  }

  private getSuppliers() {
    this.suppliers$ = this.supplierService.getSuppliers().pipe(
      catchError(error => {
        this.errorMsg('Erro ao carregar fornecedores!');
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }
  errorMsg(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  newSupplier() {
    this.router.navigate(['/new-supplier']);
  }
  editSupplier(id: number) {
    this.router.navigate(['/edit-supplier', id]);
  }
  deleteSupplier(id: number) {
    this.supplierService.delete(id).subscribe((x) => {
      this.getSuppliers();
    });
  }
}

