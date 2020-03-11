module.exports = {
  prompts() {
    return [
      {
        name: 'projectName',
        message: 'What is the name of the new project?',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'projectTitle',
        message: 'What is the title of the new project?',
        default: this.outFolder,
      },
      {
        name: 'projectDescription',
        message: 'How would you describe the new project?',
        default: this.outFolder
      },
      {
        name: 'username',
        message: 'What is your GitHub username?',
        default: this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'displayname',
        message: 'What is your GitHub display name?',
        default: this.gitUser.username,
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
