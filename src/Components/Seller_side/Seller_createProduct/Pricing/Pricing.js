
import Packages from "./Packages/Packages";
import ExtraService from "./ExtraService/ExtraService";





const Pricing = () => {

    
    return(
        <>
            <section id="Pricing_container">
                <Packages />
            </section>
            <section id="extraPackage_container">
                <ExtraService />
            </section>
            <div id="continueBtns"> 
                <button>continuar</button>
            </div>
        </>
       
    )
    

}

export default Pricing;