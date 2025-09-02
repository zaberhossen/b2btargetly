import SectionWrapper from '../section-wrapper';
import { FileText, Search, Code, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Understanding Your Requirements',
    description: 'We start by analyzing your needs, goals, and target audience to create a tailored strategy.',
    icon: FileText
  },
  {
    step: 2,
    title: 'Research & Strategy',
    description: 'Our team collects and enriches data, building a high-quality prospect list and strategic plan.',
    icon: Search
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'We execute the plan, delivering high-quality leads, creative designs, or robust digital solutions.',
    icon: Code
  },
  {
    step: 4,
    title: 'Review & Final Delivery',
    description: 'We perform a final quality check to ensure accuracy and excellence before handing over the results.',
    icon: CheckCircle
  }
];

export default function WorkProcessSection() {
  return (
    <SectionWrapper id="process" className="bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-primary">Our Work Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A streamlined approach to ensure quality and results.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-border -translate-x-1/2"></div>
          {processSteps.map((item, index) => (
            <div key={item.step} className="grid md:grid-cols-2 md:gap-8 items-center my-8 md:my-0 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`md:flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="gradient-border-button p-0 w-full max-w-md">
                    <div className="content p-6 rounded-lg bg-card/50 w-full">
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-headline font-semibold text-accent">{item.title}</h3>
                        </div>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full bg-primary items-center justify-center text-primary-foreground font-bold text-lg absolute left-1/2 -translate-x-1/2" style={{ top: `calc(${(100 / (processSteps.length * 2 - 1)) * (index * 2 + 0.5)}% - 1.5rem)` }}>
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
