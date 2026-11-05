import type { PhotoKey } from "./photos";
import sq from "@/i18n/places/sq.json";
import de from "@/i18n/places/de.json";
import fr from "@/i18n/places/fr.json";
import it from "@/i18n/places/it.json";

export type RegionKey = "north" | "centre" | "south-inland" | "riviera";
export type TypeKey = "beaches" | "mountains" | "rivers" | "lakes" | "countryside" | "historic" | "parks";
export type ActivityKey = "hiking" | "paragliding" | "kayaking" | "diving" | "cycling" | "camping";
export type Locale = "en" | "sq" | "de" | "fr" | "it";

export interface Destination {
  slug: string;
  name: string;
  region: RegionKey;
  type: TypeKey;
  image: PhotoKey | null;
  /** The English source text. Translations live in src/i18n/places/<locale>.json. */
  summary: Partial<Record<Locale, string>>;
  body: string;
  goodFor: ActivityKey[];
  nearby: string[];
  /** true for places added for the region chooser and activities, not part of the original 31 */
  extra?: boolean;
}

export const REGIONS: RegionKey[] = ["north", "centre", "south-inland", "riviera"];
export const TYPES: TypeKey[] = ["beaches", "mountains", "rivers", "lakes", "countryside", "historic", "parks"];

function d(
  slug: string,
  name: string,
  region: RegionKey,
  type: TypeKey,
  image: PhotoKey | null,
  summary: string,
  body: string,
  goodFor: ActivityKey[] = [],
  nearby: string[] = [],
  extra = false,
): Destination {
  return { slug, name, region, type, image, summary: { en: summary }, body, goodFor, nearby, extra };
}

export const destinations: Destination[] = [
  // Riviera beaches
  d("ksamil", "Ksamil", "riviera", "beaches", "ksamil",
    "Clear water and small islets off the southern tip of the Riviera.",
    "Ksamil is a village on the coast south of Sarandë, looking out over small islets in the Ionian. It sits close to the ruins and lagoon of Butrint.",
    [], ["butrint", "mirror-beach", "blue-eye"]),
  d("gjipe", "Gjipe", "riviera", "beaches", "gjipe",
    "A secluded beach where a canyon meets the Ionian, between high cliffs.",
    "Gjipe lies between Dhërmi and Himarë, at the mouth of a canyon that runs down to the sea. It is reached on foot or by boat, and there are no roads onto the beach itself.",
    ["camping"], ["dhermi", "jale", "himare"]),
  d("jale", "Jalë", "riviera", "beaches", "jale",
    "A small bay on the Ionian coast, between Dhërmi and Himarë.",
    "Jalë is a bay on the Riviera below the coast road, with a curved beach.",
    [], ["gjipe", "himare", "dhermi"]),
  d("mirror-beach", "Mirror Beach", "riviera", "beaches", "mirrorbeach",
    "A small pebble cove below pale cliffs, between Sarandë and Ksamil.",
    "Mirror Beach, known in Albanian as Plazhi i Pasqyrave, is a pebble cove on the Ionian coast between Sarandë and Ksamil, with pale limestone cliffs at its southern end.",
    [], ["ksamil", "butrint", "blue-eye"]),
  d("borsh", "Borsh", "riviera", "beaches", "borsh",
    "A long beach below a village and olive terraces on the Riviera.",
    "Borsh is a village above the coast road between Himarë and Sarandë, with olive groves on the slopes and a long beach below.",
    [], ["himare", "jale"]),
  d("dhermi", "Dhërmi", "riviera", "beaches", "dhermi",
    "A hillside village above a beach, south of Llogara Pass.",
    "Dhërmi lies on the coast road south of Palasë, with an old village on the slope and beaches below.",
    [], ["llogara-pass", "gjipe", "jale"]),
  // Mountains
  d("korab", "Korab", "north", "mountains", "korab",
    "Albania's highest mountain, on the border with North Macedonia.",
    "Mount Korab rises on the eastern border, inside the Korab-Koritnik Nature Park.",
    ["hiking"], ["korab-koritnik-nature-park"]),
  d("accursed-mountains", "Accursed Mountains", "north", "mountains", "accursed",
    "The limestone range of the Albanian Alps, above Theth and Valbona.",
    "The Accursed Mountains, also called the Albanian Alps, form the high limestone range of the far north, with Theth and Valbona in their valleys.",
    ["hiking"], ["theth", "valbona", "lepushe"]),
  d("mount-tomorr", "Mount Tomorr", "south-inland", "mountains", "tomorr",
    "A long mountain ridge east of Berat.",
    "Mount Tomorr is the ridge that stands over the valley east of Berat.",
    ["hiking"], ["berat", "osum-river"]),
  // Rivers
  d("drin-river", "Drin River", "north", "rivers", "drin",
    "A river that runs through the hills of the north to the Adriatic.",
    "The Drin flows through northern Albania, through gorges and reservoirs, towards the Adriatic near Shkodër and Lezhë.",
    ["kayaking"], ["lake-shkodra", "buna-river"]),
  d("buna-river", "Buna River", "north", "rivers", "buna",
    "The short river that carries Lake Shkodra to the Adriatic.",
    "The Buna leaves Lake Shkodra near the city of Shkodër and runs along the border to the Adriatic.",
    [], ["lake-shkodra", "drin-river"]),
  d("shala-river", "Shala River", "north", "rivers", "shala",
    "A clear mountain river in the valleys below Theth.",
    "The Shala runs through a narrow valley in the north, below the village of Theth.",
    [], ["theth", "accursed-mountains"]),
  d("vjosa-river", "Vjosa River", "south-inland", "rivers", "vjosa",
    "A free-flowing river that crosses the south towards the Adriatic.",
    "The Vjosa rises in Greece, enters Albania in the south-east and runs through valleys and gorges to the Adriatic north of Vlorë.",
    ["kayaking"], ["gjirokaster", "osum-river"]),
  // Lakes
  d("lake-ohrid", "Lake Ohrid", "south-inland", "lakes", "ohrid",
    "A deep lake on the border with North Macedonia, beside Pogradec.",
    "Lake Ohrid is shared with North Macedonia. On the Albanian shore is the town of Pogradec.",
    [], ["pogradec", "lake-prespa"]),
  d("lake-shkodra", "Lake Shkodra", "north", "lakes", "shkodra",
    "A large lake shared with Montenegro, beside the city of Shkodër.",
    "Lake Shkodra lies on the border with Montenegro, with the city of Shkodër near its south-eastern end.",
    ["cycling"], ["buna-river", "drin-river"]),
  d("lake-prespa", "Lake Prespa", "south-inland", "lakes", "prespa",
    "A high lake where Albania, Greece and North Macedonia meet.",
    "Lake Prespa sits in the south-east, on the borders with Greece and North Macedonia.",
    ["kayaking"], ["lake-ohrid", "dardhe"]),
  // Countryside
  d("theth", "Theth", "north", "countryside", "theth",
    "A mountain village under the Albanian Alps, with a small stone church and trails up the valley.",
    "Theth is a village in a high valley of the Albanian Alps, inside the Alps of Albania National Park. Stone houses are spread across the valley floor, and a footpath crosses the pass to Valbona.",
    ["hiking", "cycling", "camping"], ["valbona", "shala-river", "alps-of-albania-national-park"]),
  d("valbona", "Valbona", "north", "countryside", "valbona",
    "Limestone peaks and a river valley in the Albanian Alps.",
    "Valbona is a valley in the far north, inside the Alps of Albania National Park, with a river running below limestone peaks.",
    ["hiking"], ["theth", "alps-of-albania-national-park", "accursed-mountains"]),
  d("lepushe", "Lepushë", "north", "countryside", "lepushe",
    "A high village in the Kelmend area of the Albanian Alps.",
    "Lepushë is a mountain village in the far north, near the border with Montenegro.",
    ["hiking"], ["accursed-mountains", "theth"]),
  d("dardhe", "Dardhë", "south-inland", "countryside", "dardhe",
    "A mountain village of stone houses in the hills near Korçë.",
    "Dardhë is a village in the mountains of the south-east, near the city of Korçë.",
    ["hiking"], ["lake-prespa"]),
  // Historic
  d("berat", "Berat", "south-inland", "historic", "berat",
    "Its old quarters of white houses and windows face each other across the Osum river.",
    "Berat is a town in the south of Albania whose historic centre is UNESCO-listed. The Mangalem and Gorica quarters face each other across the Osum, and a castle quarter sits on the hill above.",
    [], ["osum-river", "mount-tomorr", "apollonia"]),
  d("gjirokaster", "Gjirokastër", "south-inland", "historic", "gjirokaster",
    "A hillside old town of stone houses and stone-slab roofs below its castle.",
    "Gjirokastër is a town on the slope of a valley in the south, whose historic centre is UNESCO-listed. It is built of grey stone, with a castle above the old bazaar.",
    [], ["blue-eye", "vjosa-river", "butrint"]),
  d("kruje", "Krujë", "centre", "historic", "kruja",
    "A castle town above the plain, with an old bazaar street below the walls.",
    "Krujë sits on a mountainside north of Tirana. A cobbled bazaar street leads up to the castle.",
    [], ["tirana", "mount-dajti"]),
  d("butrint", "Butrint", "riviera", "historic", "butrint",
    "Greek, Roman and Venetian ruins inside a national park near the southern border.",
    "Butrint is an archaeological site on a peninsula near the Greek border, with ruins from several periods set in woodland beside a lagoon.",
    [], ["ksamil", "butrint-national-park", "blue-eye"]),
  d("apollonia", "Apollonia", "centre", "historic", "apollonia",
    "The ruins of an ancient city on a hill near Fier.",
    "Apollonia is an archaeological site on a hill above the plain near Fier.",
    [], ["divjake-karavasta-national-park", "berat"]),
  d("lezhe", "Lezhë", "north", "historic", "lezhe",
    "A town near the mouth of the Drin, with a castle above it.",
    "Lezhë is a town in the north-west, close to the coast, with a castle on the hill behind it.",
    [], ["drin-river", "kruje"]),
  // Parks
  d("alps-of-albania-national-park", "Alps of Albania National Park", "north", "parks", "theth",
    "A national park in the Albanian Alps that includes the valleys of Theth and Valbona.",
    "The Alps of Albania National Park was established in January 2022, bringing the former Theth and Valbona Valley national parks into one protected area.",
    ["hiking", "camping"], ["theth", "valbona", "accursed-mountains"]),
  d("butrint-national-park", "Butrint National Park", "riviera", "parks", "butrint",
    "Woodland, lagoon and the ancient site of Butrint near the southern border.",
    "Butrint National Park surrounds the archaeological site of Butrint, with woodland, wetland and a lagoon.",
    [], ["butrint", "ksamil"]),
  d("korab-koritnik-nature-park", "Korab-Koritnik Nature Park", "north", "parks", "korabkoritnik",
    "A nature park on the eastern border, around Mount Korab.",
    "Korab-Koritnik Nature Park covers the high mountains along the eastern border, including Mount Korab.",
    ["hiking"], ["korab"]),
  d("divjake-karavasta-national-park", "Divjakë-Karavasta National Park", "centre", "parks", "divjake",
    "Lagoons, pine forest and wetland on the central coast.",
    "Divjakë-Karavasta National Park lies on the Adriatic coast in the centre of the country, around the Karavasta lagoon.",
    [], ["apollonia"]),

  // Extra places for the region chooser and activities
  d("tirana", "Tirana", "centre", "historic", "tirana",
    "The capital, centred on Skanderbeg Square.",
    "Tirana is the capital of Albania. Its centre is Skanderbeg Square, with Mount Dajti to the east.",
    [], ["mount-dajti", "kruje"], true),
  d("mount-dajti", "Mount Dajti", "centre", "mountains", "dajti",
    "The mountain on the eastern edge of Tirana.",
    "Mount Dajti rises directly east of Tirana, inside a national park.",
    ["paragliding", "camping"], ["tirana", "kruje"], true),
  d("llogara-pass", "Llogara Pass", "riviera", "mountains", "llogara",
    "The mountain pass on the road from Vlorë down to the Riviera.",
    "The mountain road from Vlorë climbs over Llogara Pass and descends to the Ionian coast near Palasë. Since July 2024, the Llogara Tunnel has also linked Dukat and Palasë.",
    ["hiking", "paragliding", "cycling"], ["dhermi", "vlore", "karaburun"], true),
  d("blue-eye", "Blue Eye (Syri i Kaltër)", "riviera", "rivers", "blueeye",
    "A deep spring of clear blue water in the hills inland from Sarandë.",
    "The Blue Eye is a spring that feeds the Bistrica river, in woodland between Sarandë and Gjirokastër.",
    [], ["bistrica-river", "gjirokaster", "ksamil"], true),
  d("osum-river", "Osum River", "south-inland", "rivers", "osum",
    "The river that runs through canyons and through the centre of Berat.",
    "The Osum flows through canyons in the south and through the town of Berat.",
    ["kayaking"], ["berat", "mount-tomorr"], true),
  d("bistrica-river", "Bistrica River", "riviera", "rivers", "bistrica",
    "A short river that flows from the Blue Eye towards the Ionian.",
    "The Bistrica rises at the Blue Eye spring and runs about 25 km towards the Ionian south of Sarandë.",
    [], ["blue-eye", "ksamil"], true),
  d("karaburun", "Karaburun", "riviera", "parks", "karaburun",
    "A mountainous peninsula across the bay from Vlorë.",
    "Karaburun is a peninsula on the western side of the Bay of Vlorë, part of the Karaburun-Sazan National Marine Park.",
    ["diving"], ["sazan-island", "vlore"], true),
  d("sazan-island", "Sazan Island", "riviera", "parks", "sazan",
    "An island at the mouth of the Bay of Vlorë.",
    "Sazan is an island off the tip of the Karaburun peninsula, at the entrance to the Bay of Vlorë. Access to the island can be restricted, so check with a licensed operator.",
    ["diving"], ["karaburun", "vlore"], true),
  d("vlore", "Vlorë", "riviera", "beaches", "vlore",
    "A coastal city on its bay, near where the Adriatic meets the Ionian.",
    "Vlorë is a city on the Bay of Vlorë, near where the Adriatic meets the Ionian.",
    [], ["karaburun", "llogara-pass", "sazan-island"], true),
  d("pogradec", "Pogradec", "south-inland", "lakes", "pogradec",
    "A lakeside town on the Albanian shore of Lake Ohrid.",
    "Pogradec is a town on the southern shore of Lake Ohrid.",
    [], ["lake-ohrid"], true),
  d("himare", "Himarë", "riviera", "beaches", "himare",
    "A coastal town on the Riviera, with an old village on the hill above.",
    "Himarë is a town on the Ionian coast, between Dhërmi and Borsh, with an old castle village above it.",
    [], ["gjipe", "jale", "borsh"], true),
];

export const bySlug: Record<string, Destination> = Object.fromEntries(destinations.map((x) => [x.slug, x]));

type PlaceText = { name?: string; summary: string; body: string };
const placeText: Partial<Record<string, Record<string, PlaceText>>> = { sq, de, fr, it };

export function getName(dest: Destination, lng: string): string {
  return placeText[lng]?.[dest.slug]?.name ?? dest.name;
}

export function getSummary(dest: Destination, lng: string): string {
  return placeText[lng]?.[dest.slug]?.summary ?? dest.summary.en ?? "";
}

export function getBody(dest: Destination, lng: string): string {
  return placeText[lng]?.[dest.slug]?.body ?? dest.body;
}

export function isRegion(v: unknown): v is RegionKey {
  return typeof v === "string" && (REGIONS as string[]).includes(v);
}
export function isType(v: unknown): v is TypeKey {
  return typeof v === "string" && (TYPES as string[]).includes(v);
}

export function filterDestinations(list: Destination[], region?: RegionKey, type?: TypeKey) {
  return list.filter((x) => (!region || x.region === region) && (!type || x.type === type));
}
