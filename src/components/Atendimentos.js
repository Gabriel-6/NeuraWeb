const Atendimentos = () => {
  const estados = ["Bahia (BA)", "Ceará (CE)", "Minas Gerais (MG)", "Paraíba (PB)", "Paraná (PR)", "Rio Grande do Norte (RN)", "São Paulo (SP)"]
  return (
    <section id="atendimentos" className="text-center py-12 bg-gradient-to-r shadow-md rounded-lg mx-4 md:mx-16 mt-10">
      <h2 className="text-3xl font-bold text-gray-800">📍 Atendemos nos seguintes estados:</h2>

      <ul className="mt-6 text-lg text-gray-700 grid grid-cols-2 md:grid-cols-4 gap-6">
        {estados.map((estado) => (
          <li
            key={estado}
            className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105 border border-gray-200 ml-5 mr-5"
          >
            {estado}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-lg text-gray-700">Está em um desses estados? Entre em contato conosco!</p>
        <a
          href="https://wa.me/5535997109563"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Fale conosco no WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Atendimentos