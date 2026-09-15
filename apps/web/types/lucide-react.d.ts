declare module "lucide-react" {
  import type { ComponentType, CSSProperties, SVGProps } from "react";
  export type LucideIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number; color?: string; strokeWidth?: number; style?: CSSProperties }>;
  export const ArrowDownLeft: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Copy: LucideIcon;
  export const Home: LucideIcon;
  export const Landmark: LucideIcon;
  export const LifeBuoy: LucideIcon;
  export const Send: LucideIcon;
  export const Settings: LucideIcon;
  export const Users: LucideIcon;
  export const WalletCards: LucideIcon;
}