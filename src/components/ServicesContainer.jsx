import ProcessSteps from "@/components/ServicesCard";
import RevealTextSegundo from "@/components/TextReveal2";
import './ServicesContainer.css'

const ServicesContainer=()=>{
    return(
        <div className=" flex flex-col justify-items-center">
            <div className="serv_container text-center mx-auto mt-5 justify-items-center space-y-2 text-stone-50">
              <div className="serv_title mb-8 mt-10 max-w-fit">
                <p className=" text-teal-400  font-bold">SERVICIOS</p>
              </div>
              <RevealTextSegundo>
              <h2 className="serv_principal_title text-4xl font-heading font-bold">
                Soluciones digitales para tu negocio
              </h2>
              <p className="text-gray-400 serv_principal_text mt-4 max-w-80 sm:max-w-full justify-self-center text-center">
                Todo lo que necesitas para establecer tu presencia digital.
              </p>
              </RevealTextSegundo>
            </div>
            <ProcessSteps/>
          </div>
    )
}

export default ServicesContainer