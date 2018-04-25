import { ScvToJsonService } from '../../services/scvToJson.service';
import { Component, OnInit } from '@angular/core';
import { DataSource} from '@angular/cdk/collections';
import {User} from '../../model/user.model';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-file-upload',
  styleUrls: ['./file-upload.component.css'],
  templateUrl: './file-upload.component.html'
})

export class FileUploadComponent {
  constructor(private scvToJsonService: ScvToJsonService) {}
  selectedFile = null;
  onFileSelected(event) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    this.scvToJsonService.convertFile(this.selectedFile);
  }

  public dropped(event: UploadEvent) {
    console.log('dropped');
    const f_ = event.files[0];
    if (f_.fileEntry.isFile) {
      const fileEntry = f_.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.scvToJsonService.convertFile(file);
      });
  }
}

public fileOver(event) {
    console.log('over');
  }

  public  fileLeave(event) {
    console.log('leave');
  }
}
