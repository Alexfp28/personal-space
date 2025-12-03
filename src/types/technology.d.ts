
import * as simpleIcons from 'simple-icons';
type simple = keyof typeof simpleIcons;

export interface Technology {
  name: string;
  icon: simple;
  category: "backend" | "frontend" | "database" | "tools" | "cloud";
  proficiency: number;
  color?: string;
}
