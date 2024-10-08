import AboutComponent from "@/components/AboutComponent"
import Navbar from "@/components/Navbar"
import ProjectComponent from "@/components/ProjectComponent"
import Title from "@/components/Title"

const About =() => {
    const Internship1={
        "1": "Spearhead development of comprehensive Wellness Centre Management Platform, streamlining membership management, class scheduling, and trainer assignments for 5,000+ members, resulting in 30% increase in membership renewals and 25% reduction in administrative costs",
        "2": "Build Fintech-based applications, enabling users to manage finances, with 10,000+ users attaining an average savings rate of 20% through personalized budgeting and investment tracking. Lead daily stand-ups, sprint planning, and code reviews in an agile team environment",
    }
    const Internship2={
        "1": "Developed Resource Allocation System leveraging React and PostgreSQL as database system to facilitate seamless execution of various college events eliminating manual booking processes through automation, thereby, preventing scheduling conflicts, and increasing efficiency by 50%.",
        "2": "Leveraged frontend tools and upgraded 15+ component with enhanced features, ensuring efficient resource management and optimal event coordination thereby saving 500+ hours of staff time and effort annually",
    }
    const bachelors={
       "1":"Data Structures and Algorithms",
        "2":"Object Oriented Programming",
        "3":"Database Management Systems",
        "4":"Computer Networks",
        "5":"Operating Systems",
        "6":"Advanced Programming Practices",
        "7":"Design and Analysis of Algorithms",
        "8":"Software Engineering and Project Management",
    }
    const masters={
       "1": "CSCI - 570 : Analysis of Algorithms by Prof. Victor Adamchik",
        "2": "CSCI - 585 : Database Systems by Prof. Sathyanarayana Raghavachary",
        "3" : "CSCI - 571 : Web Technologies by Prof. Marco Papa",
        "4": "CSCI - 544 : Applied Natural Language Processing by Prof. Xuezhe Ma",
        "5": "CSCI - 572 : Information Retrieval and Web Search Engines by Prof. Sathyanarayana Raghavachary",
        "6": "CSCI - 572 : Deep Learning and its Applications by Prof. Sathyanarayana Raghavachary",

    }
    return <div>
        <Navbar/>
        
        <Title titleText="Work Experience" />
        <AboutComponent  position="Full Stack Engineering intern" type="Internship" date="May 2024 - Present" company="Program Warehouse" place="Remote" content={Internship1} />
        <AboutComponent  position="Frontend development intern" type="Internship" date="August 2022 – November 2022" company="Vidyalankar Institute of Technology" place="Mumbai, India" content={Internship2 } />

        <Title titleText="Education"/>
        <AboutComponent  position="Masters in Computer Science" type="" date="August 2023 - May 2025" company="University of Southern California" place="Los Angeles, USA" content={masters} />
        <AboutComponent  position="Bachelors of Engineering in Information Technology" type="" date="August 2019 - May 2023" company="University of Mumbai" place="Mumbai, India" content={bachelors} />
        
            
        </div>
}
export default About