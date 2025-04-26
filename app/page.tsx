// app/page.tsx
import CardMain from "./_components/CardMain";
import Carousel from "./_components/Carousel";

export default function Home() {
  const cardsData = [
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    { 
      title: "Сборки ПК", 
      description: "Сборки пк оттуда, откуда их лучше вообще не покупать", 
      href: "/pc-builds" 
    },
    
  ];

  return (
    <main className="w-full h-screen flex items-center justify-stars pr-4">
      <Carousel>
        {cardsData.map((card, index) => (
          <CardMain key={index} className="w-64 h-72">
            <h1 className="text-[#212529] text-3xl font-bold">{card.title}</h1>
            <h2 className="text-[#495057] text-xl mt-4">{card.description}</h2>
          </CardMain>
        ))}
      </Carousel>
    </main>
  );
}