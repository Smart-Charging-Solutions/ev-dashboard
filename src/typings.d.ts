import { Observable } from "rxjs";

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@ngx-translate/cors' {
  interface TranslateService {
    get(key: string | string[], interpolateParams?: Object | undefined): Observable<any>;
    instant(key: string | string[], interpolateParams?: Object | undefined): string;
    getBrowserLang(): string;
    use(lang: string): Observable<any>;
  }
}

