export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Alle drei Einträge zeigen echte Projektfotos aus dem Betrieb. Zu keinem davon
// liegt eine Vorher-Aufnahme derselben Baustelle vor, deshalb rendert jede Karte
// als einzelnes Bild statt als Vorher-Nachher-Slider.
export const referenzen: Referenz[] = [
  {
    id: "neuanlage-gabionenwand",
    title: "Neuanlage mit Gabionenwand und Rollrasen",
    ort: "Leimen",
    leistung: "Gartenneugestaltung",
    text: "Der Garten wurde komplett neu aufgebaut: Gabionenwand als Sichtschutz zur Straße, dahinter eine wassergebundene Kiesfläche als Stellplatz. Rundherum frisch verlegter Rollrasen, Beete mit sauber gesetzter Kante und ein Doppelstabmattenzaun an der Grundstücksgrenze.",
    afterImage: "/assets/acquisition/projekte/garten-mit-rasen-kies-und-gabionenwand-01.jpg",
    alt: "Neu angelegter Garten mit Rollrasen, Kiesfläche, Gabionenwand und Doppelstabmattenzaun"
  },
  {
    id: "blockstufentreppe-hanggarten",
    title: "Blockstufentreppe am Hang",
    ort: "Leimen",
    leistung: "Pflasterarbeiten",
    text: "Ein Höhenunterschied am Haus wurde mit Granit-Blockstufen und einem geschwungenen Pflasterweg erschlossen. Die Böschung daneben ist mit dunklem Ziersplitt abgedeckt, die Randsteine fassen Weg und Splittfläche voneinander ab.",
    afterImage: "/assets/acquisition/details/steintreppe-und-pflasterweg-01.jpg",
    alt: "Granit-Blockstufentreppe mit geschwungenem Pflasterweg und dunklem Ziersplitt"
  },
  {
    id: "rasenflaeche-wohnanlage",
    title: "Rasenfläche einer Wohnanlage",
    ort: "Leimen",
    leistung: "Gartenpflege",
    text: "Pflegeeinsatz auf der Grünfläche einer Wohnanlage in Hanglage. Der Rasen wurde gemäht, die Heckenreihe am oberen Rand in Form geschnitten und das Schnittgut im selben Zug abgefahren.",
    afterImage: "/assets/acquisition/projekte/gartenanlage-mit-gestreiftem-rasen-01.jpg",
    alt: "Frisch gemähte Rasenfläche mit Schnittstreifen vor einer Heckenreihe an einer Wohnanlage"
  }
];
