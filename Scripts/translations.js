// ============================
// TRANSLATIONS
// ============================

const translations = {
  albanian: {
    // Languages dropdown
    albanian: "Shqip",
    english: "Anglisht",
    german: "Gjermanisht",
    french: "Frëngjisht",
    italian: "Italisht",
    // Navbar
    home: "Kryefaqja",
    destinations: "Destinacionet",
    activities: "Aktivitetet",
    foodAndCulture: "Ushqim & Kulturë",
    events: "Ngjarjet",
    aboutUs: "Rreth Nesh",
    contact: "Kontakti",
    languages: "Gjuhët",
    // Destinations dropdown
    beaches: "Plazhet",
    mountains: "Male",
    rivers: "Lumenjtë",
    lakes: "Liqenet",
    countryside: "Fshatrat",
    historicCities: "Qytetet Historike",
    nationalParks: "Parqet Kombëtare",
    // Activities dropdown
    hiking: "Ecje në Natyrë",
    paragliding: "Paraglajding",
    kayaking: "Kajak",
    diving: "Zhytje",
    cycling: "Çiklizëm",
    camping: "Kampe",
    // Hero section
    heroTitle: "Zbuloni Bukurinë e Shqipërisë",
    heroDescription: "Eksploroni një tokë ku natyra, kultura dhe historia bashkohen në mënyrë të përsosur një destinacion që nuk do ta harroni kurrë.",
    // Destinations Section
    destinationsTitle: "Destinacionet",
    destinationsSubtitle: "Zbuloni bukurinë përtej së zakonshmes",
    beachesDesc: "Bluja që të gjithë e kërkojnë",
    mountainsDesc: "Ngjitu më lart dhe zbulo çfarë ka rëndësi",
    riversDesc: "Lëreni lumenjtë t'ju udhëheqin drejt botës së fshehtë të natyrës",
    lakesDesc: "Ku ujërat e lashtë tregojnë histori të kohës",
    countrysideDesc: "Ku kodrat pëshpëritin histori të së kaluarës",
    historicCitiesDesc: "Ecni nëpër shekuj të historisë shqiptare",
    nationalParksDesc: "Bukuria e natyrës, e ruajtur për ju",
    exploreMore: "Shiko më shumë",
    // Activities Section
    activitiesTitle: "Aktivitetet",
    activitiesSubtitle: "Përjetoni aventurën në mbarë Shqipërinë",
    hikingDesc: "Eksploroni maja, lugina dhe shtigje mahnitëse natyrore",
    paraglidingDesc: "Fluturoni lirshëm mbi peizazhe ikonike",
    kayakingDesc: "Zbuloni lumenj, liqene dhe gjire të fshehta",
    divingDesc: "Eksploroni shpella nënujore dhe ujëra kristal",
    cyclingDesc: "Ngisni biçikletën në rrugë panoramike dhe shtigje malore",
    campingDesc: "Flini nën yje në natyrë të paprekur",
    learnMore: "Mëso më shumë",
    // Food&Culture Section
    foodTitle: "Ushqim dhe Kulturë",
    foodSubtitle: "Një udhëtim përmes shijeve, tregimeve dhe traditave autentike shqiptare",
    taveKosiDesc: "Një nga gatimet më ikonike shqiptare, që kombinon mish qengji me kos dhe vezë të pjekura.",
    flijaDesc: "Një ushqim tradicional me shtresa, i gatuar ngadalë në zjarr të hapur, simbol mikpritjeje.",
    fergeseDesc: "Specialitet i dashur i Tiranës, me speca, domate dhe gjizë të kremozuar.",
    odaDesc: "Një dhomë tradicionale mysafirësh ku ruheshin ritete dhe mikpritja shqiptare.",
    thethDesc: "Kisha ikonike e Thethit ofron qetësi dhe trashëgimi të thellë kulturore.",
    valleDesc: "Valle tradicionale shqiptare që shpreh ritëm, bashkim dhe identitet kulturor.",
    taveKosi: "Tavë Kosi",
    flija: "Flija",
    fergese: "Fërgesë Tirane",
    oda: "Oda Shqiptare",
    theth: "Thethi",
    valle: "Valle Tradicionale",
    previous: "Prapa",
    next: "Tjetra",
    // Events section (home)
    january: "JAN",
    february: "SHKU",
    march: "MAR",
    april: "PRI",
    may: "MAJ",
    june: "QER",
    july: "KORR",
    august: "GUSH",
    september: "SHT",
    october: "TET",
    november: "NËN",
    december: "DHJE",
    eventTitle: "Eventet",
    eventSubtitle: "Përjetoni traditat, festivalet dhe momentet e gjalla kulturore që përcaktojnë Shqipërinë",
    event1Title: "Triathlon Vlora – Ndieni Adrenalinën",
    event1Desc: "Projektime drite me veprat e Onufrit, Gustav Klimtit dhe Erblina Karalit ndriçojnë Mangalemin gjatë “Mangalem’s Shades”, 24–26 dhjetor në bulevardin Republika, me DJ dhe një festival të gjallë rrugor.",
    event2Title: "Festivali i Ushqimit të Rrugës në Tiranë",
    event2Desc: "“Gzo n’Shkodër” sjell festat e fundvitit: atmosferë magjike, koncerte të këngëtarëve shkodranë në shëtitore dhe kremtime njëjavore 24–31 dhjetor që nderojnë traditat e kryeqytetit verior.",
    event3Title: "Imagjinatë përballë artit dixhital në GADK, galeria e parë e arteve dixhitale në Shqipëri",
    event3Desc: "Në Korçë, vizitoni GADK, galerinë e parë immersive të arteve dixhitale në Shqipëri, për “Ikonografinë Shqiptare” me kryevepra të Onufrit e ikonografëve të tjerë. E hapur Mar–Die, 12:00–20:00, deri më 29 shkurt 2024.",
    eventsCta: "Gjej më shumë evente",
    // Events (events.html)
    eventsSubtitle: "Merrni pjesë në festivalet dhe festimet kulturore më të magjepsëse të Shqipërisë, ku historia, muzika dhe tradita marrin jetë.",
    // Event 1 card
    vloraTriathlon_title: "Triatloni i Vlorës",
    vloraTriathlon_desc: 'Kalendari Dixhital TEA shkon në Vlorë, Qytetin Evropian të Sportit, për Triatlonin e parë të Vlorës më 11 maj, me not, çiklizëm dhe vrapim përgjatë Jonit. Duke filluar nga Rrapi pranë "Ujit të Ftohtë", është një ftesë fundjave për tifozët e sportit për të shijuar aksionin dhe flladin e detit.',
    // Event 2 card
    culinaryFestival_title: 'Festivali Kulinar "Tirana Street Food" ',
    culinaryFestival_desc: 'Kalendari Digjital TEA prezanton edicionin e 4-të të Festivalit "Tirana Street Food", duke e kthyer Sheshin Skënderbej në një qendër kulinare nga 10-18 Maj. Shijoni shijet tradicionale shqiptare, pjatat ndërkombëtare nga kuzhinierët vendas dhe një atmosferë e gjallë me muzikë dhe argëtim.',
    // Event 3 card
    kayakFest_title: "Kayak Fest 2024 në Liqenin e Prespës",
    kayakFest_desc: 'Kalendari Digjital TEA sjell "Kayak Fest Albania 2024" në Liqenin e Prespës, 4-6 Maj në plazhin e Zaroshkës dhe 7 Maj në Pustec. Shijoni kampim, gara, ture me kajak, muzikë pranë liqenit, mësime për fëmijë dhe ushqim lokal ndërsa fillon sezoni turistik në këtë vend të mrekullueshëm.',
    // Event 4 card
    retroCarParade_title: "Parada e makinave retro në Sarandë",
    retroCarParade_desc: 'Kalendari TEA sjell një Paradë Makinash Retro në shëtitorin e Sarandës më 24 Prill, duke e mbushur bregdetin me makina dhe motoçikleta vjetra, muzikë "Old School" dhe histori nga pronarët e pasionuar. Festoni motoring klasik dhe bukurinë e bregdetit ndërsa fillon sezoni turistik.',
    // Event 5 card
    vloraRun_title: 'Maratona "Vlora Run"',
    vloraRun_desc: 'Maratona vjetore "Vlora Run" kthehet më 21 Prill si pjesë e vitit të Vlorës si "Qyteti Evropian i Sportit", duke mbledhur vrapues nga Shqipëria, Ballkani dhe më gjerë. Vraponi përgjatë gjirit, konkurroni për çmime dhe shijoni pamjet bregdetare të theksuara në Kalendarin Kombëtar të Turizmit TEA.',
    // Event 6 card
    albanianTourismWeek_title: "Java e turizmit shqiptar",
    albanianTourismWeek_desc: "Java e Turizmit Shqiptar kthehet në Tiranë, 5-9 Prill, duke filluar me Panairin Ndërkombëtar të Turizmit (ITFT 2024) pranë Sheshit Italia më 5-6 Prill dhe duke përfunduar me takimin e 70-të të Komisionit të Evropës së UNWTO. Prisni seanca B2B me blerës global, inovacione industriale dhe ekspozita të destinacioneve shqiptare të theksuara nga Kalendari Kombëtar i Turizmit TEA.",
    // Event 7 card
    lastAdventure_title: "Aventura e Fundit e Evropës në Përmet",
    lastAdventure_desc: '"Aventura e Fundit e Evropës" është një festival në natyrë në Përmet, Shqipëri, 22-24 Mars, duke festuar natyrën, aventurën dhe komunitetin. Aktivitetet përfshijnë ecje, ngjitje shkëmbi, rafting, kajak, kampim dhe programe për fëmijë. Festivali integron kulturën lokale, thekson qëndrueshmërinë, promovon jetesën e shëndetshme dhe përfshin punëtori edukative dhe muzikë live, duke mbështetur ruajtjen mjedisore të Përmetit dhe iniciativat lokale përmes turizmit të përgjegjshëm.',
    // Event 8 card
    marieKraja_title: '22 vjet "Marie Kraja" Festivali Ndërkombëtar i Këngëtarëve Operistikë',
    marieKraja_desc: 'Festivali Ndërkombëtar Vokal Operistik "Marie Kraja" feston 22 vjet në Teatrin Kombëtar të Operës dhe Baletit më 27-29 Mars. Një juri ndërkombëtare e udhëheqësve të operës gjyq këngëtarë të rinj lirikë (20-34) gjatë tre netëve, transmetuar live në Top Channel, duke ekspozuar talente në rritje së bashku me Orkestrën Simfonike të Teatrit Kombëtar dhe duke promovuar imazhin kulturor të Shqipërisë në mbarë botën.',
    // Event 9 card
    gjirokasterCelebration_title: "Tre ditë kremtime në Gjirokastër",
    gjirokasterCelebration_desc: 'Festivali "Ecje me Histori" sjell tre netë festimi në Gjirokastër më 14-16 Mars, duke përfshirë muzikë tradicionale dhe moderne, ekspozita arti, punime artizanale dhe trashëgimi kulinar lokal. Kremtimet në Sheshin "Çerciz Topulli" përfshijnë performanca nga Elhaida Dani dhe Young Zerka, duke ofruar vizitorëve një përvojë kulturore autentike në qytetin e gurit.',
    // Event 10 card
    paradeOfAlbanians_title: "Parada e Shqiptarëve",
    paradeOfAlbanians_desc: 'Më 28 Nëntor, Tirana do të presë Paradën e parë "Parada e Shqiptarëve" në kremtim të 111-vjetorit të Pavarësisë Kombëtare. E organizuar nga grupi i diasporës "Albanian Roots" me Bashkinë e Tiranës, parada do të fillojë në Sheshin "Nënë Tereza", duke bashkuar mijëra shqiptarë nga të gjitha tokat shqiptare dhe diaspora arbëreshe. Pjesëmarrësit do të marshojnë me flamuj të kuq e zi përgjatë bulevardit "Dëshmorët e Kombit" drejt Sheshit Skënderbej, ku flamuri kombëtar do të ngrihet me ceremoni. Mbi 125 bashki nga komunitetet shqiptare në mbarë botën priten të marrin pjesë në këtë kremtim simbolik.',
    // Event 11 card
    folkloricEnsembles_title: "Ansamblet folklorike zbulojnë vlerat shqiptare në Ditën e Pavarësisë",
    folkloricEnsembles_desc: 'Më 28 Nëntor, Tirana do të presë një kremtim të madh folklorik me ansamblet më të mira nga Festivali Kombëtar Folklorik i Gjirokastrës. Grupe si Ansambli i Këngës dhe Vallës Popullore Shqiptare, "Shota" e Kosovës, Ansambli i Maqedonisë së Veriut, "Rapsha" e Malit të Zi dhe "Shqiponja" arbëreshe do të performojnë këngë dhe valle tradicionale në nder të Ditës së Pavarësisë dhe Flamurit të Shqipërisë. "Folk Fest 2025" do të bashkojë shqiptarët nga të gjitha rajonet dhe komunitetin arbëresh në një mbrëmje të dedikuar identitetit kombëtar, të pasuruar nga muzika dhe ritmet e folklorit shqiptar dhe arbëresh si pjesë e Kalendarit Kombëtar të Eventeve Turistike dhe Aplikacionit TEA.',
    // Event 12 card
    diasporaSummit_title: "22-23 Nëntor, Dita e Arbëreshëve dhe Summiti i 3-të i Diasporës do të kremtohen në Tiranë",
    diasporaSummit_desc: "Summiti i Diasporës dhe Kongresi Arbëresh shënojnë një takim historik që feston trashëgiminë shqiptare dhe forcon lidhjet midis shqiptarëve në mbarë botën. Eventi bashkon komunitetet e diasporës për të diskutuar fusha kyçe si arsimi, shëndetësia, biznesi, arti dhe kultura, duke theksuar rolin e diasporës si një aktiv kombëtar vital. Duke shërbyer si platformë për bashkëpunim dhe shkëmbim ideash, summiti promovon identitetin kulturor, ruan traditat dhe gjuhën dhe nderon arritjet globale të shqiptarëve. Synon të nxisë solidaritet dhe të frymëzojë projekte konkrete për një të ardhme më të ndritshme për shqiptarët kudo.",
    // About Us Section
    aboutUsTitle: "Rreth Turizmit të Shqipërisë",
    aboutUsSubtitle: "Zbulimi i bukurisë dhe statistikave të turizmit shqiptar",
    aboutUsDescription: "Shqipëria është bërë një nga destinacionet më emocionuese në rritje në Evropë. Me plazhe të paprekura, male mahnitëse, histori të pasur dhe mikpritje të ngrohtë, Shqipëria pret miliona vizitorë çdo vit. Eksploroni statistikat më poshtë për të kuptuar pse Shqipëria është destinacioni ideal për aventurën tuaj të radhës.",
    aboutUsVideoTitle: "Eksperienca e Shqipërisë",
    aboutUsMapTitle: "Shqipëria në Harta",
    // Contact Section
    contactTitle: "Na Kontaktoni",
    contactSubtitle: "Do të dëshironim të dëgjonim nga ju! Dërgoni një mesazh dhe ne do t'ju përgjigjemi sa më shpejt që të jetë e mundur.",
    // Footer
    footerAboutDesc: "Zbuloni xhevahiret e fshehura të Shqipërisë - nga plazhet e paprekura dhe malet mahnitëse deri te trashëgimia kulturore e pasur dhe kuzhina autentike. Aventura juaj fillon këtu.",
    footerQuickLinks: "Linqe të Shpejta",
    footerContactInfo: "Na Kontaktoni",
    footerLocation: "Tirana, Shqipëria",
    footerHours: "E Hënë - E Shtunë: 9:00 - 18:00",
    allRightsReserved: "Të gjitha të drejtat e rezervuara.",
    privacyPolicy: "Politika e Privatësisë",
    termsOfService: "Kushtet e Shërbimit",
    cookiePolicy: "Politika e Cookies",
    // Table translations
    tableCaption: "Statistikat e Turizmit të Shqipërisë 2024",
    tableCategory: "Kategoria",
    tableMetric: "Metrika",
    tableValue: "Vlera",
    tableGrowth: "Rritje",
    tableAnnualVisitors: "Vizitorët Vjetorë",
    tableTotalTourists: "Total Turistë",
    tablePopularSites: "Vende Popullore",
    tableCoastalLength: "Gjatësia Bregdetare",
    tableStable: "Stabile",
    tablePeaksAbove: "Maja Mbi 2000m",
    tableCulturalSites: "Vende Kulturore",
    tableUnescoHeritage: "Trashëgimi UNESCO",
    tableProtectedAreas: "Zona të Mbrojtura",
    tableAdventureOptions: "Opsione Aventurash",
    tableAnnualFestivals: "Festivale Vjetore",
    tableTotalGrowthRate: "Norma Totale e Rritjes",
    // Form translations
    title: "Na Kontaktoni",
    successMessage: "Faleminderit! Mesazhi juaj është dërguar me sukses.",
    personalInfo: "Informacioni Personal",
    messageDetails: "Detajet e Mesazhit",
    fullName: "Emri i Plotë *",
    email: "Adresa e Email-it *",
    phone: "Numri i Telefonit",
    message: "Mesazhi *",
    terms: "Pajtohem me kushtet dhe termat *",
    submitting: "Duke dërguar...",
    sendMessage: "Dërgo Mesazhin",
    nameRequired: "Emri është i detyrueshëm",
    emailRequired: "Email-i është i detyrueshëm",
    emailInvalid: "Ju lutem shkruani një adresë email të vlefshme",
    messageRequired: "Mesazhi është i detyrueshëm",
    messageMinLength: "Mesazhi duhet të jetë të paktën 10 karaktere",
    termsRequired: "Duhet të pajtoheni me kushtet",
    namePlaceholder: "Shkruani emrin tuaj të plotë",
    emailPlaceholder: "emaili.juaj@shembull.com",
    phonePlaceholder: "Numri i telefonit (opsional)",
    messagePlaceholder: "Shkruani mesazhin tuaj këtu...",
    // Legal Pages
    lastUpdated: "Përditësuar së fundmi:",
    termsOfServiceTitle: "Kushtet e Shërbimit",
    privacyPolicyTitle: "Politika e Privatësisë",
    cookiePolicyTitle: "Politika e Cookies",
    termsWelcome: "Mirë se vini në VisitAlbania. Këto Kushte të Shërbimit (\"Kushtet\") rregullojnë aksesin dhe përdorimin tuaj të faqes sonë. Duke aksesuar ose përdorur faqen tonë, ju pranoni të jeni të lidhur me këto Kushte.",
    privacyWelcome: "VisitAlbania (\"ne\", \"tonë\" ose \"ne\") është i përkushtuar për të mbrojtur privatësinë tuaj. Kjo Politika e Privatësisë shpjegon se si ne mbledhim, përdorim, zbulojmë dhe mbrojmë informacionin tuaj kur vizitoni faqen tonë.",
    cookieWelcome: "Kjo Politika e Cookies shpjegon çfarë janë cookies, si VisitAlbania përdor cookies në faqen tonë, dhe zgjedhjet tuaja në lidhje me cookies.",
  },

  english: {
    // Languages dropdown
    albanian: "Albanian",
    english: "English",
    german: "German",
    french: "French",
    italian: "Italian",
    // Navbar
    home: "Home",
    destinations: "Destinations",
    activities: "Activities",
    foodAndCulture: "Food & Culture",
    events: "Events",
    aboutUs: "About Us",
    contact: "Contact",
    languages: "Languages",
    beaches: "Beaches",
    mountains: "Mountains",
    rivers: "Rivers",
    lakes: "Lakes",
    countryside: "Countryside",
    historicCities: "Historic Cities",
    nationalParks: "National Parks",
    hiking: "Hiking",
    paragliding: "Paragliding",
    kayaking: "Kayaking",
    diving: "Diving",
    cycling: "Cycling",
    camping: "Camping",
    // Hero section
    heroTitle: "Discover the Beauty of Albania",
    heroDescription: "Explore a land where nature, culture, and history blend seamlessly a destination you’ll never forget.",
    // Destinations Section
    destinationsTitle: "Destinations",
    destinationsSubtitle: "Discover the beauty beyond the ordinary",
    beachesDesc: "The blue that everyone is searching for",
    mountainsDesc: "Climb higher and discover what truly matters",
    riversDesc: "Let the rivers guide you to nature’s hidden world",
    lakesDesc: "Where ancient waters tell tales of time and history",
    countrysideDesc: "Where hills whisper stories of the past",
    historicCitiesDesc: "Walk through centuries of Albanian history",
    nationalParksDesc: "Nature’s beauty, preserved for you",
    exploreMore: "Explore more",
    // Activities Section
    activitiesTitle: "Activities",
    activitiesSubtitle: "Experience adventure across Albania",
    hikingDesc: "Explore peaks, valleys, and breathtaking nature trails",
    paraglidingDesc: "Fly freely above iconic landscapes",
    kayakingDesc: "Discover rivers, lakes, and secret coves",
    divingDesc: "Explore underwater caves and crystal waters",
    cyclingDesc: "Ride across scenic roads and mountain routes",
    campingDesc: "Sleep under the stars in untouched nature",
    learnMore: "Learn more",
    // Food&Culture Section
    foodTitle: "Food and Culture",
    foodSubtitle: "A journey through Albania’s authentic flavors, stories, and traditions",
    taveKosiDesc: "One of Albania’s most iconic dishes, combining lamb with creamy yogurt and egg bake.",
    flijaDesc: "A traditional layered dish slowly cooked over open fire, symbolizing hospitality.",
    fergeseDesc: "A beloved Tirana specialty made with peppers, tomatoes, and creamy cottage cheese.",
    odaDesc: "A traditional Albanian guest room preserving rituals and hospitality.",
    thethDesc: "The iconic church of Theth reveals the spiritual and cultural heritage of the region.",
    valleDesc: "Traditional Albanian folk dance expressing rhythm and cultural identity.",
    taveKosi: "Tavë Kosi",
    flija: "Flija",
    fergese: "Fërgesë Tirane",
    oda: "Albanian Oda",
    theth: "Theth",
    valle: "Traditional Dance",
    previous: "Previous",
    next: "Next",
    // Events section (home)
    january: "JAN",
    february: "FEB",
    march: "MAR",
    april: "APR",
    may: "MAY",
    june: "JUN",
    july: "JUL",
    august: "AUG",
    september: "SEP",
    october: "OCT",
    november: "NOV",
    december: "DEC",
    eventTitle: "Events",
    eventSubtitle: "Experience the traditions, festivals, and vibrant cultural moments that define Albania",
    event1Title: "Vlora Triathlon – Feel the Thrill",
    event1Desc: "Light projections of works by Onufri, Gustav Klimt, and Erblina Karali will illuminate Berat’s Mangalem neighborhood during “Mangalem’s Shades,” Dec 24–26 on Republika Boulevard, with DJs and a vibrant street festival in the city of a thousand windows.",
    event2Title: "Tirana Street Food Festival",
    event2Desc: "“Gzo n’Shkodër” lights up the city with year-end festivities: a magical setting, concerts by Shkodran singers on the promenade, and week-long celebrations from Dec 24–31 honoring the northern capital’s traditions.",
    event3Title: "Imagination in front of digital art in the first Gallery of Digital Arts in Albania",
    event3Desc: "In Korça, visit GADK, the first immersive Digital Arts Gallery in Albania, to experience “Albanian Iconography” with projected masterpieces by Onufri and other icons. Open Tue–Sun, 12:00–20:00, the exhibit runs through Feb 29, 2024.",
    eventsCta: "Find More Events",
    // Events (events.html)
    eventsSubtitle: "Join Albania’s most captivating festivals and cultural celebrations, where history, music, and tradition come alive.",
    // Event 1 card
    vloraTriathlon_title: "Vlora Triathlon",
    vloraTriathlon_desc: 'The TEA Digital Calendar heads to Vlora, European City of Sport, for the first ever Vlora Triathlon on May 11, swimming, cycling, and running along the Ionian. Starting from Rrapi near the "Cold Water," it is a weekend invitation to sports fans to enjoy the action and the sea breeze.',
    // Event 2 card
    culinaryFestival_title: 'The Culinary Festival "Tirana Street Food"',
    culinaryFestival_desc: 'The TEA Digital Calendar presents the 4th "Tirana Street Food" Festival, turning Skënderbej Square into a culinary hub from May 10–18. Enjoy traditional Albanian flavors, international dishes from local chefs, and a lively atmosphere filled with music and fun.',
    // Event 3 card
    kayakFest_title: "Kayak Fest 2024 in Lake Prespa",
    kayakFest_desc: 'The TEA Digital Calendar brings "Kayak Fest Albania 2024" to Lake Prespa, May 4–6 at Zaroshkë beach and May 7 in Pustec. Enjoy camping, competitions, kayak tours, music by the lake, kids lessons, and local food as the tourist season kicks off in this stunning setting.',
    // Event 4 card
    retroCarParade_title: "Retro car parade on Saranda",
    retroCarParade_desc: 'The TEA Calendar brings a Retro Car Parade to Saranda promenade on April 24, filling the seaside with vintage cars and motorcycles, "Old School" music, and stories from passionate owners. Celebrate classic motoring and seaside charm as the tourist season begins.',
    // Event 5 card
    vloraRun_title: 'The "Vlora Run" marathon',
    vloraRun_desc: 'The annual "Vlora Run" returns on April 21 as part of Vlora\'s "European City of Sports" year, gathering runners from Albania, the Balkans, and beyond. Race along the bay, compete for prizes, and enjoy the coastal sights featured in the TEA National Tourism Calendar.',
    // Event 6 card
    albanianTourismWeek_title: "Albanian tourism week",
    albanianTourismWeek_desc: "Albania Tourism Week returns to Tirana, April 5–9, launching with the International Tourism Fair (ITFT 2024) near Italia Square on April 5–6 and culminating with the 70th UNWTO Europe Commission meeting. Expect B2B sessions with global buyers, industry innovations, and showcases of Albania's destinations highlighted by the TEA National Tourism Calendar.",
    // Event 7 card
    lastAdventure_title: "The Last Adventure of Europe in Përmet",
    lastAdventure_desc: '"The Last Adventure of Europe" is an outdoor festival in Përmet, Albania, March 22–24, celebrating nature, adventure, and community. Activities include hiking, rock climbing, rafting, kayaking, camping, and kids\' programs. The festival integrates local culture, emphasizes sustainability, promotes healthy living, and features educational workshops and live music, supporting Përmet\'s environmental conservation and local initiatives through responsible tourism.',
    // Event 8 card
    marieKraja_title: '20 years "Marie Kraja" The international Festival of Operatic Singers',
    marieKraja_desc: 'The International Opera Vocal Festival "Marie Kraja" celebrates 22 years at the National Theatre of Opera and Ballet on March 27–29. An international jury of opera leaders judges young lyric singers (20–34) over three nights, broadcast live on Top Channel, showcasing emerging talent alongside the National Theatre\'s Symphony Orchestra and promoting Albania\'s cultural image worldwide.',
    // Event 9 card
    gjirokasterCelebration_title: "Three days of celebration in Gjirokastra",
    gjirokasterCelebration_desc: 'The "Walking With History" festival brings three festive nights to Gjirokastra on March 14–16, featuring traditional and modern music, art exhibitions, handicrafts, and local culinary heritage. The celebrations in "Çerciz Topulli" Square include performances by Elhaida Dani and Young Zerka, offering visitors an authentic cultural experience in the stone city.',
    // Event 10 card
    paradeOfAlbanians_title: "Parade of Albanians",
    paradeOfAlbanians_desc: 'On November 28, Tirana will host the first "Parade of Albanians" in celebration of the 111th Anniversary of National Independence. Organized by the diaspora group "Albanian Roots" with the Municipality of Tirana, the parade will begin in "Mother Teresa" Square, bringing together thousands of Albanians from all Albanian lands and the Arbëresh diaspora. Participants will march with red and black flags along the "Deshmoret e Kombit" boulevard toward Skanderbeg Square, where the national flag will be ceremonially raised. Over 125 municipalities from Albanian communities worldwide are expected to join this symbolic celebration.',
    // Event 11 card
    folkloricEnsembles_title: "Folkloric ensembles reveal Albanian values on the Independence Day",
    folkloricEnsembles_desc: 'On November 28, Tirana will host a major folkloric celebration featuring the finest ensembles from the Nationwide Folklore Festival of Gjirokastra. Groups such as the Albanian Folk Song and Dance Ensemble, Kosovo\'s "Shota," the North Macedonian Ensemble, Montenegro\'s "Rapsha," and the Arbëresh "Shqiponja" will perform traditional songs and dances in honor of Albania\'s Independence and Flag Day. "Folk Fest 2025" will unite Albanians from all regions and the Arbëresh community in an evening dedicated to national identity, enriched by the music and rhythms of Albanian and Arbëresh folklore as part of the National Tourism Events Calendar and TEA App.',
    // Event 12 card
    diasporaSummit_title: 'November 22-23, Arberesh Day and the 3rd Diaspora Summit will be celebrated in Tirana.',
    diasporaSummit_desc: 'The Diaspora Summit and Arbëresh Congress mark a historic gathering that celebrates Albanian heritage and strengthens ties between Albanians worldwide. The event unites diaspora communities to discuss key areas such as education, healthcare, business, art, and culture, emphasizing the diaspora\'s role as a vital national asset. Serving as a platform for collaboration and exchange of ideas, the summit promotes cultural identity, preserves traditions and language, and honors the global achievements of Albanians. It aims to foster solidarity and inspire concrete projects for a brighter future for Albanians everywhere.',
    // About Us Section
    aboutUsTitle: "About Albania Tourism",
    aboutUsSubtitle: "Discovering the beauty and statistics of Albanian tourism",
    aboutUsDescription: "Albania has become one of the most exciting emerging destinations in Europe. With pristine beaches, majestic mountains, rich history, and warm hospitality, Albania welcomes millions of visitors each year. Explore the statistics below to understand why Albania is the perfect destination for your next adventure.",
    aboutUsVideoTitle: "Experience Albania",
    aboutUsMapTitle: "Albania on the Map",
    // Contact Section
    contactTitle: "Get in Touch",
    contactSubtitle: "We'd love to hear from you! Send us a message and we'll respond as soon as possible.",
    // Footer
    footerAboutDesc: "Discover the hidden gems of Albania - from pristine beaches and majestic mountains to rich cultural heritage and authentic cuisine. Your adventure starts here.",
    footerQuickLinks: "Quick Links",
    footerContactInfo: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    // Form translations
    title: "Get in Touch",
    successMessage: "Thank you! Your message has been sent successfully.",
    personalInfo: "Personal Information",
    messageDetails: "Message Details",
    fullName: "Full Name *",
    email: "Email Address *",
    phone: "Phone Number",
    message: "Message *",
    terms: "I agree to the terms and conditions *",
    submitting: "Sending...",
    sendMessage: "Send Message",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Message is required",
    messageMinLength: "Message must be at least 10 characters",
    termsRequired: "You must agree to the terms",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "your.email@example.com",
    phonePlaceholder: "Phone number (optional)",
    messagePlaceholder: "Write your message here...",
    // Legal Pages
    lastUpdated: "Last updated:",
    termsOfServiceTitle: "Terms of Service",
    privacyPolicyTitle: "Privacy Policy",
    cookiePolicyTitle: "Cookie Policy",
    termsWelcome: "Welcome to VisitAlbania. These Terms of Service (\"Terms\") govern your access to and use of our website. By accessing or using our website, you agree to be bound by these Terms.",
    privacyWelcome: "VisitAlbania (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
    cookieWelcome: "This Cookie Policy explains what cookies are, how VisitAlbania uses cookies on our website, and your choices regarding cookies.",
  },

  german: {
    // Languages dropdown
    albanian: "Albanisch",
    english: "Englisch",
    german: "Deutsch",
    french: "Französisch",
    italian: "Italienisch",
    // Navbar
    home: "Startseite",
    destinations: "Reiseziele",
    activities: "Aktivitäten",
    foodAndCulture: "Essen & Kultur",
    events: "Veranstaltungen",
    aboutUs: "Über uns",
    contact: "Kontakt",
    languages: "Sprachen",
    beaches: "Strände",
    mountains: "Berge",
    rivers: "Flüsse",
    lakes: "Seen",
    countryside: "Landschaften",
    historicCities: "Historische Städte",
    nationalParks: "Nationalparks",
    hiking: "Wandern",
    paragliding: "Paragliding",
    kayaking: "Kajakfahren",
    diving: "Tauchen",
    cycling: "Radfahren",
    camping: "Camping",
    // Hero section
    heroTitle: "Entdecken Sie die Schönheit Albaniens",
    heroDescription: "Entdecken Sie ein Land, in dem Natur, Kultur und Geschichte nahtlos verschmelzen ein unvergessliches Reiseziel.",
    // Destinations Section
    destinationsTitle: "Reiseziele",
    destinationsSubtitle: "Entdecken Sie die Schönheit jenseits des Gewöhnlichen",
    beachesDesc: "Das Blau, das jeder sucht",
    mountainsDesc: "Steigen Sie höher und entdecken Sie, was wirklich zählt",
    riversDesc: "Lassen Sie die Flüsse Sie in die verborgene Welt der Natur führen",
    lakesDesc: "Wo antike Gewässer Geschichten über Zeit und Geschichte erzählen",
    countrysideDesc: "Wo Hügel Geschichten der Vergangenheit flüstern",
    historicCitiesDesc: "Spazieren Sie durch Jahrhunderte albanischer Geschichte",
    nationalParksDesc: "Die Schönheit der Natur, für Sie bewahrt",
    exploreMore: "Mehr erfahren",
    // Activities Section
    activitiesTitle: "Aktivitäten",
    activitiesSubtitle: "Erleben Sie Abenteuer in ganz Albanien",
    hikingDesc: "Erkunden Sie Gipfel, Täler und atemberaubende Naturwege",
    paraglidingDesc: "Fliegen Sie frei über ikonische Landschaften",
    kayakingDesc: "Entdecken Sie Flüsse, Seen und geheime Buchten",
    divingDesc: "Erkunden Sie Unterwasserhöhlen und kristallklares Wasser",
    cyclingDesc: "Fahren Sie über malerische Straßen und Bergwege",
    campingDesc: "Schlafen Sie unter den Sternen in unberührter Natur",
    learnMore: "Mehr erfahren",
    // Food&Culture Section
    foodTitle: "Essen und Kultur",
    foodSubtitle: "Eine Reise durch Albaniens authentische Aromen, Geschichten und Traditionen",
    taveKosiDesc: "Eines der bekanntesten albanischen Gerichte mit Lamm, Joghurt und Eiern.",
    flijaDesc: "Ein traditionelles Schichtgericht, langsam über offenem Feuer gekocht.",
    fergeseDesc: "Eine beliebte Spezialität aus Tirana mit Paprika, Tomaten und Hüttenkäse.",
    odaDesc: "Ein traditioneller albanischer Empfangsraum für Gäste und Rituale.",
    thethDesc: "Die ikonische Kirche von Theth zeigt das spirituelle Erbe der Region.",
    valleDesc: "Albanischer Volkstanz, der Rhythmus und kulturelle Identität ausdrückt.",
    taveKosi: "Tavë Kosi",
    flija: "Flija",
    fergese: "Fërgesë Tirane",
    oda: "Albanische Oda",
    theth: "Theth",
    valle: "Traditioneller Tanz",
    previous: "Zurück",
    next: "Weiter",
    // Events section (home)
    january: "JAN",
    february: "FEB",
    march: "MAR",
    april: "APR",
    may: "MAI",
    june: "JUN",
    july: "JUL",
    august: "AUG",
    september: "SEP",
    october: "OCT",
    november: "NOV",
    december: "DEZ",
    eventTitle: "Veranstaltungen",
    eventSubtitle: "Erleben Sie die Traditionen, Festivals und lebendigen kulturellen Momente, die Albanien definieren",
    event1Title: "Vlora Triathlon – Spüre den Nervenkitzel",
    event1Desc: "Lichtprojektionen mit Werken von Onufri, Gustav Klimt und Erblina Karali erleuchten Mangalem während „Mangalem’s Shades“, 24.–26. Dezember am Boulevard Republika, mit DJs und einem lebhaften Straßenfestival in der Stadt der tausend Fenster.",
    event2Title: "Tirana Street Food Festival",
    event2Desc: "„Gzo n’Shkodër“ erfüllt die Stadt mit Feststimmung: magisches Ambiente, Konzerte bekannter Shkodra-Sänger auf der Promenade und Feiern vom 24.–31. Dezember zu Ehren der Traditionen der nördlichen Hauptstadt.",
    event3Title: "Imagination vor digitaler Kunst in der ersten Galerie für Digitale Kunst in Albanien",
    event3Desc: "In Korça: Besuchen Sie GADK, die erste immersive Galerie für digitale Kunst in Albanien, und erleben Sie „Albanische Ikonographie“ mit projizierten Meisterwerken von Onufri und anderen Ikonen. Geöffnet Di–So, 12:00–20:00, bis 29. Februar 2024.",
    eventsCta: "Weitere Events",
    // Events (events.html)
    eventsSubtitle: "Nehmen Sie an Albaniens faszinierendsten Festivals und kulturellen Feierlichkeiten teil, bei denen Geschichte, Musik und Tradition zum Leben erwachen.",
    // Event 1 card
    vloraTriathlon_title: "Vlora Triathlon",
    vloraTriathlon_desc: 'Der TEA Digital Kalender geht nach Vlora, Europäische Stadt des Sports, zum allerersten Vlora Triathlon am 11. Mai, mit Schwimmen, Radfahren und Laufen entlang des Ionischen Meeres. Beginnend vom Rrapi in der Nähe des „Kalten Wassers", ist es eine Wochenend-Einladung für Sportfans, die Action und die Meeresbrise zu genießen.',
    // Event 2 card
    culinaryFestival_title: 'Das Kulinarische Festival "Tirana Street Food"',
    culinaryFestival_desc: 'Der TEA Digital Kalender präsentiert das 4. "Tirana Street Food" Festival, das den Skënderbej-Platz vom 10.–18. Mai in ein kulinarisches Zentrum verwandelt. Genießen Sie traditionelle albanische Aromen, internationale Gerichte von lokalen Köchen und eine lebendige Atmosphäre voller Musik und Spaß.',
    // Event 3 card
    kayakFest_title: "Kayak Fest 2024 am Prespa-See",
    kayakFest_desc: 'Der TEA Digital Kalender bringt "Kayak Fest Albania 2024" an den Prespa-See, 4.–6. Mai am Zaroshkë-Strand und 7. Mai in Pustec. Genießen Sie Camping, Wettkämpfe, Kajak-Touren, Musik am See, Kinderkurse und lokales Essen, während die Touristensaison in dieser atemberaubenden Umgebung beginnt.',
    // Event 4 card
    retroCarParade_title: "Retro-Autoparade in Saranda",
    retroCarParade_desc: 'Der TEA Kalender bringt eine Retro-Autoparade zur Promenade von Saranda am 24. April und füllt die Küste mit Oldtimern und Motorrädern, "Old School" Musik und Geschichten von leidenschaftlichen Besitzern. Feiern Sie klassisches Motoring und Küstencharme, während die Touristensaison beginnt.',
    // Event 5 card
    vloraRun_title: 'Der "Vlora Run" Marathon',
    vloraRun_desc: 'Der jährliche "Vlora Run" kehrt am 21. April als Teil von Vloras "Europäische Stadt des Sports" Jahr zurück und versammelt Läufer aus Albanien, dem Balkan und darüber hinaus. Rennen Sie entlang der Bucht, konkurrieren Sie um Preise und genießen Sie die Küstenansichten, die im TEA Nationalen Tourismus-Kalender hervorgehoben werden.',
    // Event 6 card
    albanianTourismWeek_title: "Albanische Tourismuswoche",
    albanianTourismWeek_desc: "Die Albanische Tourismuswoche kehrt nach Tirana zurück, 5.–9. April, beginnend mit der Internationalen Tourismusmesse (ITFT 2024) in der Nähe des Italia-Platzes am 5.–6. April und gipfelnd im 70. Treffen der UNWTO Europa-Kommission. Erwarten Sie B2B-Sitzungen mit globalen Käufern, Brancheninnovationen und Präsentationen albanischer Reiseziele, die im TEA Nationalen Tourismus-Kalender hervorgehoben werden.",
    // Event 7 card
    lastAdventure_title: "Das letzte Abenteuer Europas in Përmet",
    lastAdventure_desc: 'Das letzte Abenteuer Europas" ist ein Outdoor-Festival in Përmet, Albanien, 22.–24. März, das Natur, Abenteuer und Gemeinschaft feiert. Aktivitäten umfassen Wandern, Klettern, Rafting, Kajakfahren, Camping und Kinderprogramme. Das Festival integriert lokale Kultur, betont Nachhaltigkeit, fördert gesundes Leben und bietet Bildungs-Workshops und Live-Musik, die Përmets Umweltschutz und lokale Initiativen durch verantwortungsvollen Tourismus unterstützen.',
    // Event 8 card
    marieKraja_title: '20 Jahre "Marie Kraja" Das internationale Festival der Opernsänger',
    marieKraja_desc: 'Das Internationale Opern-Vokal-Festival "Marie Kraja" feiert 22 Jahre im Nationaltheater für Oper und Ballett am 27.–29. März. Eine internationale Jury von Opernführern beurteilt junge lyrische Sänger (20–34) über drei Nächte, live auf Top Channel übertragen, und präsentiert aufstrebende Talente zusammen mit dem Sinfonieorchester des Nationaltheaters und fördert Albaniens kulturelles Image weltweit.',
    // Event 9 card
    gjirokasterCelebration_title: "Drei Tage Feier in Gjirokastra",
    gjirokasterCelebration_desc: 'Das Festival "Gehen mit Geschichte" bringt drei festliche Nächte nach Gjirokastra am 14.–16. März mit traditioneller und moderner Musik, Kunstausstellungen, Handwerk und lokalem kulinarischem Erbe. Die Feiern auf dem "Çerciz Topulli" Platz umfassen Auftritte von Elhaida Dani und Young Zerka und bieten Besuchern eine authentische kulturelle Erfahrung in der Steinstadt.',
    // Event 10 card
    paradeOfAlbanians_title: "Parade der Albaner",
    paradeOfAlbanians_desc: 'Am 28. November wird Tirana die erste "Parade der Albaner" zur Feier des 111. Jahrestags der nationalen Unabhängigkeit veranstalten. Organisiert von der Diaspora-Gruppe "Albanian Roots" mit der Gemeinde Tirana, beginnt die Parade auf dem "Mutter Teresa" Platz und bringt Tausende von Albanern aus allen albanischen Ländern und der Arbëresh-Diaspora zusammen. Teilnehmer marschieren mit rot-schwarzen Flaggen entlang des "Dëshmorët e Kombit" Boulevards zum Skanderbeg-Platz, wo die Nationalflagge zeremoniell gehisst wird. Über 125 Gemeinden aus albanischen Gemeinden weltweit werden erwartet, an dieser symbolischen Feier teilzunehmen.',
    // Event 11 card
    folkloricEnsembles_title: "Folklore-Ensembles enthüllen albanische Werte am Unabhängigkeitstag",
    folkloricEnsembles_desc: 'Am 28. November wird Tirana eine große Folklore-Feier mit den besten Ensembles vom landesweiten Folklore-Festival von Gjirokastra veranstalten. Gruppen wie das Albanische Volkslied- und Tanz-Ensemble, Kosovos "Shota", das Nordmazedonische Ensemble, Montenegros "Rapsha" und das Arbëresh "Shqiponja" werden traditionelle Lieder und Tänze zu Ehren von Albaniens Unabhängigkeits- und Flaggentag aufführen. "Folk Fest 2025" wird Albaner aus allen Regionen und die Arbëresh-Gemeinschaft in einem Abend vereinen, der dem nationalen Identität gewidmet ist, bereichert durch die Musik und Rhythmen albanischer und Arbëresh-Folklore als Teil des Nationalen Tourismus-Events-Kalenders und der TEA App.',
    // Event 12 card
    diasporaSummit_title: "22.–23. November, Arbëresh-Tag und der 3. Diaspora-Gipfel werden in Tirana gefeiert.",
    diasporaSummit_desc: "Der Diaspora-Gipfel und der Arbëresh-Kongress markieren ein historisches Treffen, das albanisches Erbe feiert und die Bindungen zwischen Albanern weltweit stärkt. Die Veranstaltung vereint Diaspora-Gemeinschaften, um Schlüsselbereiche wie Bildung, Gesundheitswesen, Wirtschaft, Kunst und Kultur zu diskutieren und betont die Rolle der Diaspora als vitales nationales Vermögen. Als Plattform für Zusammenarbeit und Ideenaustausch fördert der Gipfel kulturelle Identität, bewahrt Traditionen und Sprache und ehrt die globalen Errungenschaften der Albaner. Es zielt darauf ab, Solidarität zu fördern und konkrete Projekte für eine hellere Zukunft für Albaner überall zu inspirieren.",
    // About Us Section
    aboutUsTitle: "Über den Tourismus in Albanien",
    aboutUsSubtitle: "Die Schönheit und Statistiken des albanischen Tourismus entdecken",
    aboutUsDescription: "Albanien ist zu einem der aufregendsten aufstrebenden Reiseziele in Europa geworden. Mit unberührten Stränden, majestätischen Bergen, reicher Geschichte und warmer Gastfreundschaft begrüßt Albanien jedes Jahr Millionen von Besuchern. Erkunden Sie die Statistiken unten, um zu verstehen, warum Albanien das perfekte Reiseziel für Ihr nächstes Abenteuer ist.",
    aboutUsVideoTitle: "Albanien erleben",
    aboutUsMapTitle: "Albanien auf der Karte",
    // Contact Section
    contactTitle: "Kontaktieren Sie uns",
    contactSubtitle: "Wir würden gerne von Ihnen hören! Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.",
    // Footer
    footerAboutDesc: "Entdecken Sie die verborgenen Juwelen Albaniens - von unberührten Stränden und majestätischen Bergen bis hin zu reichem kulturellem Erbe und authentischer Küche. Ihr Abenteuer beginnt hier.",
    footerQuickLinks: "Schnelllinks",
    footerContactInfo: "Kontaktieren Sie uns",
    footerLocation: "Tirana, Albanien",
    footerHours: "Mo - Sa: 9:00 - 18:00",
    allRightsReserved: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
    // Table translations
    tableCaption: "Albanien Tourismus Statistiken 2024",
    tableCategory: "Kategorie",
    tableMetric: "Metrik",
    tableValue: "Wert",
    tableGrowth: "Wachstum",
    tableAnnualVisitors: "Jährliche Besucher",
    tableTotalTourists: "Gesamte Touristen",
    tablePopularSites: "Beliebte Orte",
    tableCoastalLength: "Küstenlänge",
    tableStable: "Stabil",
    tablePeaksAbove: "Gipfel über 2000m",
    tableCulturalSites: "Kulturstätten",
    tableUnescoHeritage: "UNESCO Welterbe",
    tableProtectedAreas: "Geschützte Gebiete",
    tableAdventureOptions: "Abenteuer-Optionen",
    tableAnnualFestivals: "Jährliche Festivals",
    tableTotalGrowthRate: "Gesamtwachstumsrate",
    // Form translations
    title: "Kontaktieren Sie uns",
    successMessage: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    personalInfo: "Persönliche Informationen",
    messageDetails: "Nachrichtendetails",
    fullName: "Vollständiger Name *",
    email: "E-Mail-Adresse *",
    phone: "Telefonnummer",
    message: "Nachricht *",
    terms: "Ich stimme den Allgemeinen Geschäftsbedingungen zu *",
    submitting: "Wird gesendet...",
    sendMessage: "Nachricht senden",
    nameRequired: "Name ist erforderlich",
    emailRequired: "E-Mail ist erforderlich",
    emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    messageRequired: "Nachricht ist erforderlich",
    messageMinLength: "Nachricht muss mindestens 10 Zeichen lang sein",
    termsRequired: "Sie müssen den Bedingungen zustimmen",
    namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
    emailPlaceholder: "ihre.email@beispiel.com",
    phonePlaceholder: "Optionale Telefonnummer",
    messagePlaceholder: "Schreiben Sie Ihre Nachricht hier...",
    // Legal Pages
    lastUpdated: "Zuletzt aktualisiert:",
    termsOfServiceTitle: "Nutzungsbedingungen",
    privacyPolicyTitle: "Datenschutzrichtlinie",
    cookiePolicyTitle: "Cookie-Richtlinie",
    termsWelcome: "Willkommen bei VisitAlbania. Diese Nutzungsbedingungen (\"Bedingungen\") regeln Ihren Zugang zu und die Nutzung unserer Website. Durch den Zugriff auf oder die Nutzung unserer Website stimmen Sie zu, an diese Bedingungen gebunden zu sein.",
    privacyWelcome: "VisitAlbania (\"wir\", \"unser\" oder \"uns\") ist dem Schutz Ihrer Privatsphäre verpflichtet. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen.",
    cookieWelcome: "Diese Cookie-Richtlinie erklärt, was Cookies sind, wie VisitAlbania Cookies auf unserer Website verwendet und Ihre Wahlmöglichkeiten bezüglich Cookies.",
  },

  french: {
    // Languages dropdown
    albanian: "Albanais",
    english: "Anglais",
    german: "Allemand",
    french: "Français",
    italian: "Italien",
    // Navbar
    home: "Accueil",
    destinations: "Destinations",
    activities: "Activités",
    foodAndCulture: "Nourriture & Culture",
    events: "Événements",
    aboutUs: "À propos",
    contact: "Contact",
    languages: "Langues",
    beaches: "Plages",
    mountains: "Montagnes",
    rivers: "Rivières",
    lakes: "Lacs",
    countryside: "Campagne",
    historicCities: "Villes Historiques",
    nationalParks: "Parcs Nationaux",
    hiking: "Randonnée",
    paragliding: "Parapente",
    kayaking: "Kayak",
    diving: "Plongée",
    cycling: "Cyclisme",
    camping: "Camping",
    // Hero section
    heroTitle: "Découvrez la beauté de l'Albanie",
    heroDescription: "Explorez un pays où la nature, la culture et l'histoire se mêlent harmonieusement une destination inoubliable.",
    // Destinations Section
    destinationsTitle: "Destinations",
    destinationsSubtitle: "Découvrez la beauté au-delà de l’ordinaire",
    beachesDesc: "Le bleu que tout le monde cherche",
    mountainsDesc: "Montez plus haut et découvrez ce qui compte vraiment",
    riversDesc: "Laissez les rivières vous guider vers le monde caché de la nature",
    lakesDesc: "Où les eaux anciennes racontent des histoires du passé",
    countrysideDesc: "Où les collines murmurent des récits du passé",
    historicCitiesDesc: "Marchez à travers des siècles d’histoire albanaise",
    nationalParksDesc: "La beauté de la nature, préservée pour vous",
    exploreMore: "Voir plus",
    // Activities Section
    activitiesTitle: "Activités",
    activitiesSubtitle: "Vivez l’aventure à travers toute l’Albanie",
    hikingDesc: "Explorez sommets, vallées et sentiers naturels incroyables",
    paraglidingDesc: "Volez librement au-dessus de paysages iconiques",
    kayakingDesc: "Découvrez rivières, lacs et criques secrètes",
    divingDesc: "Explorez grottes sous-marines et eaux cristallines",
    cyclingDesc: "Parcourez routes panoramiques et chemins montagneux",
    campingDesc: "Dormez sous les étoiles dans une nature intacte",
    learnMore: "Voir plus",
    // Food&Culture Section
    foodTitle: "Gastronomie et Culture",
    foodSubtitle: "Un voyage à travers les saveurs, histoires et traditions authentiques de l’Albanie",
    taveKosiDesc: "Un des plats albanais les plus connus, à base d’agneau, yaourt et œufs.",
    flijaDesc: "Un plat traditionnel en couches, cuit lentement au feu de bois.",
    fergeseDesc: "Une spécialité de Tirana à base de poivrons, tomates et fromage frais.",
    odaDesc: "Une salle traditionnelle albanaise dédiée aux invités et aux rituels.",
    thethDesc: "L’église emblématique de Theth révèle l’héritage spirituel de la région.",
    valleDesc: "Danse traditionnelle albanaise exprimant rythme et identité culturelle.",
    taveKosi: "Tavë Kosi",
    flija: "Flija",
    fergese: "Fërgesë Tirane",
    oda: "Oda Albanaise",
    theth: "Theth",
    valle: "Danse Traditionnelle",
    previous: "Précédent",
    next: "Suivant",
    // Events section (home)
    january: "JAN",
    february: "FÉV",
    march: "MAR",
    april: "AVR",
    may: "MAI",
    june: "JUI",
    july: "JUILL",
    august: "AOU",
    september: "SEP",
    october: "OCT",
    november: "NOV",
    december: "DÉC",
    eventTitle: "Événements",
    eventSubtitle: "Vivez les traditions, festivals et moments culturels vivants qui définissent l’Albanie",
    event1Title: "Triathlon de Vlora – Sensations fortes",
    event1Desc: "Des projections lumineuses d’œuvres d’Onufri, de Gustav Klimt et d’Erblina Karali illuminent Mangalem lors de « Mangalem’s Shades », du 24 au 26 décembre sur le boulevard Republika, avec DJ et festival de rue animé dans la ville aux mille fenêtres.",
    event2Title: "Festival de Street Food de Tirana",
    event2Desc: "« Gzo n’Shkodër » anime la ville pour les fêtes : décor magique, concerts d’artistes shkodrans sur la promenade et une semaine de célébrations du 24 au 31 décembre en hommage aux traditions de la capitale du Nord.",
    event3Title: "Imagination face à l’art numérique dans la première Galerie d’Arts Numériques d’Albanie",
    event3Desc: "À Korça, visitez GADK, première galerie immersive d’arts numériques en Albanie, pour « Iconographie albanaise » avec projections des chefs-d’œuvre d’Onufri et d’autres icônes. Ouvert mar–dim, 12h–20h, jusqu’au 29 février 2024.",
    eventsCta: "Voir plus d’événements",
    // Events (events.html)
    eventsSubtitle: "Participez aux festivals et célébrations culturelles les plus captivants d’Albanie, où l’histoire, la musique et la tradition prennent vie.",
    // Event 1 card
    vloraTriathlon_title: "Triathlon de Vlora",
    vloraTriathlon_desc: 'Le Calendrier Digital TEA se rend à Vlora, Ville Européenne du Sport, pour le tout premier Triathlon de Vlora le 11 mai, avec natation, cyclisme et course le long de l\'Ionien. À partir de Rrapi près de "Cold Water", c\'est une invitation de week-end pour les amateurs de sport à profiter de l\'action et de la brise marine.',
    // Event 2 card
    culinaryFestival_title: 'Le Festival Culinaire "Tirana Street Food"',
    culinaryFestival_desc: 'Le Calendrier Digital TEA présente la 4e édition du Festival "Tirana Street Food", transformant la place Skënderbej en un centre culinaire du 10 au 18 mai. Profitez des saveurs traditionnelles albanaises, des plats internationaux des chefs locaux et d\'une atmosphère animée remplie de musique et de plaisir.',
    // Event 3 card
    kayakFest_title: "Kayak Fest 2024 au lac Prespa",
    kayakFest_desc: 'Le Calendrier Digital TEA apporte "Kayak Fest Albania 2024" au lac Prespa, du 4 au 6 mai à la plage de Zaroshkë et le 7 mai à Pustec. Profitez du camping, des compétitions, des excursions en kayak, de la musique au bord du lac, des cours pour enfants et de la nourriture locale alors que la saison touristique commence dans ce cadre magnifique.',
    // Event 4 card
    retroCarParade_title: "Parade de voitures rétro à Saranda",
    retroCarParade_desc: 'Le Calendrier TEA apporte une Parade de Voitures Rétro à la promenade de Saranda le 24 avril, remplissant le bord de mer de voitures et motos vintage, de musique "Old School" et d\'histoires de propriétaires passionnés. Célébrez la moto classique et le charme côtier alors que la saison touristique commence.',
    // Event 5 card
    vloraRun_title: 'Le marathon "Vlora Run"',
    vloraRun_desc: 'Le "Vlora Run" annuel revient le 21 avril dans le cadre de l\'année de Vlora en tant que "Ville Européenne du Sport", rassemblant des coureurs d\'Albanie, des Balkans et au-delà. Courez le long de la baie, participez aux prix et profitez des vues côtières présentées dans le Calendrier National du Tourisme TEA.',
    // Event 6 card
    albanianTourismWeek_title: "Semaine du tourisme albanais",
    albanianTourismWeek_desc: "La Semaine du Tourisme Albanais revient à Tirana, du 5 au 9 avril, débutant avec la Foire Internationale du Tourisme (ITFT 2024) près de la place Italia les 5-6 avril et culminant avec la 70e réunion de la Commission Europe de l'UNWTO. Attendez-vous à des sessions B2B avec des acheteurs mondiaux, des innovations industrielles et des présentations des destinations albanaises mises en évidence par le Calendrier National du Tourisme TEA.",
    // Event 7 card
    lastAdventure_title: "La Dernière Aventure de l'Europe à Përmet",
    lastAdventure_desc: '"La Dernière Aventure de l\'Europe" est un festival en plein air à Përmet, Albanie, du 22 au 24 mars, célébrant la nature, l\'aventure et la communauté. Les activités comprennent la randonnée, l\'escalade, le rafting, le kayak, le camping et les programmes pour enfants. Le festival intègre la culture locale, met l\'accent sur la durabilité, promeut un mode de vie sain et propose des ateliers éducatifs et de la musique live, soutenant la conservation environnementale de Përmet et les initiatives locales grâce au tourisme responsable.',
    // Event 8 card
    marieKraja_title: '20 ans "Marie Kraja" Le Festival International des Chanteurs d\'Opéra',
    marieKraja_desc: 'Le Festival International Vocal d\'Opéra "Marie Kraja" célèbre 22 ans au Théâtre National d\'Opéra et de Ballet du 27 au 29 mars. Un jury international de dirigeants d\'opéra juge de jeunes chanteurs lyriques (20-34 ans) sur trois nuits, diffusé en direct sur Top Channel, présentant des talents émergents aux côtés de l\'Orchestre Symphonique du Théâtre National et promouvant l\'image culturelle de l\'Albanie dans le monde entier.',
    // Event 9 card
    gjirokasterCelebration_title: 'Trois jours de célébration à Gjirokastra',
    gjirokasterCelebration_desc: 'Le festival "Marcher avec l\'Histoire" apporte trois nuits festives à Gjirokastra du 14 au 16 mars, avec musique traditionnelle et moderne, expositions d\'art, artisanat et patrimoine culinaire local. Les célébrations sur la place "Çerciz Topulli" comprennent des performances d\'Elhaida Dani et Young Zerka, offrant aux visiteurs une expérience culturelle authentique dans la ville de pierre.',
    // Event 10 card
    paradeOfAlbanians_title: "Parade des Albanais",
    paradeOfAlbanians_desc: 'Le 28 novembre, Tirana accueillera la première "Parade des Albanais" en célébration du 111e anniversaire de l\'Indépendance Nationale. Organisée par le groupe de la diaspora "Albanian Roots" avec la Municipalité de Tirana, la parade commencera sur la place "Mère Teresa", rassemblant des milliers d\'Albanais de toutes les terres albanaises et de la diaspora Arbëresh. Les participants marcheront avec des drapeaux rouges et noirs le long du boulevard "Dëshmorët e Kombit" vers la place Skanderbeg, où le drapeau national sera hissé cérémonieusement. Plus de 125 municipalités des communautés albanaises du monde entier devraient participer à cette célébration symbolique.',
    // Event 11 card
    folkloricEnsembles_title: "Les ensembles folkloriques révèlent les valeurs albanaises le jour de l'Indépendance",
    folkloricEnsembles_desc: 'Le 28 novembre, Tirana accueillera une grande célébration folklorique mettant en vedette les meilleurs ensembles du Festival Folklorique National de Gjirokastra. Des groupes tels que l\'Ensemble de Chant et Danse Folklorique Albanais, "Shota" du Kosovo, l\'Ensemble de Macédoine du Nord, "Rapsha" du Monténégro et "Shqiponja" Arbëresh interpréteront des chansons et danses traditionnelles en l\'honneur du Jour de l\'Indépendance et du Drapeau de l\'Albanie. "Folk Fest 2025" unira les Albanais de toutes les régions et la communauté Arbëresh dans une soirée dédiée à l\'identité nationale, enrichie par la musique et les rythmes du folklore albanais et Arbëresh dans le cadre du Calendrier National des Événements Touristiques et de l\'Application TEA.',
    // Event 12 card
    diasporaSummit_title: "22-23 novembre, le Jour des Arbëresh et le 3e Sommet de la Diaspora seront célébrés à Tirana.",
    diasporaSummit_desc: "Le Sommet de la Diaspora et le Congrès Arbëresh marquent un rassemblement historique qui célèbre le patrimoine albanais et renforce les liens entre les Albanais du monde entier. L'événement unit les communautés de la diaspora pour discuter de domaines clés tels que l'éducation, les soins de santé, les affaires, l'art et la culture, en soulignant le rôle de la diaspora en tant qu'atout national vital. Servant de plateforme pour la collaboration et l'échange d'idées, le sommet promeut l'identité culturelle, préserve les traditions et la langue, et honore les réalisations mondiales des Albanais. Il vise à favoriser la solidarité et à inspirer des projets concrets pour un avenir plus radieux pour les Albanais partout.",
    // About Us Section
    aboutUsTitle: "À propos du tourisme albanais",
    aboutUsSubtitle: "Découvrir la beauté et les statistiques du tourisme albanais",
    aboutUsDescription: "L'Albanie est devenue l'une des destinations émergentes les plus excitantes d'Europe. Avec des plages immaculées, des montagnes majestueuses, une histoire riche et une hospitalité chaleureuse, l'Albanie accueille des millions de visiteurs chaque année. Explorez les statistiques ci-dessous pour comprendre pourquoi l'Albanie est la destination parfaite pour votre prochaine aventure.",
    aboutUsVideoTitle: "Découvrir l'Albanie",
    aboutUsMapTitle: "L'Albanie sur la carte",
    // Contact Section
    contactTitle: "Contactez-nous",
    contactSubtitle: "Nous aimerions avoir de vos nouvelles ! Envoyez-nous un message et nous répondrons dès que possible.",
    // Footer
    footerAboutDesc: "Découvrez les joyaux cachés de l'Albanie - des plages immaculées et des montagnes majestueuses au patrimoine culturel riche et à la cuisine authentique. Votre aventure commence ici.",
    footerQuickLinks: "Liens rapides",
    footerContactInfo: "Contactez-nous",
    footerLocation: "Tirana, Albanie",
    footerHours: "Lun - Sam: 9h00 - 18h00",
    allRightsReserved: "Tous droits réservés.",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    cookiePolicy: "Politique des cookies",
    // Table translations
    tableCaption: "Statistiques du tourisme albanais 2024",
    tableCategory: "Catégorie",
    tableMetric: "Métrique",
    tableValue: "Valeur",
    tableGrowth: "Croissance",
    tableAnnualVisitors: "Visiteurs annuels",
    tableTotalTourists: "Total touristes",
    tablePopularSites: "Sites populaires",
    tableCoastalLength: "Longueur côtière",
    tableStable: "Stable",
    tablePeaksAbove: "Sommets au-dessus de 2000m",
    tableCulturalSites: "Sites culturels",
    tableUnescoHeritage: "Patrimoine UNESCO",
    tableProtectedAreas: "Zones protégées",
    tableAdventureOptions: "Options d'aventure",
    tableAnnualFestivals: "Festivals annuels",
    tableTotalGrowthRate: "Taux de croissance total",
    // Form translations
    title: "Contactez-nous",
    successMessage: "Merci ! Votre message a été envoyé avec succès.",
    personalInfo: "Informations personnelles",
    messageDetails: "Détails du message",
    fullName: "Nom complet *",
    email: "Adresse e-mail *",
    phone: "Numéro de téléphone",
    message: "Message *",
    terms: "J'accepte les termes et conditions *",
    submitting: "Envoi en cours...",
    sendMessage: "Envoyer le message",
    nameRequired: "Le nom est requis",
    emailRequired: "L'e-mail est requis",
    emailInvalid: "Veuillez entrer une adresse e-mail valide",
    messageRequired: "Le message est requis",
    messageMinLength: "Le message doit contenir au moins 10 caractères",
    termsRequired: "Vous devez accepter les conditions",
    namePlaceholder: "Entrez votre nom complet",
    emailPlaceholder: "votre.email@exemple.com",
    phonePlaceholder: "Numéro de téléphone (optionnel)",
    messagePlaceholder: "Écrivez votre message ici...",
    // Legal Pages
    lastUpdated: "Dernière mise à jour :",
    termsOfServiceTitle: "Conditions d'utilisation",
    privacyPolicyTitle: "Politique de confidentialité",
    cookiePolicyTitle: "Politique des cookies",
    termsWelcome: "Bienvenue sur VisitAlbania. Ces Conditions d'utilisation (\"Conditions\") régissent votre accès à et l'utilisation de notre site Web. En accédant ou en utilisant notre site Web, vous acceptez d'être lié par ces Conditions.",
    privacyWelcome: "VisitAlbania (\"nous\", \"notre\" ou \"nos\") s'engage à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site Web.",
    cookieWelcome: "Cette Politique des cookies explique ce que sont les cookies, comment VisitAlbania utilise les cookies sur notre site Web et vos choix concernant les cookies.",
  },

  italian: {
    // Languages dropdown
    albanian: "Albanese",
    english: "Inglese",
    german: "Tedesco",
    french: "Francese",
    italian: "Italiano",
    // Navbar
    home: "Home",
    destinations: "Destinazioni",
    activities: "Attività",
    foodAndCulture: "Cibo & Cultura",
    events: "Eventi",
    aboutUs: "Chi siamo",
    contact: "Contatto",
    languages: "Lingue",
    beaches: "Spiagge",
    mountains: "Montagne",
    rivers: "Fiumi",
    lakes: "Laghi",
    countryside: "Campagna",
    historicCities: "Città Storiche",
    nationalParks: "Parchi Nazionali",
    hiking: "Escursionismo",
    paragliding: "Parapendio",
    kayaking: "Kayak",
    diving: "Immersione",
    cycling: "Ciclismo",
    camping: "Campeggio",
    // Hero section
    heroTitle: "Scopri la bellezza dell'Albania",
    heroDescription: "Esplora una terra dove natura, cultura e storia si fondono armoniosamente una destinazione che non dimenticherai mai.",
    // Destinations Section
    destinationsTitle: "Destinazioni",
    destinationsSubtitle: "Scopri la bellezza oltre l’ordinario",
    beachesDesc: "Il blu che tutti stanno cercando",
    mountainsDesc: "Sali più in alto e scopri ciò che conta davvero",
    riversDesc: "Lascia che i fiumi ti guidino nel mondo nascosto della natura",
    lakesDesc: "Dove acque antiche raccontano storie di tempo e storia",
    countrysideDesc: "Dove le colline sussurrano storie del passato",
    historicCitiesDesc: "Cammina attraverso secoli di storia albanese",
    nationalParksDesc: "La bellezza della natura, conservata per te",
    exploreMore: "Esplora di più",
    // Activities Section
    activitiesTitle: "Attività",
    activitiesSubtitle: "Vivi l’avventura in tutta l’Albania",
    hikingDesc: "Esplora vette, vallate e sentieri naturali mozzafiato",
    paraglidingDesc: "Vola liberamente sopra paesaggi iconici",
    kayakingDesc: "Scopri fiumi, laghi e baie nascoste",
    divingDesc: "Esplora grotte sottomarine e acque cristalline",
    cyclingDesc: "Pedala tra strade panoramiche e percorsi montani",
    campingDesc: "Dormi sotto le stelle nella natura incontaminata",
    learnMore: "Scopri di più",
    // Food&Culture Section
    foodTitle: "Cibo e Cultura",
    foodSubtitle: "Un viaggio tra sapori, storie e tradizioni autentiche dell’Albania",
    taveKosiDesc: "Uno dei piatti più iconici dell'Albania, con agnello, yogurt e uova.",
    flijaDesc: "Un piatto tradizionale a strati cotto lentamente sul fuoco.",
    fergeseDesc: "Una specialità di Tirana con peperoni, pomodori e ricotta cremosa.",
    odaDesc: "Una stanza tradizionale albanese dedicata all’ospitalità e ai rituali.",
    thethDesc: "La chiesa iconica di Theth mostra la profonda eredità culturale della zona.",
    valleDesc: "Danza popolare albanese che esprime ritmo e identità culturale.",
    taveKosi: "Tavë Kosi",
    flija: "Flija",
    fergese: "Fërgesë Tirane",
    oda: "Oda Albanese",
    theth: "Theth",
    valle: "Danza Tradizionale",
    previous: "Precedente",
    next: "Successiva",
    // Events section (home)
    january: "GEN",
    february: "FEB",
    march: "MAR",
    april: "APR",
    may: "MAG",
    june: "GIU",
    july: "LUG",
    august: "AGO",
    september: "SET",
    october: "OTT",
    november: "NOV",
    december: "DIC",
    eventTitle: "Eventi",
    eventSubtitle: "Vivi le tradizioni, i festivali e i momenti culturali vivaci che definiscono l’Albania",
    event1Title: "Triathlon di Valona – Vivi l’adrenalina",
    event1Desc: "Proiezioni luminose con opere di Onufri, Gustav Klimt ed Erblina Karali illuminano Mangalem durante “Mangalem’s Shades”, 24–26 dicembre sul viale Republika, con DJ e un vivace festival di strada nella città dalle mille finestre.",
    event2Title: "Festival dello Street Food di Tirana",
    event2Desc: "“Gzo n’Shkodër” accende la città con le feste di fine anno: scenografia magica, concerti di cantanti shkodrani sul lungomare e celebrazioni dal 24 al 31 dicembre in onore delle tradizioni della capitale del Nord.",
    event3Title: "Immaginazione davanti all’arte digitale nella prima Galleria di Arti Digitali in Albania",
    event3Desc: "A Korça, visita GADK, la prima galleria immersiva di arti digitali in Albania, per vivere “Iconografia Albanese” con capolavori proiettati di Onufri e altri maestri. Aperta mar–dom, 12:00–20:00, fino al 29 febbraio 2024.",
    eventsCta: "Scopri più eventi",
    // Events (events.html)
    eventsSubtitle: "Partecipa ai festival e alle celebrazioni culturali più affascinanti dell’Albania, dove storia, musica e tradizione prendono vita",
    // Event 1 card
    vloraTriathlon_title: "Triathlon di Vlora",
    vloraTriathlon_desc: 'Il Calendario Digitale TEA arriva a Vlora, Città Europea dello Sport, per il primo Triathlon di Vlora l\'11 maggio, con nuoto, ciclismo e corsa lungo lo Ionio. Partendo da Rrapi vicino alle "Acque Fredde", è un invito del fine settimana per gli appassionati di sport a godersi l\'azione e la brezza marina.',
    // Event 2 card
    culinaryFestival_title: 'Il Festival Culinario "Tirana Street Food"',
    culinaryFestival_desc: 'Il Calendario Digitale TEA presenta la 4a edizione del Festival "Tirana Street Food", trasformando Piazza Skënderbej in un centro culinario dal 10 al 18 maggio. Goditi i sapori tradizionali albanesi, i piatti internazionali degli chef locali e un\'atmosfera vivace piena di musica e divertimento.',
    // Event 3 card
    kayakFest_title: "Kayak Fest 2024 al Lago Prespa",
    kayakFest_desc: 'Il Calendario Digitale TEA porta "Kayak Fest Albania 2024" al Lago Prespa, 4-6 maggio alla spiaggia di Zaroshkë e 7 maggio a Pustec. Goditi campeggio, competizioni, tour in kayak, musica sul lago, lezioni per bambini e cibo locale mentre la stagione turistica inizia in questo scenario mozzafiato.',
    // Event 4 card
    retroCarParade_title: "Parata di auto d'epoca a Saranda",
    retroCarParade_desc: 'Il Calendario TEA porta una Parata di Auto d\'Epoca alla passeggiata di Saranda il 24 aprile, riempiendo il lungomare di auto e moto d\'epoca, musica "Old School" e storie di proprietari appassionati. Celebra il motoring classico e il fascino costiero mentre inizia la stagione turistica.',
    // Event 5 card
    vloraRun_title: 'La maratona "Vlora Run"',
    vloraRun_desc: 'L\'annuale "Vlora Run" ritorna il 21 aprile come parte dell\'anno di Vlora come "Città Europea dello Sport", radunando corridori da Albania, Balcani e oltre. Gareggia lungo la baia, competi per i premi e goditi le viste costiere evidenziate nel Calendario Nazionale del Turismo TEA.',
    // Event 6 card
    albanianTourismWeek_title: "Settimana del turismo albanese",
    albanianTourismWeek_desc: "La Settimana del Turismo Albanese ritorna a Tirana, 5-9 aprile, iniziando con la Fiera Internazionale del Turismo (ITFT 2024) vicino a Piazza Italia il 5-6 aprile e culminando con il 70° incontro della Commissione Europa dell'UNWTO. Aspettati sessioni B2B con acquirenti globali, innovazioni del settore e showcase delle destinazioni albanesi evidenziate dal Calendario Nazionale del Turismo TEA.",
    // Event 7 card
    lastAdventure_title: "L'Ultima Avventura d'Europa a Përmet",
    lastAdventure_desc: '"L\'Ultima Avventura d\'Europa" è un festival all\'aperto a Përmet, Albania, 22-24 marzo, che celebra natura, avventura e comunità. Le attività includono escursionismo, arrampicata su roccia, rafting, kayak, campeggio e programmi per bambini. Il festival integra la cultura locale, enfatizza la sostenibilità, promuove uno stile di vita sano e presenta workshop educativi e musica live, sostenendo la conservazione ambientale di Përmet e le iniziative locali attraverso il turismo responsabile.',
    // Event 8 card
    marieKraja_title: '20 anni "Marie Kraja" Il Festival Internazionale dei Cantanti Lirici',
    marieKraja_desc: 'Il Festival Vocale Internazionale dell\'Opera "Marie Kraja" celebra 22 anni al Teatro Nazionale dell\'Opera e del Balletto il 27-29 marzo. Una giuria internazionale di leader dell\'opera giudica giovani cantanti lirici (20-34 anni) per tre notti, trasmesso in diretta su Top Channel, mostrando talenti emergenti insieme all\'Orchestra Sinfonica del Teatro Nazionale e promuovendo l\'immagine culturale dell\'Albania in tutto il mondo.',
    // Event 9 card
    gjirokasterCelebration_title: "Tre giorni di celebrazione a Gjirokastra",
    gjirokasterCelebration_desc: 'Il festival "Camminare con la Storia" porta tre notti festive a Gjirokastra il 14-16 marzo, con musica tradizionale e moderna, mostre d\'arte, artigianato e patrimonio culinario locale. Le celebrazioni in Piazza "Çerciz Topulli" includono performance di Elhaida Dani e Young Zerka, offrendo ai visitatori un\'esperienza culturale autentica nella città di pietra.',
    // Event 10 card
    paradeOfAlbanians_title: "Parata degli Albanesi",
    paradeOfAlbanians_desc: 'Il 28 novembre, Tirana ospiterà la prima "Parata degli Albanesi" in celebrazione del 111° anniversario dell\'Indipendenza Nazionale. Organizzata dal gruppo della diaspora "Albanian Roots" con il Comune di Tirana, la parata inizierà in Piazza "Madre Teresa", riunendo migliaia di albanesi da tutte le terre albanesi e la diaspora Arbëresh. I partecipanti marceranno con bandiere rosse e nere lungo il viale "Dëshmorët e Kombit" verso Piazza Skanderbeg, dove la bandiera nazionale sarà sollevata cerimonialmente. Oltre 125 comuni dalle comunità albanesi di tutto il mondo sono attesi per unirsi a questa celebrazione simbolica.',
    // Event 11 card
    folkloricEnsembles_title: "Gli ensemble folkloristici rivelano i valori albanesi nel Giorno dell'Indipendenza",
    folkloricEnsembles_desc: 'Il 28 novembre, Tirana ospiterà una grande celebrazione folkloristica con i migliori ensemble del Festival Folkloristico Nazionale di Gjirokastra. Gruppi come l\'Ensemble di Canto e Danza Popolare Albanese, "Shota" del Kosovo, l\'Ensemble della Macedonia del Nord, "Rapsha" del Montenegro e "Shqiponja" Arbëresh eseguiranno canzoni e danze tradizionali in onore del Giorno dell\'Indipendenza e della Bandiera dell\'Albania. "Folk Fest 2025" unirà albanesi da tutte le regioni e la comunità Arbëresh in una serata dedicata all\'identità nazionale, arricchita dalla musica e dai ritmi del folklore albanese e Arbëresh come parte del Calendario Nazionale degli Eventi Turistici e dell\'App TEA.',
    // Event 12 card
    diasporaSummit_title: "22-23 novembre, il Giorno degli Arbëresh e il 3° Summit della Diaspora saranno celebrati a Tirana.",
    diasporaSummit_desc: "Il Summit della Diaspora e il Congresso Arbëresh segnano un raduno storico che celebra il patrimonio albanese e rafforza i legami tra gli albanesi in tutto il mondo. L'evento unisce le comunità della diaspora per discutere aree chiave come istruzione, sanità, affari, arte e cultura, enfatizzando il ruolo della diaspora come risorsa nazionale vitale. Servendo come piattaforma per la collaborazione e lo scambio di idee, il summit promuove l'identità culturale, preserva tradizioni e lingua, e onora i successi globali degli albanesi. Mira a favorire la solidarietà e ispirare progetti concreti per un futuro più luminoso per gli albanesi ovunque.",
    // About Us Section
    aboutUsTitle: "Sul turismo albanese",
    aboutUsSubtitle: "Alla scoperta della bellezza e delle statistiche del turismo albanese",
    aboutUsDescription: "L'Albania è diventata una delle destinazioni emergenti più entusiasmanti d'Europa. Con spiagge incontaminate, montagne maestose, storia ricca e ospitalità calorosa, l'Albania accoglie milioni di visitatori ogni anno. Esplorate le statistiche qui sotto per capire perché l'Albania è la destinazione perfetta per la vostra prossima avventura.",
    aboutUsVideoTitle: "Vivi l'Albania",
    aboutUsMapTitle: "L'Albania sulla mappa",
    // Contact Section
    contactTitle: "Contattaci",
    contactSubtitle: "Ci piacerebbe sentirti! Inviaci un messaggio e risponderemo il prima possibile.",
    // Footer
    footerAboutDesc: "Scopri i tesori nascosti dell'Albania - dalle spiagge incontaminate e montagne maestose al ricco patrimonio culturale e cucina autentica. La tua avventura inizia qui.",
    footerQuickLinks: "Link rapidi",
    footerContactInfo: "Contattaci",
    footerLocation: "Tirana, Albania",
    footerHours: "Lun - Sab: 9:00 - 18:00",
    allRightsReserved: "Tutti i diritti riservati.",
    privacyPolicy: "Informativa sulla privacy",
    termsOfService: "Termini di servizio",
    cookiePolicy: "Politica sui cookie",
    // Table translations
    tableCaption: "Statistiche del turismo albanese 2024",
    tableCategory: "Categoria",
    tableMetric: "Metrica",
    tableValue: "Valore",
    tableGrowth: "Crescita",
    tableAnnualVisitors: "Visitatori annuali",
    tableTotalTourists: "Totale turisti",
    tablePopularSites: "Siti popolari",
    tableCoastalLength: "Lunghezza costiera",
    tableStable: "Stabile",
    tablePeaksAbove: "Picchi sopra i 2000m",
    tableCulturalSites: "Siti culturali",
    tableUnescoHeritage: "Patrimonio UNESCO",
    tableProtectedAreas: "Aree protette",
    tableAdventureOptions: "Opzioni di avventura",
    tableAnnualFestivals: "Festival annuali",
    tableTotalGrowthRate: "Tasso di crescita totale",
    // Form translations
    title: "Contattaci",
    successMessage: "Grazie! Il tuo messaggio è stato inviato con successo.",
    personalInfo: "Informazioni personali",
    messageDetails: "Dettagli del messaggio",
    fullName: "Nome completo *",
    email: "Indirizzo email *",
    phone: "Numero di telefono",
    message: "Messaggio *",
    terms: "Accetto i termini e le condizioni *",
    submitting: "Invio in corso...",
    sendMessage: "Invia messaggio",
    nameRequired: "Il nome è obbligatorio",
    emailRequired: "L'email è obbligatoria",
    emailInvalid: "Inserisci un indirizzo email valido",
    messageRequired: "Il messaggio è obbligatorio",
    messageMinLength: "Il messaggio deve contenere almeno 10 caratteri",
    termsRequired: "Devi accettare i termini",
    namePlaceholder: "Inserisci il tuo nome completo",
    emailPlaceholder: "tua.email@esempio.com",
    phonePlaceholder: "Numero di telefono (opzionale)",
    messagePlaceholder: "Scrivi il tuo messaggio qui...",
    // Legal Pages
    lastUpdated: "Ultimo aggiornamento:",
    termsOfServiceTitle: "Termini di servizio",
    privacyPolicyTitle: "Informativa sulla privacy",
    cookiePolicyTitle: "Politica sui cookie",
    termsWelcome: "Benvenuto su VisitAlbania. Questi Termini di servizio (\"Termini\") disciplinano il tuo accesso e l'uso del nostro sito web. Accedendo o utilizzando il nostro sito web, accetti di essere vincolato da questi Termini.",
    privacyWelcome: "VisitAlbania (\"noi\", \"nostro\" o \"ci\") si impegna a proteggere la tua privacy. Questa Informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti il nostro sito web.",
    cookieWelcome: "Questa Politica sui cookie spiega cosa sono i cookie, come VisitAlbania utilizza i cookie sul nostro sito web e le tue scelte riguardo ai cookie."
  }
};


// ============================
// LANGUAGE MAP
// ============================

const languageMap = {
  "albanian": "albanian",
  "albania": "albanian",
  "shqip": "albanian",
  "shqipe": "albanian",

  "english": "english",
  "anglisht": "english",

  "german": "german",
  "gjermanisht": "german",

  "french": "french",
  "frëngjisht": "french",

  "italian": "italian",
  "italisht": "italian"
};


// ============================
// APPLY LANGUAGE
// ============================

function setNavbarLanguage(lang) { // Checklist 73 Done - Function declarations, Checklist 69 Done - Primitive types (string)
  const selectedLang = languageMap[lang.toLowerCase()]; // Checklist 68 Done - const, Checklist 76 Done - Objects with bracket notation
  console.log("Language selected:", selectedLang);

  if (!selectedLang) { // Checklist 71 Done - Conditional logic (if)
    console.error("Unknown language:", lang); // Checklist 69 Done - Primitive types (string)
    return;
  }

  const elements = document.querySelectorAll("[data-translate]"); // Checklist 68 Done - const, Checklist 75 Done - Arrays, Checklist 77 Done - querySelectorAll
  elements.forEach(el => { // Checklist 74 Done - Arrow functions, Checklist 75 Done - Arrays with forEach
    const key = el.getAttribute("data-translate"); // Checklist 68 Done - const, Checklist 69 Done - Primitive types (string)
    const icon = el.querySelector("i"); // Checklist 68 Done - const, Checklist 77 Done - querySelector

    if (translations[selectedLang][key]) { // Checklist 70 Done - Comparisons (implicit truthy), Checklist 71 Done - Conditional logic (if), Checklist 76 Done - Objects with bracket notation
      if (icon) { // Checklist 71 Done - Conditional logic (if, else)
        el.innerHTML = `${translations[selectedLang][key]} ${icon.outerHTML}`; // Checklist 76 Done - Objects with bracket notation, Checklist 78 Done - innerHTML, Checklist 82 Done - Dynamic UI behavior, Checklist 85 Done - Template literals
      } else { // Checklist 71 Done - Conditional logic (else)
        el.textContent = translations[selectedLang][key]; // Checklist 76 Done - Objects with bracket notation, Checklist 78 Done - textContent, Checklist 82 Done - Dynamic UI behavior
      }
    }
  });
}


// ============================
// EVENT LISTENERS
// ============================

document.querySelectorAll("#languagesDropdown a").forEach(link => { // Checklist 74 Done - Arrow functions, Checklist 75 Done - Arrays with forEach, Checklist 77 Done - querySelectorAll
  link.addEventListener("click", e => { // Checklist 74 Done - Arrow functions, Checklist 81 Done - addEventListener
    e.preventDefault(); // Checklist 83 Done - preventDefault
    const lang = link.textContent.trim(); // Checklist 68 Done - const, Checklist 69 Done - Primitive types (string)
    // 92 Done - Simple data persisted using localStorage
    const langCode = lang.includes("Albanian") ? "al" : 
                     lang.includes("English") ? "en" : 
                     lang.includes("German") ? "de" : 
                     lang.includes("French") ? "fr" : 
                     lang.includes("Italian") ? "it" : "en";
    localStorage.setItem("lang", langCode);
    setNavbarLanguage(lang);
  });
});

// Apply saved language on page load
// 92 Done - Simple data persisted using localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  const langText = savedLang === "al" ? "Albanian" : 
                   savedLang === "en" ? "English" : 
                   savedLang === "de" ? "German" : 
                   savedLang === "fr" ? "French" : 
                   savedLang === "it" ? "Italian" : "English";
  setNavbarLanguage(langText);
});