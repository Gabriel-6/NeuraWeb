import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Beneficios = () => {
  const beneficios = [
    { src: "Icons/Deezer.png", nome: "Deezer", informacoes: "Streaming de áudio para mais música no seu dia-a-dia! Escute seus artistas, podcasts e playlists favoritos, descubra novos gostos, conheça os conteúdos exclusivos da Deezer e aproveite mais de 120 milhões de faixas do mundo todo." },
    { src: "Icons/Docway.png", nome: "Docway", informacoes: "Conheça o aplicativo de telemedicina que oferece serviços em saúde com profissionais online 24/7. Com Docway, você tem acesso a atendimento em várias especialidades, numa plataforma própria que garante o sigilo entre médico e paciente." },
    { src: "Icons/GloboPlay.png", nome: "GloboPlay", informacoes: "Assista a milhares de filmes, séries, novelas e programas, além da programação da TV Globo. Com Globoplay Plano Padrão com Anúncios, você tem acesso aos melhores conteúdos originais para o seu entretenimento completo." },
    { src: "Icons/Max.png", nome: "Max", informacoes: "Max é o streaming que reúne os principais conteúdos do entretenimento global! Assista aos filmes campeões de bilheteria, séries incríveis e aproveite uma programação única com os originais exclusivos da plataforma." },
    { src: "Icons/Mcafee.png", nome: "Mcafee", informacoes: "Conte com proteção total para sua vida online. Mantenha sua privacidade e navegue sem preocupações! Com McAfee você tem assistência remota de especialistas, suporte online e VPN premiada para maior segurança." },
    { src: "Icons/Netflix.png", nome: "Netflix", informacoes: "Assista a milhares de conteúdos incríveis e exclusivos da Netflix, incluindo filmes, séries e documentários aclamados pelo público e crítica." },
    { src: "Icons/Premiere.png", nome: "Premiere", informacoes: "Acompanhe seu time do coração e assista aos seus esportes favoritos no Premiere. Acesse a maior cobertura do futebol nacional, jogos e confrontos exclusivos ao vivo para assistir de onde quiser!" },
    { src: "Icons/Telecine.png", nome: "Telecine", informacoes: "O Telecine é uma plataforma de streaming completa, que é referência quando o assunto é experiência de cinema em casa! Prepare a pipoca e aproveite uma programação incrível com os melhores filmes, lançamentos e estreias exclusivas." },
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth > 1000 ? 3 : 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = beneficios.length;

  const getVisibleItems = () => {
    let items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      items.push(beneficios[(index + i) % totalItems]);
    }
    return items;
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerPage) % totalItems);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - itemsPerPage + totalItems) % totalItems);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="beneficios" className="relative w-full max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Principais Benefícios
      </h2>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <div {...handlers} className="overflow-hidden w-[320px] md:w-[960px]">
          <div className="flex gap-6 transition-transform duration-300">
            {getVisibleItems().map((beneficio, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow-md w-[300px] md:w-[320px] text-center"
              >
                <img
                  src={beneficio.src}
                  alt={beneficio.nome}
                  className="w-24 h-24 object-cover rounded-md mx-auto"
                />
                <p className="mt-3 text-lg font-semibold">{beneficio.nome}</p>
                <p className="mt-2 text-sm text-gray-600">{beneficio.informacoes}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Beneficios;
