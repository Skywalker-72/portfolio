import { motion } from "framer-motion";

export function Hero() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
          Full-stack engineer
        </h1>

        <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
          I build production systems that work. Full-stack development—from database to UI—focused on shipping features that matter.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
            React
          </span>
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            Node.js
          </span>
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
            Spring Boot
          </span>
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">
            AWS
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

function Section({ children, id }) {
  return <section id={id} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-b border-slate-100">{children}</section>;
}