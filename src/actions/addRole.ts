import { GuildMember } from 'discord.js';

export default async function addDefaultRole(member: GuildMember) {
  const role = member.guild.roles.cache.get('1004535353232855150');
  member.roles.add(role);
}
