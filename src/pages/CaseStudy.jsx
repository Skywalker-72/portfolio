import { motion } from "framer-motion";

export function CaseStudy() {
  return (
    <Section id="work">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Flagship Project</h2>

        <div className="border border-slate-200 rounded-xl p-10 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">TeamEvents</h3>
              <p className="mt-2 text-indigo-600 font-medium text-sm">Live engagement platform</p>
            </div>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed font-light mb-10">
            A web platform for real-time audience engagement at events. Handles thousands of concurrent users with live data sync and interactive experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10 py-8 border-y border-slate-200">
            <CaseBlock
              title="Challenge"
              text="Event organizers needed real-time tools to drive audience engagement beyond slides and presentations."
            />
            <CaseBlock
              title="Solution"
              text="Built a real-time platform with WebSocket sync, scalable backend, and responsive frontend. Designed for thousands of concurrent users."
            />
            <CaseBlock
              title="Result"
              text="Live in production. Deployed at multiple events. Reduced setup time and increased attendee engagement by 40%."
            />
          </div>

          <div className="mb-8">
            <p className="text-sm text-slate-500 font-medium mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Spring Boot", "AWS", "MySQL", "Redis", "WebSockets"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://teamevents.ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
          >
            View live product →
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

function CaseBlock({ title, text }) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed font-light">{text}</p>
    </div>
  );
}

function Section({ children, id }) {
  return <section id={id} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-b border-slate-100">{children}</section>;
}