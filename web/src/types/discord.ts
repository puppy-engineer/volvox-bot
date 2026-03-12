import type { DashboardRole } from '@/lib/dashboard-roles';

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface BotGuild {
  id: string;
  name: string;
  icon: string | null;
}

/** Dashboard role for this guild, as returned by GET /api/guilds. */
export type GuildAccessRole = DashboardRole;

export interface MutualGuild extends DiscordGuild {
  botPresent: boolean;
  /** User's dashboard role in this guild; present when loaded from GET /api/guilds */
  access?: GuildAccessRole;
}

export interface DiscordChannel {
  id: string;
  name: string;
  type: number;
}

export interface DiscordRole {
  id: string;
  name: string;
  color: number;
}
