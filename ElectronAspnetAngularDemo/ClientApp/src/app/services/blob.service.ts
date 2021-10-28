import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BlobService {

  constructor() { }

  protected saveFile(response: HttpResponse<Blob>, filename: string) {
    var downloadURL = window.URL.createObjectURL(response.body);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.setAttribute('download', filename as string);
    link.click();
  }


}
