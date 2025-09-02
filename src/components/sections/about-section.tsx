import SectionWrapper from '../section-wrapper';
import AnimatedCounter from '../animated-counter';

const stats = [
  { value: 1200, label: 'Successful Projects', suffix: '+' },
  { value: 180, label: 'Happy Clients', suffix: '+' },
  { value: 20, label: 'Countries Served', suffix: '+' },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">About Us</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              At LeadSphere, we help businesses grow by turning data into valuable deals. We specialize in B2B lead generation, data solutions, and creative digital services that help companies scale.
            </p>
             <p className="mt-4 text-muted-foreground md:text-lg">
              With a proven track record as a Top-Rated Freelancer on platforms like LinkedIn, we are committed to delivering excellence and driving results for our clients across the globe.
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg">
                  <div className="text-4xl sm:text-5xl font-bold text-accent font-headline">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
