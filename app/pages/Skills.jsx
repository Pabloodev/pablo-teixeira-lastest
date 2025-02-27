import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-col items-center space-y-8 min-h-screen">
      <h1>Skills</h1>

      {/* Base Skills */}
      <div className="flex items-center space-x-10">
      <div className="flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-lg">
        <h3>Base Skills</h3>
        <div className="flex space-x-4">
          <Image src="/html-icon.svg" alt="" width={60} height={60} />
          <Image src="/css-icon.svg" alt="" width={60} height={60} />
          <Image src="/javascript-icon.svg" alt="" width={60} height={60} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-lg">
        <h3>Frameworks and Libs</h3>
        <div className="flex space-x-4">
          <Image src="/react-icon.svg" alt="" width={60} height={60} />
          <Image src="/next-icon.svg" alt="" width={60} height={60} />
          <Image src="/tailwind-icon.svg" alt="" width={60} height={60} />
          <Image src="/shadcn-icon.svg" alt="" width={60} height={60} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-lg">
        <h3>Database</h3>
        <div className="flex space-x-4">
          <Image src="/postgre-icon.svg" alt="" width={60} height={60} />
          <Image src="/firebase-icon.svg" alt="" width={60} height={60} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 p-4 border border-purple-400 rounded-lg">
        <h3>Learning</h3>
        <div className="flex space-x-4">
          <Image src="/python-icon.svg" alt="" width={60} height={60} />
          <Image src="/tensorflow-icon.svg" alt="" width={60} height={60} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-lg">
        <h3>Deployment and versioning</h3>
        <div className="flex space-x-4">
          <Image src="/github-icon.svg" alt="" width={60} height={60} />
          <Image src="/git-icon.svg" alt="" width={60} height={60} />
          <Image src="/vercel-icon.svg" alt="" width={60} height={60} />
        </div>
      </div>
      </div>
    </div>
  );
}
