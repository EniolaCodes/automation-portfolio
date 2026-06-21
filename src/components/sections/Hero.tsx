import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-blue-600 font-semibold mb-4">
            AI Automation Engineer
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "
          >
            AI-Powered Systems
            <br />
            That Scale Business Operations
          </h1>

          <p
            className="
            mt-8
            text-xl
            text-slate-600
            max-w-2xl
            "
          >
            I design automation systems, operational workflows, and business
            infrastructure that help teams eliminate manual work and operate
            efficiently.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button
              className="
              bg-blue-600
              text-white
              px-6
              py-4
              rounded-xl
              "
            >
              Book Free Audit
            </button>

            <button
              className="
              border
              px-6
              py-4
              rounded-xl
              "
            >
              View Case Studies
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
