// app/page.tsx

export default function Home() {
  return (
    // Usamos uma <section> para agrupar o bloco.
    // As classes do Tailwind são usadas para estilizar:
    <section className="text-center py-20 md:py-32">
      
      {/* Título Principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Bem-vindo ao Grupo Reunidas
      </h1>

      {/* Subtítulo */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Fruto de um sonho do visionário Edson Lopes, a Reunidas nasceu em 1974 com o propósito de ser referência. Hoje, com três gerações unidas, continuamos a trilhar um caminho que une tradição, qualidade e inovação em tudo o que fazemos.
      </p>

      {/* Botão (Call to Action) */}
      <a
        href="/sobre"
        className="mt-10 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg 
                   transition-transform transform hover:scale-105 hover:bg-blue-700"
      >
        Conheça Nossa História
      </a>

    </section>
  );
}