import Vue, { ComponentOptions } from "vue";
import { AxiosInstance } from "axios";

export interface INuxtContext {
  app: {
    store: any;
    $axios: AxiosInstance;
  };
  $axios: AxiosInstance;
  params: { [key: string]: string };
  req: any;
  error: ({
    message,
    statusCode
  }: {
    message: string;
    statusCode: number;
  }) => void;
  redirect: (path: string, query?: any) => void;
}
