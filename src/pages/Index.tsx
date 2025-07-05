import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1A] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Music" size={32} className="text-[#0066ff]" />
            <h1 className="text-2xl font-bold">INCREDIBOX</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#0066ff] transition-colors">
              О игре
            </a>
            <a
              href="#features"
              className="hover:text-[#0066ff] transition-colors"
            >
              Особенности
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Создавай музыку
            <br />
            <span className="text-[#0066ff]">с Incredibox</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Интерактивная музыкальная игра, где каждый может стать битбоксером и
            создать свой уникальный трек
          </p>
          <a
            href="https://www.incredibox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#0066ff] text-white text-lg font-semibold rounded-full hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Icon name="Play" size={24} className="mr-2" />
            Incredibox play now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#2d2d2d] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">О игре</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-[#0066ff]">
                  Что такое Incredibox?
                </h4>
                <p className="text-gray-300 mb-4">
                  Incredibox — это музыкальная игра, которая позволяет создавать
                  собственные треки, просто перетаскивая звуковые иконки на
                  анимированных персонажей.
                </p>
                <p className="text-gray-300 mb-6">
                  Каждый персонаж воспроизводит определенный звук: биты,
                  мелодии, эффекты и голоса. Объединяйте их, чтобы создать
                  уникальную композицию!
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-[#0066ff] mr-2"
                    />
                    <span className="text-sm text-gray-400">
                      Для всех возрастов
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Headphones"
                      size={20}
                      className="text-[#0066ff] mr-2"
                    />
                    <span className="text-sm text-gray-400">
                      8 музыкальных стилей
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1A] p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Особенности игры</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon
                      name="Music"
                      size={16}
                      className="text-[#0066ff] mt-1 mr-3"
                    />
                    <span className="text-gray-300">
                      Интуитивно понятный интерфейс
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="Palette"
                      size={16}
                      className="text-[#0066ff] mt-1 mr-3"
                    />
                    <span className="text-gray-300">
                      Яркая анимация и графика
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="Share"
                      size={16}
                      className="text-[#0066ff] mt-1 mr-3"
                    />
                    <span className="text-gray-300">
                      Делитесь своими треками
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="Award"
                      size={16}
                      className="text-[#0066ff] mt-1 mr-3"
                    />
                    <span className="text-gray-300">Открывайте бонусы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1A] py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Music" size={24} className="text-[#0066ff]" />
            <span className="text-xl font-bold">INCREDIBOX</span>
          </div>
          <p className="text-gray-400 mb-4">
            Музыкальная игра для творчества и вдохновения
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#0066ff] transition-colors"
            >
              <Icon name="Globe" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0066ff] transition-colors"
            >
              <Icon name="Youtube" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0066ff] transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Incredibox. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
