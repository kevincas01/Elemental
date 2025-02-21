export interface File {
  title: string;
  path: string;
  language: string;
  content?: string;
}

export interface FileGroup {
  filegroup: string;
  files: File[];
}
