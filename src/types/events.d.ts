export interface IEvent {
  title: string;
  website: string;
  eventImage: string;
  ticketPrice: number;
  totalTickets: number;
  venue: string;
  description: string;
  availableTickets?: number;
  createdAt?: Date;
  updatedAt?: Date;
  owner: String;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
