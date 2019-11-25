module.exports = {
  name: 'hackernews-data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/hackernews-data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
