export type EncryptBlock = {
  start: number;
  end: number;
}

export type ItemBase = {
  id: number;
  time: number;
  modifyTime: number;
  encrypt: boolean;
  encryptBlocks?: EncryptBlock[];
  showComments: boolean;
  visitors?: number;
  _show?: boolean;
};

export type ArticleItem = ItemBase & {
  title: string;
  len: number;
  tags: string[];
};

export type RecordItem = ItemBase & {
  images: { src: string; alt: string, id?: number }[];
};

export const KnowledgeTabsList = [
  { key: "book", name: "book" },
  { key: "film", name: "film" },
  { key: "game", name: "game" }
] as const;
export const KnowledgeTabs = KnowledgeTabsList.map(item => item.key);
export type KnowledgeTab = typeof KnowledgeTabs[number];

export type KnowledgeItem = ItemBase & {
  title: string;
  type: KnowledgeTab;
  link: string;
  cover: string;
  summary: string;
};

export type CommonItem = ArticleItem | RecordItem | KnowledgeItem;

export const HeaderTabs = [
  {
    name: "articles",
    url: "/articles",
  },
  {
    name: "records",
    url: "/records",
  },
  {
    name: "knowledges",
    url: "/knowledges",
  }
] as const;

export type HeaderTabUrl = typeof HeaderTabs[number]["url"];


export type DecryptFunction = (_s: string) => Promise<string>;
