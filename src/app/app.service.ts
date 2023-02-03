import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class MyService {

private myTitle = new BehaviorSubject<string>('service');
private myBody = new BehaviorSubject<string>('service');
private editPost = new BehaviorSubject<{title: string, body: string}>({title: 'title', body: "body"});
private selectedId = new BehaviorSubject<{title: string, body: string}>({title:'title', body: 'body'});
currentTitle = this.myTitle.asObservable();
currentBody = this.myBody.asObservable();
editedTitle = this.editPost.asObservable();
selectPost = this.selectedId.asObservable();

  constructor() {
  }

  addTitle(title: string) {
    this.myTitle.next(title);
  }
  addBody(body: string) {
    this.myBody.next(body);
  }
  editPst(title: string, body: string) {
    this.editPost.next({title: title, body: body});
  }

  selectId(title: string, body: string) {
    this.selectedId.next({title: title, body: body});
  }
}
