import { Injectable } from '@angular/core';
import { BaseDialogModel } from '../components/base-dialog/models/base-dialog-model';

@Injectable({
  providedIn: 'root'
})
export class DialogOptionService {

  constructor() { }

  logoutConfirmation: BaseDialogModel = {
		logo: 'warning',
		title: 'Confirmación',
		text: '¿Esta seguro de que quiere cerrar sesión?',
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Cerrar sesión',
		textCancelButton: 'Cancelar'
	};

	errorServer: BaseDialogModel = {
		logo: 'error',
		title: 'Ha ocurrido error',
		text: 'Ha ocurrido un error al intentar realizar la petición',
		showButtons: false
	};

	cancelRequest: BaseDialogModel = {
		logo: 'warning',
		title: 'Cancelar',
		text: `Se procederá a salir al menu, ¿esta seguro?`,
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Salir',
		textCancelButton: 'No'
	};

	exitConfirm: BaseDialogModel = {
		logo: 'warning',
		title: 'Tiene trabajo sin guardar',
		text: `¿Está seguro de que quiere salir?`,
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Salir',
		textCancelButton: 'Permanecer'
	};

	policyConfirm: BaseDialogModel = {
		logo: 'check',
		title: 'Cambio de Poliza',
		text: `¿Está seguro de que quiere confirmar este cambio de poliza?`,
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Confirmar',
		textCancelButton: 'Salir'
	};

	policyDeny: BaseDialogModel = {
		logo: 'warning',
		title: 'Cambio de Poliza',
		text: `¿Está seguro de que quiere rechazar este cambio de poliza?`,
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Confirmar',
		textCancelButton: 'Salir'
	};

	WIP: BaseDialogModel = {
		logo: 'warning',
		title: 'WIP',
		text: `Esta funcionalidad todavía no esta disponible; puede guardar el formulario.`,
		showButtons: false,
	};

	idNumberNotFound: BaseDialogModel = {
		logo: 'warning',
		title: 'No se ha encontrado ningún asegurado',
		text: `Intente con otro numero de ID`,
		showButtons: false,
	};

	noCNotFound: BaseDialogModel = {
		logo: 'warning',
		title: 'No se ha encontrado ningúna cotización',
		text: `Intente con otro numero de cotización o solicite una nueva cotización`,
		showButtons: false,
	};

	noAccess: BaseDialogModel = {
		logo: 'warning',
		title: 'Acceso invalido',
		text: `Usted no tiene los permisos para acceder a esta sección del portal`,
		showButtons: false,
	};

	policySuccess: BaseDialogModel = {
		logo: 'check',
		title: 'Confirmación',
		text: `El cambio de poliza ha sido confirmado`,
		showButtons: false,
	};

	policyDenySuccess: BaseDialogModel = {
		logo: 'check',
		title: 'Confirmación',
		text: `El cambio de poliza ha sido rechazada`,
		showButtons: false,
	};

	sendInvitationLink: BaseDialogModel = {
		logo: 'warning',
		title: 'Introducir correo electrónico',
		showButtons: true,
		showCancelButton: true,
		textPrincipalButton: 'Solicitar',
		textCancelButton: 'Cancelar',
		showInput: true,
		email: '',
	};

	noAvaliableChanges: BaseDialogModel = {
		logo: 'warning',
		title: 'No se han encontrados cambios disponibles',
		text: `Esta poliza no tiene cambios disponibles de este tipo`,
		showButtons: false,
	};

	deleteConfirm(title: string) {
		return {
			logo: 'warning',
			title: `Confirmación`,
			text: `¿Esta seguro que de eliminar esta ${title}?`,
			showButtons: true,
			showCancelButton: true,
			textPrincipalButton: 'Eliminar',
			textCancelButton: 'Cancelar'
		};
	}

	deleteConfirmed(title: string) {
		return {
			logo: 'check',
			title: `Confirmación`,
			text: `Se ha eliminado correctamente la solicitud de ${title}`,
			showButtons: false,
		};
	}

	sendForm(form: string) {
		return {
			logo: 'warning',
			title: 'Confirmación',
			text: `Se procederá a enviar la solicitud de ${form}`,
			showButtons: true,
			showCancelButton: true,
			textPrincipalButton: 'Enviar',
			textCancelButton: 'Cancelar'
		};
	}

	confirmedForm(form: string) {
		return {
			logo: 'check',
			title: 'Confirmación',
			text: `Hemos recibido su solicitud`,
			showButtons: false,
		};
	}

	idNumberFound(data: any) {
		return {
			logo: 'check',
			title: `${data.asegurado.nombres_asegurado} ${data.asegurado.apellidos_asegurado}`,
			text: `Se encontró el siguiente asegurado`,
			showButtons: false,
		};
	}

	QuoteFound(data: any) {
		return {
			logo: 'check',
			title: `${data.nombre} Para Tipo Seguro ${data.tipoSeguro}`,
			text: `Se encontró el siguiente asegurado`,
			showButtons: false,
		};
	}

	noCFound(data: any) {
		return {
			logo: 'check',
			title: `Cotización encontrada`,
			text: `Se encontró la cotización asignada a ${data.nombre} ${data.apellidos}`,
			showButtons: false,
		};
	}

	saveForm(form: string) {
		return {
			logo: 'warning',
			title: 'Confirmación',
			text: `Se procederá a guardar la solicitud de ${form}`,
			showButtons: true,
			showCancelButton: true,
			textPrincipalButton: 'Guardar',
			textCancelButton: 'Cancelar'
		};
	}

	confirmedSavedForm(form: string) {
		return {
			logo: 'check',
			title: 'Confirmación',
			text: `La solicitud de ${form} ha sido guardada`,
			showButtons: false,
		};
	}

	confirmedInvitationForm(form: string) {
		return {
			logo: 'check',
			title: 'Confirmación',
			text: `El link de edición ${form} ha sido enviado de manera exitosa al cliente`,
			showButtons: false,
		};
	}

	getInvalidControls(invalidControls: any[]) {
		return {
			logo: 'warning',
			title: 'Campos Inválidos',
			text: 'Revisar las secciones y los campos que aparecen en rojo',
			showButtons: false
		};
	}

	saveSettings() {
		return {
			logo: 'warning',
			title: 'Confirmación',
			text: `Se procederá a guardar los cambios en Configuración`,
			showButtons: true,
			showCancelButton: true,
			textPrincipalButton: 'Guardar',
			textCancelButton: 'Cancelar'
		};
	}

	confirmedSavedSettings() {
		return {
			logo: 'check',
			title: 'Confirmación',
			text: `Los cambios en Configuración han sido guardados`,
			showButtons: false,
		};
	}

	settingsInvalid() {
		return {
			logo: 'warning',
			title: 'Campos Inválidos',
			text: 'Revisar los campos que aparecen en rojo',
			showButtons: false
		};
	}

	saveAdministrationPolicy() {
		return {
			logo: 'warning',
			title: 'Confirmación',
			text: `Se procederá a guardar los cambios en Administración de Pólizas`,
			showButtons: true,
			showCancelButton: true,
			textPrincipalButton: 'Guardar',
			textCancelButton: 'Cancelar'
		};
	}

	confirmedSavedAdministrationPolicy() {
		return {
			logo: 'check',
			title: 'Confirmación',
			text: `Los cambios en Administración de Pólizas han sido guardados`,
			showButtons: false,
		};
	}

	AdministrationPolicyInvalid() {
		return {
			logo: 'warning',
			title: 'Campos Inválidos',
			text: 'Revisar los campos que aparecen en rojo',
			showButtons: false
		};
	}

	selectDropDown(title: string, options) {
		return {
			title: `Seleccionar ${title}`,
			// text: `¿Esta seguro de que desea borrar esta solicitud de ${title}?`,
			showButtons: true,
			showCancelButton: true,
			showDropDown: true,
			textPrincipalButton: 'Aceptar',
			textCancelButton: 'Cancelar',
			dataOptions: options
			//Nota: Revisar el proyecto de Humano para ver como lo hizo Isai, pero ahora mismo lo ideal que se me ocurre 
			//es que, a la hora de pasar la data al dropdown, es primero pasarla a una variable cualquiera,
			//y de ahi pasar dicha variable a este metodo, para ver si no ocurre el problema de 
			//performance que sucedia en el proyecto de Humano a la hora de enviar mucha data.
			// OJO, REVISAR ESTO
		};
	}

	selectAssignRoles(title: string, options) {
		return {
			mainTitle: `ASIGNAR NUEVO ${title}`,
			rolesTitle: `Roles`,
			bouquetTitle: `Ramo`,
			marketTitle: `Mercado`,
			amountTitle: `Monto`,
			showButtons: true,
			showCancelButton: true,
			showDropDownAssignRoles: true,
			textPrincipalButton: `Aceptar`,
			textCancelButton: `Cancelar`,
			dataOptions: options
		}
	}

	 confirmedEscalateAnalist(nameAnalista) {
		return {
			logo: 'check',
			title: 'Escalada',
			text: `Solicitud escalada a ${nameAnalista}`,
			showButtons: true,
			showCancelButton: false,
			textPrincipalButton: 'Aceptar',
		};
	}
}
