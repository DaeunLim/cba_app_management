export type StringSetter = (newLabel: string | ((prevLabel: string) => string)) => void;
export type BooleanSetter = (newValue: boolean | ((prevValue: boolean) => boolean)) => void;

export type Paging = {
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
};

export type NavInfo = {
  page: string;
  history: string[];
};

export enum Page {
  login = "management/login",
  home = "management/home",
  maintenance = "management/maintenance",
  notLogin = "management/not-login",
}

export type RadioItem = {
  value: number;
  text: string;
}
