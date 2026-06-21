const metrics = [
  {
    value: "3+",
    label: "Business Systems Built",
  },
  {
    value: "12+",
    label: "Workflow Automations",
  },
  {
    value: "3",
    label: "Industries Served",
  },
  {
    value: "100%",
    label: "Custom Solutions",
  },
];

export default function Metrics() {
  return (
    <section className="py-16 border-y">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className="
          grid
          md:grid-cols-4
          gap-10
          "
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h3
                className="
                text-5xl
                font-bold
                "
              >
                {metric.value}
              </h3>

              <p className="mt-2 text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
