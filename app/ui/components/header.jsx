import { ModeToggle } from "@/app/ui/components/mode-toggle"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 px-8">
      <div>
        <span>pablodev</span>
        <span>.</span>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  )
}