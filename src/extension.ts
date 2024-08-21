import * as vscode from 'vscode';
import { exec } from 'child_process';
import schedule = require('node-schedule');

// Function to update the selected modules
function updateModules(modules: string[]) {
    modules.forEach(module => {
        exec(`npm update ${module}`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error updating ${module}: ${error.message}`);
                return;
            }
            vscode.window.showInformationMessage(`${module} updated successfully.`);
        });
    });
}

// Function to get the enabled modules from settings
function getEnabledModules(): string[] {
    const config = vscode.workspace.getConfiguration('minecraftModules');
    const enabledModules = config.get<string[]>('enabledModules') || [];
    const userDefinedModules = config.get<string[]>('userDefinedModules') || [];
    return [...enabledModules, ...userDefinedModules];
}

// Function to schedule updates based on user settings
function scheduleUpdates() {
    const config = vscode.workspace.getConfiguration('minecraftModules');
    const scheduleType = config.get<string>('scheduleUpdate');

    const modulesToUpdate = getEnabledModules();

    if (scheduleType === 'daily') {
        schedule.scheduleJob('0 0 * * *', () => updateModules(modulesToUpdate)); // Daily at midnight
        vscode.window.showInformationMessage('Scheduled daily updates for Minecraft modules.');
    } else if (scheduleType === 'weekly') {
        schedule.scheduleJob('0 0 * * 0', () => updateModules(modulesToUpdate)); // Weekly at midnight on Sundays
        vscode.window.showInformationMessage('Scheduled weekly updates for Minecraft modules.');
    } else if (scheduleType === 'monthly') {
        schedule.scheduleJob('0 0 1 * *', () => updateModules(modulesToUpdate)); // Monthly on the 1st at midnight
        vscode.window.showInformationMessage('Scheduled monthly updates for Minecraft modules.');
    }
}

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('minecraftModules');
    const enableAutoUpdate = config.get<boolean>('enableAutoUpdate');
    const modulesToUpdate = getEnabledModules();

    // Auto-update on startup if enabled
    if (enableAutoUpdate) {
        updateModules(modulesToUpdate);
    }

    // Schedule updates if auto-update is disabled
    if (!enableAutoUpdate) {
        scheduleUpdates();
    }

    // Register the manual update command
    let disposable = vscode.commands.registerCommand('extension.updateMinecraftModules', () => {
        updateModules(modulesToUpdate);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    schedule.gracefulShutdown();
}
