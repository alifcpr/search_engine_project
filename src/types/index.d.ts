interface TSuggestion {
  phrase: string;
}

export interface TIcon {
  Height: string;
  URL: string;
  Width: string;
}

export interface TSimpleRelatedTopic {
  FirstURL: string;
  Icon: Icon;
  Result: string;
  Text: string;
}

interface TRelatedTopic extends TSimpleRelatedTopic {
  Name?: string;
  Topics?: TSimpleRelatedTopic[];
}

export interface TDeveloper {
  name: string;
  type: string;
  url: string;
}

export interface TSrcOptions {
  directory: string;
  is_fanon: number;
  is_mediawiki: number;
  is_wikipedia: number;
  language: string;
  min_abstract_length: string;
  skip_abstract: number;
  skip_abstract_paren: number;
  skip_end: string;
  skip_icon: number;
  skip_image_name: number;
  skip_qr: string;
  source_skip: string;
  src_info: string;
}

export interface Maintainer {
  github: string;
}

export interface Meta {
  attribution: string | null;
  blockgroup: string | null;
  created_date: string | null;
  description: string;
  designer: string | null;
  dev_date: string | null;
  dev_milestone: string;
  developer: TDeveloper[];
  example_query: string;
  id: string;
  is_stackexchange: string | null;
  js_callback_name: string;
  live_date: string | null;
  maintainer: TMaintainer;
  name: string;
  perl_module: string;
  producer: string | null;
  production_state: string;
  repo: string;
  signal_from: string;
  src_domain: string;
  src_id: number;
  src_name: string;
  src_options: TSrcOptions;
  src_url: string | null;
  status: string;
  tab: string;
  topic: string[];
  unsafe: number;
}

export interface TSerachResultResponse {
  Abstract: string;
  AbstractSource: string;
  AbstractText: string;
  AbstractURL: string;
  Answer: string;
  AnswerType: string;
  Definition: string;
  DefinitionSource: string;
  DefinitionURL: string;
  Entity: string;
  Heading: string;
  Image: string;
  ImageHeight: number;
  ImageIsLogo: number;
  ImageWidth: number;
  Infobox: any[];
  Redirect: string;
  RelatedTopics: TRelatedTopic[];
  OfficialDomain: string;
  OfficialWebsite: string;
  Results: TSimpleRelatedTopic[];
  Type: string;
  meta: Meta;
}
