export interface Props {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage: string ;
}

interface cat {

}
export interface PropsNews {
  author: string;
  content: string;
  description: string;
  category : string[]
  published: Date;
  title: string;
  url: string;
  image: string ;
}

export interface Data {
  data: {
    articles: Props[];
  };
  title? : string
}
export interface NewsApi {
  data: {
    news: PropsNews[];
  };
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
