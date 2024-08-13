import Image from "next/image";
import Title from "./Title";

const TechStackComponent = () => {
    return <div className="">
        <div className="w-3/4 mx-auto mt-20 text-xl md:text-2xl lg:text-3xl font-bold">Programming Languages</div>
        <div className="mt-6 w-3/4 mx-auto   grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
                <Image src="/c++.png" alt="React" width={80} height={80} />
                <div className="font-bold font-mono ">C++</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/java.png" alt="React" width={80} height={80} />
                <div className="font-bold font-mono ">Java</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/python.png" alt="React" width={80} height={80} />
                <div className="font-bold font-mono ">Python</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/html.png" alt="HTML" width={80} height={80} />
                <div className="font-bold font-mono ">HTML</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/css.png" alt="CSS3" width={80} height={80} />
                <div className="font-bold font-mono ">CSS3</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/flask.png" alt="Flask" width={80} height={80} />
                <div className="font-bold font-mono ">Flask</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/bootstrap.png" alt="Bootstrap" width={80} height={80} />
                <div className="font-bold font-mono ">Bootstrap</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/tailwind.png" alt="Tailwind" width={80} height={80} />
                <div className="font-bold font-mono ">Tailwind</div>
            </div>
           
            <div className="flex flex-col items-center">
                <Image src="/js.png" alt="Javascript" width={80} height={80} />
                <div className="font-bold font-mono ">Javascript</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/typescript.png" alt="Typescript" width={80} height={80} />
                <div className="font-bold font-mono ">Typescript</div>
            </div>

        </div>

        <div className="w-3/4 mx-auto mt-8 text-xl md:text-2xl lg:text-3xl font-bold">Web Development Frameworks</div>
        <div className="mt-6 w-3/4 mx-auto   grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
                <Image src="/nextjs.png" alt="MySQL" width={80} height={80} />
                <div className="font-bold font-mono ">NextJS</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/react.png" alt="React" width={80} height={80} />
                <div className="font-bold font-mono ">React</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/express.png" alt="Express" width={80} height={80} />
                <div className="font-bold font-mono ">Express</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/hono.png" alt="Hono" width={80} height={80} />
                <div className="font-bold font-mono ">Hono</div>
            </div>
             <div className="flex flex-col items-center">
                <Image src="/cloudflare.png" alt="Cloudflare workers" width={80} height={80} />
                <div className="font-bold font-mono ">Cloudflare workers</div>
            </div>
        </div>
        <div className="w-3/4 mx-auto mt-8 text-xl md:text-2xl lg:text-3xl font-bold">Databases and Frameworks</div>
        <div className="mt-6 w-3/4 mx-auto   grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
                <Image src="/mysql.png" alt="MySQL" width={80} height={80} />
                <div className="font-bold font-mono ">MySQL</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/mongo.png" alt="MongoDB" width={80} height={80} />
                <div className="font-bold font-mono ">MongoDB</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/postgres.png" alt="PostgresSQL" width={80} height={80} />
                <div className="font-bold font-mono ">PostgresSQL</div>
            </div>
        </div>

        <div className="w-3/4 mx-auto mt-8 text-xl md:text-2xl lg:text-3xl font-bold">Tools</div>
        <div className="mt-2 w-3/4 mx-auto   grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
                <Image src="/gcp.png" alt="Google Cloud Platform" width={80} height={80} />
                <div className="font-bold font-mono ">GCP</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/aws.png" alt="MongoDB" width={80} height={80} />
                <div className="font-bold font-mono ">AWS</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/vs.png" alt="PostgresSQL" width={80} height={80} />
                <div className="font-bold font-mono ">VS Code</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/android.png" alt="Android" width={80} height={80} />
                <div className="font-bold font-mono ">Android </div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/docker.png" alt="Docker" width={80} height={80} />
                <div className="font-bold font-mono ">Docker</div>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/postman.png" alt="Postman" width={80} height={80} />
                <div className="font-bold font-mono ">Postman</div>
            </div>
        </div>
        




    </div>
}
export default TechStackComponent;