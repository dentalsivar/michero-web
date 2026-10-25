// Genera terminos.html, privacidad.html y cancelacion.html con la misma cabecera y pie del inicio.
// El contenido sale del contrato de servicio (assets/todas-las-imagenes/Contrato/Plantilla/contrato_servicio.md).
// Uso: node _legales/generar.js
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const RAZON = 'MI CHERO TECH, S.A.S. de C.V.';
const VIGENTE = '24 de octubre de 2026';
const WA = 'https://wa.me/50377387938?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20MiChero%20Dental';

const pagina = ({ archivo, titulo, codigo, h1, resumen, cuerpo }) => `<!DOCTYPE html>
<html lang="es-SV">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${titulo} — MiChero Dental</title>
<meta name="description" content="${titulo} de MiChero Dental, sistema para clínicas dentales hecho en El Salvador por ${RAZON}">
<link rel="icon" href="img/logos/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800&family=JetBrains+Mono:wght@500;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<header class="cabecera">
  <div class="envoltura">
    <a class="logo" href="./" aria-label="MiChero Dental, inicio"><img src="img/logos/mi-chero-dental.png" alt="MiChero Dental"></a>
    <nav class="menu" aria-label="Principal">
      <a href="./#recorrido">Cómo funciona</a>
      <a href="./#el-salvador">Hecho aquí</a>
      <a href="./#planes">Planes</a>
      <a class="boton" href="${WA}" target="_blank" rel="noopener">Agendar demo</a>
    </nav>
  </div>
</header>

<main class="legal-pagina">
  <div class="envoltura">
    <span class="codigo">${codigo}</span>
    <h1>${h1}</h1>
    <p class="vigente">Vigente desde el ${VIGENTE} · ${RAZON}</p>
    <div class="resumen"><b>En corto:</b> ${resumen}</div>
${cuerpo}
  </div>
</main>

<footer class="pie">
  <div class="envoltura">
    <img src="img/logos/mi-chero-dental.png" alt="MiChero Dental">
    <nav aria-label="Legal">
      <a href="terminos.html"${archivo === 'terminos.html' ? ' aria-current="page"' : ''}>Términos y condiciones</a>
      <a href="privacidad.html"${archivo === 'privacidad.html' ? ' aria-current="page"' : ''}>Política de privacidad</a>
      <a href="cancelacion.html"${archivo === 'cancelacion.html' ? ' aria-current="page"' : ''}>Cancelación y reembolsos</a>
    </nav>
    <div class="legal">
      <span>© 2026 ${RAZON} Todos los derechos reservados.</span>
      <span class="hecho-aqui" style="padding:4px 12px 4px 4px;font-size:13px"><span class="bandera" aria-hidden="true" style="width:30px;height:20px"><i></i><i></i><i></i></span>Hecho en El Salvador</span>
    </div>
  </div>
</footer>
</body>
</html>
`;

const CONTACTO = `<p>Para cualquier consulta sobre este documento puede escribirnos por WhatsApp al <b>+503 7738-7938</b> o al correo <b>vcastillo.mancia@gmail.com</b>, de lunes a viernes de 8:00 a. m. a 5:00 p. m., excepto días de asueto.</p>`;

const paginas = [
  {
    archivo: 'terminos.html', titulo: 'Términos y condiciones', codigo: 'terminos', h1: 'Términos y condiciones del servicio',
    resumen: 'MiChero Dental es un sistema en internet para administrar clínicas dentales. Se contrata por suscripción mensual o anual, sin permanencia mínima, y la clínica sigue siendo dueña de su información.',
    cuerpo: `
    <h2>1. Quiénes somos y qué ofrecemos</h2>
    <p>MiChero Dental es una aplicación de gestión odontológica que se usa por internet, desarrollada y operada en El Salvador por ${RAZON} (en adelante, «MiChero Tech»). Se presta como software como servicio: la clínica obtiene acceso y una licencia de uso mientras su suscripción esté pagada. Contratar el servicio no implica la venta ni la transferencia del software.</p>
    <p>Estos términos resumen las condiciones del servicio. Cada clínica firma, dentro de la aplicación, el contrato de prestación de servicios correspondiente; si hubiere diferencia entre este resumen y el contrato firmado, prevalece el contrato.</p>

    <h2>2. Planes y precios</h2>
    <p>El servicio se contrata por suscripción mensual o anual, a elección de la clínica, sin plazo forzoso ni permanencia mínima. Todos los planes incluyen personal, pacientes y sillones sin límite.</p>
    <div class="tabla"><table>
      <thead><tr><th>Plan</th><th>Mensual</th><th>Anual</th><th>Sucursales incluidas</th><th>Almacenamiento</th></tr></thead>
      <tbody>
        <tr><td>Estándar</td><td>US$35.00</td><td>US$350.00</td><td>1</td><td>10 GB</td></tr>
        <tr><td>Estándar Plus</td><td>US$40.00</td><td>US$400.00</td><td>1</td><td>10 GB</td></tr>
        <tr><td>Profesional</td><td>US$50.00</td><td>US$500.00</td><td>2</td><td>25 GB</td></tr>
      </tbody>
    </table></div>
    <ul>
      <li><b>Estándar:</b> expediente clínico, agenda, odontograma, odontopediatría, presupuestos, registro de pagos, gestión de laboratorio y herramientas de comunicación con el paciente.</li>
      <li><b>Estándar Plus:</b> todo lo del Estándar más un módulo administrativo adicional.</li>
      <li><b>Profesional:</b> todo lo del Estándar, módulo de especialidades y dos sucursales. Los módulos que se incorporen a este plan en el futuro se incluyen sin costo adicional.</li>
      <li><b>Sucursal adicional:</b> US$10.00 mensuales o US$100.00 anuales por cada sucursal adicional, en cualquier plan.</li>
    </ul>
    <p>Los precios están expresados en dólares de los Estados Unidos de América y llevan el IVA incluido. Por cada pago recibido, MiChero Tech emite el documento tributario electrónico correspondiente.</p>
    <p>La clínica puede cambiar de plan en cualquier momento; el nuevo plan y su precio se aplican desde el siguiente periodo de suscripción. MiChero Tech puede modificar precios o la composición de los planes avisando con al menos treinta días de anticipación; el cambio aplica desde el siguiente periodo, y si la clínica no está de acuerdo puede cancelar sin penalización.</p>

    <h2>3. Forma de pago y renovación</h2>
    <ul>
      <li><b>Mensual:</b> cargo automático a una tarjeta de crédito o débito, por anticipado, que se renueva cada mes hasta que la clínica cancele.</li>
      <li><b>Anual:</b> enlace de pago con tarjeta o transferencia bancaria. No se renueva sola: con al menos quince días de anticipación enviamos por correo el aviso de renovación con su enlace de pago.</li>
    </ul>
    <p>Los pagos con tarjeta se procesan por medio de un procesador de pagos autorizado. MiChero Tech no almacena los datos de las tarjetas.</p>
    <p>Después del vencimiento hay un período de gracia de cinco días calendario. Si el pago no se realiza, el servicio puede limitarse a solo consulta: la clínica puede ver y descargar su información, pero no ingresar ni modificar datos. Las condiciones de suspensión y de entrega de datos se detallan en la <a href="cancelacion.html">política de cancelación y reembolsos</a>.</p>

    <h2>4. Uso aceptable</h2>
    <p>La clínica y sus usuarios se comprometen a no:</p>
    <ol type="a">
      <li>hacer ingeniería inversa, descompilar o intentar obtener el código fuente de la aplicación;</li>
      <li>copiar, modificar o crear obras derivadas de la aplicación;</li>
      <li>revender, sublicenciar, arrendar o compartir cuentas con personas ajenas a la clínica;</li>
      <li>vulnerar o eludir medidas de seguridad, ni hacer pruebas de penetración sin autorización escrita;</li>
      <li>cargar contenido ilícito, malicioso o que infrinja derechos de terceros;</li>
      <li>usar la aplicación para fines distintos a la gestión de su práctica odontológica; ni</li>
      <li>exceder el almacenamiento de uso justo de su plan. Si se excede, avisaremos para que en quince días libere espacio o cambie de plan; de lo contrario podrá restringirse la carga de archivos nuevos, sin afectar la información existente.</li>
    </ol>
    <p>El incumplimiento grave de los literales a) al f) permite a MiChero Tech terminar el servicio. Si es subsanable, se concederá un plazo de diez días calendario para corregirlo.</p>

    <h2>5. Propiedad intelectual y licencia</h2>
    <p>El software, su código, diseño, interfaces, documentación, marcas y logotipos son propiedad exclusiva de MiChero Tech y están protegidos por la Ley de Propiedad Intelectual, la Ley de Marcas y Otros Signos Distintivos y los tratados vigentes en El Salvador. La clínica recibe una licencia de uso limitada, no exclusiva, intransferible y revocable, válida mientras su suscripción esté pagada, para uso interno en su práctica odontológica.</p>
    <p>Los datos que la clínica ingresa son y seguirán siendo de la clínica y, en lo que corresponda, de sus pacientes. MiChero Tech no adquiere ningún derecho sobre ellos.</p>

    <h2>6. Disponibilidad y responsabilidad</h2>
    <p>Procuramos una disponibilidad del 99 % del tiempo, medida mensualmente, sin contar los mantenimientos programados (avisados con al menos 48 horas y, en lo posible, en horarios de baja actividad), los mantenimientos de emergencia por seguridad y las causas ajenas a nosotros: la conexión o los equipos de la clínica, fallas de los proveedores de nube, telecomunicaciones o energía, caso fortuito o fuerza mayor, el mal uso de la aplicación y los servicios de terceros integrados a ella.</p>
    <p>En la medida permitida por la ley, la responsabilidad total de MiChero Tech no excederá lo pagado por la clínica en los doce meses anteriores al hecho que originó el reclamo, y no incluye lucro cesante ni daños indirectos. Esta limitación no aplica en casos de dolo o culpa grave, ni limita los derechos irrenunciables que correspondan conforme a la Ley de Protección al Consumidor.</p>
    <p>MiChero Dental es una herramienta de gestión administrativa y de registro; no presta servicios médicos ni odontológicos. Las decisiones clínicas, los diagnósticos y los tratamientos son responsabilidad exclusiva de la clínica y sus profesionales.</p>

    <h2>7. Soporte técnico</h2>
    <p>Brindamos soporte por WhatsApp y correo electrónico, de lunes a viernes de 8:00 a. m. a 5:00 p. m., excepto días de asueto. Respondemos por primera vez a más tardar el día hábil siguiente; las fallas que impidan el uso general de la aplicación se atienden con prioridad. Los plazos indicados son de primera respuesta, no de solución, que depende de cada caso.</p>

    <h2>8. Legislación aplicable</h2>
    <p>Estos términos y el contrato de servicio se rigen por las leyes de la República de El Salvador. Para cualquier controversia, las partes se someten a los tribunales de la ciudad de San Salvador.</p>

    <h2>9. Contacto</h2>
    ${CONTACTO}`,
  },
  {
    archivo: 'privacidad.html', titulo: 'Política de privacidad', codigo: 'privacidad', h1: 'Política de privacidad',
    resumen: 'La clínica es la responsable de los datos de sus pacientes; MiChero Tech solo los guarda y los procesa para prestarle el servicio. No los vendemos, no los usamos para publicidad y los datos de salud se guardan cifrados.',
    cuerpo: `
    <h2>1. A quién aplica</h2>
    <p>Esta política explica cómo ${RAZON} («MiChero Tech») trata la información en MiChero Dental, el sistema para clínicas dentales que desarrollamos y operamos en El Salvador, y en este sitio web.</p>

    <h2>2. Quién es responsable de los datos de los pacientes</h2>
    <p><b>La clínica es la responsable del tratamiento</b> de los datos personales de sus pacientes, incluidos sus datos de salud, y decide sobre su finalidad y uso. Le corresponde obtener el consentimiento informado de sus pacientes, informarles que su expediente se gestiona con herramientas tecnológicas de terceros y que sus datos pueden alojarse fuera de El Salvador, atender sus solicitudes de acceso, rectificación, cancelación y oposición, y cumplir con el secreto profesional y la normativa sanitaria y de protección de datos vigente.</p>
    <p><b>MiChero Tech actúa como encargado del tratamiento:</b> guardamos y procesamos esos datos únicamente por cuenta de la clínica y siguiendo sus instrucciones. Si usted es paciente de una clínica y quiere ejercer sus derechos sobre su información, diríjase a su clínica; nosotros le ayudaremos a atender su solicitud.</p>

    <h2>3. Qué información tratamos</h2>
    <ul>
      <li><b>Datos de la clínica:</b> la información que la clínica y su personal ingresan en la aplicación, como datos de pacientes, expedientes, odontogramas, presupuestos, pagos, fotografías, radiografías, consentimientos y recetas.</li>
      <li><b>Datos de la cuenta de la clínica:</b> nombre de la clínica, datos de su representante, datos de facturación, correo y teléfono de contacto, y los datos de sus usuarios.</li>
      <li><b>Datos técnicos:</b> registros de actividad y de acceso necesarios para la seguridad y el funcionamiento del servicio.</li>
      <li><b>Datos de pago:</b> los pagos con tarjeta los procesa un procesador de pagos autorizado; MiChero Tech no almacena los datos de las tarjetas.</li>
    </ul>

    <h2>4. Para qué la usamos</h2>
    <p>Usamos los datos de la clínica exclusivamente para prestarle el servicio. Nos comprometemos a:</p>
    <ul>
      <li>no usarlos para fines propios, comerciales ni publicitarios;</li>
      <li>no venderlos ni comunicarlos a terceros, salvo requerimiento de autoridad competente conforme a la ley;</li>
      <li>mantener su confidencialidad y exigirla a nuestro personal;</li>
      <li>colaborar con la clínica para atender los derechos de los titulares; y</li>
      <li>eliminarlos o entregarlos al terminar el servicio, como explica la <a href="cancelacion.html">política de cancelación</a>.</li>
    </ul>
    <p>Podemos generar estadísticas técnicas de uso de la aplicación, de forma agregada y anónima, que no permiten identificar a pacientes ni a clínicas, solo para mejorar el servicio.</p>

    <h2>5. Cómo la protegemos</h2>
    <ul>
      <li>Los datos de salud de los pacientes, como el historial clínico, los antecedentes y los diagnósticos, se almacenan <b>cifrados</b>.</li>
      <li>Para toda la información aplicamos medidas de seguridad razonables: cifrado de las comunicaciones, control de accesos, registros de actividad y copias de respaldo periódicas.</li>
      <li>Si ocurre un incidente de seguridad que afecte los datos de una clínica, se lo notificaremos a la brevedad, a más tardar dentro de las 72 horas siguientes a conocerlo, con su naturaleza, los datos afectados y las medidas tomadas.</li>
    </ul>
    <p>La clínica es responsable de custodiar las credenciales de sus usuarios, asignar los permisos adecuados a su personal y avisarnos sin demora de cualquier uso no autorizado.</p>

    <h2>6. Proveedores tecnológicos</h2>
    <p>Para prestar el servicio nos apoyamos en proveedores tecnológicos (alojamiento en la nube, almacenamiento de archivos y similares), cuyos servidores pueden ubicarse fuera de El Salvador. Les exigimos garantías adecuadas de seguridad y confidencialidad, y mantenemos su lista vigente disponible dentro de la aplicación, donde informamos cualquier cambio.</p>

    <h2>7. Confidencialidad</h2>
    <p>Mantenemos en estricta confidencialidad la información de las clínicas a la que tenemos acceso. Esta obligación continúa durante cinco años después de terminado el servicio y, en el caso de los datos de salud de los pacientes, de forma indefinida.</p>

    <h2>8. Este sitio web</h2>
    <p>Este sitio es informativo: no tiene formularios, no pide datos personales y no usa cookies propias de seguimiento. Los tipos de letra se cargan desde Google Fonts. Si nos escribe por WhatsApp o por correo, usaremos sus datos solo para responderle.</p>

    <h2>9. Contacto</h2>
    ${CONTACTO}`,
  },
  {
    archivo: 'cancelacion.html', titulo: 'Cancelación y reembolsos', codigo: 'cancelacion', h1: 'Política de cancelación y reembolsos',
    resumen: 'Puede cancelar cuando quiera, sin penalización. No hacemos reembolsos ni cobros proporcionales: conserva el acceso hasta que termina el periodo que ya pagó, y le entregamos su información.',
    cuerpo: `
    <h2>1. Cómo cancelar</h2>
    <p>La clínica puede cancelar su suscripción en cualquier momento y sin penalización, desde la opción habilitada en la aplicación o por comunicación escrita a ${RAZON} («MiChero Tech»). No hay permanencia mínima.</p>
    <ul>
      <li><b>Suscripción mensual:</b> se cobra por anticipado y se renueva cada mes; si cancela antes de la fecha de renovación, ya no se hace el siguiente cargo.</li>
      <li><b>Suscripción anual:</b> no se renueva sola; si no paga la renovación, la suscripción termina al vencer el año pagado.</li>
    </ul>

    <h2>2. Reembolsos</h2>
    <p><b>La cancelación no genera reembolsos ni cobros proporcionales.</b> La clínica mantiene el acceso completo al servicio hasta el final del periodo de suscripción que ya pagó, sea mensual o anual.</p>
    <p>Tampoco hay reembolso cuando el servicio termina por un incumplimiento grave de la clínica conforme a los <a href="terminos.html">términos y condiciones</a>.</p>
    <p>Si considera que hubo un cobro por error, por ejemplo un cargo duplicado, escríbanos y lo revisamos.</p>

    <h2>3. Si un pago no se realiza</h2>
    <p>Después del vencimiento hay un período de gracia de <b>cinco días calendario</b>. Si el pago no se realiza, avisaremos por correo y el servicio quedará en <b>solo consulta</b>: la clínica podrá ver y descargar su información, pero no ingresar ni modificar datos. Durante <b>treinta días calendario</b> la información se conserva completa:</p>
    <ul>
      <li>si la clínica se pone al día, el servicio se reactiva con toda su información;</li>
      <li>aun sin ponerse al día, puede pedir la entrega de sus datos.</li>
    </ul>
    <p>Enviaremos un segundo aviso siete días antes de que venza ese plazo. Si vence sin pago, la suscripción se tiene por cancelada.</p>

    <h2>4. Entrega de su información</h2>
    <p>Dentro de los <b>diez días hábiles</b> siguientes a la cancelación, a su solicitud durante la suspensión o a la terminación del servicio, le entregamos por un enlace seguro de descarga:</p>
    <ul>
      <li>la lista de sus pacientes en hoja de cálculo (Excel); y</li>
      <li>el expediente clínico de cada paciente en PDF, con sus datos generales, antecedentes, odontogramas, presupuestos, pagos, fotografías y radiografías, consentimientos firmados, constancias y recetas.</li>
    </ul>
    <p>La clínica es responsable de descargar y conservar esa información conforme a sus obligaciones legales y profesionales.</p>

    <h2>5. Borrado de la información</h2>
    <p>Al terminar el periodo pagado después de la cancelación, o al vencer el plazo de suspensión, la información de la clínica deja de estar accesible en la aplicación. <b>Treinta días calendario</b> después se elimina de forma automática, definitiva e irreversible, incluidos sus archivos y registros de auditoría, y queda constancia de la eliminación. Si la entrega de datos se hizo con menos de quince días de anticipación, el borrado se pospone hasta que pasen quince días desde la entrega.</p>
    <p>Las copias de seguridad se depuran en su ciclo de rotación, en un plazo que no excede treinta días calendario adicionales. Después de eso, la información no se puede recuperar por ningún medio.</p>
    <p>Conservamos solo lo que la ley nos obliga o lo necesario para acreditar el cumplimiento del contrato: registros de pagos, documentos tributarios y las constancias de aceptación del contrato y de eliminación de datos.</p>
    <p>Si en el futuro la clínica vuelve a contratar el servicio, empezará con la carga de su información desde cero.</p>

    <h2>6. Contacto</h2>
    ${CONTACTO}`,
  },
];

for (const p of paginas) {
  fs.writeFileSync(path.join(RAIZ, p.archivo), pagina(p));
  console.log('escrita', p.archivo);
}
