import { Component, OnInit } from '@angular/core';
import { Attachment } from 'src/app/models/attachment.model';
import { Equipment } from 'src/app/models/equipment.model';
import { EquipmentsService } from 'src/app/services/equipments.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public reportCode: string = "11119977777777CH";

  public equipment: Equipment = new Equipment();

  public get url(): string {
    return `${environment.apiUrl}/api/attachments/Upload`;
  }

  constructor(
    private equipmentsService: EquipmentsService
  ) { }

  ngOnInit(): void {
    this.load();
  }

	// evento caricamento nuovo allegato
	public onUpload(event: any) {
    var attachment = (event.originalEvent.body as Attachment);
    console.log("onUpload", attachment);
    this.load();
	}  

  public onExportButton_Click() {
    console.log("on export");
    this.equipmentsService.download().subscribe(data => {
      console.log("downloaded");
    });
  }

  private load() {
    this.equipmentsService.details().subscribe(data => {
      this.equipment = data;
      console.log("this.equipment", this.equipment);
    });
  }

}
