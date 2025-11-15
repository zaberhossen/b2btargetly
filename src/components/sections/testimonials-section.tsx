"use client";

import SectionWrapper from '../section-wrapper';
import { Card, CardContent } from '../ui/card';

const featuredTestimonials = [
  {
    quote: "b2btargetly helped us generate high-quality leads that converted into sales. Professional, fast, and reliable.",
    author: "Client, USA"
  },
  {
    quote: "Excellent work in data scraping and research. Highly recommended!",
    author: "Client, UK"
  }
];

//     image: "/testimonials/testimonial_1.jpeg",

const testimonials = [
  {
    id: "testimonial_1",
    name: "Bisho Chamssuddin",
    image: "/testimonials/testimonial_1.jpeg",
    role: "Sales Zen Master, Ex-Sales Coach",
    text: "Rabbi helped me with multiple data related projects (creating lists and documents). He was always very reliable in his execution and I would recommend him to anyone who needs assistant with lead generation tasks.",
  },
  {
    id: "testimonial_2",
    name: "Robert Royer",
    image: "/testimonials/testimonial_2.jpeg",
    role: "Expert Marketing Strategist, Digital Marketer and Business Consultant. Owner of Marketing Consultancy that practices data-driven strategy.",
    text: "Rabbi is very strong at lead generation. I give him the project requirements and he completes them to satisfaction every time. I highly recommend him for lead generation!",
  },
  {
    id: "testimonial_3",
    name: "Trevor van Woerden",
    image: "/testimonials/testimonial_3.jpeg",
    role: "B2B Demand Generation Campaign Architect | LinkedIn LIVE Innovator",
    text: "Rabbi is the consummate LinkedIn social prospector and patiently created a relationship with me in and around the Demand Generation marketing community and I have recommended him on multiple occasions. Yesterday, I had the opportunity to retain him for a limited research project, which he completed promptly and accurately. Thanks Rabbi!",
  },
  {
    id: "testimonial_4",
    name: "Emanuel Rose",
    image: "/testimonials/testimonial_4.jpeg",
    role: "AI Integration, Award Winning Author-Speaker-B2B Marketing-Digital Marketing Expert-Fly Fisherman",
    text: "Rabby Hasan is a valued partner in lead generation and record appending. He is attentive to my needs and meets the established deadlines. I highly recommend working with him.",
  },
  {
    id: "testimonial_6",
    name: "Heidi Briones",
    image: "/testimonials/testimonial_6.jpeg",
    role: "Principal BDR @ Momentive | Former Congressional Candidate | Traine...",
    text: "Hire Rabbi Hasani Quick turnaround and quality work.",
  },
  {
    id: "testimonial_7",
    name: "Max Bumgardner",
    image: "/testimonials/testimonial_7.jpeg",
    role: "Fractional CMO for Small Business",
    text: "I used the services of this man in Bangladesh. If you need a lead list generated, and can be very specific with him, he will get you a list of leads to include name, phone, email, and LinkedIn profile. He is out of work right now. I was pleasantly surprised with the information he provided and I thought it was very reasonable. I would encourage you to reach out if you have a need. Rabbi Hasan",
  },
  {
    id: "testimonial_8",
    name: "Spiegel",
    image: "/testimonials/testimonial_8.jpeg",
    role: "Founder & CEO, Mavyn | Marketing Strategist | Business Coach | Startup Advisor",
    text: "Linkedin peeps, let's support each other. Give someone a recommendation today. On that note, shout out to Rabbi Hasan. Rabbi did an excellent job building import-ready lists for MailChimp and Hubspot. He turned the project around quickly and to my specifications and was responsive throughout.—Thanks, Rabbi!",
  },
  {
    id: "testimonial_9",
    name: "Alex Polamero",
    image: "/testimonials/testimonial_9.jpeg",
    role: "Founder, President",
    text: "Rabbi and his team have supported our marketing and sales automation agency with numerous research projects. Their work is detailed, accurate, cost-efficient, timely, and on budget. They consistently help us unlock new sales opportunities for our clients. I definitely recommend their services. Alex, Founder & President of Ninestone Marketing",
  },
  {
    id: "testimonial_10",
    name: "Britta Newly",
    image: "/testimonials/testimonial_10.jpeg",
    role: "Relationship Builder, Podcast Host & Producer, MBA Student, Artist, Writer, Freelance Front End Web Dev",
    text: "Rabbi has helped me with various tasks to operationalize my podcast. He has done great work and is consistently very prompt. I feel I definitely get a lot of value from our interactions. I appreciate how closely he follows instructions and pays attention to what I need.",
  },
  {
    id: "testimonial_11",
    name: "Matthew Desmond",
    image: "/testimonials/testimonial_11.jpeg",
    role: "Sales Professional",
    text: "I've worked with many lead generation vendors in the past, and was always extremely disappointed with the lack of understanding of ICP. I gave Rabbi a list of the exact industry I am in, an exclusion list of our current customers and competitors, and in less than a few hours he had sent over a list that was spot on for what we need. I will definitely be using Rabbi again.",
  },
  {
    id: "testimonial_12",
    name: "Wouter Dieleman",
    image: "/testimonials/testimonial_12.jpeg",
    role: "Helping B2B spin the HubSpot flywheel • HubSpot Consultant | B2B Marketing & Sales Consultant | ABM, Demand Gen & Go-to Market strategy • HubSpot Elite agency track record, 9+Y experience",
    text: "Rabbi is extremely helpful and effective when it comes to lead generation, data scraping, enrichment & entry, assisting with spreadsheets etc. Very quick in response time and in delivering the work. Can highly recommend.",
  },
  {
    id: "testimonial_13",
    name: "Nicole Spiegel-Gotsch",
    image: "/testimonials/testimonial_13.jpeg",
    role: "Founder & CEO, Mayyn | Marketing Strategist | Business Coach | Startup Advisor",
    text: "Rabbi did an excellent job building import-ready lists for MailChimp and Hubspot. He turned the project around quickly and to my specifications and was responsive throughout.",
  },
  {
    id: "testimonial_14",
    name: "Itamar Ben Yair",
    image: "/testimonials/testimonial_14.jpeg",
    role: "I help B2B and B2D startups acquire new customers with paid ads | PhD in Philosophy",
    text: "Rabbi helped me extract a list of companies from a Slack channel. The work was done on time, according to the instructions provided and the communication was clear and pleasant. I will definitely work with Rabbi again.",
  },
  {
    id: "testimonial_15",
    name: "Trevor van Woerden",
    image: "/testimonials/testimonial_15.jpeg",
    role: "Making up Questions | Delivering Answers",
    text: "Rabbi is the consummate LinkedIn social prospector and patiently created a relationship with me in and around the Demand Generation marketing community and I have recommended him on multiple occasions. Yesterday, I had the opportunity to retain him for a limited research project, which he completed promptly and accurately. Thanks Rabbi!",
  },
]

export default function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      className="py-20 overflow-hidden bg-muted/20"
    >
      <div className="container">
        <div className="fade-in-up text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow across 20+ countries
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full glass-effect transition-all duration-300 hover:border-primary hover:border-2 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="mt-6 text-right font-semibold text-primary">
                    - {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="fade-in-up text-center mb-8">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h3>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"></div>

        <div className="marquee-slider mb-6">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={`row1-${index}`}
                className="shrink-0 w-[400px] mx-3 p-6 glass-effect transition-all duration-300 hover:border-primary hover:border-2 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/30"
              >
                <div className="rounded-lg overflow-hidden mb-4 h-28">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start gap-4 mb-4">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  /> */}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-foreground text-sm">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="marquee-slider">
          <div className="marquee-track-reverse">
            {[...testimonials.slice(5), ...testimonials.slice(5)].map(
              (testimonial, index) => (
                <Card
                  key={`row2-${index}`}
                  className="shrink-0 w-[400px] mx-3 p-6 glass-effect transition-all duration-300 hover:border-primary hover:border-2 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/30"
                >
                  <div className="rounded-lg overflow-hidden mb-4 h-28">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
