import { ApplicationCommandOptionType } from 'discord.js';
import { CustomClient } from '../common/interfaces.js';

export function registerCommands(Comrade: CustomClient) {
  let commands: any;
  commands = Comrade.application.commands;

  // commands?.create({
  //   name: 'play',
  //   description: 'play song from search, link, or playlist.',
  //   options: [
  //     {
  //       name: 'search',
  //       description: 'search, link, or playlist link.',
  //       required: true,
  //       type: ApplicationCommandOptionType.String,
  //     },
  //   ],
  // });

  Comrade.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    await interaction.deferReply();

    const guild = Comrade.guilds.cache.get(interaction.guildId);
    const member = guild.members.cache.get(interaction.member.user.id);

    const { commandName, options } = interaction;
    const search = options.get('');
  });
}
