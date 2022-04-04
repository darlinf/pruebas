export interface BaseDialogModel {
    logo: string;
	title: string;
	text?: string;
	showButtons: boolean;
	showCancelButton?: boolean;
	textPrincipalButton?: string;
	textCancelButton?: string;
	buttonSize?: string;
	showInput?: boolean;
	email?: string;
	showDropDown?: boolean;
	showDropDownAssignNewUser?: boolean;
}
