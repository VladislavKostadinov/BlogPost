import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DeleteModal } from './app-actions/app.delete.module';
import { EditModal } from './app-actions/app.edit.module';
import { SubmitModal } from './app-actions/app.submit.module';
import { MyService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  dialogConfig = new MatDialogConfig();
  submitDialoge: MatDialogRef<SubmitModal, any> | undefined;
  editDialoge: MatDialogRef<EditModal, any> | undefined;
  deleteDialoge: MatDialogRef<DeleteModal, any> | undefined;
  
  title = 'blog';
  blogData: any = [{}];
  newTitle = "";
  newBody = "";
  selectedPost = {userId: 0, id: 0, title: "", body: ""};
  constructor(private http: HttpClient, public matDialog: MatDialog, public myService: MyService) {

  }
  configUrl = "https://jsonplaceholder.typicode.com/posts/";


  ngOnInit() {
    this.myService.currentTitle.subscribe(
      (data: any) => this.newTitle = data
    )
    this.myService.currentBody.subscribe(
      (data) => this.newBody = data
    )
    this.http.get<[{}]>(this.configUrl).subscribe((data) => {
      this.blogData = data;

    }
    )
  }

  openSubmitModal() {
    this.submitDialoge = this.matDialog.open(SubmitModal, {height: '220px', width: '350px', position: {top: '0px'}});
    //   this.submitDialoge.afterClosed().subscribe(result => {
    //     console.log(result);
    //   this.blogData.push({id: this.blogData.length + 1, userId: 1, title: result.title, body: result.body});
    // })
    this.submitDialoge.afterClosed().subscribe(
      () => {
        if (this.newBody && this.newTitle) {
        this.blogData.push({userId: 1, id: this.blogData.length + 1, title: this.newTitle, body: this.newBody});
        console.log(this.blogData)
      }
      }
    )
  }
  openEditModal(title: string, body: string, id: number) {
    this.editDialoge = this.matDialog.open(EditModal, {height: '220px', width: '350px', position: {top: '0px'}});

    this.editDialoge.afterClosed().subscribe(
      () => {
        this.myService.editedTitle.subscribe(
          (data) => {console.log(data)
          // this.selectedPost = this.blogData.find((x: { id: number; }) => x.id === id);
          this.blogData[id-1].title = data.title;
          this.blogData[id-1].body = data.body;
          console.log(this.blogData)
           })

      }
    )
    this.myService.selectId(title, body);
  }
  openDeleteModal(id: number) {
    this.deleteDialoge = this.matDialog.open(DeleteModal, {height: '220px', width: '350px', position: {top: '0px'}});
    this.deleteDialoge.afterClosed().subscribe(
      () => { 
        delete this.blogData[id-1]; } )
  }
}

