import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestTableStatus'
})
export class RequestTableStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      //OJO, IMPORTANTE: Status, las siguientes opciones: Aprobado, Pendiente de Informacion Medica, 
      //Pendiente de Informacion General, Declinado
      case '0':
        return 'New';

      case '1':
        return 'In Process';

      case '2':
        return 'Completado';

      case 0:
        return 'New';

      case 1:
        return 'In Process';

      case 2:
        return 'Completado';

      default:
        return 'Indeterminado';
    }
  }

}
