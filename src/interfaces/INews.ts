export interface INews {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

export interface IResult {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: ILaunch[];
  events: any[];
}

export interface ILaunch {
  launch_id: string;
  provider: string;
}
