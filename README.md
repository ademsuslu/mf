Mikro Frontend Mimarisiyle Tanışın!

Son zamanlarda modern web geliştirme dünyasında sıkça konuşulan bir konu: Mikro Frontendler! 👀

Peki, nedir bu mikro frontendler? Bir projeyi bağımsız ve daha küçük parçalara ayırarak geliştirmenin bir yoludur. Tıpkı mikro servis mimarisinde olduğu gibi, mikro frontend yaklaşımıyla farklı ekiplerin aynı uygulama üzerinde bağımsızca çalışabilmesi mümkün hale geliyor. 🚀

🔹 Avantajları Neler?

Ekipler, projeyi kendi sorumluluk alanlarına göre bağımsız olarak geliştirebilir.

Her bir modül, kendi teknoloji yığınıyla oluşturulabilir ve yönetilebilir.

Büyük ve karmaşık projelerde geliştirme, test ve dağıtım süreçleri daha verimli hale gelir.

🔹 Kimler Kullanmalı? Mikro frontendler, özellikle büyük ölçekli ve sürekli güncellenen projeler için ideal bir çözüm sunar. Birden fazla ekipten oluşan ve hızlı geliştirme gerektiren projelerde oldukça başarılı sonuçlar elde edilebilir. 💪

🔗 Siz de mikro frontend mimarisini projelerinizde kullanmayı düşünüyorsanız, avantajlarını değerlendirin ve küçük adımlarla denemeye başlayın!

🎉 Mikro Frontendler ile Modüler Uygulama Geliştirme Adımları! 🎉

🚀 Adım 1: Proje Klasörlerini Oluşturun

1. Masaüstünüzde bir klasör oluşturun ve bu klasörü bir kod editöründe açın.

2. İlk mikro frontend uygulamanızı oluşturmak için terminalde şu komutu çalıştırın: npx create-mf-app

3. Gelen soruları şu şekilde yanıtlayın:

Uygulama adı: home

Proje türü: Application

Port numarası: 3000

Kullanılacak teknoloji: React

Dil: JavaScript

CSS seçimi: Tailwind CSS

Bundler: Webpack

4. İkinci bir uygulama için masaüstündeki aynı ana proje klasörünün içine yeni bir klasör oluşturun ve yukarıdaki komutla aynı işlemleri tekrarlayın. Bu kez:

Uygulama adı: frontend

Port numarası: 3001

🔧 Adım 2: Bağımlılıkları Yükleyin ve Sunucuları Başlatın

Her iki proje klasörüne ayrı ayrı girip bağımlılıkları yükleyin:

cd home

npm install

Aynı işlemi frontend klasörüne giderek tekrar yapın:

cd ../frontend

npm install

Şimdi her iki projeyi çalıştırabilirsiniz. Önce home projesini başlatın:

cd ../home

npm start

Ardından frontend projesini başlatın:

cd ../frontend

npm start

🖼 Adım 3: home Projesinde Header Bileşeni Oluşturun

home projesine geri dönüp, src/components/Header.js adında bir bileşen dosyası oluşturun ve basit bir header bileşeni ekleyin:

// src/components/Header.js

import React from 'react';

const Header = () => {

  return (

    <header className="bg-blue-500 text-white p-4">

      <h1>Home Uygulamasından Paylaşılan Header Bileşeni</h1>

    </header>

  );

};

export default Header;

LinkedIn paylaşımınız için detaylı ve adım adım bir içerik oluşturdum. Bu rehber, mikro frontend projelerini kurmak ve bir bileşeni paylaşmak için ihtiyacınız olan tüm adımları kapsıyor. İşte önerilen içerik:

🎉 Mikro Frontendler ile Modüler Uygulama Geliştirme Adımları! 🎉

Mikro frontend mimarisi, projeyi bağımsız parçalara ayırarak yönetilebilir ve ölçeklenebilir bir yapı sunar. İşte iki mikro frontend uygulaması oluşturma ve bir bileşeni paylaşma adımları:

🚀 Adım 1: Proje Klasörlerini Oluşturun

Masaüstünüzde bir klasör oluşturun ve bu klasörü bir kod editöründe açın.

İlk mikro frontend uygulamanızı oluşturmak için terminalde şu komutu çalıştırın:

bash

npx create-mf-app

Gelen soruları şu şekilde yanıtlayın:

Uygulama adı: home

Proje türü: Application

Port numarası: 3000

Kullanılacak teknoloji: React

Dil: JavaScript

CSS seçimi: Tailwind CSS

Bundler: Webpack

İkinci bir uygulama için masaüstündeki aynı ana proje klasörünün içine yeni bir klasör oluşturun ve yukarıdaki komutla aynı işlemleri tekrarlayın. Bu kez:

Uygulama adı: frontend

Port numarası: 3001

🔧 Adım 2: Bağımlılıkları Yükleyin ve Sunucuları Başlatın

Her iki proje klasörüne ayrı ayrı girip bağımlılıkları yükleyin:

bash

cd home

npm install

Aynı işlemi frontend klasörüne giderek tekrar yapın:

bash

cd ../frontend

npm install

Şimdi her iki projeyi çalıştırabilirsiniz. Önce home projesini başlatın:

bash

cd ../home

npm start

Ardından frontend projesini başlatın:

bash

cd ../frontend

npm start

🖼 Adım 3: home Projesinde Header Bileşeni Oluşturun

home projesine geri dönüp, src/components/Header.js adında bir bileşen dosyası oluşturun ve basit bir header bileşeni ekleyin:

javascript

// src/components/Header.js

import React from 'react';

const Header = () => {

  return (

    <header className="bg-blue-500 text-white p-4">

      <h1>Home Uygulamasından Paylaşılan Header Bileşeni</h1>

    </header>

  );

};

export default Header;

🔄 Adım 4: Webpack Konfigürasyonunu Yapılandırın

Header bileşenini frontend uygulamasına paylaşmak için her iki proje için webpack.config.js dosyalarında düzenlemeler yapmamız gerekiyor.

home Projesinde Webpack Ayarları

home projesindeki webpack.config.js dosyasını açın ve aşağıdaki adımları takip edin:

ModuleFederationPlugin eklentisini projeye dahil edin.

remotes kısmında frontend uygulamasının URL'ini belirtin.

Aşağıdaki ayarları ekleyin:

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {

  // diğer ayarlar...

  plugins: [

    new ModuleFederationPlugin({

      name: "home",

      filename: "remoteEntry.js",

      exposes: {

        "./Header": "./src/components/Header", // burada home projesinden frontend projesine headerin paylaşmak için bunu yaptık 

      },

      shared: { react: { singleton: true }, "react-dom": { singleton: true } },

    }),

  ],

};

frontend Projesinde Webpack Ayarları

frontend projesindeki webpack.config.js dosyasını açın ve şu adımları uygulayın:

ModuleFederationPlugin eklentisini projeye ekleyin.

remotes kısmına home uygulamasını dahil edin.

Konfigürasyonu aşağıdaki gibi güncelleyin:

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {

  // diğer ayarlar...

  plugins: [

    new ModuleFederationPlugin({

      name: "frontend",

      filename: "remoteEntry.js",

      remotes: {

        home: "home@http://localhost:3000/remoteEntry.js", // home projesinden headeri import etmiş olduk 

      },

      shared: { react: { singleton: true }, "react-dom": { singleton: true } },

    }),

  ],

};

home projesinde terminali açarak şu komutu çalıştırın:

npx servor . 3000

Her iki proje için yapılan bu değişikliklerden sonra sunucuları yeniden başlatın:

# home projesinde

npm start

# frontend projesinde

npm start

📦 Adım 5: Header Bileşenini frontend Projesine Dahil Edin

Artık home projesindeki Header bileşenini frontend projesinde kullanabilirsiniz. frontend projesinde bir dosya oluşturun (örneğin src/App.js içinde) ve bileşeni şu şekilde import edin:

import React from 'react';

// home projesinden Header bileşenini içe aktar

const Header = React.lazy(() => import("home/Header"));

const App = () => {

  return (

    <div>

      <React.Suspense fallback={<div>Yükleniyor...</div>}>

        <Header />

      </React.Suspense>

      <p>Frontend Uygulaması İçeriği</p>

    </div>

  );

};



export default App;

🎉 Tebrikler! Artık home projesindeki Header bileşenini frontend projesinde başarıyla kullanabilirsiniz. Bu adımlar sayesinde farklı projeler arasında bileşen paylaşımı yaparak mikro frontend mimarisinin gücünden yararlandınız! 💪
