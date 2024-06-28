interface Props {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage: string ;
}

export interface Data {
  data: {
    articles: Props[];
  };
  title? : string
}

export interface DataAstro {
  articles: Props[];
  title? : string
}


export interface Datas {
  author: string,
  title: string,
  url: string,
  publishedAt: Date,
}

export interface Propsing {
totalResult: number
articles: Datas[]
}
