<?php

$lang = array(

//----------------------------
// General word list
//----------------------------

'no' =>
'No',

'yes' =>
'Si',

'on' =>
'encendido',

'off' =>
'apagado',

'first' =>
'Primero',

'last' =>
'Último',

'enabled' =>
'Disponible',

'disabled' =>
'disabled',

'back' =>
'Atrás',

'submit' =>
'Enviar',

'update' =>
'Actualizar',

'thank_you' =>
'Gracias!',

'page' =>
'Página',

'of' =>
'de',

'by' =>
'por',

'at' =>
'en',

'dot' =>
'punto',

'and' =>
'y',

'or' =>
'o',

'id' =>
'ID',

'encoded_email' =>
'(JavaScript must be enabled to view this email address)',

'search' =>
'Buscar',

'system_off_msg' =>
'Este sitio se encuentra actualmente inactivo.',

'not_authorized' =>
'Usted no está autorizado para realizar esta acción',

'auto_redirection' =>
'Usted será redirigido automáticamente en %x segundos',

'click_if_no_redirect' =>
'Haga clic aquí si no redirige automáticamente',

'return_to_previous' =>
'Volver a la página anterior',

'not_available' =>
'No disponible',

'setting' =>
'Setting',

'preference' =>
'Preference',

'pag_first_link' => '&lsaquo; Primero',
'pag_last_link' => 'Último &rsaquo;',

//----------------------------
// Errors
//----------------------------

'error' =>
'Error',

'generic_fatal_error' =>
'Something has gone wrong and this URL cannot be processed at this time.',

'invalid_url' =>
'The URL you submitted is not valid.',

'submission_error' =>
'La forma que ha enviado contenía los siguientes errores',

'general_error' =>
'Se han encontrado los siguientes errores',

'invalid_action' =>
'La acción que ha solicitado no es válido.',

'csrf_token_expired' =>
'Esta forma ha expirado. Por favor regenere y vuelva a intentarlo.',

'current_password_required' =>
'Se requiere su contraseña actual.',

'current_password_incorrect' =>
'Su contraseña actual no se presentó correctamente.',

'captcha_required' =>
'You must submit the word that appears in the image',

'captcha_incorrect' =>
'You did not submit the word exactly as it appears in the image',

'nonexistent_page' =>
'La página solicitada no fue encontrada',

'unable_to_load_field_type' =>
'No se puede cargar el archivo solicitado tipo de campo: %s. <br />
Confirme que el archivo FieldType se encuentra en el directorio ExpressionEngine / third_party /',

'unwritable_cache_folder' =>
'Your cache folder does not have proper permissions.<br>
To fix: Set the cache folder (/expressionengine/cache/) permissions to 777 (or equivalent for your server).',

'unwritable_config_file' =>
'Your configuration file does not have the proper permissions.<br>
To fix: Set the config file (/expressionengine/config/config.php) permissions to 666 (or equivalent for your server).',

'redirect_xss_fail' => 'The link you are being redirected to contained some
potentially malicious or dangerous code. We recommend you hit the back button
and email %s to report the link that generated this message.',

//----------------------------
// Member Groups
//----------------------------

'banned' =>
'Banned',

'guests' =>
'Guests',

'members' =>
'Members',

'pending' =>
'Pending',

'super_admins' =>
'Super Admins',


//----------------------------
// Template.php
//----------------------------

'error_tag_syntax' =>
'La siguiente etiqueta tiene un error de sintaxis:',

'error_fix_syntax' =>
'Por favor, corrija la sintaxis de la plantilla.',

'error_tag_module_processing' =>
'La siguiente etiqueta no puede ser procesada:',

'error_fix_module_processing' =>
'Por favor, compruebe que el \'%x\' módulo está instalado y que \'%y\' es un método disponible del módulo',

'template_loop' =>
'You have caused a template loop due to improperly nested sub-templates (\'%s\' recursively called)',

'template_load_order' =>
'Template load order',

'error_multiple_layouts' =>
'Multiple Layouts found, please ensure you only have one layout tag per template',

'error_layout_too_late' =>
'Plugin or module tag found before layout declaration. Please move the layout tag to the top of your template.',

'error_invalid_conditional' =>
'You have an invalid conditional in your template. Please review your conditionals for an unclosed string, invalid operators, a missing }, or a missing {/if}.',

'layout_contents_reserved' =>
'The name "contents" is reserved for the template data and cannot be used as a layout variable (i.e. {layout:set name="contents"} or {layout="foo/bar" contents=""}).',

//----------------------------
// Email
//----------------------------

'forgotten_email_sent' =>
'Si esta dirección de correo electrónico está asociada a una cuenta, instrucciones para restablecer la contraseña sólo se han enviado por correo electrónico.',

'error_sending_email' =>
'No se puede enviar correo electrónico en este momento.',

'no_email_found' =>
'La dirección de correo electrónico que ha enviado no se encontró en la base de datos.',

'password_reset_flood_lock' =>
'Usted ha tratado de restablecer su contraseña demasiadas veces hoy. Por favor, compruebe sus carpetas de bandeja de entrada de spam y para solicitudes anteriores, o póngase en contacto con el administrador del sitio.',

'your_new_login_info' =>
'Información de acceso',

'password_has_been_reset' =>
'Su contraseña se ha restablecido y uno nuevo ha sido enviado por correo electrónico.',

//----------------------------
// Date
//----------------------------

'ago' =>
'%x ago',

'year' =>
'year',

'years' =>
'years',

'month' =>
'month',

'months' =>
'months',

'fortnight' =>
'fortnight',

'fortnights' =>
'fortnights',

'week' =>
'week',

'weeks' =>
'weeks',

'day' =>
'day',

'days' =>
'days',

'hour' =>
'hour',

'hours' =>
'hours',

'minute' =>
'minute',

'minutes' =>
'minutes',

'second' =>
'second',

'seconds' =>
'seconds',

'am' =>
'am',

'pm' =>
'pm',

'AM' =>
'AM',

'PM' =>
'PM',

'Sun' =>
'Sun',

'Mon' =>
'Mon',

'Tue' =>
'Tue',

'Wed' =>
'Wed',

'Thu' =>
'Thu',

'Fri' =>
'Fri',

'Sat' =>
'Sat',

'Su' =>
'S',

'Mo' =>
'M',

'Tu' =>
'T',

'We' =>
'W',

'Th' =>
'T',

'Fr' =>
'F',

'Sa' =>
'S',

'Sunday' =>
'Sunday',

'Monday' =>
'Monday',

'Tuesday' =>
'Tuesday',

'Wednesday' =>
'Wednesday',

'Thursday' =>
'Thursday',

'Friday' =>
'Friday',

'Saturday' =>
'Saturday',


'Jan' =>
'Jan',

'Feb' =>
'Feb',

'Mar' =>
'Mar',

'Apr' =>
'Apr',

'May' =>
'May',

'Jun' =>
'Jun',

'Jul' =>
'Jul',

'Aug' =>
'Aug',

'Sep' =>
'Sep',

'Oct' =>
'Oct',

'Nov' =>
'Nov',

'Dec' =>
'Dec',

'January' =>
'January',

'February' =>
'February',

'March' =>
'March',

'April' =>
'April',

'May_l' =>
'May',

'June' =>
'June',

'July' =>
'July',

'August' =>
'August',

'September' =>
'September',

'October' =>
'October',

'November' =>
'November',

'December' =>
'December',


'UM12'		=>	'(UTC -12:00) Baker/Howland Island',
'UM11'		=>	'(UTC -11:00) Niue',
'UM10'		=>	'(UTC -10:00) Hawaii-Aleutian Standard Time, Cook Islands, Tahiti',
'UM95'		=>	'(UTC -9:30) Marquesas Islands',
'UM9'		=>	'(UTC -9:00) Alaska Standard Time, Gambier Islands',
'UM8'		=>	'(UTC -8:00) Pacific Standard Time, Clipperton Island',
'UM7'		=>	'(UTC -7:00) Mountain Standard Time',
'UM6'		=>	'(UTC -6:00) Central Standard Time',
'UM5'		=>	'(UTC -5:00) Eastern Standard Time, Western Caribbean Standard Time',
'UM45'		=>	'(UTC -4:30) Venezuelan Standard Time',
'UM4'		=>	'(UTC -4:00) Atlantic Standard Time, Eastern Caribbean Standard Time',
'UM35'		=>	'(UTC -3:30) Newfoundland Standard Time',
'UM3'		=>	'(UTC -3:00) Argentina, Brazil, French Guiana, Uruguay',
'UM2'		=>	'(UTC -2:00) South Georgia/South Sandwich Islands',
'UM1'		=>	'(UTC -1:00) Azores, Cape Verde Islands',
'UTC'		=>	'(UTC) Greenwich Mean Time, Western European Time',
'UP1'		=>	'(UTC +1:00) Central European Time, West Africa Time',
'UP2'		=>	'(UTC +2:00) Central Africa Time, Eastern European Time, Kaliningrad Time',
'UP3'		=>	'(UTC +3:00) East Africa Time, Arabia Standard Time',
'UP35'		=>	'(UTC +3:30) Iran Standard Time',
'UP4'		=>	'(UTC +4:00) Moscow Time, Azerbaijan Standard Time',
'UP45'		=>	'(UTC +4:30) Afghanistan',
'UP5'		=>	'(UTC +5:00) Pakistan Standard Time, Yekaterinburg Time',
'UP55'		=>	'(UTC +5:30) Indian Standard Time, Sri Lanka Time',
'UP575'		=>	'(UTC +5:45) Nepal Time',
'UP6'		=>	'(UTC +6:00) Bangladesh Standard Time, Bhutan Time, Omsk Time',
'UP65'		=>	'(UTC +6:30) Cocos Islands, Myanmar',
'UP7'		=>	'(UTC +7:00) Krasnoyarsk Time, Cambodia, Laos, Thailand, Vietnam',
'UP8'		=>	'(UTC +8:00) Australian Western Standard Time, Beijing Time, Irkutsk Time',
'UP875'		=>	'(UTC +8:45) Australian Central Western Standard Time',
'UP9'		=>	'(UTC +9:00) Japan Standard Time, Korea Standard Time, Yakutsk Time',
'UP95'		=>	'(UTC +9:30) Australian Central Standard Time',
'UP10'		=>	'(UTC +10:00) Australian Eastern Standard Time, Vladivostok Time',
'UP105'		=>	'(UTC +10:30) Lord Howe Island',
'UP11'		=>	'(UTC +11:00) Magadan Time, Solomon Islands, Vanuatu',
'UP115'		=>	'(UTC +11:30) Norfolk Island',
'UP12'		=>	'(UTC +12:00) Fiji, Gilbert Islands, Kamchatka Time, New Zealand Standard Time',
'UP1275'	=>	'(UTC +12:45) Chatham Islands Standard Time',
'UP13'		=>	'(UTC +13:00) Samoa Time Zone, Phoenix Islands Time, Tonga',
'UP14'		=>	'(UTC +14:00) Line Islands',

"select_timezone" =>
"Select Timezone",

"no_timezones" =>
"No Timezones",

// IGNORE
''=>'');
/* End of file core_lang.php */
/* Location: ./system/expressionengine/language/english/core_lang.php */
