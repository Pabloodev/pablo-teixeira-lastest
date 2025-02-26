import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid text-center place-items-center h-screen">
        <div className="flex items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl">
              Pablo Teixeira <span className="text-purple-700">(pabdev)</span>
            </h1>
            <p>Problem Solver & Fullstack Developer</p>
            <p className="max-w-96 text-start">
              Problem solver, focused on creating solutions that help people
              with code, but you can also call me fullstack. 😊⭐
            </p>

            <div className="flex gap-4 items-center justify-center">
              <a href="https://github.com/seuusuario" target="_blank">
                <Github className="w-6 h-6 hover:text-purple-700 transition-colors duration-700" />
              </a>
              <a href="https://linkedin.com/in/seuusuario" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-purple-700 transition-colors duration-700" />
              </a>
              <a href="https://instagram.com/seuusuario" target="_blank">
                <Instagram className="w-6 h-6 hover:text-purple-700 transition-colors duration-700" />
              </a>
            </div>
          </div>
          <Image
            src={"/foto-portfolio.png"}
            width={400}
            height={400}
            quality={100}
            alt="Pablo Teixeira picture"
          />
        </div>
      </div>
    </div>
  );
}
