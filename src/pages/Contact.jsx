import { motion } from "framer-motion";

export function Contact() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="py-8"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's work together</h2>
        <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl">
          Available for freelance, contract, and full-time roles.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.linkedin.com/in/chaitanya-yash/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:chaitanya.yash0611@gmail.com"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
          >
            Email →
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

function Section({ children, id }) {
  return <section id={id} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-b border-slate-100">{children}</section>;
}