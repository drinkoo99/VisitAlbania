// ====================================
// ACTIVITIES ARRAY (ALL CATEGORIES)
// ====================================
const activities = {
  hiking: [
    {
      title: "Valbonë",
      image: "Images/Hiking/valbona-hiking.webp",
      description: "Hiking in Albania offers some of the most breathtaking routes in the Balkans. Valbona Valley impresses with towering peaks, glacial rivers, and traditional alpine villages, making it ideal for adventurous travelers. Theth National Park features the iconic Blue Eye, dramatic waterfalls, and untouched nature that creates a peaceful yet thrilling hiking experience. Meanwhile, the Llogara Pass delivers panoramic views over the Ionian Sea, where the fresh mountain breeze blends with the scent of pine trees. These trails are perfect for nature lovers, photographers, and anyone seeking unforgettable mountain adventures.",
    },
    {
      title: "Llogara",
      image: "Images/Hiking/hiking-bg.webp",
      description: "Llogara Pass provides an unforgettable hiking route combining fresh mountain air with spectacular views over the Ionian Sea. The dense pine forests, steep cliffs, and refreshing breezes create a perfect balance of challenge and relaxation. Hikers enjoy panoramic viewpoints, local wildlife, and unique landscapes that shift from rocky terrains to soft grassy paths. It’s an ideal destination for those who want both adventure and dramatic scenic beauty.",
    },
    {
      title: "Theth",
      image: "Images/Hiking/theth-hiking.webp",
      description: "Theth National Park offers one of Albania’s most iconic hiking experiences. Surrounded by towering alpine peaks, lush forests, and crystal clear rivers, Theth captivates every traveler with its untouched natural beauty. The famous “Blue Eye of Theth,” the Grunas Waterfall, and traditional stone houses create a magical atmosphere throughout the trails. Ideal for adventurers, photographers, and nature enthusiasts seeking peaceful yet breathtaking mountain scenery.",
    }
  ],
  paragliding: [
    {
      title: "Llogara Pass",
      image: "Images/Paragliding/llogara-paragliding.webp",
      description: "Llogara is the most famous paragliding spot in Albania, offering a thrilling launch point above the coastline. As you fly, you’ll witness dramatic cliffs, turquoise waters, and endless horizons. The mix of strong winds and high altitude creates perfect flying conditions for beginners and advanced paragliders alike. An unforgettable experience for anyone seeking adrenaline and breathtaking aerial views.",
    },
    {
      title: "Vlorë",
      image: "Images/Paragliding/vlore-paragliding.webp",
      description: "The Vlorë coastline provides a smooth and scenic flight above long sandy beaches, crystal clear waters, and charming bays stretching along the city. Paragliding here feels peaceful yet exhilarating, offering a bird’s eye view of some of Albania’s most beautiful shores. Perfect for travelers who want panoramic seaside landscapes.",
    },
    {
      title: "Dajti Mountain, Tirana",
      image: "Images/Paragliding/dajti-paragliding.webp",
      description: "Dajti Mountain offers a unique paragliding experience directly above Albania’s capital. As you glide through the sky, you’ll enjoy sweeping views of Tirana, dense forests, and distant mountains. The flight is calm, safe, and extremely scenic, making it an ideal adventure for beginners or those visiting the city.",
    }
  ],
  kayaking: [
    {
      title: "Vjosa River Kayaking",
      image: "Images/Kayaking/vjosa-kayaking.webp",
      description: "Experience the untamed beauty of the Vjosa River, Europe’s last wild and free-flowing river. Kayaking here takes you through pristine landscapes, dynamic waters, and untouched nature at every turn. This unforgettable adventure is perfect for eco-travelers, nature lovers, and thrill-seekers looking to connect with Albania’s most spectacular river.",
    },
    {
      title: "Shkodër Lake Kayaking",
      image: "Images/Kayaking/shkodra-kayaking.webp",
      description: "Paddle through the serene waters of Shkodra Lake, Albania’s largest lake, framed by majestic mountains and charming lakeside villages. Ideal for peaceful kayaking, birdwatching, and gentle exploration, this route is perfect for travelers seeking relaxation and a close connection with nature—without the challenge of rapids. Experience the tranquility and natural beauty of one of Albania’s most iconic waterways.",
    },
    {
      title: "Osum River Kayaking",
      image: "Images/Kayaking/osumi-kayaking.webp",
      description: "Discover the dramatic beauty of the Osumi River, carved through spectacular canyons and turquoise waters. Kayaking here immerses you in a world of towering cliffs, cascading waterfalls, and natural tunnels that create a truly breathtaking setting. Perfect for adventurous paddlers seeking excitement, unforgettable scenery, and a unique connection with Albania’s rugged landscapes",
    },
    {
      title: "Bistrica River Kayaking",
      image: "Images/Kayaking/bistrica-kayaking.webp",
      description: "Enjoy a peaceful kayaking experience on the Bistrica River, celebrated for its crystal clear waters and lush green surroundings. This gentle and scenic route is ideal for beginners, families, and travelers looking for a relaxing ride immersed in nature. Glide along the serene riverbanks and take in the tranquility of one of Albania’s most picturesque waterways",
    }
  ],
  diving: [
    {
      title: "Ksamil Diving",
      image: "Images/Diving/ksamil-diving.webp",
      description: "Dive into the bright blue waters of Ksamil, where vibrant marine habitats await both beginners and experienced divers. Explore colorful reefs, discover schools of tropical fish, and enjoy the calm waves and crystal-clear visibility. Local caves and rocky formations add intrigue to every dive, making Ksamil a perfect destination for anyone eager to experience Albania’s underwater wonders in a safe and stunning environment",
    },
    {
      title: "Jalë Diving",
      image: "Images/Diving/jala-diving.webp",
      description: "Experience the deep, blue waters of Jalë, renowned for its thriving marine life and exceptional visibility. Divers can navigate fascinating underwater landscapes, explore natural rock formations, swim alongside diverse fish species, and occasionally discover hidden caves. Jalë offers an ideal mix of adventure and beauty, perfect for those seeking an unforgettable diving experience along Albania’s Riviera",
    },
    {
      title: "Sazani Island Diving",
      image: "Images/Diving/sazani-island-diving.webp",
      description: "Discover the mysterious underwater world surrounding Sazan Island, home to rare marine species, vibrant reefs, and remnants of historic military structures. With excellent visibility and a sense of adventure around every corner, divers can explore tunnels, shipwrecks, and natural rock formations. This unique combination of history and nature makes Sazan Island one of Albania’s most fascinating and sought-after diving destinations.",
    },
    {
      title: "Karaburun Diving",
      image: "Images/Diving/karaburun-diving.webp",
      description: "Venture into the pristine waters of Karaburun Peninsula, where crystal-clear seas, diverse marine life, and dramatic underwater caves await. Explore labyrinthine tunnels, striking rock formations, and abundant aquatic species in a setting favored by experienced divers. The peninsula’s rugged coastline and natural underwater architecture create an unforgettable diving experience, making it a must-visit destination for those seeking both adventure and discovery.",
    }
  ],
  cycling: [
    {
      title: "Llogara-Himarë Cycling",
      image: "Images/Cycling/llogara-himare-cycling.webp",
      description: "Embark on a remarkable journey along the coastal route from Llogara Pass to Himarë. This ride takes you through winding mountain roads, small traditional villages, and quiet coves where the sea meets the shore. Cyclists will feel the fresh breeze and enjoy expansive views of the Albanian Riviera at every turn. The path combines challenging climbs with gentle descents, making it ideal for riders who enjoy both physical effort and breathtaking scenery.Along the way, stop to admire local flora, sample village specialties, or simply pause to take in the peaceful Mediterranean atmosphere.",
    },
    {
      title: "Pogradec Lakeside Cycling",
      image: "Images/Cycling/pogradec-cycling.webp",
      description: "Discover the scenic cycling paths surrounding Lake Ohrid in Pogradec, where tranquil waters meet green hills and quaint villages. This gentle route is perfect for beginners, families, or anyone looking to unwind while exploring nature. Ride along lakeside roads, pass small farms, and enjoy panoramic views that stretch across the lake and mountains. Along the way, you can observe local wildlife, relax in peaceful spots, and experience the slower pace of life in one of Albania’s most charming regions. The route offers a combination of calm waterside stretches and light inclines, making it enjoyable for all skill levels.",
    },
    {
      title: "Theth Mountain Cycling",
      image: "Images/Cycling/theth-cycling.webp",
      description: "Take on one of Albania’s most scenic and challenging cycling routes, connecting the alpine villages of Theth and Valbona. This journey winds through towering mountains, steep passes, and lush valleys that reveal the wild beauty of northern Albania. Experienced cyclists will be rewarded with stunning landscapes at every turn, from cascading waterfalls and crystal-clear rivers to traditional stone houses and green pastures. The route demands endurance, but offers unforgettable views and moments of serenity, making it a must-try for adventurers seeking both physical challenge and a deep connection with nature.",
    }
  ],
  camping: [
    {
      title: "Theth Camping",
      image: "Images/Camping/theth-camping.webp",
      description: "Camping in Theth offers a truly immersive mountain experience. Wake up to towering peaks, crisp mountain air, and the gentle sound of flowing rivers. Spend your days exploring alpine trails, discovering waterfalls, or simply relaxing in peaceful meadows. This destination is ideal for hikers, backpackers, and anyone seeking a deep connection with untouched nature. Nights under the stars in Theth are unforgettable, with a quiet serenity that recharges both body and spirit.",
    },
    {
      title: "Valbona Valley Camping",
      image: "Images/Camping/valbona-valley-camping.webp",
      description: "Valbonë provides a stunning camping experience amid wide green meadows, clear rivers, and calm mountain landscapes. Set up your tent and enjoy mornings filled with fresh air, birdsong, and views of untouched valleys. This area is perfect for those who want to hike, photograph, or simply relax surrounded by nature’s tranquility. Camping in Valbonë allows visitors to disconnect from busy life and fully appreciate the serenity of northern Albania’s alpine scenery.",
    },
    {
      title: "Gjipe Beach Camping",
      image: "Images/Camping/gjipe-beach.webp",
      description: "Gjipe Beach offers a magical camping setting where dramatic cliffs meet the turquoise sea. Spend your days kayaking, exploring the canyon, or sunbathing on the pebbled shore. Nights are quiet and peaceful, with the sound of waves lapping nearby and stars illuminating the sky. This unique location is ideal for adventurers, couples, or anyone looking for a memorable escape close to nature, blending the mountains and the sea in one extraordinary experience.",
    },
    {
      title: "Dajti Mountain Camping",
      image: "Images/Camping/tirana-camping.webp",
      description: "Just outside the capital, Tirana’s camping areas provide a perfect balance between comfort and nature. Surrounded by forests, hiking trails, and nearby lakes, campers can enjoy easy access to outdoor activities without traveling far from the city. Ideal for families, beginners, or urban travelers seeking a quick escape, these sites offer the chance to relax, explore, and reconnect with nature while still enjoying the convenience of nearby amenities.",
    }
  ]
};

// ===============================
// RENDER FUNCTION FOR ACTIVITIES
// ===============================
function renderActivities(array, type) {
  const root = document.getElementById("activities-root");
  if (!root) return;

  root.innerHTML = ""; // clear previous content

  array.forEach(act => {
    const item = document.createElement("div");
    item.className = "activity-item";

    const img = document.createElement("img");
    img.src = act.image;
    img.alt = act.title;
    item.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = act.title;
    item.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = act.description;
    item.appendChild(p);

    root.appendChild(item);
  });

  window.location.hash = "#activities-root";
}

// ===========================
// SAFE NAVIGATION HANDLERS
// ===========================
function setupActivityRedirect(className, activityType) {
  document.querySelectorAll(className).forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.setItem("activityType", activityType);
    });
  });
}

// Setup buttons
setupActivityRedirect(".hiking-btn", "hiking");
setupActivityRedirect(".paragliding-btn", "paragliding");
setupActivityRedirect(".kayaking-btn", "kayaking");
setupActivityRedirect(".diving-btn", "diving");
setupActivityRedirect(".cycling-btn", "cycling");
setupActivityRedirect(".camping-btn", "camping");

// ========================================================
// PAGE LOAD LOGIC → AUTO-RENDER CORRECT CATEGORY
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("activities-root");
  if (!root) return;

  const type = localStorage.getItem("activityType");

  if (type && activities[type]) {
    renderActivities(activities[type], type);
  } else {
    renderActivities(activities.hiking, "hiking"); // default fallback
  }
});