import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyService } from '../app.service';


@Component({
  selector: 'app-submit',
  templateUrl: 'app.edit.module.html',
  styles: ['h1 {text-align: center;}','input {width: 100%; margin-bottom: 10px;}']
})


export class EditModal {
    title = "";
    body = "";
    display: boolean = false;

  constructor(public matDialog: MatDialog, public myService: MyService) {

  }
  ngOnInit () {
    this.myService.selectPost.subscribe(
        (data) => {
            console.log(data)
            this.title = data.title;
            this.body = data.body; 
        })
  }

  showDialog() {
      this.display = true;
  }

  closeModal(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.myService.editPst(this.title, this.body)
    this.matDialog.closeAll();

  }
}