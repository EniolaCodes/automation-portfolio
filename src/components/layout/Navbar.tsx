import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="">Fatimah</span>
            <span className="text-blue-600">Adebimpe</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-xl
            hover:bg-blue-700
            transition
            "
          >
            Free Automation Audit
          </button>
        </div>
      </Container>
    </header>
  );
}
