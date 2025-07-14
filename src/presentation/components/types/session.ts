// types/session.ts

export interface Photographer {
    name: string;
    avatar?: string;
    initials: string;
  }
  
  export interface SessionBase {
    id: string;
    photographer: Photographer;
    date: string;
    time: string;
    location: string;
    notes?: string;
  }
  
  export interface UpcomingSession extends SessionBase {
    status: "upcoming" | "complete" | "cancelled";
  }
  
  export interface CompletedSession extends SessionBase {
    status: "complete";
  }
  
  export interface CancelledSession extends SessionBase {
    cancellationReason: string;
    cancelledBy: string;
    status: "cancelled";
  }
  
  export interface SessionRequest {
    id: string;
    surferId: string;
    date: string;
    location: string;
    notes: string;
    status: "pending" | "accepted" | "declined";
  }
  