class ServerConstants {
	public static readonly HTTP_STATUS_CODES = {
		OK: 200,
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		FOBIDDEN: 403,
		ERROR: 500,
	};
	public static readonly STRINGS = {
		APP_NAME: "JCAS PAGOS",
		APP_VERSION: "v2.0.0",
		INTERNAL_SERVER_ERROR:
			"Algo salió mal. Favor de comunicarse con su administrador. Código de error 500.",
		// Unauth error strings
		NO_TOKEN: "Error. No token.",
		NO_AUTH: "Error. Falta cabecera de autorización.",
		NO_USER: "Token no válido. Usuario no existe en BD.",
		INACTIVE_USER: "Token no válido. Usuario inactivo.",
		INVALID_TOKEN: "Error. Token no válido.",
		// Error strings
		INCORRECT_EMAIL_OR_PASSWORD: "Email/contraseña incorrecto.",
		EMAIL_NOT_CONFIRMED: "El email de esa cuenta no ha sido confirmado.",
		INCORRECT_CURRENT_PASSWORD: "Contraseña actual incorrecta.",
		USER_ALREADY_SIGNEDUP: "Email ya registrado.",
		NO_PASSWORD: "La contraseña es obligatoria.",
		INVALID_PASSWORD_LENGTH:
			"La contraseña debe de contener al menos 6 caracteres.",
		INVALID_OPERATION: "Operación inválida.",
		USER_CAN_ONLY_HAVE_N_CUENTAS: "Solo puedes registrar 50 cuentas.",
		INVALID_LOCATION:
			"Es necesario proporcionar un id de organismo para realizar la consulta de datos.",
		INVALID_ACCOUNT_NUMBER:
			"Es necesario proporcionar un número de cuenta o de contrato válido para realizar la consulta de datos.",
		//extra error messages
		INVALID_ACCOUNT: "La cuenta no es correcta.",
		ACCOUNT_DOESNT_EXIST: "La cuenta no existe.",
		INVALID_USER: "El id de usuario no es correcto.",
		NO_EMAIL: "El usuario no cuenta con cuenta de correo electrónico.",
		//extra success messages
		PASSWORD_UPDATED: "Contraseña actualizada correctamente.",
		PASSWORD_RESET_REQUEST_SENT:
			"Se envíaron las instrucciones de cambio de contraseña al correo electrónico registrado para esta cuenta.",
		isRequired: (field: string) => `El campo ${field} es requerido.`,
	};
}

export default ServerConstants;
