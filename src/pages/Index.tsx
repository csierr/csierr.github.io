import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { TimelineItem } from '@/components/TimelineItem';
import { ToolCard } from '@/components/ToolCard';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Brain, Cloud, Server, Cpu } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
                <AvatarImage src="/profile.jpg" alt="Profile picture" />
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
              I'm an engineer passionate and constantly learning about AI, software development, and solving real-world problems through technology. 
              My journey began by programming microcontrollers (IoT still has a place in my heart!), but over time, my focus shifted towards ML, NLP, and LLMs.
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
              description="Research and development of AI-powered software solutions, particularly applications involving real-time interaction (TTS, STT, Speech-to-Speech), with Retrieval Augmented Generation (RAG) integration."
            />
            
            <TimelineItem
              year="January 2025 - March 2025"
              title="AI Engineer Intern"
              organization="Infosys Limited Bangalore"
              description="Development of an AI-based solution for a Text-to-SQL problem. The system was designed to work with multiple data sources and handle error management and parallel query execution. A multi-agent architecture was implemented using LangGraph and LangChain."
            />

            <TimelineItem
              year="July 2025 - December 2025"
              title="Thesis Project"
              organization="Cyber-Physical Systems Laboratory"
              description="Development of an automatic system for classification of complaints received by the chilean Superintendency of Electricity and Fuels based on Large Language Models (LLMs). The work included evaluation and fine-tuning of different LLMs (encoder-only, encoder-decoder, and decoder-only), and implementation of a pilot in web app format that integrates the classification system, data visualization, statistics, and generation of processing requests, optimizing its management in the organization."
            />

            <TimelineItem
              year="July 2025 - December 2025"
              title="IoT Intern"
              organization="IoW Labs"
              description="Development of efficient firmware to improve energy efficiency in an environmental monitoring sensor network using Deep Sleep routines in ESP32, and implementation of a LoRaWAN network (gateway + nodes) with integration to The Things Network (TTN)."
            />
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
              {['Git', 'REST', 'Linux', 'Shell scripting', 'Langfuse', 'DeepEval', 'Redis', 'Celery', 'JavaScript', 'HTML', 'Tailwind CSS', 'MySQL', 'SQLite', 'Google Cloud Run', 'Google Composer'].map((skill) => (
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
          
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Realtime Chatbot"
              description="Local app that allows users to chat with an assistant through text and voice, using the Realtime API and WebSocket-based communication."
              tech={['Python','FastAPI', 'WebSocket', 'OpenAI', 'JavaScript', 'HTML', 'CSS']}
              github="https://github.com/csierr/realtime-voice-chatbot"
            />
            
            <ProjectCard
              title="Finetuning BETO"
              description="Fine-tuning of the BETO model (BERT-based model for Spanish) to classify sentences into school subjects. It includes training, evaluation, and integration into a local application."
              tech={['Python', 'PyTorch', 'Transformers', 'JavaScript', 'HTML']}
              github="https://github.com/csierr/finetuning-beto-for-spanish-text-classification"
            />
            
            <ProjectCard
              title="Forecasting Superstore Sales"
              description="Project for analysis and forecast of monthly sales using models like Theta Forecaster, SARIMA, and Prophet. It covers EDA, data pre-processing, and evaluation of forecasting performance (MAPE, MAE, and R²)."
              tech={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statsmodels', 'Prophet', 'Arima']}
              github="https://github.com/csierr/forecasting-superstore-sales"
            />
            
            <ProjectCard
              title="Personal Finances App"
              description="Project to track personal expenses through a dedicated UI and Telegram bot, integrating OpenAI for enhanced user interaction and financial insights."
              tech={['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML', 'Telegram API', 'OpenAI']}
              github="https://github.com/tsunayoshi21/catitaycris_expenses_app"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 section-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">//</span> Contact
          </h2>
          
          <div className="terminal-border bg-card/50 p-8 rounded mb-8">
            <p className="text-xl text-muted-foreground mb-8">
              Let's connect and discuss opportunities, projects, or just talk tech.
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
