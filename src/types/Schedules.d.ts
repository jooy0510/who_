export interface ScheduleItem {
  날짜: ScheduleProperty;
  태그: ScheduleProperty;
  이름: ScheduleProperty;
  key: string;
}

export interface ScheduleProperty {
  id: string;
  type: 'date' | 'multi_select' | 'title';

  date?: object;
  multi_select?: object;
  title?: object;
}
