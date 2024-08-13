import { Building2, MapPin, MapPinIcon } from "lucide-react";
import Title from "./Title";
import { Button } from "./ui/button";

const AboutComponent = ({ position, type, date, company, place, content}: { position: string, type? : string, date: string, company : string, place: string, content: object}) => {
    return <div>
        
        <div className="mt-16 w-3/4 mx-auto ">
           
            <div className="flex text-2xl justify-between text-slate-700 font-semibold ">
               <div>
                    {position}
                </div> 
                {type ? <Button variant="green" size="sm">
                    {type}
                </Button > : <div></div>}
            </div>
            <div className="flex text-md mt-2 justify-between text-slate-500 font-thinbold ">
                <div className="flex justify-between ">
                    <div className="mr-2 flex">
                   <div className="mr-2">
                    <Building2/> </div>
                    {company}
                    
                    </div>
                    <div className="flex mr-4">
                        
                        <MapPin/>
                        {place}
                    </div>
                </div>
                <div>
                    {date}
                </div>

            </div>
            <div className="mt-4">
            <ul className="ml-5 list-disc w-3/4">
               {
                Object.values(content).map((value, index) => {
                    return (<li key={index}>{value}</li>)
                })
            }
  
            </ul>

            </div>
        </div>
    </div>
}

export default AboutComponent;