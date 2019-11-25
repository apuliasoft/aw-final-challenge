module.exports = {
  name: 'hackernews',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hackernews',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
