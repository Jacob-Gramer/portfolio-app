import { SearchContent } from "interfaces/Markdown";
import * as JsSearch from "js-search";
import searchIndex from "../../content/search/index.json";

class ContentIndexer {
  private static instance: ContentIndexer;

  private searchEngine!: JsSearch.Search;

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public search(query: string): SearchContent[] {
    const results = this.searchEngine.search(query);
    return results as SearchContent[];
  }

  constructor() {
    this.buildIndex();
  }

  private buildIndex() {
    this.searchEngine = new JsSearch.Search("slug");
    this.searchEngine.addIndex("title");
    this.searchEngine.addIndex("description");
    this.searchEngine.addDocuments(searchIndex);
  }
}

export default ContentIndexer.Instance;