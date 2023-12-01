export interface HighlightItem {
  title: string;
  description: string;
  image: string;
}

export interface CategoryItem {
  name: '',
}

export interface ActivitiesItem {
  name: string;
}
export interface ActivityItem {
  name: string;
  description: string;
  image: string;
  activities: ActivitiesItem[];
}

export interface LoadingState {
  isLoading: boolean;
}