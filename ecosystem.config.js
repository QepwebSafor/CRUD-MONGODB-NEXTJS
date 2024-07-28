module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: 'npm start',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'qepweb',
      host : 'kikalequa.com.es',
      ref  : 'origin/main',
      repo : 'git@github.com:QepwebSafor/CRUD-MONGODB-NEXTJS.git',
      path : '/home/qepweb',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options0': 'FowardAgent=yes'
    }
  }
};
