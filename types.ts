
export interface StudyTask {
  id: string;
  title: string;
  details: string;
  pdfPath?: string;
  simulator?: boolean;
  resources?: boolean;
  videoId?: string;
  externalLink?: string;
}

export interface StudyDay {
  day: number;
  date: string;
  title: string;
  examWeight: string;
  tasks: StudyTask[];
}
