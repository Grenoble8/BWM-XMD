const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaW+jSBD9K6v+as+4ucFSpOUGH4mxsR2yWu000Bw2l6HBxqP89xVxool258hKy6dWd/PqVdWr119BUaYNnuMeTL+Cqk47RPCwJH2FwRQobRThGoxBiAgCU8CaeztL6eUWI382l/Qlw8meCc1cx/fSQdMuKHcpjHSPie/A8xhUrZ+lwU8A9Ukv6cusR4+8p83lXhVbR2YM62lReikJK7LDVrhckbWzvAPPAyJK67SI9SrBOa5RNsf9CqX1x+jLVmIz6111b0weVzP5qHVt7JKJt0tV3RQTrmkfl5Eq7SXr/DH6mDMnfBc/wUu9mKeFyrNuEgZ2kz7M8b25O8Zxk+P900Ptwhv9Jo0LHNohLkhK+g/X3Vzx7tnp1W0Y83XSV2bnUD4Md4snSs0K+BQGW0sXE/Oqex8jvjAi6WA+oujozdTF4dyZBDe8O8vKFbzutPlxrZ3M+alQHec98VX9ppXjf6n7SWd3Fj7ue9qO6ovjb8tyWUzu9S2v9VS+uZ6dVj9zotI9fpB+NzmiJR3p1jwzAlhkszlXGBtqZCpuyhrY5y58bVxXDxb9ru6ItPXPWHJWtZ7g8BAw166YRFlHZT51MbTjOR1Z9mzVbWdbaAiYd4Qc7wwajtZVsDUUIdsZFT7xPdb89SiG65YOsmUkKC7aJ87dS0ZH3NshmFLPY1DjOG1IjUhaFi97FD0GKOw2OKgxeSkvOEz4Jzm9P625dOEJ1OwBKTx2KU1/9Heh32pmHBbWQVYXV+cOjEFVlwFuGhxaaUPKul/ipkExbsD0j5dODUnXOC8JnqXhkCmUOI6FEhSF35vP5wSRBlXV5wITMAZRXeZLDKakbvEYvNxnGCiKlKZSkggZihF5VVJYUdEVjhVYnmaGDPNbTDfNcUNQXoEpJTCiKAosxT6P/xcamijqgs5qqiSKug4FihEVWWJoSVYoASrwlzT+HIMCX8hNxUPtGWoMorRuyLZoq6xE4ZvE3w5REJRtQTZ9EajDAtdg+m4bE5IWcTMk1haoDpK0w+qQB5hGKGvw8xiEuEsDPOABi1I4Fy1sF6K/FH5G36vnXXce+peUxe1KyHMMJ0n+p4gXg08spMRPPs2ynxDn+2wU+CigBDCU42Ygwz8/1LMkWG4jdrF4qZoE89TpPhm5m3Z7vDQvmrwJEdc4fKuyj4JjW7nlERc/wT2uH+SnpqJamDAipJhr17HIu0JPt9/h3gQOpl+/mbZahgOe7hmzJb1XwNCtIc4/xTCl/y2HAg13wZcv7nz5m+3K2sPa/vJlCPfaiwEoxASlWQOmQLUfKbGKdf0BJZkPTVO2Y1mNZfCtd2+OcJu41egi9JV38JaerQq6aog4ndBupq9ygSyLqNf5iZMEsnpd3n0HBEyBs4snp3CP/NplWZ2fyTLrHUaxhPdEfyo3PM1fDnbtx4kRFRWUVLw6sFemaeRRu9Vyv9bWUKmwd+oqEsqqXjlU3mjx3RDtpqH3wdadM8ocnj46OrnK7GLtTfawlCgDIag4iTGrNvE1yc/avlIPOw9veJGI1qo3rkbF8MnFg9Zsz2f2Pb1b7HzxqDCscohvXvXildnrG5W+ushNcVGKXyz/tRu/6Nk36cPn8TuE1yfkB/JS3EmDxdPepjVTlduLnERW2UlHbq1xreDOGDF56KD9KMvNFTwPM11liERlnYMpaHIfgTHIUEPkb6P7PTeAY5D3clVtCCJvEw/k4ZvDFDz/DT3kYwoaCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

