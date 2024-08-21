# Minecraft Bedrock NPM Updater

![Icon](https://github.com/CaptainCooky/mc-npm-updater/blob/main/src/assets/icon.png)

## Overview

The **Minecraft Bedrock NPM Updater** is a Visual Studio Code extension designed to streamline the process of managing Node.js packages for Minecraft Bedrock scripting API development. With this tool, developers can automatically update their Node modules, ensuring they always have the latest versions across their projects.

## Features

- **Auto-Update Modules**: Automatically update your specified Minecraft-related Node modules when you start VSCode.
- **Customizable Scheduling**: Set your updates to run daily, weekly, or monthly based on your preferences.
- **Manual Update Command**: Trigger an update for your Node modules at any time with a simple command.
- **User-Defined Modules**: Add your own custom Node modules to the update list, ensuring all your dependencies stay current.
- **Visual Studio Code Settings Integration**: Easily configure your update settings through the VSCode settings GUI or the `settings.json` file.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/YourUsername/minecraft-bedrock-npm-updater.git
   ```
2. Navigate to the project directory:
   ```bash
   cd minecraft-bedrock-npm-updater
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Compile the TypeScript files:
   ```bash
   npm run compile
   ```
5. Open the project in Visual Studio Code:
   ```bash
   code .
   ```

## Usage

### Auto-Update Settings

The extension allows you to customize which modules are updated and how often. You can configure these settings in your `settings.json` or via the VSCode settings GUI:

```json
{
  "minecraftModules.enableAutoUpdate": true, // Enable or disable auto-update
  "minecraftModules.scheduleUpdate": "daily", // Set to "daily", "weekly", or "monthly"
  "minecraftModules.enabledModules": [
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/math",
    "@minecraft/vanilla-data",
    "@minecraft/common",
    "@minecraft/core-build-tasks",
    "@minecraft/server-admin",
    "@minecraft/server-gametest",
    "@minecraft/server-net",
    "@minecraft/server-editor",
    "@minecraft/debug-utilities"
  ],
  "minecraftModules.userDefinedModules": [
    // Add any custom or third-party modules here
  ]
}
```

### Commands

- **Update Minecraft Modules:** Run this command to manually update your Node modules.

```bash
Press F1 and type "Update Minecraft Modules"
```

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork and submit a pull request.

## Issues

If you encounter any issues or have suggestions for improvements, please report them on the (GitHub Issues page)[https://github.com/CaptainCooky/mc-npm-updater/issues].

## License

This project is licensed under the MIT License. See the (LICENSE)[https://github.com/CaptainCooky/mc-npm-updater/blob/main/LICENSE.md] file for more details.

## About CrossXover Gaming

CrossXover Gaming is a development studio focused on creating practical and useful tools for developers, particularly in the Minecraft community. We aim to simplify the development process and help creators bring their ideas to life.
