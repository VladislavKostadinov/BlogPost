import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button'
import { SubmitModal } from './app-actions/app.submit.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { EditModal } from './app-actions/app.edit.module';
import { DeleteModal } from './app-actions/app.delete.module';
import { FormsModule } from '@angular/forms';
import { MyService } from './app.service';



@NgModule({
  declarations: [AppComponent, SubmitModal, EditModal, DeleteModal],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), HttpClientModule, TableModule, ButtonModule, MatButtonModule, MatDialogModule,
  DialogModule, FormsModule],
  providers: [MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
