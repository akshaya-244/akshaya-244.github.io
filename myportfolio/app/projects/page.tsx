import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      img: "https://cdn.prod.website-files.com/6489f4e62de445dcec86d4db/652d1cf31dd602085dbb303e_PhotoAI-Tinder-AI-Photos.webp",
      title: "PhotoAI- Launching Soon!",
      description:
        "Developing a Next.js application to build PhotoAI, an AI-powered image generation and editing platform from scratch. PhotoAI leverages the capabilities of Fal.ai to provide seamless, high-quality image synthesis and transformations, enabling users to generate, enhance, and modify images with ease. The platform offers an intuitive interface for creative professionals and AI enthusiasts to explore the power of generative models.",
      techStack:
        "Next.js, React, Typescript, Prisma, Tailwind, Shadcn, Digital Ocean, SquareSpace Cloudflare R2, nginx, CertBot",
      livePreview: "https://photoai.akshayamohan.com",
      githubLink: "https://github.com/akshaya-244/Photo-AI-Clone",
    },
    {
      img: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665643dd8c7ac752237b5cef_Discord-OG-1200x630.jpg",
      title: "Nano Discord",
      description:
        "Built an end-to-end, real-time Discord clone. Key features include real-time messaging with Socket.io, video/audio calls, message editing, role management, invite system, server customization, and mobile-friendly UI using TailwindCSS and ShadcnUI. Includes Prisma ORM, PostgreSql, and NextAuth authentication.",
      techStack:
        "Next.js, Typescript, Prisma, Tailwind, Shadcn, Websockets, LiveKit, UploadThing, Clerk",
      livePreview: "https://nano.discord.akshayamohan.com",
      githubLink: "https://github.com/akshaya-244/Nano-Discord",
    },
    {
      img: "/plinko.png",
      title: "Plinko Game",
      description:
        "Constructed MVP exploiting React, Typescript completing project within 2 weeks and achieving 90% code coverage through unit tests, demonstrating rapid prototyping skills and strong foundation in TypeScript fundamentals",
      techStack: "React, Typescript, Hono, Prisma, MongoDB, Vercel",
      livePreview: "https://plinko-game-xi.vercel.app/",
      githubLink: "https://github.com/akshaya-244/plinko-game",
    },
    {
      img: "/stock.png",
      title: "Stock Stream",
      description:
        "Established a stock investment and summary website processing 10,000+ stock data requests daily, along with an Android application designed with Java. Integrating Finhub API for seamless stock listings and optimized trading functionality with auto-updating features, hourly charts (React Highcharts), news, and recommendations.",
      techStack:
        "React.js, HighCharts, FinhubAPI, Express.js, Node.js, Android, Java, MongoDB, Google Cloud Platform",
      livePreview: "https://github.com/akshaya-244/Stock-Stream",
      githubLink: "https://github.com/akshaya-244/Stock-Stream",
    },
    {
      img: "/medium.png",
      title: "Medium Clone",
      description:
        "Passionately engineered Medium clone as a minimum viable product integrating TypeScript, Prisma, and Hono, with Cloudflare Workers for backend deployment, Vercel for frontend within 6-week timeline, receiving positive feedback from 80% of testers.",
      techStack: "React.js, Typescript, Node.js, MongoDB, Vercel",
      livePreview: "https://medium-clone-bnab.vercel.app/signin",
      githubLink: "https://github.com/akshaya-244/medium-clone",
    },
    {
      img: "/trello.png",
      title: "Trello",
      description:
        "Developed an app using React, Node.js, and Swift, integrating eBay and Google APIs for real-time item search. Enhanced user experience with client-side validation and autocomplete. Deployed on Google Cloud for scalability and utilized MongoDB for seamless wish list management across devices.",
      techStack: "Next.js, React.js, Express.js, Node.js, MongoDB, Vercel",
      livePreview: "https://github.com/akshaya-244/trello-backend",
      githubLink: "https://github.com/akshaya-244/trello-backend",
    },
    {
      img: "/stock2.png",
      title: "Stock Vista",
      description:
        "Developed a dynamic website leveraging Python Flask and server-side scripting techniques to integrate real-time data from Finhub Stock API and Polygon.io API. Showcased a company's essential information, live stock summary, latest news, and detailed performance analysis through interactive charts spanning six months.",
      techStack: "Python, Flask, HTML5, CSS, Javascript",
      livePreview: "https://github.com/akshaya-244/Stock-Stream",
      githubLink: "https://github.com/akshaya-244/Stock-Stream",
    },
    {
      img: "/memory-game.png",
      title: "Memory Game",
      description:
        "A classic memory game built with HTML, CSS, and JavaScript, where players flip over tiles to reveal matching pairs and test their memory skills.",
      techStack: "HTML5, CSS3, Javascript, Github",
      livePreview: "https://akshaya-244.github.io/Memory-Game/",
      githubLink: "https://github.com/akshaya-244/Memory-Game",
    },
    {
      img: "/omni.png",
      title: "Omnifoods",
      description:
        "A CSS showcase website designed and developed to demonstrate my skills in creating visually appealing and responsive web experiences.",
      techStack: "HTML5, CSS3, Javascript",
      livePreview: "https://portfolio-dev-sigma-six.vercel.app/projects",
      githubLink: "https://github.com/akshaya-244/Omnifood",
    },
    {
      img: "/pig.png",
      title: "Pig Game",
      description:
        "A simple yet addictive dice game built with HTML, CSS, and JavaScript, where players take turns rolling dice to score points, trying to avoid the dreaded pig out to win the game!",
      techStack: "HTML5, CSS3, Javascript",
      livePreview: "https://akshaya-244.github.io/Pig-game/",
      githubLink: "https://github.com/akshaya-244/Pig-game",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="text-4xl md:text-5xl mt-10 py-10 lg:text-4xl font-bold">
          Personal Projects
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-full max-w-[550px] mx-auto hover:border-red-300 border-white"
          >
            <CardHeader>
              <CardTitle>
                <div className="relative w-[500px] h-[400px]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </CardTitle>
              <CardDescription>
                <div className="py-4">{project.description}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex">
                <div className="font-bold mr-2">TechStack:</div>
                <div>{project.techStack}</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={project.livePreview}
                className="flex items-center text-blue-500 hover:underline"
              >
                <Link2 className="mr-2" /> Live Preview
              </Link>
              <Link
                href={project.githubLink}
                className="flex items-center text-white hover:underline"
              >
                <Github className="mr-2" /> View Code
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
