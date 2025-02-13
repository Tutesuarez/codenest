

export default function Privacidad() {
    return (
        <>
            <section id="politica-privacidad" class="p-8 bg-stone-950  text-stone-50 ">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h2>
                    <p className="text-sm text-gray-600 text-center mb-4">Última actualización: <strong>10/02/2025</strong></p>

                    <h3 className="text-xl font-semibold mt-6">📌 1. Datos que recopilamos</h3>
                    <p className="mt-2">Cuando completás nuestro formulario de contacto, podemos pedirte información como:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Nombre</strong></li>
                        <li><strong>Correo electrónico</strong></li>
                        <li><strong>Mensaje</strong></li>
                    </ul>
                    <p className="mt-2">No utilizamos cookies ni herramientas de seguimiento en este sitio.</p>

                    <h3 className="text-xl font-semibold mt-6">📌 2. Uso de la información</h3>
                    <p className="mt-2">Los datos que nos enviás serán usados exclusivamente para:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>✅ Responder tu consulta.</li>
                        <li>✅ Comunicarnos con vos si es necesario.</li>
                    </ul>
                    <p className="mt-2">No compartimos, vendemos ni transferimos tu información a terceros.</p>

                    <h3 className="text-xl font-semibold mt-6">📌 3. Seguridad de tus datos</h3>
                    <p className="mt-2">Tomamos medidas para proteger tu información, pero recordá que ningún método de transmisión por internet es 100% seguro.</p>

                    <h3 className="text-xl font-semibold mt-6">📌 4. Tus derechos</h3>
                    <p className="mt-2">Podés solicitar en cualquier momento la eliminación de tus datos enviándonos un correo a:
                        <p className="text-teal-500 font-medium">code.nest.valencia@gmail.com</p>
                    </p>

                    <h3 className="text-xl font-semibold mt-6">📌 5. Contacto</h3>
                    <p className="mt-2">Si tenés dudas sobre esta política, podés escribirnos a:
                        <a href="mailto:tucorreo@ejemplo.com" className="text-teal-500 font-medium">code.nest.valencia@gmail.com</a>
                    </p>
                </div>
            </section>
        </>
    );
}