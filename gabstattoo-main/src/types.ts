export interface StickerStamp {
  id: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'skull' | 'barbed' | 'tattoo_fl' | 'red_cross' | 'tribal_star' | 'stamp_logo';
  text?: string;
  color?: string;
}

export interface TattooProject {
  id: string;
  title: string;
  style: 'Blackwork' | 'Cyber Tribal' | 'Autoral Stencil';
  image: string;
  size: string;
  placement: string;
  description: string;
  year: string;
}

export interface StreetwearItem {
  id: string;
  name: string;
  collaborator: string;
  image: string;
  year: string;
  description: string;
  materials: string;
}


