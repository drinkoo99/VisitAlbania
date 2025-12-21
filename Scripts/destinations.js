// Destinations data for all categories
// 68 Done - Modern variable declarations const used correctly
// 76 Done - Objects used with properties accessed via dot or bracket notation
const destinations = {
  beaches: [
    { 
      title: {
        al: "Plazhi i Ksamilit",
        en: "Ksamil Beach",
        de: "Ksamil Strand",
        fr: "Plage de Ksamil",
        it: "Spiaggia di Ksamil"
      }, 
      image: "Images/Beaches/ksamil.webp", 
      description: {
        al: "Plazhi i Ksamilit ofron ujëra kristal të kaltër, rërë të bardhë dhe një atmosferë të paharrueshme mesdhetare. I përshtatshëm për relaksim, not dhe eksplorim të ishujve të vegjël me varkë. Kafene dhe restorante lokale ofrojnë peshk të freskët dhe gatime tradicionale shqiptare, duke bërë vizitën më të këndshme.",
        en: "Ksamil Beach offers crystal clear turquoise waters, soft white sand, and an unforgettable Mediterranean vibe. Perfect for sunbathing, swimming, and exploring small nearby islands by boat. Local cafes and restaurants provide fresh seafood and traditional Albanian dishes, making your visit even more enjoyable.",
        de: "Der Ksamil Strand bietet kristallklares türkisfarbenes Wasser, weichen weißen Sand und ein unvergessliches mediterranes Flair. Perfekt zum Sonnenbaden, Schwimmen und Erkunden kleiner nahegelegener Inseln mit dem Boot. Lokale Cafés und Restaurants bieten frische Meeresfrüchte und traditionelle albanische Gerichte.",
        fr: "La plage de Ksamil offre des eaux turquoise cristallines, du sable blanc et une atmosphère méditerranéenne inoubliable. Idéale pour se détendre, nager et explorer les petites îles voisines en bateau. Les cafés et restaurants locaux proposent des fruits de mer frais et des plats albanais traditionnels.",
        it: "La spiaggia di Ksamil offre acque turchesi cristalline, sabbia bianca morbida e un'atmosfera mediterranea indimenticabile. Perfetta per prendere il sole, nuotare ed esplorare le piccole isole vicine in barca. I caffè e ristoranti locali offrono pesce fresco e piatti tradizionali albanesi."
      },
      link: "https://www.booking.com/searchresults.html?ss=Ksamil%2C+Vlor%C3%AB+County%2C+Albania&ssne=ksamil&ssne_untouched=ksamil&efdco=1&label=gen173nr-10CAEoggI46AdIM1gEaAaIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AtzO7cgGwAIB0gIkOTQyMjcxMDAtOTZmNi00MDFjLTk5NjMtMDAwNTM3NjdiMjMy2AIB4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=9089773&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=4bad813945270763&ac_meta=GhA0YmFkODEzOTQ1MjcwNzYzIAAoATICZW46BktzYW1pbEAASgBQAA%3D%3D&group_adults=2&no_rooms=1&group_children=0"
    },
    { 
      title: {
        al: "Plazhi Gjipe",
        en: "Gjipe Beach",
        de: "Gjipe Strand",
        fr: "Plage de Gjipe",
        it: "Spiaggia di Gjipe"
      }, 
      image: "Images/Beaches/gjipe.webp", 
      description: {
        al: "Plazhi i Gjipesë është një perlë e fshehur në fund të Kanionit të Gjipesë, i rrethuar nga shkëmbinj madhështorë dhe natyrë e paprekur. Ideal për ata që kërkojnë qetësi, shëtitje në natyrë ose kajak në ujëra kristal të pastër. Një arratisje perfekte nga zonat turistike të mbipopulluara. Shijoni kërcimet nga shkëmbinjtë ose thjesht relaksohuni nën hijen e pishave duke dëgjuar dallgët.",
        en: "Gjipe Beach is a hidden gem at the end of Gjipe Canyon, surrounded by majestic cliffs and pristine nature. Ideal for those seeking tranquility, nature walks, or kayaking in crystal-clear waters. A perfect escape from crowded tourist areas. Enjoy cliff diving or simply relax under the shade of pine trees while listening to the waves.",
        de: "Der Strand von Gjipe ist ein verstecktes Juwel am Ende des Gjipe-Canyons, umgeben von imposanten Klippen und unberührter Natur. Ideal für alle, die Ruhe, Spaziergänge in der Natur oder Kajakfahren in kristallklarem Wasser suchen. Ein perfekter Rückzugsort fernab von überfüllten Touristengebieten. Genießen Sie Klippensprünge oder entspannen Sie einfach im Schatten der Pinien und lauschen Sie den Wellen.",
        fr: "La plage de Gjipe est un joyau caché au bout du canyon de Gjipe, entourée de falaises impressionnantes et d’une nature préservée. Idéale pour ceux qui recherchent la tranquillité, les randonnées en pleine nature ou le kayak dans des eaux cristallines. Une escapade parfaite loin des zones touristiques bondées. Profitez des sauts depuis les falaises ou détendez-vous simplement à l’ombre des pins en écoutant les vagues.",
        it: "La spiaggia di Gjipe è una gemma nascosta alla fine del canyon di Gjipe, circondata da imponenti scogliere e natura incontaminata. Ideale per chi cerca tranquillità, passeggiate nella natura o kayak in acque cristalline. Una fuga perfetta dalle zone turistiche affollate. Goditi i tuffi dalle scogliere o rilassati semplicemente all’ombra dei pini ascoltando il suono delle"
      },
      link: "https://www.booking.com/searchresults.en-gb.html?aid=311984&label=blu-horizon-DS8SPWFsbn5n6kFXpT4FwgS675453055663%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-488972442927%3Alp9069990%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc&highlighted_hotels=10288213&redirected=1&city=-104421&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=63f821dfc12ad627e6c9a64d5b3765b9"
    },
    { 
      title: {
        al: "Plazhi Jales",
        en: "Jala Beach",
        de: "Jala Strand",
        fr: "Plage de Jala",
        it: "Spiaggia di Jala"
      }, 
      image: "Images/Beaches/jale.webp", 
      description: {
        al: "Plazhi i Jalës është energjik dhe plot jetë, me ujëra ngjyrë bruz perfekte për not dhe snorkeling. Kafenetë dhe beach bar-et e bëjnë ideal për shoqërim dhe shijim të kuzhinës lokale. Shumë i preferuar nga të rinjtë dhe backpacker-at. Në perëndim të diellit, plazhi shndërrohet në një atmosferë të gjallë me muzikë dhe festa buzë detit.",
        en: "Jale Beach is vibrant and lively, with turquoise waters perfect for swimming and snorkeling. Cafés and beach bars make it ideal for socializing and enjoying local cuisine. Popular among young travelers and backpackers. At sunset, the beach transforms into a lively atmosphere with music and beach parties.",
        de: "Der Strand von Jale ist lebendig und voller Energie, mit türkisfarbenem Wasser, das sich perfekt zum Schwimmen und Schnorcheln eignet. Cafés und Strandbars machen ihn ideal zum geselligen Beisammensein und zum Genießen der lokalen Küche. Besonders beliebt bei jungen Reisenden und Backpackern. Bei Sonnenuntergang verwandelt sich der Strand in eine lebhafte Atmosphäre mit Musik und Strandpartys.",
        fr: "La plage de Jale est animée et dynamique, avec des eaux turquoise idéales pour la baignade et le snorkeling. Les cafés et bars de plage en font un lieu parfait pour socialiser et savourer la cuisine locale. Très prisée par les jeunes voyageurs et les routards. Au coucher du soleil, la plage se transforme en une ambiance festive avec de la musique et des soirées sur la plage.",
        it: "La spiaggia di Jale è vivace e piena di energia, con acque turchesi perfette per nuotare e fare snorkeling. Caffè e beach bar la rendono ideale per socializzare e gustare la cucina locale. Molto apprezzata dai giovani viaggiatori e dai backpacker. Al tramonto, la spiaggia si trasforma in un’atmosfera animata con musica e feste sulla spiaggia."
      },
      link: "https://www.booking.com/searchresults.en-gb.html?aid=339738&label=jal-GnhEgsSwvhcu%2A%2AGpII5fLQS260559769887%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-671401899071%3Alp9069990%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YU5pXiVhsEsYF5VzKbQXpIg&dest_type=city&redirected=1&dest_id=9103224&source=city&redirected_from_city=1&keep_landing=1&sid=63f821dfc12ad627e6c9a64d5b3765b9"
    },
    { 
      title: {
        al: "Plazhi Pasqyrave",
        en: "Mirror Beach",
        de: "Mirror Strand",
        fr: "Plage de Mirror",
        it: "Spiaggia di Mirror"
      },  
      image: "Images/Beaches/mirror.webp", 
      description: {
        al: "Plazhi i Pasqyrave është i vogël, i fshehur dhe shumë i qetë, ideal për vizitorët që kërkojnë paqe. Ujërat e qeta, bukuria natyrore dhe shkëmbinjtë përreth e bëjnë perfekt për fotografi dhe arratisje intime. Ideal për çifte ose udhëtarë solo. Reflektimet pasqyruese në ujë krijojnë një pamje magjike në agim dhe muzg.",
        en: "Mirror Beach is small, secluded, and serene, ideal for visitors seeking peace. Calm waters, natural beauty, and surrounding cliffs make it perfect for photography and intimate escapes. Ideal for couples or solo travelers. The mirrored reflections in the water create a magical scene at dawn and dusk.",
        de: "Mirror Beach ist klein, abgeschieden und ruhig – ideal für Besucher, die Erholung suchen. Ruhiges Wasser, natürliche Schönheit und die umliegenden Klippen machen ihn perfekt für Fotografie und intime Auszeiten. Ideal für Paare oder Alleinreisende. Die spiegelnden Reflexionen im Wasser schaffen bei Sonnenauf- und -untergang eine magische Atmosphäre.",
        fr: "Mirror Beach est une petite plage isolée et paisible, idéale pour les visiteurs en quête de tranquillité. Les eaux calmes, la beauté naturelle et les falaises environnantes en font un lieu parfait pour la photographie et les escapades intimes. Idéale pour les couples ou les voyageurs en solo. Les reflets miroir dans l’eau créent une scène magique à l’aube et au crépuscule.",
        it: "Mirror Beach è una spiaggia piccola, appartata e tranquilla, ideale per chi cerca pace e relax. Le acque calme, la bellezza naturale e le scogliere circostanti la rendono perfetta per la fotografia e fughe intime. Ideale per coppie o viaggiatori solitari. I riflessi specchiati nell’acqua creano un’atmosfera magica all’alba e al tramonto."
      },
      link: "https://www.booking.com/hotel/al/vila-zevro.html"
    },
    { 
      title: {
        al: "Plazhi Borshit",
        en: "Borsh Beach",
        de: "Borsh Strand",
        fr: "Plage de Borsh",
        it: "Spiaggia di Borsh"
      }, 
      image: "Images/Beaches/borsh.webp", 
      description: {
        al: "Plazhi i Borshit shtrihet përgjatë bregdetit Jon me rërë të artë dhe ullishte piktoreske përreth. Perfekt për shëtitje të gjata, not dhe eksplorim të fshatrave tradicionale aty pranë. Ideale për udhëtarët që kërkojnë natyrë dhe qetësi. Taverrnat lokale ofrojnë kuzhinë autentike shqiptare dhe fruta deti të freskëta, direkt buzë detit.",
        en: "Borsh Beach stretches along the Ionian coast with golden sand and scenic olive groves. Perfect for long walks, swimming, and exploring traditional villages nearby. Ideal for travelers seeking nature and quiet surroundings. Local taverns offer authentic Albanian cuisine and fresh seafood right by the sea.",
        de: "Der Strand von Borsh erstreckt sich entlang der Ionischen Küste mit goldenem Sand und malerischen Olivenhainen. Perfekt für lange Spaziergänge, Schwimmen und das Erkunden traditioneller Dörfer in der Umgebung. Ideal für Reisende, die Natur und Ruhe suchen. Lokale Tavernen bieten authentische albanische Küche und frische Meeresfrüchte direkt am Meer.",
        fr: "La plage de Borsh s’étend le long de la côte ionienne avec son sable doré et ses oliveraies pittoresques. Parfaite pour de longues promenades, la baignade et la découverte des villages traditionnels à proximité. Idéale pour les voyageurs en quête de nature et de tranquillité. Les tavernes locales proposent une cuisine albanaise authentique et des fruits de mer frais, directement au bord de la mer.",
        it: "La spiaggia di Borsh si estende lungo la costa ionica con sabbia dorata e suggestivi uliveti. Perfetta per lunghe passeggiate, nuotare ed esplorare i villaggi tradizionali nei dintorni. Ideale per chi cerca natura e tranquillità. Le taverne locali offrono autentica cucina albanese e pesce fresco, proprio sul mare."
      },
      link: "https://www.booking.com/searchresults.en-gb.html?ss=Borsh&ssne=Borsh&ssne_untouched=Borsh"
    },
    { 
      title: {
        al: "Plazhi Dhermisë",
        en: "Dhermi Beach",
        de: "Dhermi Strand",
        fr: "Plage de Dhermi",
        it: "Spiaggia di Dhermi"
      }, 
      image: "Images/Beaches/dhermi.webp", 
      description: {
        al: "Plazhi i Dhërmiut është i famshëm për ujërat e tij turkeze, vijën bregdetare me zhavorr dhe atmosferën e gjallë verore. Ideal për banjo dielli, sporte ujore dhe kafe plot gjallëri buzë detit. Ofron një kombinim perfekt mes relaksit dhe argëtimit në një destinacion të vetëm. Ngjituni në pikat panoramike aty pranë për pamje mbresëlënëse të bregdetit Jon dhe maleve përreth.",
        en: "Dhermi Beach is famous for its turquoise waters, pebble shoreline, and lively summer atmosphere. Ideal for sunbathing, water sports, and vibrant beachside cafés. It offers both relaxation and entertainment in one destination. Hike to nearby viewpoints for panoramic views of the Ionian coast and the surrounding mountains.",
        de: "Der Strand von Dhërmi ist berühmt für sein türkisfarbenes Wasser, die kieselige Küste und die lebhafte Sommeratmosphäre. Ideal zum Sonnenbaden, für Wassersportarten und lebendige Strandcafés. Er bietet sowohl Entspannung als auch Unterhaltung an einem einzigen Ort. Wanderungen zu nahegelegenen Aussichtspunkten bieten beeindruckende Panoramablicke auf die Ionische Küste und die umliegenden Berge.",
        fr: "La plage de Dhërmi est réputée pour ses eaux turquoise, son rivage de galets et son ambiance estivale animée. Idéale pour le bronzage, les sports nautiques et les cafés dynamiques en bord de mer. Elle offre à la fois détente et divertissement en un seul lieu. Partez en randonnée vers les points de vue voisins pour admirer des panoramas spectaculaires sur la côte ionienne et les montagnes environnantes.",
        it: "La spiaggia di Dhërmi è famosa per le sue acque turchesi, la costa di ciottoli e la vivace atmosfera estiva. Ideale per prendere il sole, praticare sport acquatici e godersi i vivaci caffè sul mare. Offre relax e divertimento in un’unica destinazione. Raggiungi i punti panoramici nei dintorni per viste spettacolari sulla costa ionica e sulle montagne circostanti."
      },
      link: "https://www.booking.com/city/al/dhermi.en.html?aid=1610684;label=dhermi-sPxw0BWDVNg3G6RWLws22wS541115124402:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-426529559717:lp9069990:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gad_campaignid=1573321567"
    }
  ],
  mountains: [
    {
      title: {
        al: "Mali i Korabit",
        en: "Korab Mountains",
        de: "Korab-Gebirge",
        fr: "Monts Korab",
        it: "Monti Korab"
      },
      image: "Images/Mountains/korabi.webp",
      description: {
        al: "Malet e Korabit janë më të lartat në Shqipëri, duke ofruar pamje mahnitëse dhe shtigje aventureske për ecje. Perfekt për trekking, fotografi natyrore dhe shijimin e florës alpine. Shtigjet variojnë nga të lehta deri te ato sfiduese, të përshtatshme për fillestarë dhe udhëtarë me përvojë.",
        en: "Korab Mountains are the highest in Albania, offering breathtaking views and adventurous hiking trails. Perfect for trekking, nature photography, and enjoying alpine flora. Trails vary from moderate to challenging, suitable for both beginners and experienced hikers.",
        de: "Das Korab-Gebirge ist das höchste Gebirge Albaniens und bietet atemberaubende Ausblicke sowie abenteuerliche Wanderwege. Ideal zum Trekking, zur Naturfotografie und zum Genießen der alpinen Flora. Die Wege reichen von moderat bis anspruchsvoll und sind sowohl für Anfänger als auch für erfahrene Wanderer geeignet.",
        fr: "Les monts Korab sont les plus hauts d’Albanie et offrent des vues à couper le souffle ainsi que des sentiers de randonnée aventureux. Parfaits pour le trekking, la photographie de nature et la découverte de la flore alpine. Les sentiers varient de modérés à difficiles, adaptés aux débutants comme aux randonneurs expérimentés.",
        it: "I Monti Korab sono i più alti dell’Albania e offrono panorami mozzafiato e sentieri escursionistici avventurosi. Perfetti per trekking, fotografia naturalistica e per godere della flora alpina. I percorsi variano da moderati a impegnativi, adatti sia ai principianti che agli escursionisti esperti."
      },
      link: "https://www.booking.com/searchresults.html?ss=Korab+Mountains"
    },
    {
      title: {
        al: "Bjeshkët e Nemuna",
        en: "Accursed Mountains",
        de: "Verfluchte Berge",
        fr: "Montagnes Maudites",
        it: "Montagne Maledette"
      },      
      image: "Images/Mountains/bjeshket-nemuna.webp",
      description: {
        al: "Bjeshkët e Nemuna, të njohura edhe si Accursed Mountains, janë të famshme për shkëmbinjtë dramatikë, luginat e thella dhe natyrën e paprekur. Ideale për hiking, alpinizëm dhe eksplorimin e fshatrave tradicionale malore. Zona është e pasur me florë dhe faunë, një parajsë për dashamirësit e natyrës.",
        en: "Bjeshkët e Nemuna, also known as the Accursed Mountains, are famous for their dramatic cliffs, deep valleys, and pristine nature. Ideal for hiking, climbing, and exploring traditional mountain villages. Rich in flora and fauna, this region is a paradise for nature lovers.",
        de: "Die Bjeshkët e Nemuna, auch bekannt als die Verfluchten Berge, sind berühmt für ihre dramatischen Klippen, tiefen Täler und unberührte Natur. Ideal zum Wandern, Klettern und zum Erkunden traditioneller Bergdörfer. Reich an Flora und Fauna ist diese Region ein Paradies für Naturliebhaber.",
        fr: "Les Bjeshkët e Nemuna, également appelées Montagnes Maudites, sont célèbres pour leurs falaises spectaculaires, leurs vallées profondes et leur nature préservée. Idéales pour la randonnée, l’escalade et l’exploration des villages de montagne traditionnels. Riche en flore et en faune, cette région est un véritable paradis pour les amoureux de la nature.",
        it: "Le Bjeshkët e Nemuna, conosciute anche come Montagne Maledette, sono famose per le loro scogliere spettacolari, le valli profonde e la natura incontaminata. Ideali per escursioni, arrampicate ed esplorare i villaggi montani tradizionali. Ricca di flora e fauna, questa regione è un vero paradiso per gli amanti della natura."
      },
      link: "https://www.booking.com/searchresults.html?ss=Bjeshkt+e+Nemuna"
    },
    {
      title: {
        al: "Mali i Tomorrit",
        en: "Mount Tomorr",
        de: "Berg Tomorr",
        fr: "Mont Tomorr",
        it: "Monte Tomorr"
      },
      image: "Images/Mountains/tomorri.webp",
      description: {
        al: "Malet e Tomorrit janë të njohura për rëndësinë e tyre kulturore dhe shpirtërore, të rrethuara nga peizazhe të gjelbëruara. Të shkëlqyera për trekking, retreat-e shpirtërore dhe fotografi panoramike. Zona ofron një kombinim unik të natyrës dhe historisë.",
        en: "Tomorr Mountains are known for their cultural and spiritual significance, surrounded by lush landscapes. Great for trekking, spiritual retreats, and panoramic photography. The area offers a unique combination of nature and history.",
        de: "Das Tomorr-Gebirge ist bekannt für seine kulturelle und spirituelle Bedeutung und ist von üppigen Landschaften umgeben. Ideal für Trekking, spirituelle Rückzüge und Panoramafotografie. Die Region bietet eine einzigartige Kombination aus Natur und Geschichte.",
        fr: "Les monts Tomorr sont connus pour leur importance culturelle et spirituelle, entourés de paysages verdoyants. Parfaits pour le trekking, les retraites spirituelles et la photographie panoramique. La région offre une combinaison unique de nature et d’histoire.",
        it: "I Monti Tomorr sono noti per il loro significato culturale e spirituale, circondati da paesaggi rigogliosi. Ideali per trekking, ritiri spirituali e fotografia panoramica. L’area offre una combinazione unica di natura e storia."
      },
      link: "https://www.booking.com/searchresults.html?ss=Tomorr+Mountains"
    }
  ],
  rivers: [
    {
      title: {
        al: "Lumi i Drinit",
        en: "Drini River",
        de: "Drin Fluss",
        fr: "Rivière Drin",
        it: "Fiume Drin"
      },
      image: "Images/Rivers/drini.webp",
      description: {
        al: "Lumi i Drinit, lumi më i gjatë në Shqipëri, rrjedh përmes peizazheve malore mahnitëse, duke ofruar ujë të kristaltë dhe natyrë të paprekur. Ideal për kayaking, peshkim dhe shëtitje buzë lumit, Drini ofron një përvojë të thellë në natyrën e virgjër shqiptare. Udhëtarët mund të eksplorojnë fshatrat tradicionale përgjatë brigjeve të tij dhe të shijojnë kuzhinën lokale duke përjetuar pamje panoramike të Alpeve përreth.",
        en: "The Drini River, the longest river in Albania, flows through breathtaking mountainous landscapes, offering crystal-clear waters and untouched nature. Ideal for kayaking, fishing, and riverside hikes, the Drini provides an immersive experience in Albania's pristine wilderness. Travelers can explore traditional villages along its banks and enjoy local cuisine while taking in panoramic views of the surrounding Alps.",
        de: "Der Drini Fluss, der längste Fluss Albaniens, fließt durch atemberaubende Berglandschaften und bietet kristallklares Wasser sowie unberührte Natur. Ideal zum Kajakfahren, Angeln und für Wanderungen am Flussufer bietet der Drini ein intensives Erlebnis in Albaniens unberührter Wildnis. Reisende können traditionelle Dörfer entlang seiner Ufer erkunden und lokale Küche genießen, während sie die Panoramablicke auf die umliegenden Alpen bewundern.",
        fr: "La rivière Drini, le plus long fleuve d’Albanie, traverse des paysages montagneux à couper le souffle, offrant des eaux cristallines et une nature préservée. Idéale pour le kayak, la pêche et les randonnées le long de ses rives, le Drini propose une expérience immersive dans la nature vierge de l’Albanie. Les visiteurs peuvent explorer les villages traditionnels le long de ses rives et savourer la cuisine locale tout en profitant des vues panoramiques sur les Alpes environnantes.",
        it: "Il fiume Drini, il più lungo dell’Albania, scorre attraverso paesaggi montuosi mozzafiato, offrendo acque cristalline e natura incontaminata. Ideale per kayak, pesca ed escursioni lungo il fiume, il Drini offre un’esperienza immersiva nella natura selvaggia albanese. I viaggiatori possono esplorare i villaggi tradizionali lungo le sue rive e gustare la cucina locale ammirando panorami delle Alpi circostanti."
      }
    },
    {
      title: {
        al: "Lumi i Bunës",
        en: "Buna River",
        de: "Buna Fluss",
        fr: "Rivière Buna",
        it: "Fiume Buna"
      },
      image: "Images/Rivers/buna.webp",
      description: {
        al: "Lumi i Bunës buron nga Liqeni i Shkodrës dhe rrjedh përmes pyjeve të gjelbra dhe ekosistemeve të ndryshme. Perfekt për dashamirësit e natyrës dhe shikuesit e zogjve, ofron përvoja të qeta me varkë dhe brigje piktoreske. Gjatë rrjedhës së tij, vizitorët mund të zbulojnë monumente historike dhe vendbanime tradicionale, duke kombinuar aventurën me kulturën dhe relaksimin.",
        en: "The Buna River originates from Lake Shkodra and winds its way through lush forests and diverse ecosystems. Perfect for nature enthusiasts and bird watchers, it offers calm boating experiences and scenic riverbanks. Along its course, visitors can discover historical landmarks and traditional settlements, combining adventure with culture and relaxation.",
        de: "Der Buna Fluss entspringt dem Shkodrasee und schlängelt sich durch üppige Wälder und vielfältige Ökosysteme. Ideal für Naturfreunde und Vogelbeobachter bietet er ruhige Bootserlebnisse und malerische Flussufer. Entlang seines Verlaufs können Besucher historische Stätten und traditionelle Siedlungen entdecken und so Abenteuer mit Kultur und Entspannung verbinden.",
        fr: "La rivière Buna prend sa source dans le lac de Shkodër et serpente à travers des forêts luxuriantes et des écosystèmes variés. Parfaite pour les amateurs de nature et les ornithologues, elle offre des promenades en bateau paisibles et des rives pittoresques. Tout au long de son cours, les visiteurs peuvent découvrir des sites historiques et des villages traditionnels, combinant aventure, culture et détente.",
        it: "Il fiume Buna ha origine dal lago di Scutari e si snoda attraverso fitte foreste ed ecosistemi diversi. Perfetto per gli amanti della natura e gli osservatori di uccelli, offre tranquille esperienze in barca e rive pittoresche. Lungo il suo corso, i visitatori possono scoprire siti storici e insediamenti tradizionali, combinando avventura con cultura e relax."
      }
    },
    {
      title: {
        al: "Lumi i Shalës",
        en: "Shala River",
        de: "Shala Fluss",
        fr: "Rivière Shala",
        it: "Fiume Shala"
      },
      image: "Images/Rivers/shala.webp",
      description: {
        al: "Lumi i Shalës njihet për ujërat e tij të kaltër-turkuaz dhe kanionet dramatike, shpesh quhet 'Tajlanda shqiptare'. I rrethuar nga shkëmbinj të pjerrët dhe kodra të gjelbra, ofron mundësi për rafting, not dhe fotografi. Ambienti i qetë dhe natyra e paprekur e bëjnë atë një destinacion të preferuar për aventurierët dhe udhëtarët që kërkojnë qetësi.",
        en: "The Shala River is renowned for its turquoise-blue waters and dramatic canyons, often referred to as the 'Albanian Thailand'. Surrounded by steep cliffs and verdant hills, it offers opportunities for rafting, swimming, and photography. Its serene environment and unspoiled nature make it a favorite destination for adventurers and travelers seeking tranquility.",
        de: "Der Shala Fluss ist bekannt für sein türkisblaues Wasser und dramatische Schluchten und wird oft als 'albanisches Thailand' bezeichnet. Umgeben von steilen Klippen und grünen Hügeln bietet er Möglichkeiten zum Rafting, Schwimmen und Fotografieren. Seine ruhige Umgebung und unberührte Natur machen ihn zu einem beliebten Ziel für Abenteurer und Reisende, die Ruhe suchen.",
        fr: "La rivière Shala est réputée pour ses eaux bleu turquoise et ses canyons spectaculaires, souvent appelée 'la Thaïlande albanaise'. Entourée de falaises abruptes et de collines verdoyantes, elle offre des possibilités de rafting, de baignade et de photographie. Son environnement paisible et sa nature préservée en font une destination prisée des aventuriers et des voyageurs en quête de tranquillité.",
        it: "Il fiume Shala è rinomato per le sue acque turchesi e i canyon spettacolari, spesso definito la 'Thailandia albanese'. Circondato da scogliere ripide e colline verdi, offre opportunità per rafting, nuoto e fotografia. Il suo ambiente tranquillo e la natura incontaminata lo rendono una destinazione preferita per avventurieri e viaggiatori in cerca di tranquillità."
      }
    },
    {
      title: {
        al: "Lumi i Vjosës",
        en: "Vjosa River",
        de: "Vjosa Fluss",
        fr: "Rivière Vjosa",
        it: "Fiume Vjosa"
      },
      image: "Images/Rivers/vjosa.webp",
      description: {
        al: "Lumi i Vjosës është një nga lumenjtë e fundit të egër në Evropë, duke rrjedhur lirshëm përmes kanioneve dhe luginave të thella. Ideal për rafting, kayaking dhe eko-turizëm, lumi strehon florë dhe faunë të larmishme. Vizitorët mund të shijojnë peizazhet e paprekura, pikat panoramike dhe fshatrat e bukur buzë lumit, duke përjetuar bukurinë e virgjër të trashëgimisë natyrore të Shqipërisë.",
        en: "The Vjosa River is one of Europe’s last wild rivers, flowing freely through deep canyons and valleys. Ideal for rafting, kayaking, and eco-tourism, the river is home to diverse flora and fauna. Visitors can enjoy its untouched landscapes, scenic viewpoints, and charming riverside villages, experiencing the raw beauty of Albania’s natural heritage.",
        de: "Der Fluss Vjosa ist einer der letzten wilden Flüsse Europas und fließt frei durch tiefe Schluchten und Täler. Ideal zum Rafting, Kajakfahren und für Ökotourismus, beherbergt der Fluss eine vielfältige Flora und Fauna. Besucher können seine unberührten Landschaften, malerischen Aussichtspunkte und charmanten Dörfer am Flussufer genießen und die rohe Schönheit des albanischen Naturerbes erleben.",
        fr: "La rivière Vjosa est l’une des dernières rivières sauvages d’Europe, coulant librement à travers des canyons et des vallées profondes. Idéale pour le rafting, le kayak et l’éco-tourisme, la rivière abrite une flore et une faune diversifiées. Les visiteurs peuvent profiter de ses paysages vierges, de points de vue pittoresques et de charmants villages au bord de l’eau, expérimentant la beauté brute du patrimoine naturel albanais.",
        it: "Il fiume Vjosa è uno degli ultimi fiumi selvaggi d’Europa, scorrendo liberamente attraverso canyon e valli profonde. Ideale per rafting, kayak ed eco-turismo, il fiume ospita una flora e fauna diversificata. I visitatori possono godere dei paesaggi incontaminati, dei punti panoramici e dei pittoreschi villaggi lungo il fiume, vivendo la bellezza selvaggia del patrimonio naturale albanese."
      }
    }
  ],
  lakes: [
    {
      title: {
        al: "Liqeni i Ohrit",
        en: "Ohrid Lake",
        de: "Ohrid See",
        fr: "Lac d'Ohrid",
        it: "Lago di Ohrid"
      },
      image: "Images/Lakes/ohrid.webp",
      description: {
        al: "Liqeni i Ohrit, një nga liqenet më të vjetër dhe më të thellë në Evropë, njihet për ujërat e tij të kristaltë dhe biodiversitetin unik. I rrethuar nga qytete historike dhe kishat e lashta, ofron një vend ideal për not, varkë dhe eksplorime kulturore. Atmosfera e qetë e liqenit, e kombinuar me malet piktoreske, e bën atë të përshtatshëm për relaks, fotografi dhe shëtitje në natyrë.",
        en: "Lake Ohrid, one of the oldest and deepest lakes in Europe, is famous for its crystal-clear waters and unique biodiversity. Surrounded by historic towns and ancient churches, it provides an ideal setting for swimming, boating, and cultural exploration. The lake’s serene atmosphere combined with its scenic mountains makes it perfect for relaxation, photography, and nature walks.",
        de: "Der Ohrid See, einer der ältesten und tiefsten Seen Europas, ist berühmt für sein kristallklares Wasser und seine einzigartige Biodiversität. Umgeben von historischen Städten und alten Kirchen bietet er einen idealen Rahmen zum Schwimmen, Bootfahren und für kulturelle Entdeckungen. Die ruhige Atmosphäre des Sees in Kombination mit den malerischen Bergen macht ihn perfekt für Entspannung, Fotografie und Spaziergänge in der Natur.",
        fr: "Le lac d'Ohrid, l'un des plus anciens et profonds d'Europe, est célèbre pour ses eaux cristallines et sa biodiversité unique. Entouré de villes historiques et d'églises anciennes, il constitue un cadre idéal pour la baignade, la navigation et l'exploration culturelle. L'atmosphère sereine du lac, combinée à ses montagnes pittoresques, le rend parfait pour la détente, la photographie et les promenades en pleine nature.",
        it: "Il lago di Ohrid, uno dei laghi più antichi e profondi d'Europa, è famoso per le sue acque cristalline e la sua biodiversità unica. Circondato da città storiche e antiche chiese, offre un ambiente ideale per nuoto, gite in barca ed esplorazioni culturali. L'atmosfera tranquilla del lago, combinata con le montagne scenografiche, lo rende perfetto per relax, fotografia e passeggiate nella natura."
      }
    },
    {
      title: {
        al: "Liqeni i Shkodrës",
        en: "Shkodra Lake",
        de: "Shkodra See",
        fr: "Lac de Shkodra",
        it: "Lago di Scutari"
      },
      image: "Images/Lakes/shkodra.webp",
      description: {
        al: "Liqeni i Shkodrës, liqeni më i madh në Ballkan, shtrihet në Shqipëri dhe Mal të Zi, duke ofruar pamje mahnitëse dhe plazhe të qeta. I pasur me florë dhe faunë dhe i rrethuar nga zonat e gjelbra të lagunave, është ideal për shikimin e zogjve, kayaking dhe ture në natyrë. Vizitorët mund të eksplorojnë edhe qytetet piktoreske buzë liqenit dhe të shijojnë mikpritjen dhe kuzhinën tradicionale shqiptare.",
        en: "Lake Shkodra, the largest lake in the Balkans, spans Albania and Montenegro, offering stunning views and peaceful beaches. Rich in wildlife and surrounded by lush wetlands, it is ideal for bird watching, kayaking, and nature tours. Visitors can also explore charming lakeside towns and enjoy traditional Albanian hospitality and cuisine.",
        de: "Der Shkodra See, der größte See auf dem Balkan, erstreckt sich über Albanien und Montenegro und bietet atemberaubende Ausblicke und ruhige Strände. Reich an Tierwelt und umgeben von üppigen Feuchtgebieten ist er ideal zum Vogelbeobachten, Kajakfahren und für Naturtouren. Besucher können auch charmante Städte am Seeufer erkunden und die traditionelle albanische Gastfreundschaft und Küche genießen.",
        fr: "Le lac de Shkodra, le plus grand lac des Balkans, s'étend sur l'Albanie et le Monténégro, offrant des vues magnifiques et des plages paisibles. Riche en faune et entouré de zones humides luxuriantes, il est idéal pour l'observation des oiseaux, le kayak et les excursions nature. Les visiteurs peuvent également explorer des villes pittoresques au bord du lac et profiter de l'hospitalité et de la cuisine traditionnelle albanaise.",
        it: "Il lago di Scutari, il più grande dei Balcani, si estende tra Albania e Montenegro, offrendo viste mozzafiato e spiagge tranquille. Ricco di fauna e circondato da rigide zone umide, è ideale per l’osservazione degli uccelli, il kayak e tour nella natura. I visitatori possono anche esplorare affascinanti cittadine lungo il lago e godere dell’ospitalità e della cucina tradizionale albanese."
      }
    },
    {
      title: {
        al: "Liqeni i Prespës",
        en: "Prespa Lake",
        de: "Prespa See",
        fr: "Lac de Prespa",
        it: "Lago di Prespa"
      },
      image: "Images/Lakes/prespa.webp",
      description: {
        al: "Liqeni i Prespës është një perlë e fshehur, e ndarë mes Shqipërisë, Greqisë dhe Maqedonisë së Veriut, i vendosur mes maleve madhështore dhe luginave të gjelbra. I njohur për ujërat e tij kristaltë dhe ishullin romantik Maligrad, ofron mundësi për hiking, shikim të zogjve dhe eko-turizëm. Ambienti i qetë e bën atë të përshtatshëm për fotografi, relaks dhe zhytje në trashëgiminë natyrore dhe kulturore të rajonit.",
        en: "Lake Prespa is a hidden gem, shared by Albania, Greece, and North Macedonia, set amidst majestic mountains and verdant valleys. Known for its crystal-clear waters and the romantic Maligrad Island, it offers opportunities for hiking, bird watching, and eco-tourism. Its tranquil environment makes it perfect for photography, relaxation, and immersing oneself in the region’s rich natural and cultural heritage.",
        de: "Der Prespa See ist ein verstecktes Juwel, das von Albanien, Griechenland und Nordmazedonien geteilt wird und zwischen majestätischen Bergen und grünen Tälern liegt. Bekannt für sein kristallklares Wasser und die romantische Insel Maligrad bietet er Möglichkeiten zum Wandern, Vogelbeobachten und Ökotourismus. Seine ruhige Umgebung macht ihn perfekt für Fotografie, Entspannung und das Eintauchen in das reiche natürliche und kulturelle Erbe der Region.",
        fr: "Le lac de Prespa est un joyau caché partagé entre l’Albanie, la Grèce et la Macédoine du Nord, situé au milieu de montagnes majestueuses et de vallées verdoyantes. Connu pour ses eaux cristallines et l’île romantique de Maligrad, il offre des opportunités de randonnée, d’observation des oiseaux et d’éco-tourisme. Son environnement paisible le rend parfait pour la photographie, la détente et l’immersion dans le riche patrimoine naturel et culturel de la région.",
        it: "Il lago di Prespa è un gioiello nascosto, condiviso tra Albania, Grecia e Macedonia del Nord, situato tra montagne maestose e valli verdeggianti. Conosciuto per le sue acque cristalline e l’isola romantica di Maligrad, offre opportunità per escursioni, birdwatching ed eco-turismo. Il suo ambiente tranquillo lo rende perfetto per fotografia, relax e per immergersi nel ricco patrimonio naturale e culturale della regione."
      }
    }
  ],
  countryside: [
    {
      title: {
        al: "Theth",
        en: "Theth",
        de: "Theth",
        fr: "Theth",
        it: "Theth"
      },
      image: "Images/Countryside/theth.webp",
      description: {
        al: "I vendosur thellë në Alpet Shqiptare, Thethi është një fshat i qetë i njohur për peizazhet dramatike malore, lumenjtë e kristaltë dhe monumentet ikonike si Syri i Kaltër i Thethit dhe kulla shekullore e gjakmarrjes. Është një destinacion kryesor për alpinistët, dashamirësit e natyrës dhe çdo person që kërkon kulturën autentike rurale shqiptare në një nga vendet më të paprekura të Evropës.",
        en: "Located deep in the Albanian Alps, Theth is a peaceful village known for its dramatic mountain scenery, crystal-clear rivers, and iconic landmarks like the Blue Eye of Theth and the centuries-old stone tower of blood feuds. It is a top destination for hikers, nature lovers, and anyone seeking authentic Albanian rural culture in one of the most untouched places in Europe.",
        de: "Tief in den albanischen Alpen gelegen, ist Theth ein friedliches Dorf, bekannt für seine dramatische Berglandschaft, kristallklare Flüsse und ikonische Wahrzeichen wie das Blaue Auge von Theth und den jahrhundertealten Steinturm der Blutfehden. Es ist ein Top-Ziel für Wanderer, Naturliebhaber und alle, die authentische albanische ländliche Kultur an einem der unberührtesten Orte Europas suchen.",
        fr: "Situé au cœur des Alpes albanaises, Theth est un village paisible connu pour ses paysages montagneux spectaculaires, ses rivières cristallines et ses monuments emblématiques tels que le Blue Eye de Theth et la tour en pierre séculaire des vendettas. C’est une destination de choix pour les randonneurs, les amoureux de la nature et tous ceux qui recherchent la culture rurale albanaise authentique dans l’un des endroits les plus préservés d’Europe.",
        it: "Situato nel profondo delle Alpi albanesi, Theth è un villaggio tranquillo noto per i suoi scenari montani drammatici, i fiumi cristallini e i monumenti iconici come il Blue Eye di Theth e la torre di pietra secolare delle faide di sangue. È una destinazione ideale per escursionisti, amanti della natura e chiunque cerchi la cultura rurale albanese autentica in uno dei luoghi più incontaminati d’Europa."
      }
    },
    {
      title: {
        al: "Valbona",
        en: "Valbona",
        de: "Valbona",
        fr: "Valbona",
        it: "Valbona"
      },
      image: "Images/Countryside/valbona.webp",
      description: {
        al: "Valbona është një luginë alpin mahnitëse e rrethuar nga maja të larta, pyje të dendura dhe shtëpi tradicionale prej guri. Popullore për trekking, aventura alpine dhe turizëm kulturor, ofron pamje të jashtëzakonshme dhe një arratisje të qetë në natyrë. Shtegu midis Valbonës dhe Thethit konsiderohet një nga ecjet më të bukura në Ballkan.",
        en: "Valbona is a breathtaking alpine valley surrounded by towering peaks, dense forests, and traditional stone houses. Popular for trekking, alpine adventures, and cultural tourism, it offers extraordinary views and a peaceful escape into nature. The trail between Valbona and Theth is considered one of the most beautiful hikes in the Balkans.",
        de: "Valbona ist ein atemberaubendes alpines Tal, umgeben von imposanten Gipfeln, dichten Wäldern und traditionellen Steinhäusern. Beliebt für Trekking, alpine Abenteuer und Kulturtourismus bietet es außergewöhnliche Ausblicke und eine friedliche Flucht in die Natur. Der Wanderweg zwischen Valbona und Theth gilt als eine der schönsten Wanderungen auf dem Balkan.",
        fr: "Valbona est une vallée alpine à couper le souffle, entourée de sommets imposants, de forêts denses et de maisons en pierre traditionnelles. Populaire pour la randonnée, les aventures alpines et le tourisme culturel, elle offre des vues extraordinaires et une escapade paisible dans la nature. Le sentier entre Valbona et Theth est considéré comme l’une des plus belles randonnées des Balkans.",
        it: "Valbona è una valle alpina mozzafiato, circondata da picchi imponenti, foreste dense e case in pietra tradizionali. Popolare per trekking, avventure alpine e turismo culturale, offre viste straordinarie e una fuga tranquilla nella natura. Il sentiero tra Valbona e Theth è considerato uno dei più bei trekking nei Balcani."
      }
    },
    {
      title: {
        al: "Lepushë",
        en: "Lepushë",
        de: "Lepushë",
        fr: "Lepushë",
        it: "Lepushë"
      },
      image: "Images/Countryside/lepushe.webp",
      description: {
        al: "Lepusha është një fshat malor i bukur pranë kufirit me Malin e Zi, i njohur për livadhet e gjelbra, kodrat prej druri dhe jetesën e qetë në natyrë. Është perfekt për shëtitje të qeta në natyrë, fotografi dhe arratisje dimërore me peizazhe të mbuluara me borë. Vizitorët mund të përjetojnë mikpritjen e vërtetë shqiptare, ushqim të freskët lokal dhe kulturën tradicionale të malësisë.",
        en: "Lepushe is a charming mountain village near the Montenegro border, known for its green meadows, wooden cottages, and serene countryside lifestyle. It is perfect for peaceful nature walks, photography, and winter escapes with snowy landscapes. Visitors can experience true Albanian hospitality, fresh local food, and traditional highland culture.",
        de: "Lepushë ist ein charmantes Bergdorf nahe der Grenze zu Montenegro, bekannt für seine grünen Wiesen, Holzhütten und den ruhigen ländlichen Lebensstil. Es ist perfekt für entspannte Spaziergänge in der Natur, Fotografie und Winterausflüge mit verschneiten Landschaften. Besucher können echte albanische Gastfreundschaft, frische lokale Küche und traditionelle Hochlandkultur erleben.",
        fr: "Lepushë est un charmant village de montagne près de la frontière du Monténégro, connu pour ses prairies verdoyantes, ses chalets en bois et son mode de vie rural paisible. Il est parfait pour des promenades tranquilles dans la nature, la photographie et des escapades hivernales avec des paysages enneigés. Les visiteurs peuvent découvrir l’hospitalité albanaise authentique, la cuisine locale fraîche et la culture traditionnelle des hautes terres.",
        it: "Lepushë è un affascinante villaggio di montagna vicino al confine con il Montenegro, noto per i suoi prati verdi, le casette in legno e lo stile di vita rurale tranquillo. È perfetto per passeggiate rilassanti nella natura, fotografia e fughe invernali con paesaggi innevati. I visitatori possono vivere la vera ospitalità albanese, il cibo locale fresco e la cultura tradizionale dell’altopiano."
      }
    },
    {
      title: {
        al: "Dardhë",
        en: "Dardhë",
        de: "Dardhë",
        fr: "Dardhë",
        it: "Dardhë"
      },
      image: "Images/Countryside/dardhe.webp",
      description: {
        al: "Dardha është një fshat malor piktoresk pranë Korçës, i njohur për rrugicat e kalldrëmta, shtëpitë prej guri dhe shtëpitë e mikpritjes komode. I rrethuar nga pyje dhe shtigje piktoreske, është një destinacion i shkëlqyer për hiking, ski dimëror dhe turizëm kulturor gjatë gjithë vitit. Fshati njihet për sharmun e tij unik, qetësinë dhe kuzhinën e shijshme lokale.",
        en: "Dardhe is a picturesque mountain village near Korça, famous for its cobblestone streets, stone houses, and cozy guesthouses. Surrounded by forests and scenic trails, it is a great destination for hiking, skiing in winter, and cultural tourism year-round. The village is known for its unique charm, tranquility, and delicious local cuisine.",
        de: "Dardhë ist ein malerisches Bergdorf in der Nähe von Korça, bekannt für seine Kopfsteinpflasterstraßen, Steinhäuser und gemütlichen Gasthäuser. Umgeben von Wäldern und malerischen Wanderwegen ist es ein großartiges Ziel für Wandern, Wintersport und ganzjährigen Kulturtourismus. Das Dorf ist bekannt für seinen einzigartigen Charme, seine Ruhe und die köstliche lokale Küche.",
        fr: "Dardhë est un village de montagne pittoresque près de Korça, célèbre pour ses rues pavées, ses maisons en pierre et ses maisons d’hôtes confortables. Entouré de forêts et de sentiers pittoresques, c’est une excellente destination pour la randonnée, le ski en hiver et le tourisme culturel toute l’année. Le village est connu pour son charme unique, sa tranquillité et sa délicieuse cuisine locale.",
        it: "Dardhë è un pittoresco villaggio di montagna vicino a Korçë, famoso per le sue strade acciottolate, case in pietra e accoglienti pensioni. Circondato da foreste e sentieri panoramici, è una destinazione ideale per escursioni, sci invernale e turismo culturale tutto l’anno. Il villaggio è noto per il suo fascino unico, la tranquillità e la deliziosa cucina locale."
      }
    }
  ],
  historicCities: [
    {
      title: {
        al: "Berat",
        en: "Berat",
        de: "Berat",
        fr: "Berat",
        it: "Berat"
      },
      image: "Images/Historic-Cities/berat.webp",
      description: {
        al: "Berat, i njohur si 'Qyteti i Një Mijë Dritareve', është një nga destinacionet më ikonike të Shqipërisë dhe një sit i Trashëgimisë Botërore të UNESCO-s. Qyteti shfaq shtëpi të jashtëzakonshme të periudhës osmane që ngjiten mbi kodrat nën Kalaja e vjetër e Beratit, ku historia merr jetë me pamje mahnitëse mbi lumin Osum. Vizitorët mund të shëtisin në lagjet historike Mangalem dhe Gorica të lidhura me një urë të bukur prej guri, të eksplorojnë Muzeun Onufri me ikona të paçmueshme bizantine dhe të shijojnë atmosferën e qetë që përcakton sharmën e Beratit. Me kombinimin e kulturës, arkitekturës dhe natyrës mahnitëse, qyteti ofron një udhëtim të paharrueshëm në të kaluarën dhe të tashmen e Shqipërisë.",
        en: "Berat, known as the ‘City of a Thousand Windows’, is one of Albania’s most iconic destinations and a proud UNESCO World Heritage Site. The city showcases remarkable Ottoman-era homes that climb the hills beneath the ancient Berat Castle, where history comes alive with breathtaking views over the Osum River. Visitors can wander through the historic Mangalem and Gorica neighborhoods connected by a beautiful stone bridge, explore the Onufri Museum with its priceless Byzantine icons, and enjoy the peaceful atmosphere that defines Berat’s charm. With its blend of culture, architecture, and stunning nature, this city offers an unforgettable journey into Albania’s past and present.",
        de: "Berat, bekannt als die 'Stadt der Tausend Fenster', ist eines der ikonischsten Ziele Albaniens und ein stolzes UNESCO-Weltkulturerbe. Die Stadt zeigt bemerkenswerte Häuser aus osmanischer Zeit, die die Hügel unter der alten Burg von Berat erklimmen, wo die Geschichte mit atemberaubenden Ausblicken auf den Fluss Osum lebendig wird. Besucher können durch die historischen Viertel Mangalem und Gorica spazieren, die durch eine schöne Steinbrücke verbunden sind, das Onufri-Museum mit seinen unbezahlbaren byzantinischen Ikonen erkunden und die friedliche Atmosphäre genießen, die den Charme von Berat ausmacht. Mit seiner Mischung aus Kultur, Architektur und atemberaubender Natur bietet diese Stadt eine unvergessliche Reise in die Vergangenheit und Gegenwart Albaniens.",
        fr: "Berat, connue comme la 'Ville aux Mille Fenêtres', est l’une des destinations les plus emblématiques d’Albanie et un fier site du patrimoine mondial de l’UNESCO. La ville présente des maisons remarquables de l’époque ottomane qui s’élèvent sur les collines sous le château ancien de Berat, où l’histoire prend vie avec des vues imprenables sur la rivière Osum. Les visiteurs peuvent se promener dans les quartiers historiques de Mangalem et Gorica reliés par un beau pont de pierre, explorer le musée Onufri avec ses icônes byzantines inestimables et profiter de l’atmosphère paisible qui définit le charme de Berat. Avec son mélange de culture, d’architecture et de nature splendide, cette ville offre un voyage inoubliable dans le passé et le présent de l’Albanie.",
        it: "Berat, conosciuta come la 'Città delle Mille Finestre', è una delle destinazioni più iconiche dell’Albania e un orgoglioso sito UNESCO. La città mostra straordinarie case dell’epoca ottomana che si arrampicano sulle colline sotto l’antico Castello di Berat, dove la storia prende vita con viste mozzafiato sul fiume Osum. I visitatori possono passeggiare nei quartieri storici di Mangalem e Gorica collegati da un bellissimo ponte in pietra, esplorare il Museo Onufri con le sue preziose icone bizantine e godere dell’atmosfera tranquilla che definisce il fascino di Berat. Con la sua combinazione di cultura, architettura e natura splendida, questa città offre un viaggio indimenticabile nel passato e nel presente dell’Albania."
      }
    },
    {
      title: {
        al: "Gjirokastër",
        en: "Gjirokastër",
        de: "Gjirokastër",
        fr: "Gjirokastër",
        it: "Gjirokastër"
      },
      image: "Images/Historic-Cities/gjirokaster.webp",
      description: {
        al: "Gjirokastra, shpesh e quajtur 'Qyteti i Gurit', është një tjetër thesar i Trashëgimisë Botërore të UNESCO-s, i njohur për shtëpitë unike si fortesa me çati prej shkëmbi dhe rrugica të pjerrëta prej kalldrëmi. Duke mbikëqyrur qytetin është Kalaja madhështore e Gjirokastrës, një nga më të mëdhatë në Ballkan, që ofron pamje panoramike të luginës poshtë. Qyteti është gjithashtu vendlindja e shumë figurave të rëndësishme shqiptare dhe është i mbushur me pazare tradicionale, muze, tunele nën tokë dhe struktura mesjetare. Vizitorët e duan folklorin e pasur, kuzhinën e shijshme të rajonit dhe festivalet kulturore që zhvillohen brenda mureve të kalasë. Gjirokastra është një kombinim i përsosur i historisë, tregimit dhe jetës autentike shqiptare.",
        en: "Gjirokaster, often called the ‘Stone City’, is another UNESCO World Heritage treasure celebrated for its unique fortress-like houses with slate rooftops and steep cobblestone streets. Overlooking the city is the magnificent Gjirokaster Castle, one of the largest in the Balkans, offering panoramic views of the valley below. The city is also the birthplace of many important Albanian figures and is filled with traditional bazaars, museums, underground tunnels, and medieval structures. Visitors love the rich folklore, delicious cuisine of the region, and the cultural festivals hosted within the castle walls. Gjirokaster is a perfect blend of history, storytelling, and authentic Albanian life.",
        de: "Gjirokastër, oft die 'Steinstadt' genannt, ist ein weiteres UNESCO-Weltkulturerbe, gefeiert für seine einzigartigen, festungsähnlichen Häuser mit Schieferdächern und steilen Kopfsteinpflasterstraßen. Über der Stadt thront die prächtige Burg Gjirokastër, eine der größten auf dem Balkan, die einen Panoramablick auf das darunterliegende Tal bietet. Die Stadt ist auch der Geburtsort vieler bedeutender albanischer Persönlichkeiten und ist voller traditioneller Basare, Museen, unterirdischer Tunnel und mittelalterlicher Bauwerke. Besucher lieben die reiche Folklore, die köstliche regionale Küche und die kulturellen Festivals innerhalb der Burgmauern. Gjirokastër ist eine perfekte Mischung aus Geschichte, Erzählung und authentischem albanischem Leben.",
        fr: "Gjirokastër, souvent appelée la 'Ville de Pierre', est un autre trésor du patrimoine mondial de l’UNESCO célébré pour ses maisons uniques ressemblant à des forteresses avec des toits en ardoise et des rues pavées escarpées. Surplombant la ville se dresse le magnifique château de Gjirokastër, l’un des plus grands des Balkans, offrant des vues panoramiques sur la vallée en contrebas. La ville est également le lieu de naissance de nombreuses personnalités albanaises importantes et est remplie de bazars traditionnels, de musées, de tunnels souterrains et de structures médiévales. Les visiteurs apprécient le folklore riche, la délicieuse cuisine régionale et les festivals culturels organisés à l’intérieur des murs du château. Gjirokastër est un mélange parfait d’histoire, de narration et de vie albanaise authentique.",
        it: "Gjirokastër, spesso chiamata la 'Città di Pietra', è un altro tesoro del patrimonio mondiale dell’UNESCO, celebrata per le sue case uniche simili a fortezze con tetti in ardesia e strade acciottolate ripide. Sovrastante la città si erge il magnifico Castello di Gjirokastër, uno dei più grandi nei Balcani, che offre viste panoramiche sulla valle sottostante. La città è anche il luogo di nascita di molte figure importanti albanesi ed è piena di bazar tradizionali, musei, tunnel sotterranei e strutture medievali. I visitatori amano il ricco folklore, la deliziosa cucina della regione e i festival culturali ospitati all’interno delle mura del castello."
      }
    },
    {
      title: {
        al: "Krujë",
        en: "Krujë",
        de: "Krujë",
        fr: "Krujë",
        it: "Krujë"
      },
      image: "Images/Historic-Cities/kruje.webp",
      description: {
        al: "Kruja është një qytet historik i lidhur ngushtë me identitetin kombëtar të Shqipërisë, pasi ishte qendra e rezistencës të udhëhequr nga heroi kombëtar Skënderbeu në shekullin e 15-të. Në majën e qytetit ndodhet Kështjella ikonike e Krujës, shtëpia e Muzeut të Skënderbeut, ku vizitorët mund të eksplorojnë të kaluarën heroike të Shqipërisë. Pazari i Vjetër poshtë kalasë është një vend kulturor plot me punime artizanale, antikitete, qilima dhe suvenire — perfekt për udhëtarët që kërkojnë mjeshtërinë autentike shqiptare. I rrethuar nga male dhe peizazhe mahnitëse, Kruja ofron një përvojë kulturore dhe panoramike si asnjë tjetër.",
        en: "Kruje is a historic city deeply connected to Albania’s national identity, as it was the center of resistance led by the national hero Skanderbeg in the 15th century. At the top of the town stands the iconic Kruje Castle, home to the Skanderbeg Museum, where visitors can explore Albania’s heroic past. The Old Bazaar below the castle is a cultural hotspot full of handcrafted goods, antiques, carpets, and souvenirs — perfect for travelers seeking authentic Albanian craftsmanship. Surrounded by mountains and stunning landscapes, Kruje offers both a cultural and scenic experience like no other.",
        de: "Krujë ist eine historische Stadt, die eng mit der nationalen Identität Albaniens verbunden ist, da sie im 15. Jahrhundert das Zentrum des Widerstands unter dem Nationalhelden Skanderbeg war. Oben in der Stadt steht die ikonische Burg von Krujë, Heimat des Skanderbeg-Museums, wo Besucher die heroische Vergangenheit Albaniens erkunden können. Der Alte Basar unterhalb der Burg ist ein kultureller Hotspot voller handgefertigter Waren, Antiquitäten, Teppiche und Souvenirs – perfekt für Reisende, die authentisches albanisches Kunsthandwerk suchen. Umgeben von Bergen und atemberaubenden Landschaften bietet Krujë sowohl ein kulturelles als auch landschaftliches Erlebnis wie kein anderes.",
        fr: "Krujë est une ville historique profondément liée à l’identité nationale albanaise, car elle était le centre de la résistance dirigée par le héros national Skanderbeg au XVe siècle. Au sommet de la ville se dresse l’emblématique château de Krujë, abritant le musée Skanderbeg, où les visiteurs peuvent explorer le passé héroïque de l’Albanie. Le Vieux Bazar sous le château est un centre culturel rempli d’objets artisanaux, d’antiquités, de tapis et de souvenirs — parfait pour les voyageurs en quête de savoir-faire albanais authentique. Entourée de montagnes et de paysages époustouflants, Krujë offre une expérience à la fois culturelle et panoramique unique.",
        it: "Krujë è una città storica profondamente legata all’identità nazionale albanese, poiché era il centro della resistenza guidata dall’eroe nazionale Skanderbeg nel XV secolo. In cima alla città si erge l’iconico Castello di Krujë, sede del Museo Skanderbeg, dove i visitatori possono esplorare il passato eroico dell’Albania. Il Vecchio Bazaar sotto il castello è un punto culturale pieno di articoli artigianali, antiquariato, tappeti e souvenir — perfetto per i viaggiatori in cerca di artigianato autentico albanese. Circondata da montagne e paesaggi mozzafiato, Krujë offre un’esperienza culturale e panoramica senza pari."
      }
    },
    {
      title: {
        al: "Butrint",
        en: "Butrint",
        de: "Butrint",
        fr: "Butrint",
        it: "Butrint"
      },
      image: "Images/Historic-Cities/butrint.webp",
      description: {
        al: "Butrinti është një nga parqet arkeologjike më të jashtëzakonshme në Evropë, i mbrojtur si Sit i Trashëgimisë Botërore të UNESCO-s. Vendndodhja përmban shtresa të historisë së lashtë nga qytetërimet greke, romake, bizantine dhe veneciane, duke përfshirë një amfiteatër të ruajtur mirë, banja romake, tempuj dhe mure kështjellash. I vendosur në një mjedis natyror të qetë që përfshin liqene, pyje dhe zona të lagura, Butrinti ofron një eksplorim magjepsës të së kaluarës. Vizitorët e duan të shëtisin nëpër rrugët e lashta duke dëgjuar këndimin e zogjve dhe duke shijuar pamjet e bukura të Kanalit Vivari — një kombinim perfekt i historisë dhe natyrës.",
        en: "Butrint is one of the most extraordinary archaeological parks in Europe, protected as a UNESCO World Heritage Site. The site features layers of ancient history from Greek, Roman, Byzantine, and Venetian civilizations, including a well-preserved amphitheater, Roman baths, temples, and fortress walls. Set within a peaceful natural environment that includes lakes, forests, and wetlands, Butrint offers a truly enchanting exploration of the past. Visitors love walking through the ancient pathways while listening to birdsong and enjoying views of the beautiful Vivari Channel — a perfect mix of history and nature.",
        de: "Butrint ist einer der außergewöhnlichsten archäologischen Parks Europas, geschützt als UNESCO-Weltkulturerbe. Die Stätte zeigt Schichten der alten Geschichte aus griechischen, römischen, byzantinischen und venezianischen Zivilisationen, einschließlich eines gut erhaltenen Amphitheaters, römischer Bäder, Tempel und Festungsmauern. In einer friedlichen natürlichen Umgebung mit Seen, Wäldern und Feuchtgebieten bietet Butrint eine wirklich bezaubernde Erkundung der Vergangenheit. Besucher lieben es, die antiken Pfade entlangzugehen, während sie Vogelgesang hören und die schönen Ausblicke auf den Vivari-Kanal genießen — eine perfekte Mischung aus Geschichte und Natur.",
        fr: "Butrint est l’un des parcs archéologiques les plus extraordinaires d’Europe, protégé en tant que site du patrimoine mondial de l’UNESCO. Le site présente des couches de l’histoire ancienne des civilisations grecque, romaine, byzantine et vénitienne, y compris un amphithéâtre bien préservé, des bains romains, des temples et des murs de forteresse. Situé dans un environnement naturel paisible comprenant lacs, forêts et zones humides, Butrint offre une exploration vraiment envoûtante du passé. Les visiteurs adorent se promener le long des anciens sentiers tout en écoutant le chant des oiseaux et en profitant des vues sur le magnifique canal de Vivari — un mélange parfait d’histoire et de nature.",
        it: "Butrint è uno dei parchi archeologici più straordinari d’Europa, protetto come sito del patrimonio mondiale dell’UNESCO. Il sito presenta strati di storia antica delle civiltà greca, romana, bizantina e veneziana, tra cui un anfiteatro ben conservato, bagni romani, templi e mura fortificate. Situato in un ambiente naturale tranquillo che include laghi, foreste e zone umide, Butrint offre un’esplorazione davvero incantevole del passato. I visitatori amano passeggiare lungo gli antichi percorsi ascoltando il canto degli uccelli e godendo delle viste sul bellissimo Canale di Vivari — un perfetto mix di storia e natura."
      }
    },
    {
      title: {
        al: "Apollonia",
        en: "Apollonia",
        de: "Apollonia",
        fr: "Apollonia",
        it: "Apollonia"
      },
      image: "Images/Historic-Cities/apollonia.webp",
      description: {
        al: "Apollonia ishte dikur një qendër kryesore e kulturës, edukimit dhe tregtisë gjatë epokës së lashtë greke dhe romake. Sot, ky sit arkeologjik mbresëlënës qëndron i rrethuar nga kodra të gjelbra dhe fshatra të qetë, duke ofruar vizitorëve një përvojë historike paqësore, por tërheqëse. Pikat kryesore përfshijnë bibliotekën monumentale, amfiteatrin, kolonat antike dhe Manastirin pitoresk të Ardenicës që shikon parkun. Është një vend që duhet vizituar për dashamirësit e arkeologjisë dhe ata që kërkojnë një ikje në një ambient të qetë plot me relike të së kaluarës së lavdishme.",
        en: "Apollonia was once a major center of culture, education, and commerce during the ancient Greek and Roman eras. Today, this impressive archaeological site stands surrounded by green hills and quiet countryside, offering visitors a peaceful but fascinating historical experience. Highlights include the monumental library, amphitheater, ancient columns, and the picturesque Ardenica Monastery overlooking the park. It is a must-visit place for archaeology lovers and those seeking an escape into a serene setting filled with relics of a glorious past.",
        de: "Apollonia war einst ein wichtiges Zentrum für Kultur, Bildung und Handel während der antiken griechischen und römischen Zeit. Heute steht diese beeindruckende archäologische Stätte umgeben von grünen Hügeln und ruhiger Landschaft, die den Besuchern eine friedliche, aber faszinierende historische Erfahrung bietet. Höhepunkte sind die monumentale Bibliothek, das Amphitheater, antike Säulen und das malerische Kloster Ardenica mit Blick auf den Park. Ein Muss für Archäologieliebhaber und diejenigen, die in eine ruhige Umgebung voller Relikte einer glorreichen Vergangenheit eintauchen möchten.",
        fr: "Apollonia était autrefois un centre majeur de culture, d’éducation et de commerce pendant les époques grecque et romaine antiques. Aujourd’hui, ce site archéologique impressionnant est entouré de collines verdoyantes et de campagnes tranquilles, offrant aux visiteurs une expérience historique paisible mais fascinante. Les points forts incluent la bibliothèque monumentale, l’amphithéâtre, les colonnes antiques et le pittoresque monastère d’Ardenica surplombant le parc. C’est un lieu incontournable pour les amateurs d’archéologie et ceux qui recherchent une escapade dans un cadre serein rempli de vestiges d’un passé glorieux.",
        it: "Apollonia era un importante centro di cultura, istruzione e commercio durante le antiche epoche greca e romana. Oggi questo impressionante sito archeologico si trova circondato da colline verdi e campagna tranquilla, offrendo ai visitatori un’esperienza storica pacifica ma affascinante. I punti salienti includono la biblioteca monumentale, l’anfiteatro, le colonne antiche e il pittoresco Monastero di Ardenica con vista sul parco. È un luogo imperdibile per gli amanti dell’archeologia e per chi cerca una fuga in un ambiente sereno pieno di reperti di un glorioso passato."
      }
    },
    {
      title: {
        al: "Lezhë",
        en: "Lezhë",
        de: "Lezhë",
        fr: "Lezhë",
        it: "Lezhë"
      },
      image: "Images/Historic-Cities/lezhe.webp",
      description: {
        al: "Lezha është një nga qytetet më historikisht të rëndësishme të Shqipërisë, shtëpia e Memorialit të Skënderbeut vendi i fundit i prehjes së heroit kombëtar të Shqipërisë. Qyteti ka rrënoja të lashta, monumente të bukura dhe Kështjellën e Lezhës me pamje të jashtëzakonshme mbi lumin Drin dhe bregdetin Adriatik. I pasur në trashëgimi dhe strategjikisht i vendosur midis maleve dhe detit, Lezha ofron kombinimin perfekt të historisë, kulturës dhe bukurisë natyrore të lehtë për t’u aksesuar, duke e bërë një ndalesë të shkëlqyer për udhëtarët që eksplorojnë veri të Shqipërisë.",
        en: "Lezhe is one of Albania’s most historically significant cities, home to the Memorial of Skanderbeg the final resting place of Albania’s national hero. The city features ancient ruins, beautiful monuments, and the Lezhe Castle with incredible views over the Drin River and Adriatic coastline. Rich in heritage and strategically located between mountains and sea, Lezhe offers the perfect mix of history, culture, and easily accessible natural beauty, making it a great stop for travelers exploring northern Albania.",
        de: "Lezhë ist eine der historisch bedeutendsten Städte Albaniens, Heimat des Skanderbeg-Denkmals die letzte Ruhestätte des Nationalhelden Albaniens. Die Stadt verfügt über antike Ruinen, schöne Monumente und die Burg Lezhë mit unglaublichen Ausblicken auf den Fluss Drin und die Adriaküste. Reich an Erbe und strategisch zwischen Bergen und Meer gelegen, bietet Lezhë die perfekte Mischung aus Geschichte, Kultur und leicht zugänglicher natürlicher Schönheit, was es zu einem großartigen Halt für Reisende macht, die Nordalbanien erkunden.",
        fr: "Lezhë est l’une des villes les plus historiquement significatives d’Albanie, abritant le Mémorial de Skanderbeg la dernière demeure du héros national albanais. La ville comprend des ruines anciennes, de beaux monuments et le château de Lezhë avec une vue incroyable sur la rivière Drin et la côte adriatique. Riche en patrimoine et stratégiquement située entre montagnes et mer, Lezhë offre le mélange parfait d’histoire, de culture et de beauté naturelle facilement accessible, en faisant un excellent arrêt pour les voyageurs explorant le nord de l’Albanie.",
        it: "Lezhë è una delle città più storicamente significative dell’Albania, sede del Memoriale di Skanderbeg l’ultima dimora dell’eroe nazionale albanese. La città presenta antiche rovine, splendidi monumenti e il Castello di Lezhë con viste incredibili sul fiume Drin e sulla costa adriatica. Ricca di patrimonio e strategicamente situata tra montagne e mare, Lezhë offre la combinazione perfetta di storia, cultura e bellezza naturale facilmente accessibile, rendendola una tappa ideale per i viaggiatori che esplorano il nord dell’Albania."
      }
    }
  ],
  nationalParks: [
    {
      title: {
        al: "Parku Kombëtar i Thethit",
        en: "Theth National Park",
        de: "Nationalpark Theth",
        fr: "Parc National de Theth",
        it: "Parco Nazionale di Theth"
      },
      image: "Images/National-Parks/theth-national.webp",
      description: {
        al: "Parku Kombëtar i Thethit është një parajsë alpine spektakolare në zemër të Alpeve Shqiptare. I njohur për majat dramatike, lumenjtë kristalë dhe pyjet e paprekura, ofron disa nga shtigjet më të mira për ecje në Ballkan. Vizitorët tërhiqen nga pikëpamjet ikonike si Kisha e Thethit, Ujëvara e Grunasit dhe Syri i Kaltër i Thethit, një burim natyror mahnitës me ujëra turkiz. Shtëpitë tradicionale prej guri dhe mikpritja e ngrohtë e vendasve krijojnë një përvojë autentike kulturore. Ky park kombëtar është perfekt për aventurierët, dashamirësit e natyrës dhe këdo që kërkon paqe në peizazhe mahnitëse malore.",
        en: "Theth National Park is a spectacular alpine paradise located in the heart of the Albanian Alps. Known for its dramatic peaks, crystal-clear rivers, and untouched forests, it offers some of the best hiking trails in the Balkans. Visitors are drawn to landmarks such as the Church of Theth, the Grunas Waterfall, and the iconic Blue Eye of Theth, a stunning natural spring with turquoise waters. The traditional stone houses and warm hospitality of the locals create an authentic cultural experience. This national park is perfect for adventurers, nature lovers, and anyone seeking peace in breathtaking high-mountain landscapes.",
        de: "Der Nationalpark Theth ist ein spektakuläres alpines Paradies im Herzen der Albanischen Alpen. Bekannt für seine dramatischen Gipfel, kristallklaren Flüsse und unberührten Wälder bietet er einige der besten Wanderwege auf dem Balkan. Besucher werden von Wahrzeichen wie der Kirche von Theth, dem Wasserfall Grunas und dem ikonischen Blauen Auge von Theth angezogen, einer atemberaubenden natürlichen Quelle mit türkisfarbenem Wasser. Die traditionellen Steinhäuser und die herzliche Gastfreundschaft der Einheimischen schaffen ein authentisches kulturelles Erlebnis. Dieser Nationalpark ist perfekt für Abenteurer, Naturliebhaber und alle, die Ruhe in atemberaubenden Hochgebirgslandschaften suchen.",
        fr: "Le parc national de Theth est un spectaculaire paradis alpin situé au cœur des Alpes albanaises. Connu pour ses sommets impressionnants, ses rivières cristallines et ses forêts intactes, il offre certains des meilleurs sentiers de randonnée des Balkans. Les visiteurs sont attirés par des sites emblématiques tels que l’église de Theth, la cascade de Grunas et le célèbre Œil Bleu de Theth, une source naturelle impressionnante aux eaux turquoise. Les maisons traditionnelles en pierre et l’accueil chaleureux des habitants créent une expérience culturelle authentique. Ce parc national est parfait pour les aventuriers, les amoureux de la nature et tous ceux qui recherchent la paix dans des paysages de haute montagne à couper le souffle.",
        it: "Il Parco Nazionale di Theth è un spettacolare paradiso alpino situato nel cuore delle Alpi albanesi. Conosciuto per le sue cime drammatiche, i fiumi cristallini e le foreste incontaminate, offre alcuni dei migliori sentieri escursionistici dei Balcani. I visitatori sono attratti da luoghi iconici come la Chiesa di Theth, la Cascata di Grunas e il famoso Occhio Blu di Theth, una splendida sorgente naturale con acque turchesi. Le case tradizionali in pietra e l’ospitalità calorosa dei locali creano un’esperienza culturale autentica. Questo parco nazionale è perfetto per avventurieri, amanti della natura e chiunque cerchi pace in paesaggi montani mozzafiato."
      }
    },
    {
      title: {
        al: "Parku Kombëtar i Butrintit",
        en: "Butrint National Park",
        de: "Nationalpark Butrint",
        fr: "Parc National de Butrint",
        it: "Parco Nazionale di Butrint"
      },
      image: "Images/National-Parks/butrint.webp",
      description: {
        al: "Parku Kombëtar i Butrintit është një përzierje unike e arkeologjisë dhe natyrës, duke mbrojtur një nga qytetet më të rëndësishme të lashta në Mesdhe. I rrethuar nga liqene, pyje dhe zona të lagura, parku ka monumente të ruajtura mirë nga periudhat Greke, Romake, Bizantine dhe Veneciane. Vizitorët mund të eksplorojnë një amfiteatër madhështor, tempuj antikë, porta qytetesh dhe një akropol piktoresk që shikon Kanalin e Vivarit. Biodiversiteti i pasur e bën atë një parajsë për dashamirësit e kafshëve të egra, ndërsa entuziastët e historisë mund të shijojnë një udhëtim përmes mijëra viteve kulture. Butrinti është një vend magjik ku historia dhe natyra bashkëjetojnë në harmoni.",
        en: "Butrint National Park is a unique blend of archaeology and nature, protecting one of the most important ancient cities in the Mediterranean region. Surrounded by lakes, forests, and wetlands, the park features well-preserved monuments from Greek, Roman, Byzantine, and Venetian periods. Visitors can explore a majestic amphitheater, ancient temples, city gates, and a scenic acropolis overlooking the Vivari Channel. Its rich biodiversity makes it a haven for wildlife lovers, while history enthusiasts can enjoy a journey through thousands of years of culture. Butrint is a magical place where history and nature coexist in harmony.",
        de: "Der Nationalpark Butrint ist eine einzigartige Mischung aus Archäologie und Natur und schützt eine der wichtigsten antiken Städte im Mittelmeerraum. Umgeben von Seen, Wäldern und Feuchtgebieten bietet der Park gut erhaltene Monumente aus griechischen, römischen, byzantinischen und venezianischen Epochen. Besucher können ein majestätisches Amphitheater, antike Tempel, Stadttore und eine malerische Akropolis mit Blick auf den Vivari-Kanal erkunden. Seine reiche Biodiversität macht ihn zu einem Paradies für Tierliebhaber, während Geschichtsinteressierte eine Reise durch Tausende Jahre Kultur genießen können. Butrint ist ein magischer Ort, an dem Geschichte und Natur harmonisch koexistieren.",
        fr: "Le parc national de Butrint est un mélange unique d’archéologie et de nature, protégeant l’une des villes anciennes les plus importantes de la région méditerranéenne. Entouré de lacs, de forêts et de zones humides, le parc présente des monuments bien conservés des périodes grecque, romaine, byzantine et vénitienne. Les visiteurs peuvent explorer un amphithéâtre majestueux, des temples anciens, des portes de la ville et une acropole pittoresque surplombant le canal de Vivari. Sa riche biodiversité en fait un paradis pour les amateurs de faune, tandis que les passionnés d’histoire peuvent profiter d’un voyage à travers des milliers d’années de culture. Butrint est un lieu magique où l’histoire et la nature coexistent en harmonie.",
        it: "Il Parco Nazionale di Butrint è un’unica combinazione di archeologia e natura, proteggendo una delle città antiche più importanti del Mediterraneo. Circondato da laghi, foreste e zone umide, il parco presenta monumenti ben conservati dei periodi greco, romano, bizantino e veneziano. I visitatori possono esplorare un maestoso anfiteatro, antichi templi, porte cittadine e un’acropoli panoramica che domina il Canale di Vivari. La sua ricca biodiversità lo rende un paradiso per gli amanti della fauna, mentre gli appassionati di storia possono godersi un viaggio attraverso migliaia di anni di cultura. Butrint è un luogo magico dove storia e natura coesistono in armonia."
      }
    },
    {
      title: {
        al: "Parku Kombëtar Korab-Koritnik",
        en: "Korab-Koritnik National Park",
        de: "Nationalpark Korab-Koritnik",
        fr: "Parc National Korab-Koritnik",
        it: "Parco Nazionale Korab-Koritnik"
      },
      image: "Images/National-Parks/korab-koritnik.webp",
      description: {
        al: "Parku Kombëtar Korab-Koritnik njihet për bukurinë e tij të egër dhe peizazhet madhështore, shtëpia e Malit të Korabit — maja më e lartë në Shqipëri. Parku ofron shtigje sfiduese për ecje, livadhe alpine dhe pamje panoramike mahnitëse që shpërblejnë çdo përpjekje të vizitorit. Fauna e tij e larmishme përfshin specie të rralla zogjsh dhe gjitarësh, duke e bërë ideal për ekoturizëm dhe eksplorim të natyrës. I paprekur, i egër dhe i qetë, parku është destinacion i preferuar për alpinistët dhe dashamirësit e maleve që kërkojnë aventurë të vërtetë në natyrën e veriut të Shqipërisë.",
        en: "Korab-Koritnik National Park is known for its rugged beauty and majestic landscapes, home to Mount Korab — the highest peak in Albania. The park offers challenging hiking routes, alpine meadows, and breathtaking panoramic views that reward every traveler’s effort. Its diverse wildlife includes rare species of birds and mammals, making it ideal for eco-tourism and nature exploration. Untouched, wild, and tranquil, the park is a favorite destination for experienced hikers and mountain lovers seeking true adventure in Albania’s northern wilderness.",
        de: "Der Nationalpark Korab-Koritnik ist bekannt für seine raue Schönheit und majestätische Landschaften, Heimat des Korab-Berges — dem höchsten Gipfel Albaniens. Der Park bietet anspruchsvolle Wanderwege, alpine Wiesen und atemberaubende Panoramablicke, die jede Anstrengung des Reisenden belohnen. Seine vielfältige Tierwelt umfasst seltene Vogel- und Säugetierarten und macht ihn ideal für Ökotourismus und Naturerkundung. Unberührt, wild und ruhig, ist der Park ein beliebtes Ziel für erfahrene Wanderer und Bergliebhaber, die wahre Abenteuer in Albaniens nördlicher Wildnis suchen.",
        fr: "Le parc national Korab-Koritnik est connu pour sa beauté sauvage et ses paysages majestueux, abritant le mont Korab — le plus haut sommet d’Albanie. Le parc propose des sentiers de randonnée difficiles, des prairies alpines et des vues panoramiques à couper le souffle qui récompensent chaque effort des voyageurs. Sa faune diversifiée comprend des espèces rares d’oiseaux et de mammifères, ce qui le rend idéal pour l’écotourisme et l’exploration de la nature. Intact, sauvage et paisible, le parc est une destination favorite pour les randonneurs expérimentés et les amateurs de montagne à la recherche de véritables aventures dans la nature sauvage du nord de l’Albanie.",
        it: "Il Parco Nazionale Korab-Koritnik è conosciuto per la sua bellezza aspra e i paesaggi maestosi, casa del Monte Korab — la vetta più alta dell’Albania. Il parco offre percorsi escursionistici impegnativi, prati alpini e viste panoramiche mozzafiato che ricompensano ogni sforzo dei visitatori. La sua fauna diversificata include specie rare di uccelli e mammiferi, rendendolo ideale per l’ecoturismo e l’esplorazione della natura. Intatto, selvaggio e tranquillo, il parco è una destinazione preferita per escursionisti esperti e amanti della montagna in cerca di vere avventure nella natura incontaminata del nord dell’Albania."
      }
    },
    {
      title: {
        al: "Parku Kombëtar Divjakë-Karavasta",
        en: "Divjakë-Karavatska National Park",
        de: "Nationalpark Divjakë-Karavasta",
        fr: "Parc National Divjakë-Karavasta",
        it: "Parco Nazionale Divjakë-Karavasta"
      },
      image: "Images/National-Parks/divjake-karavatska.webp",
      description: {
        al: "Parku Kombëtar Divjakë-Karavasta është një nga ekosistemet më të rëndësishme bregdetare të Shqipërisë, i njohur për Lagunën e Karavastas — laguna më e madhe në vend. Parku mbron faunën e larmishme duke përfshirë pelikanin e rrallë Dalmat, duke e bërë parajsë për shikuesit e zogjve dhe fotografët. Plazhet me rërë, pyjet me pisha dhe zonat e lagështa krijojnë një ambient paqësor perfekt për çiklizëm, shëtitje në natyrë dhe ture me varka. Familjet dhe dashamirësit e natyrës mund të shijojnë qendrën e vizitorëve, kullat e vëzhgimit dhe zonat për piknik ndërsa lidhen me një nga peizazhet më unike natyrore të Shqipërisë.",
        en: "Divjake-Karavasta National Park is one of Albania’s most important coastal ecosystems, famous for the Karavasta Lagoon — the largest lagoon in the country. The park protects diverse wildlife including the rare Dalmatian pelican, making it a paradise for birdwatchers and photographers. Sandy beaches, pine forests, and wetlands create a peaceful environment perfect for cycling, nature walks, and boat tours. Families and nature lovers can enjoy the visitor center, observation towers, and picnic areas while connecting with one of Albania’s most unique natural landscapes.",
        de: "Der Nationalpark Divjakë-Karavasta ist eines der wichtigsten Küstenökosysteme Albaniens, bekannt für die Karavasta-Lagune — die größte Lagune des Landes. Der Park schützt eine vielfältige Tierwelt, darunter den seltenen Dalmatinerpelikan, was ihn zu einem Paradies für Vogelbeobachter und Fotografen macht. Sandstrände, Kiefernwälder und Feuchtgebiete schaffen eine friedliche Umgebung, ideal zum Radfahren, für Naturspaziergänge und Bootstouren. Familien und Naturliebhaber können das Besucherzentrum, die Aussichtstürme und Picknickbereiche genießen und sich mit einer der einzigartigsten Naturlandschaften Albaniens verbinden.",
        fr: "Le parc national de Divjakë-Karavasta est l’un des écosystèmes côtiers les plus importants d’Albanie, célèbre pour la lagune de Karavasta — la plus grande lagune du pays. Le parc protège une faune diversifiée, y compris le rare pélican dalmate, en faisant un paradis pour les ornithologues et les photographes. Les plages de sable, les forêts de pins et les zones humides créent un environnement paisible parfait pour le vélo, les promenades dans la nature et les excursions en bateau. Les familles et les amoureux de la nature peuvent profiter du centre des visiteurs, des tours d’observation et des aires de pique-nique tout en se connectant à l’un des paysages naturels les plus uniques d’Albanie.",
        it: "Il Parco Nazionale Divjakë-Karavasta è uno degli ecosistemi costieri più importanti dell’Albania, famoso per la Laguna di Karavasta — la più grande del paese. Il parco protegge una fauna diversificata, incluso il raro pellicano dalmata, rendendolo un paradiso per birdwatcher e fotografi. Spiagge sabbiose, foreste di pini e zone umide creano un ambiente tranquillo perfetto per ciclismo, passeggiate nella natura e gite in barca. Famiglie e amanti della natura possono godere del centro visitatori, delle torri di osservazione e delle aree picnic, entrando in contatto con uno dei paesaggi naturali più unici dell’Albania."
      }
    },
    {
      title: {
        al: "Parku Kombëtar i Luginës së Valbonës",
        en: "Valbona Valley National Park",
        de: "Nationalpark Valbona-Tal",
        fr: "Parc National de la Vallée de Valbona",
        it: "Parco Nazionale della Valle di Valbona"
      },
      image: "Images/National-Parks/valbona-valley.webp",
      description: {
        al: "Parku Kombëtar i Luginës së Valbonës është një destinacion mahnitës alpin, shpesh i përshkruar si ‘Mrekullia e Alpeve’. I rrethuar nga maja të larta, lumenj kristal të pastër dhe livadhe me ngjyra, lugina ofron eksperienca të paharrueshme për shëtitje dhe aktivitete në natyrë. Udhëtarët mund të eksplorojnë fshatra tradicionale, të shijojnë kuzhinën lokale të shijshme dhe të qëndrojnë në bujtina të ngrohta të menaxhuara nga vendas mikpritës. Qoftë duke shëtitur drejt Kalit të Valbonës, duke kapur fotografi mahnitëse apo thjesht duke u relaksuar në heshtjen e natyrës, vizitorët do të gjejnë këtë park kombëtar si një nga vendet më të bukura dhe inspiruese në të gjithë Shqipërinë.",
        en: "Valbona Valley National Park is a breathtaking alpine destination often described as ‘The Miracle of the Alps’. Surrounded by towering peaks, crystal-clear rivers, and colorful meadows, the valley offers unforgettable hiking and outdoor experiences. Travelers can explore traditional villages, enjoy delicious local cuisine, and stay in cozy guesthouses run by welcoming locals. Whether hiking to the Valbona Pass, capturing stunning photography, or simply relaxing in nature’s silence, visitors will find this national park one of the most beautiful and inspiring places in all of Albania.",
        de: "Der Nationalpark Valbona-Tal ist ein atemberaubendes alpines Reiseziel, oft als ‚Das Wunder der Alpen‘ bezeichnet. Umgeben von hohen Gipfeln, kristallklaren Flüssen und bunten Wiesen bietet das Tal unvergessliche Wander- und Outdoor-Erlebnisse. Reisende können traditionelle Dörfer erkunden, die köstliche lokale Küche genießen und in gemütlichen Gästehäusern übernachten, die von gastfreundlichen Einheimischen geführt werden. Ob beim Wandern zum Valbona-Pass, beim Fotografieren atemberaubender Landschaften oder beim einfachen Entspannen in der Stille der Natur – Besucher werden diesen Nationalpark als einen der schönsten und inspirierendsten Orte Albaniens erleben.",
        fr: "Le parc national de la vallée de Valbona est une destination alpine à couper le souffle, souvent décrite comme « Le Miracle des Alpes ». Entourée de sommets imposants, de rivières cristallines et de prairies colorées, la vallée offre des expériences de randonnée et de plein air inoubliables. Les voyageurs peuvent explorer des villages traditionnels, déguster la délicieuse cuisine locale et séjourner dans des maisons d’hôtes confortables tenues par des habitants accueillants. Que ce soit en randonnée jusqu au col de Valbona, en capturant des photographies époustouflantes ou simplement en se détendant dans le silence de la nature, les visiteurs trouveront ce parc national comme l’un des endroits les plus beaux et inspirants d’Albanie.",
        it: "Il Parco Nazionale della Valle di Valbona è una spettacolare destinazione alpina spesso descritta come 'Il Miracolo delle Alpi'. Circondata da vette imponenti, fiumi cristallini e prati colorati, la valle offre esperienze indimenticabili di escursionismo e attività all’aperto. I viaggiatori possono esplorare villaggi tradizionali, gustare deliziosa cucina locale e soggiornare in accoglienti pensioni gestite da abitanti del luogo cordiali. Che si tratti di camminare verso il Passo di Valbona, scattare fotografie mozzafiato o semplicemente rilassarsi nel silenzio della natura, i visitatori troveranno questo parco nazionale uno dei luoghi più belli e ispiratori di tutta l’Albania."
      }
    },
  ]
}


const ctaTexts = {
  en: "Book Your Stay",
  al: "Rezervo Qendrimin",
  de: "Jetzt Buchen",
  fr: "Réservez Votre Séjour",
  it: "Prenota il Soggiorno"
};

// 73 Done - Functions correctly declared (function declarations)
// 75 Done - Arrays used with forEach method
// 77 Done - DOM elements accessed using document.getElementById
// 71 Done - Conditional logic implemented using if
// 78 Done - Text content modified via textContent
// 80 Done - Element attributes modified via JavaScript (img.src, img.alt)
function renderDestinations(array, type, lang="en") {
  const root = document.getElementById("destinations-root");
  if (!root) return;

  root.textContent = "";

  // 75 Done - Arrays used with forEach method
  // 76 Done - Objects used with properties accessed via dot notation
  array.forEach(dest => {
    const item = document.createElement("div");
    item.className = "destination-item";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = dest.image; // 80 Done - Element attributes modified via JavaScript
    img.alt = dest.title[lang]; // 80 Done - Element attributes modified via JavaScript
    item.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = dest.title[lang]; // 78 Done - Text content modified via textContent
    item.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = dest.description[lang]; // 78 Done - Text content modified via textContent
    item.appendChild(p);

    // 71 Done - Conditional logic implemented using if
    // 80 Done - Element attributes modified via JavaScript (a.href, a.target)
    if (type === "beaches" && dest.link) {
      const a = document.createElement("a");
      a.href = dest.link; // 80 Done - Element attributes modified via JavaScript
      a.target = "_blank"; // 80 Done - Element attributes modified via JavaScript
      a.className = "booking-cta modern-btn";

      const spanText = document.createElement("span");
      spanText.className = "cta-text";
      spanText.textContent = ctaTexts[lang] || ctaTexts["en"]; // 78 Done - Text content modified via textContent, 76 Done - Objects accessed via bracket notation

      const spanArrow = document.createElement("span");
      spanArrow.className = "cta-arrow";
      const arrowIcon = document.createElement("i");
      arrowIcon.className = "bi bi-arrow-right";
      spanArrow.appendChild(arrowIcon);

      a.appendChild(spanText);
      a.appendChild(spanArrow);
      item.appendChild(a);
    }

    root.appendChild(item);
  });

  window.location.hash = "#destinations-root";
}



// ========================================================
// REDIRECT SETUP (Navbar + Explore More buttons)
// ========================================================

// Sets up click handlers for destination buttons
// 73 Done - Functions correctly declared (function declarations)
// 92 Done - Simple data persisted using localStorage
function setupRedirect(selector, type) {
  // 77 Done - DOM elements accessed using document.querySelectorAll
  // 75 Done - Arrays used with forEach method
  document.querySelectorAll(selector).forEach(btn => {
    // 81 Done - Events handled with addEventListener
    // 74 Done - Arrow functions used for callback
    // 92 Done - Simple data persisted using localStorage
    btn.addEventListener("click", () => localStorage.setItem("destinationType", type));
  });
}

// Explore more buttons
setupRedirect(".beaches-btn", "beaches");
setupRedirect(".mountains-btn", "mountains");
setupRedirect(".rivers-btn", "rivers");
setupRedirect(".lakes-btn", "lakes");
setupRedirect(".countryside-btn", "countryside");
setupRedirect(".historicCities-btn", "historicCities");
setupRedirect(".nationalParks-btn", "nationalParks");

// ========================================================
// AUTO-RENDER CORRECT CATEGORY ON PAGE LOAD
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("destinations-root");
  if (!root) return;

  // Get saved destination type from localStorage, default to beaches (checklist 92)
  const type = localStorage.getItem("destinationType") || "beaches";
  renderDestinations(destinations[type], type);
});













document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("destinations-root");
  if (!root) return;

  const type = localStorage.getItem("destinationType") || "beaches"; //92 Done - localStorage
  const lang = localStorage.getItem("lang") || "en"; //92 Done - localStorage, takes the saved language
  renderDestinations(destinations[type], type, lang);

  // dropdown for languages
  const langLinks = document.querySelectorAll("#languagesDropdown li a"); //77 Done - querySelectorAll
  langLinks.forEach(link => {
    link.addEventListener("click", (e) => { //81 Done - addEventListener
      e.preventDefault(); //83 Done - preventDefault
      let lang;
      if(link.textContent.includes("Albanian")) lang = "al";
      else if(link.textContent.includes("English")) lang = "en";
      else if(link.textContent.includes("German")) lang = "de";
      else if(link.textContent.includes("French")) lang = "fr";
      else if(link.textContent.includes("Italian")) lang = "it";

      localStorage.setItem("lang", lang); //92 Done - localStorage

    // refresh the destinations with the new langauge
      renderDestinations(destinations[type], type, lang);
    });
  });
});
