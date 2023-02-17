export enum ServiceVariant {
  DEFAULT = 'default',
  EASY = 'easy',
  MANAGER = 'manager',
  DIRECT = 'direct',
  VECTOR = 'vector',
}

export interface ITenantProfile {
  id: number;
  name: string;
  domain: string;
}
