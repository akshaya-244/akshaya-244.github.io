import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechStackComponent from "@/components/TechStackComponent";
import Title from "@/components/Title";
import WhiteBackgroundWrapper from "@/components/WhiteBackWrapper";

const TechStack = () => {
    return <div className="min-w-full">
        <WhiteBackgroundWrapper>
        <Navbar />
        <TechStackComponent />
        </WhiteBackgroundWrapper>
        <Footer /> 
        
    </div>
}
export default TechStack;