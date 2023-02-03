import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyService } from '../app.service';


@Component({
  selector: 'app-submit',
  templateUrl: 'app.submit.module.html',
  styles: ['h1 {text-align: center;}','input {width: 100%; margin-bottom: 10px;}']
})


export class SubmitModal {
  title = "";
  body = "";
  submitDialoge: MatDialogRef<SubmitModal> | undefined;
  constructor(public matDialog: MatDialog, public myService: MyService) {

  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  closeModal() {
    this.myService.addTitle(this.title);
    this.myService.addBody(this.body);

    this.matDialog.closeAll();
  }
}