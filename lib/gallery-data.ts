export interface GalleryItem {
  src: string;
  alt: string;
}

// Der Fotopool des Betriebs enthält nur drei verschiedene Aufnahmen, und die
// stehen alle in lib/referenzen-data.ts. Leer lassen ist hier ehrlicher als sie
// ein zweites Mal zu zeigen: Galerie.tsx fällt dann auf die Platzhalter zurück,
// bis eigene Baustellen- und Teamfotos nachgeliefert werden.
export const galleryItems: GalleryItem[] = [];
