import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <Container>
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          "
        >
          <div>
            <h3 className="font-bold">
              Fatimah <span className="text-blue-600">Adebimpe</span>
            </h3>

            <p className="text-slate-500 mt-2">AI Automation Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/fatimah-adebimpe-441b10145/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="mailto:adebimpeniola@gmail.com" target="_blank">
              Email
            </a>
            <a href="https://github.com/EniolaCodes" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
