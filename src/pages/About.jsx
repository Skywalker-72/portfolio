import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-slate-900">About</h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed font-light">
          I solve business problems with code. Full-stack engineer who's shipped products to real users—from API design and database architecture to frontend implementation and deployment.
        </p>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed font-light">
          I work with clients and teams to build reliable systems that scale.
        </p>
      </motion.div>
    </Section>
  );
}

function Section({ children, id }) {
  return <section id={id} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-b border-slate-100">{children}</section>;
}