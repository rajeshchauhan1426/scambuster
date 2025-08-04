import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutSection } from "@/components/about-section";

const teamMembers = [
    {
        name: "Rajesh Kumar",
        role: "CEO & Lead Architect",
        avatar: "RK",
        imageUrl: "https://placehold.co/400x400.png",
        bio: "With over 15 years in cybersecurity, Rajesh leads the team with a vision to make the digital world a safer place. His expertise in AI and scalable systems is the driving force behind SafeNet.AI.",
        dataAiHint: "man portrait"
    },
    {
        name: "Satish Patel",
        role: "Head of AI Research",
        avatar: "SP",
        imageUrl: "https://placehold.co/400x400.png",
        bio: "Satish is a machine learning prodigy, responsible for developing the cutting-edge algorithms that power our threat detection engine. He is passionate about leveraging AI for social good.",
        dataAiHint: "man portrait"
    },
    {
        name: "Ayush Sharma",
        role: "Lead Frontend Developer",
        avatar: "AS",
        imageUrl: "https://placehold.co/400x400.png",
        bio: "Ayush is the creative mind behind our user-friendly interface. He ensures that our powerful technology is accessible to everyone, blending seamless design with robust functionality.",
        dataAiHint: "man portrait"
    },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <section id="team" className="py-16 md:py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        Meet the Innovators
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                        We are a passionate team of developers and security experts dedicated to building a safer digital future.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="bg-card/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                                <CardContent className="flex flex-col items-center text-center p-6">
                                    <Avatar className="w-32 h-32 mb-4 border-4 border-primary/50">
                                        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                                        <AvatarFallback>{member.avatar}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">
                                        {member.bio}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <AboutSection />
            </main>
            <footer className="text-center p-4 text-muted-foreground text-sm">
                © {new Date().getFullYear()} SafeNet.AI. All rights reserved.
            </footer>
        </>
    );
}
