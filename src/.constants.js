module.exports = Object.freeze({
  TOKEN: '1703599138:AAFr_SIKvK4JZ1ZdrMoM6l3ritmVwrp5XE0',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AL_SCkhRSPUeUk9PVA',
  OTHER_GDRIVE_DIR_IDS: ['0AF9q38Z-NgpSUk9PVA'], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [667279640, 730545568],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001259383751, -1001278398085],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@datahosterbot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "https://dl.sledgercloud.cf/0:/",
  TELEGRAPH_TOKEN: '', // Telegraph token, if you want to show search results in telegra.ph else keep it blank,
  STOP_DUPLICATE_MIRRORS: false // To stop duplicate mirror
});
