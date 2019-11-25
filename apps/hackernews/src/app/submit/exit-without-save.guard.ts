import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { CreateLinkComponent } from './create-link/create-link.component';
import { ExitWithoutSaveDialogComponent } from '../exit-without-save-dialog/exit-without-save-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ExitWithoutSaveGuard
  implements CanDeactivate<CreateLinkComponent> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(
    component: CreateLinkComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    if (component.linkForm.dirty) {
      const dialogRef = this.dialog.open(ExitWithoutSaveDialogComponent);
      return dialogRef.afterClosed();
    } else {
      return true;
    }
  }
}
