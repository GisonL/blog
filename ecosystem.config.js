module.exports = {
  apps: [
    {
      name: 'blog',
      script: './server/_server.js',
      cwd: '/data/www/website/blog/current',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: '134.175.60.103',
      ref: 'origin/master',
      repo: 'https://github.com/GisonL/blog.git',
      path: '/data/www/website/blog',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js'
    }
  }
}
