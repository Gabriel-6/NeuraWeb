import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Planos = () => {
  const planos = [
    { quantidade: 300, velocidade: "Mega", preco: "79,99R$ / mês", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês"] },
    { quantidade: 450, velocidade: "Mega", preco: "84,99R$ / mês", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês"] },
    { quantidade: 500, velocidade: "Mega", preco: "49,99R$ / Por 3 meses", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês"] },
    { quantidade: 600, velocidade: "Mega", preco: "99,99R$ / mês", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês"] },
    { quantidade: 900, velocidade: "Mega", preco: "109,99R$ / mês", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês"] },
    { quantidade: 1, velocidade: "Giga", preco: "149,99R$ / mês", servicos: ["Instalação Grátis", "Pagamento Somente no Próximo Mês", "ExitLag Incluso"] },
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

  const totalItems = planos.length;

  const getVisibleItems = () => {
    let items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      items.push(planos[(index + i) % totalItems]);
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
    <section id="planos" className="relative w-full max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Planos
      </h2>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <div {...handlers} className="overflow-hidden w-[320px] md:w-[960px] mi">
          <div className="flex gap-6 transition-transform duration-300">
            {getVisibleItems().map((beneficio, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-lg w-[300px] md:w-[320px] text-center border border-gray-200 min-h-[264px]"
              >
                <p className="text-xl font-bold text-gray-800">{beneficio.quantidade}</p>
                <p className="mt-1 text-sm text-gray-500 font-medium">
                  Velocidade: {beneficio.velocidade}
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {beneficio.servicos.map((servico, i) => (
                    <li
                      key={i}
                      className="py-1 px-3 bg-gray-100 rounded-lg shadow-sm border border-gray-300"
                    >
                      {servico}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Planos;
