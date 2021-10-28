import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Equipment } from '../models/equipment.model';
import { BlobService } from './blob.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService extends BlobService {

	constructor(private http: HttpClient) { super(); }

  public details(): Observable<Equipment> {
		return this.http.get<Equipment>(`${environment.apiUrl}/api/equipments`);
	}

  public download(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/eqipments/download`, {}, { responseType: 'blob', observe: 'response'}).pipe(
      map((result: HttpResponse<Blob>) => {
        this.saveFile(result, 'bd.txt');
        return result;
      })
    )
  }

}
