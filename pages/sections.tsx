import Section1 from "@/sections/Section1";

const SectionItems: React.ReactNode[] = [<Section1 key="s1" />];

function Section(
  props: {
    enabled: boolean;
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return (
    <section
      {...props}
      style={{
        maxHeight: props.enabled ? "200dvh" : "0px",
        height: "max-content",
        scrollSnapAlign: "start",
        ...props.style,
      }}
      onClick={(e) => e.preventDefault()}
    >
      {props.children}
    </section>
  );
}

export default function Sections({ enabled }: { enabled: boolean }) {
  return (
    <>
      {SectionItems.map((item, index) => (
        <Section
          style={{
            transitionDuration: `calc(0.2s * ${index} + 0.3s)`,
          }}
          enabled={enabled}
          key={index}
        >
          {item}
        </Section>
      ))}
    </>
  );
}
