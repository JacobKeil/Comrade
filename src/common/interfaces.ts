import { Client, GatewayIntentBits } from 'discord.js';
import addDefaultRole from '../actions/addRole.js';

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessageReactions,
];

export class CustomClient extends Client {
  constructor() {
    super({ intents });
    this.once('ready', () => {
      console.log('Discord bot ready');
      // registerCommands(this);
    });

    this.on('guildMemberAdd', (member) => {
      addDefaultRole(member);
    });
  }
}
