import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Github, Link2 } from "lucide-react"
import Link from "next/link";
import Title from "./Title";


const ProjectComponent = ({ img, title, description, techStack,livePreview, githubLink }: { img: string, title: string, description: string, techStack: string, livePreview: string, githubLink: string }) => {
    return <div >
        <Card className="w-[350px] h-[700px] md:w-400px] lg:w-[450px] mx-auto">
            <CardHeader>
                <CardTitle> 
                    <Image src={img} alt="Akshaya" width={500} height={100} />
                    <div className="mt-4">{title}</div>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex">
                    <div className="font-bold mr-2">
                        TechStack:
                    </div>
                    <div>
                        {techStack}

                    </div>
                </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
                
                <Link href={livePreview}>
                    <div className="flex ">
                    <Link2 /> <div className="ml-2">Live Preview</div>
                    </div>
                </Link>
                <Link href={githubLink}>
                    <div className="flex">
                    <Github /><div className="ml-2"> View Code</div>

                    </div>
                </Link>
               
            </CardFooter>
        </Card>
    </div>
}

export default ProjectComponent