import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSharedServicesService {

  constructor() { }

  downloadArchives(event: any, control: string) {
    event.preventDefault();
    event.stopPropagation();
    const linkSource = control;
    const downloadLink = document.createElement('a');

    let type = '';
    let haveToCount = false;

    for (let i = 0; i < control.length; i++) {
      if (control.charAt(i) === ';') {
        haveToCount = false;
        break;
      }

      if (haveToCount) { type += control.charAt(i); }

      if (control.charAt(i) === '/') { haveToCount = true; }
    }

    if (type === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet') { type = 'csv'; }
    if (type === 'plain') { type = 'txt'; }
    if (type === 'vnd.openxmlformats-officedocument.wordprocessingml.document') { type = 'docx'; }

    const fileNumber = Math.floor(Math.random() * 10000);
    const fileName = `wwfile${fileNumber}.${type}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  clearArchives(formName: any) {
    formName.setValue('');
  }
}
