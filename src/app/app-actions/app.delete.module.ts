import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-submit',
  templateUrl: 'app.delete.module.html',
  styles: ['h1 {text-align: center;}','input {width: 100%; margin-bottom: 10px;}', '.closeBtn {float: right;}']
})


export class DeleteModal {

  constructor(public matDialog: MatDialog) {

  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  closeModal() {
    this.matDialog.closeAll();
  }
  deletePost() {
    console.log('Post has been deleted.');
    this.matDialog.closeAll();
  }
}