export interface TocItem {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
}

interface HeadingLike {
  depth: number;
  slug: string;
  text: string;
}

export function buildTocItems(headings: HeadingLike[]): TocItem[] {
  const tocItems: TocItem[] = [];
  let currentSection: TocItem | null = null;

  for (const heading of headings) {
    if (heading.depth === 2) {
      currentSection = {
        href: `#${heading.slug}`,
        label: heading.text,
        children: [],
      };
      tocItems.push(currentSection);
      continue;
    }

    if (heading.depth === 3 && currentSection) {
      currentSection.children?.push({
        href: `#${heading.slug}`,
        label: heading.text,
      });
    }
  }

  return tocItems;
}
