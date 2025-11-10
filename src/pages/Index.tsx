import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Brain, Cloud, Server, Cpu, FileText } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/TimelineItem';
import { ToolCard } from '@/components/ToolCard';

// BookTooltip component for showing book cover on hover
const bookImages: Record<string, string> = {
  'Designing Machine Learning Systems': '/images/designing-ml-systems.jpg',
  'AI Engineering': '/images/ai-engineering.jpg',
  'Python for Data Analysis': '/images/python-for-data-analysis.jpg',
  'Grokking Algorithms': '/images/grokking-algorithms.jpg',
  'A Court of Thorns and Roses': '/images/acotar.jpg',
  'Before the Coffee Gets Cold': '/images/before-coffee.jpg',
  'Fairy Tale': '/images/fairy-tale.jpg',
  'Fairy Oak': '/images/fairy-oak.jpg',
};

function BookTooltip({ title, children }: { title: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && bookImages[title] && (
        <span className="absolute left-full top-1/2 z-50 ml-4 -translate-y-1/2 bg-card border border-border rounded shadow-lg p-2 w-40 flex flex-col items-center">
          <img src={bookImages[title]} alt={title + ' cover'} className="w-40 h-53 object-cover rounded mb-2" />
          <span className="text-xs text-muted-foreground text-center">{title}</span>
        </span>
      )}
    </span>
  );
}

const Index = () => {

  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Main Content */}
  <main className="max-w-4xl mx-auto px-6 pt-6 pb-20">
  {/* About Section */}
  <section id="about" className="py-12 section-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            {/* Profile Picture */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Avatar className="w-full h-full terminal-border bg-card flex items-center justify-center glow-primary">
                <AvatarImage src="/images/profile.jpg" alt="Profile picture" />
                <AvatarFallback>YC</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-foreground">
                <span className="text-primary">$</span> whoami
              </h1>
              <p className="text-xl text-primary font-semibold">Electrical Engineer & Software Developer</p>
            </div>
          </div>
          
          <div className="terminal-border bg-card/50 p-8 rounded mb-6">
            <p className="text-foreground leading-relaxed mb-4">
              I'm an engineer passionate (and constantly learning!) about AI, software development, and solving real-world problems through technology. 
              My background blends hardware and software, I started programming microcontrollers and working on IoT projects, 
              and later shifted toward artificial intelligence, focusing on machine learning, NLP, and large language models.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I truly enjoy solving problems and addressing real needs through programming, combining technical knowledge with creativity.
              I'm dedicated, proactive, and always motivated to keep learning and contributing to new challenges where I can make a meaningful impact.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded glow-primary hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              Get in touch
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-all duration-300"
            >
              View work
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Experience
          </h2>
          
          <div className="space-y-0">
            <TimelineItem
              year="May 2025 - Present"
              title="AI Engineer"
              organization="ClickIT DevOps and Software Development"
              description="Backend development and integration of artificial intelligence into software pipelines. Collaboration with multidisciplinary teams. Responsible for testing, evaluating, and presenting technical demos of solutions to stakeholders."
            />
            
            <TimelineItem
              year="March 2025 - May 2025"
              title="Development Engineer"
              organization="Cyber-Physical Systems Laboratory"
              description="Designed and integrated AI-driven software pipelines with real-time interaction, particularly applications involving real-time interaction (TTS, STT, Speech-to-Speech), with Retrieval Augmented Generation (RAG) integration."
            />
            
            <TimelineItem
              year="January 2025 - March 2025"
              title="AI Engineering Intern"
              organization="Infosys Limited Bangalore"
              description="Developed an AI-based solution for a Text-to-SQL problem. The system was designed to work with multiple data sources and handle error management and parallel query execution. A multi-agent architecture was implemented using LangGraph and LangChain."
            />

            <TimelineItem
              year="July 2025 - December 2025"
              title="Thesis Project"
              organization="Cyber-Physical Systems Laboratory"
              description="Developed and deployed an automatic system for classification of complaints received by the chilean Superintendency of Electricity and Fuels based on Large Language Models (LLMs). The work included evaluation and fine-tuning of different LLMs (encoder-only, encoder-decoder, and decoder-only), and implementation of a pilot in web app format that integrates the classification system, data visualization, statistics, and generation of processing requests, optimizing its management in the organization."
            />

            <TimelineItem
              year="July 2025 - December 2025"
              title="IoT Intern"
              organization="IoW Labs"
              description="Improved firmware efficiency in ESP32-based environmental sensors using deep sleep routines, and implemented a LoRaWAN network (gateway + nodes) with integration to The Things Network (TTN)."
            />
          </div>
        </section>

        {/* Studies Section */}
        <section id="studies" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Studies
          </h2>
          
          <div className="space-y-6">
            {/* <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Master of Science in Computer Science
              </h3>
              <p className="text-muted-foreground mb-2">University Name | 2020 - 2022</p>
              <p className="text-sm text-muted-foreground">
                Specialization in Artificial Intelligence and Machine Learning. 
                Thesis on deep learning applications in natural language processing.
              </p>
            </div> */}

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Bachelor of Science
              </h3>
              <p className="text-muted-foreground mb-2">Pontifical Catholic University of Chile | 2018 - 2024</p>
              <p className="text-sm text-muted-foreground">
                Major in Electrical Engineering, Minor in Electronics and Telecommunications. Graduated with maximum distinction.
                <br /><br />
                The program consists of a 6-year curriculum: 4 years of bachelor-level engineering, followed by 2 years of advanced engineering courses and a final thesis.
                This program is usually considered equivalent to a Master of Engineering or Professional Degree.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Certifications and Courses
              </h3>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>AWS Technical Essentials (AWS)</li>
                <li>Application Development using Microservices and Serverless (IBM)</li>
                <li>Developing AI Applications with Python and Flask (IBM)</li>
                <li>Generative AI with LLMs (DeepLearning.AI)</li>
                <li>Introduction to Linux Commands and Shell Scripting (IBM)</li>
                <li>C Programming for Beginners (Udemy)</li>
                <li>Fundamentals of VHDL and FPGA Development (Udemy)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Tools & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <ToolCard icon={Code2} name="Python" level="Advanced" />
            <ToolCard icon={Cloud} name="AWS / Google Cloud" level="Intermediate" />
            <ToolCard icon={Database} name="PostgreSQL / MongoDB" level="Intermediate" />
            <ToolCard icon={Brain} name="PyTorch" level="Intermediate" />
            <ToolCard icon={Server} name="FastAPI / Flask" level="Intermediate" />
            <ToolCard icon={Cpu} name="Docker" level="Intermediate" />
          </div>

          <div className="terminal-border bg-card/50 p-6 rounded">
            <h3 className="text-lg font-semibold text-primary mb-3">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'REST', 'Linux', 'Shell scripting', 'Langfuse', 'DeepEval', 'Redis', 'Celery', 'JavaScript', 'HTML', 'MySQL', 'SQLite', 'Google Cloud Run', 'Google Composer'].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 bg-secondary text-foreground rounded border border-border hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Portfolio
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Realtime Chatbot"
                    description="Local application that allows users to chat with an assistant through text and voice, using the Realtime API and WebSocket-based communication."
                    tech={['Python','FastAPI', 'WebSocket', 'OpenAI', 'JavaScript', 'HTML', 'CSS']}
                    github="https://github.com/csierr/realtime-voice-chatbot"
                    image="/images/realtime-chatbot.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Finetuning BETO"
                    description="Fine-tuning of the BETO model (BERT-based model for Spanish) to classify sentences into school subjects. It includes training, evaluation, and integration into a local app."
                    tech={['Python', 'PyTorch', 'Transformers', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Flask']}
                    github="https://github.com/csierr/finetuning-beto-for-spanish-text-classification"
                    image="/images/finetuning-beto.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Forecasting Store Sales"
                    description="Analysis and forecast of monthly sales using Theta Forecaster, SARIMA, and Prophet. It covers EDA, data pre-processing, and performance evaluation (MAPE, MAE, and R²)."
                    tech={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statsmodels', 'Prophet', 'Arima']}
                    github="https://github.com/csierr/forecasting-superstore-sales"
                    image="/images/forecasting.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Personal Finances App"
                    description="Application to track personal expenses through a dedicated UI and Telegram bot. It integrates OpenAI for enhanced user interaction and financial insights."
                    tech={['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML', 'Telegram API', 'OpenAI', 'CSS']}
                    github="https://github.com/tsunayoshi21/catitaycris_expenses_app"
                    image="/images/finanzas_app.png"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2">
                <div className="p-1">
                  <ProjectCard
                    title="Learning Japanese App"
                    description="A web application for Japanese language learners. It features a translation tool and provides a list of study resources available in Chile. Live app below!"
                    tech={['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Cloudflare', 'Amazon EC2', 'TypeScript', 'DeepL']}
                    github="https://github.com/tsunayoshi21/learning-japanese-app"
                    link="https://jap-app.csierr.cl/"
                    image="/images/learning_japanese.png"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Publications
          </h2>
          
          <div className="space-y-6">
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                <a href="https://www.sciencedirect.com/science/article/pii/S2590005625001973" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  An integrated complaint management system based on large language models: Case study in the electric sector
                </a>
              </h3>
              <p className="text-muted-foreground mb-3">Array Journal | Elsevier | 2025</p>
              <p className="text-sm text-muted-foreground mb-3">
              This work presents an integrated complaint management system based on large language models (LLMs), applied to the electric sector. The system automates traditionally manual tasks through a service-oriented architecture combining data processing, virtual analysts, and a web application. Evaluations demonstrate its efficiency, robustness, and scalability.
              </p>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2590005625001973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} />
                <span>Read Paper</span>
              </a>
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Teaching
          </h2>
          
          <div className="space-y-6">
            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Digital Communications Networks IEE2544
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2024 </p>
              <p className="text-sm text-muted-foreground mb-3">
                Assisted students in understanding network protocols, digital modulation techniques, and communication systems.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Programmable Electronic Systems IEE2463
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2023 </p>
              <p className="text-sm text-muted-foreground mb-3">
                Performed live hands-on laboratory and study sessions with embedded systems, circuit design, and microcontrollers. For the course the Zybo Z7-10 board was used.
              </p>
            </div> 

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Telecommunications IEE2513
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2023 - 2024</p>
              <p className="text-sm text-muted-foreground mb-3">
                Assisted students in topics such as signal transmission, network architecture, and data communication.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Electronics IEE2413
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2022 </p>
              <p className="text-sm text-muted-foreground mb-3">
                Performed live study sessions on circuit design and analysis, and semiconductor devices.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Electromagnetic Theory IEE2113
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2021 - 2022</p>
              <p className="text-sm text-muted-foreground mb-3">
                Performed live study sessions in topics related to electromagnetic theory, including Maxwell's equations, wave propagation, and antenna design.
              </p>
            </div>

            <div className="terminal-border bg-card p-6 rounded hover:glow-primary transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Signals and Systems IEE2103
              </h3>
              <p className="text-muted-foreground mb-3">Pontifical Catholic University of Chile | 2020 </p>
              <p className="text-sm text-muted-foreground">
                Performed live study sessions on Laplace and Fourier transforms, system analysis, and signal processing concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Book Recommendations Section */}
        <section id="books" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Book Recs
          </h2>
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-6">
              A few books that I've loved and that have shaped how I think about engineering and about building systems that actually work in the real world:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><BookTooltip title="Designing Machine Learning Systems"><strong>Designing Machine Learning Systems by Chip Huyen</strong></BookTooltip></li>
              <li><BookTooltip title="AI Engineering"><strong>AI Engineering by Chip Huyen</strong></BookTooltip></li>
              <li><BookTooltip title="Python for Data Analysis"><strong>Python for Data Analysis by Wes McKinney</strong></BookTooltip></li>
              <li><BookTooltip title="Grokking Algorithms"><strong>Grokking Algorithms by Aditya Bhargava</strong></BookTooltip></li>
            </ul>
          </div>
        </section>

        {/* Off-Topic Reads Section */}
        <section id="off-topic-books" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Off-topic Reads
          </h2>
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-6">
              Not everything I read is about code, here are a some non-technical reads that I also really enjoyed:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
            <li><BookTooltip title="A Court of Thorns and Roses"><strong>A Court of Thorns and Roses series by Sarah J. Maas</strong></BookTooltip></li>
            <li><BookTooltip title="Before the Coffee Gets Cold"><strong>Before the Coffee Gets Cold series by Toshikazu Kawaguchi</strong></BookTooltip></li>
            <li><BookTooltip title="Fairy Tale"><strong>Fairy Tale by Stephen King</strong></BookTooltip></li>
            <li><BookTooltip title="Fairy Oak"><strong>Fairy Oak series by Elisabetta Gnone</strong></BookTooltip></li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Contact
          </h2>
          
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-8">
              Let's connect and discuss opportunities, projects, or just talk tech!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:catalina.sierra@alumni.uc.cl"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">catalina.sierra@alumni.uc.cl</p>
                </div>
              </a>
              
              <a
                href="https://github.com/csierr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">@csierr</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/catalina-pia-sierra-simon-a06133233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Catalina Sierra</p>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Portfolio. Built with React + Vite + Tailwind CSS</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
