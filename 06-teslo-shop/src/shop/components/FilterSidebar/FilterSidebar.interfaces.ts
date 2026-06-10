export interface IFilterSidebarVM {
  sizes: string[];
}

export interface IFilterSidebarProps extends IFilterSidebarVM {
  onSizeChange: (size: string) => void;
}
