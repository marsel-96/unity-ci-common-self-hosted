# Unity CI Self Hosted

# Package
```
npm run package'
```

# Test Script Locally

### Install ts-node
```
npm install -g ts-node typescript '@types/node'
```

### Set environment variables

```
$env:_PLATFORM = 'windows'
$env:UNITY_PROJECT_PATH = 'C:\Users\marco\Desktop\actions-runner\_work\test-game-ci\test-game-ci'
$env:UNITY_VERSION = '2022.3.43f1'
$env:UNITY_BUILD_NAME = 'Cancri'
$env:UNITY_BUILD_METHOD = 'BuildCommand.PerformBuild'
$env:UNITY_BUILD_TARGET = 'StandaloneWindows64'
$env:UNITY_BUILD_VERSION = '0.1.77'
$env:UNITY_TEST_ARTIFACTS_PATH = 'artifacts'
$env:UNITY_TEST_PLATFORMS = 'editmode'
```

### Run index.ts

```
ts-node src/index.ts
```