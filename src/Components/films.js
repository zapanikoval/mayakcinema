const films = [
  // {
  //   type: "soon",
  //   id: "0",
  //   smallPoster: "",
  //   fullPoster: "",
  //   name: "",
  //   originalName: "",
  //   producer: "",
  //   releaseDate: "Премьера: ",
  //   style: "",
  //   studio: "",
  //   mainRoles: "",
  //   description: ""
  // },
  {
    type: "soon",
    link: "49s0cTx2C4M",
    id: "13",
    smallPoster:
      "https://www.film.ru/sites/default/files/movies/posters/9656996-1136723.jpg",
    fullPoster: "https://www.kino-teatr.ru/movie/poster/132562/97678.jpg",
    name: "Плохие парни навсегда",
    originalName: "Bad Boys for Life",
    producer: "Адиль Эль Арби, Билал Фалла",
    releaseDate: "Премьера: 16.01.2020",
    style: "боевик, комедия, криминал, триллер",
    studio: "Columbia Pictures, Jerry Bruckheimer Films, Platinum Dunes",
    mainRoles: "Уилл Смит, Ванесса Хадженс, Александр Людвиг",
    description:
      "Маркус Бернетт в какой-то момент поругался с напарником, уволился из полиции Майами и стал работать частным детективом. А Майк Лоури в это время тяжело переживает кризис среднего возраста и пытается поставить на место своего нового наглого напарника. Но старые друзья должны забыть старые обиды, чтобы дать отпор албанскому наемнику, который хочет убить их, чтобы отомстить за смерть брата."
  },
  {
    type: "soon",
    link: "XjZlLcBCAE0",
    id: "12",
    smallPoster:
      "https://media.kg-portal.ru/movies/t/topgun2/posters/topgun2_3.jpg",
    fullPoster:
      "https://avatars.mds.yandex.net/get-zen_doc/96506/pub_5d31c5a595aa9f00ac4e90c7_5d31c5f9fe289100acafa9d5/scale_1200",
    name: "Топ Ган: Мэверик",
    originalName: "Top Gun: Maverick",
    producer: "Джозеф Косински",
    releaseDate: "Премьера: 24.06.2020",
    style: "боевик, военный",
    studio: "Jerry Bruckheimer Films, Paramount Pictures, Skydance Productions",
    mainRoles: "Том Круз, Дженнифер Коннелли, Вэл Килмер",
    description:
      "Продолжение культового фильма, посвященного пилотам американских ВВС. Ожидается, что в продолжении помимо летчиков зрители увидят и операторов беспилотных летательных аппаратов."
  },
  {
    type: "soon",
    link: "982t8dGytog",
    id: "11",
    smallPoster:
      "https://media.kg-portal.ru/movies/g/godzillavskingkong/posters/godzillavskingkong_1.jpg",
    fullPoster: "https://i.ytimg.com/vi/FAcdUdb-gCQ/maxresdefault.jpg",
    name: "Годзилла против Кинг Конга",
    originalName: "Godzilla vs. Kong",
    producer: "Адам Вингард",
    releaseDate: "Премьера: 18.11.2020",
    style: "боевик, драма, приключения, триллер, фантастика",
    studio: "Legendary Pictures, Warner Bros.",
    mainRoles: "Милли Бобби Браун, Эйса Гонсалес, Александр Скарсгард",
    description:
      "Легендарная Годзилла и величественный Конг должны сойтись в невероятной схватке за титул абсолютного Короля Монстров. А человечеству остается только наблюдать и делать ставки на победителя..."
  },
  {
    type: "soon",
    link: "45eOmSRNF6o",
    id: "10",
    smallPoster: "https://www.kino-teatr.ru/movie/poster/134872/96812.jpg",
    fullPoster:
      "https://storage.myseldon.com/news_pict_01/01558148F283D9283A26DF6B4718F207",
    name: "Душа",
    originalName: "Soul",
    producer: "Пит Доктер, Кемп Пауэрс",
    releaseDate: "Премьера: 17.06.2020",
    style: "Музыка, мультфильм, приключения, фантастика, фэнтези",
    studio: "Pixar Animation Studios, Walt Disney Pictures Distributors",
    mainRoles: "Тина Фей, Джейми Фокс, Джон Ратценбергер",
    description:
      "История музыканта, который растерял свою страсть к музыке и потерял свое тело. И теперь он должен познать себя заново и найти путь обратно с помощью детской души."
  },
  {
    type: "soon",
    link: "UZXB4aAIJcw",
    id: "9",
    smallPoster:
      "https://ic.pics.livejournal.com/shakko_kitsune/2710882/1668869/1668869_original.png",
    fullPoster:
      "https://www.vokrug.tv/pic/product/7/8/1/b/781b37bb2d0c49d4473104709466f2d4.jpg",
    name: "Дюна",
    originalName: "Dune",
    producer: "Дени Вильнёв",
    releaseDate: "Премьера: 19 ноября 2020",
    style: "Фантастика, драма, приключения",
    studio: "Legendary Entertainment",
    mainRoles: "Тимоти Чаламет, Ребекка Фергюсон, Оскар Айзек",
    description:
      "В центре сюжета оказывается сын из знатного и могущественного семейства, который на пустынной планете Арракис должен контролировать и защищать самый важный элемент во всей Галактике - спайс. А все потому, что тот, кто имеет контроль на спайсом, управляет Вселенной..."
  },
  {
    type: "soon",
    link: "05UL-7iwW7Y",
    id: "8",
    smallPoster:
      "https://upload.wikimedia.org/wikipedia/ru/5/56/Tenet_%28poster%29.jpg",
    fullPoster:
      "https://www.kinopoisk.ru/im/poster/3/4/4/kinopoisk.ru-Tenet-3448556--o--.jpg",
    name: "Довод",
    originalName: "Tenet",
    producer: "Кристофер Нолан",
    releaseDate: "Премьера: 17.07.2020",
    style: "Боевик, криминал, триллер",
    time: "",
    studio: "Syncopy, Warner Bros.",
    mainRoles: "Роберт Паттинсон, Элизабет Дебики, Аарон Тейлор-Джонсон",
    description:
      "Глобальный шпионский триллер с захватывающим сюжетом, действие которого происходит в семи разных странах."
  },
  {
    type: "inRelease",
    link: "FGn1nHAaVe0",
    id: "1",
    smallPoster:
      "https://multiplex.ua//images/0d/db/0ddb80b77212f6277fefec9b6b76cc4e.jpeg",
    fullPoster:
      "https://moemisto.ua/img/cache/event_huge/event/0004/60/83d92dca8906c193ab053c307e1f84f0b2e0445a.jpeg?hash=2019-12-23-00-01-45",
    name: "Шпион под прикрытием",
    yearLimit: "0+",
    originalName: "Spies in Disguise",
    producer: "Ник Бруно, Трой Квон",
    releaseTime: "25.12.2019 - 22.01.2020",
    rate: "6.8",
    style: "Анимация, Приключения, Мультфильм, Комедия",
    time: "1:42",
    studio: "20th Century Fox",
    mainRoles: "Том Холланд, Уилл Смит",
    description:
      "Ленс Стерлинг - самый крутой шпион в мире. Дерзкий, обаятельный, с супер возможностями. Его дело - спасать мир. И никто не сделает этого лучше. Почти полной противоположностью является Уолтер. Уолтер имеет светлую голову, но не очень общительным. Впрочем, отсутствие коммуникабельности он компенсирует интеллектом и изобретательностью. Уолтер - научный гений, изобретает различные гаджеты, которые Ленс использует в своих миссиях. Однако, когда события делают неожиданный поворот, Уолтер и Ленс вдруг вынуждены полагаться друг на друга в совершенно новый способ. И, если эта странная парочка не научится работать в команде, весь мир окажется под смертельной угрозой."
  },
  {
    type: "inRelease",
    link: "vkk2w36-Trc",
    id: "2",
    smallPoster:
      "https://multiplex.ua/images/2f/7a/2f7a698873d31b3d8b507c1ca432686e.jpeg",
    fullPoster: "https://i.ytimg.com/vi/t0tS-QB9nYU/maxresdefault.jpg",
    name: "Судить по совести",
    yearLimit: "16+",
    originalName: "Just Mercy",
    producer: "Дестин Креттон",
    releaseTime: "16.01.2020 - 22.01.2020",
    rate: "7.0",
    style: "Драма",
    time: "2:16",
    studio: "Warner Bros. Pictures",
    mainRoles: "Майкл Б. Джордан, Джейми Фокс, Бри Ларсон",
    description:
      "«Судить по совести» - это мощная история, которая заставляет задуматься.  Лента, основанная на реальных событиях, расскажет о молодом адвоката Брайане Стивенсоне, который посвятил свою жизнь борьбе за справедливость.  После окончания Гарварда Брайан имел возможность устроиться на прибыльную работу.  Однако вместо этого он едет в Алабаму, чтобы защитить неправомерно осужденных и тех, кто не получил надлежащей защиты."
  },
  {
    type: "inRelease",
    link: "gUvk6BcpS5s",
    id: "7",
    smallPoster:
      "https://multiplex.ua/images/93/e8/93e8a020de40a9cd81b8a342704d3c8d.jpeg",
    fullPoster:
      "http://www.kino-nik.ru/wp-content/uploads/2019/09/CrazyWedding2_Main_Final_layout_100x70.jpg",
    name: "Сумасшедшая Свадьба 2",
    yearLimit: "0+",
    originalName: "Скажене Весілля 2",
    producer: "Влад Дикий",
    releaseTime: "24.12.2019 - 22.01.2020",
    rate: undefined,
    style: "Комедия",
    time: "1:38",
    studio: "FILM.UA GROUP, Prototype Production",
    mainRoles:
      "Назар Заднепровский, Полина Василина, Джимми Воха-Воха, Юрий Горбунов, Леся Самаева, Александр Кобзарь, Вера Кобзарь, Инна Приходько, Арам Арзуманян, Потап, MONATIK",
    description:
      "События нового фильма происходят через год после «Сумасшедшей Свадьбы». ЕЩЕ один сюрприз, ЕЩЕ одна дочка и ЕЩЕ одна  Сумасшедшая Свадьба ждут любимых героев. Погоня, новый зять, Назарий Запухляк, отец Евлампий, монахи, звездный каст, много сумасшедших приключений и еще больше качественного украинского юмора!"
  },
  {
    type: "inRelease",
    link: "tmdVsWXhM94",
    id: "6",
    smallPoster:
      "https://multiplex.ua/images/37/92/37926f7b17341cfb6e17f7132a3f608f.jpeg",
    fullPoster:
      "https://www.subotica.com/files/_thumb/1024x768/event/4/4/9/35449/35449-proslog-bozica.png",
    name: "Счастливого Рождества",
    yearLimit: "12+",
    originalName: "Last Christmas",
    producer: "Пол Фиг",
    releaseTime: "01.01.2020 - 22.01.2020",
    rate: "6.6",
    style: "Романтика, Комедия",
    time: "1:43",
    studio: "Universal Studios",
    mainRoles: "Эмилия Кларк, Эмма Томпсон, Генри Голдинг",
    description:
      "Невероятная Эмилия Кларк в романтической рождественской комедии! Закомплексованная и циничная Кейт работает эльфом  в магазине и постоянно принимает неправильные решения. Случайная встреча с привлекательным незнакомцем меняет ее жизнь навсегда. Но он слишком ... идеальный, чтобы быть правдой! Кейт устроит отношениям настоящие испытания."
  },
  {
    type: "inRelease",
    link: "E_116VG-djE",
    id: "5",
    smallPoster:
      "https://multiplex.ua/images/b3/9b/b39b70cfe7259f4e302a0fd8e9872454.jpeg",
    fullPoster:
      "https://media.kg-portal.ru/movies/j/jumanji3/trailers/38967t.jpg",
    name: "Джуманджи: Следующий уровень",
    yearLimit: "12+",
    originalName: "Jumanji: The Next level",
    producer: "Джейк Кэздан",
    releaseTime: "12.12.2019 - 22.01.2020",
    rate: "7.0",
    style: "Экшн, Приключения, Фэнтези",
    time: "2:03",
    studio: "Sony",
    mainRoles: "Карен Гиллан, Двейн Джонсон, Кевин Харт, Джек Блек",
    description:
      "Дуэйн Джонсон возвращается в продолжении комедийного приключенческого блокбастера!  Фантастическая игра Джуманджи переходит на новый уровень и меняет правила.  Чтобы выжить в жестких условиях, героям придется примерить новые неожиданные роли, открыть новые возможности и бросить вызов новым опасностям."
  },
  {
    type: "inRelease",
    link: "865zVfhKa38",
    id: "4",
    smallPoster:
      "https://multiplex.ua/images/ed/fe/edfe63a86285c417e29e9e0c8405850e.jpeg",
    fullPoster:
      "https://imgclf.112.ua/original/2019/11/28/408737.jpg?timestamp=1574916746",
    name: "Дулитл",
    yearLimit: "0+",
    originalName: "Dolittle",
    producer: "Стивен Гейган",
    releaseTime: "08.01.2020 - 22.01.2020",
    rate: "5.7",
    style: "Приключения, Фантастика",
    time: "1:41",
    studio: "Universal",
    mainRoles: "Роберт Дауни мл., Майкл Шин, Антонио Бандерас",
    description:
      "Потрясающая экранизация известной истории Доктора Дулиттла (Роберт Дауни-мл.). Однажды эксцентричный доктор выясняет, что понимает язык животных! Дулитл отправляется в большое путешествие навстречу удивительным приключениям с причудливой разношерстной компанией."
  },
  {
    type: "inRelease",
    link: "zGJCd0lXLf8",
    id: "3",
    smallPoster:
      "https://multiplex.ua/images/f4/f1/f4f1b8296757a238089ef863e2ddd327.jpeg",
    fullPoster:
      "https://s.0432.ua/section/kinoanons_images/upload/images/afisha_kino/gallery/000/051/632/poster5dc3ba7ce29df_5e130dca394e9.jpg",
    name: "Проклятие",
    yearLimit: "16+",
    originalName: "The Grudge",
    producer: "Николас Песке",
    releaseTime: "16.01.2020 - 22.01.2020",
    rate: "4.1",
    style: "Ужасы",
    time: "1:34",
    studio: "Sony",
    mainRoles: "Лин Шэй, Андреа Райзборо,Бетти Гилпин",
    description:
      "Известный хоррор, который получил миллионы фанов по всему миру и заставил вздрогнуть самых смелых, возвращается. Новое пришествие культового 'ёПроклятия' покажет новые лица темноты, бороться с которыми бесполезно."
  }
];

export default films;
