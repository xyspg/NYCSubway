export interface Station {
    id: string;
    name: string;
    lines: string[];
    colors: string[];
    position: {
      x: number;
      y: number;
    };
    description?: string;
    borough?: string;
    link?: string;
  }