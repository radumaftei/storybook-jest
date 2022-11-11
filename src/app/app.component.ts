import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogTestComponent} from "./dialog-test/dialog-test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storybook-jest-app';

  constructor(private matDialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(DialogTestComponent, {});

    dialogRef.afterOpened()
      .subscribe({
        next: (e) => {
          console.log('Opened with', e);
        }
      });

    dialogRef.afterClosed()
      .subscribe({
        next: (e) => {
          console.log('Closed with', e);
        }
      });
  }
}
