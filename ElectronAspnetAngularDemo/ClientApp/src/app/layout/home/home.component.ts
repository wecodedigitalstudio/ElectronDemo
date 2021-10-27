import { Component, OnInit } from '@angular/core';
import { Attachment } from 'src/app/models/attachment.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public reportCode: string = "11119977777777CH";

  public get url(): string {
    return `${environment.apiUrl}/api/attachments/Upload`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectFileButton_Click() {
    console.log("on select");
  }

	// evento caricamento nuovo allegato
	public onUpload(event: any) {
    var attachment = (event.originalEvent.body as Attachment);
    console.log("onUpload", attachment);
	}  

  public onExportButton_Click() {
    console.log("on export");
  }

}
