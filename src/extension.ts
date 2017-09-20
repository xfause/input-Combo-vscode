'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ComboMode } from './input-combo';

export function activate(context: vscode.ExtensionContext) {
    
      const comboMode = new ComboMode();
    
      vscode.workspace.onDidChangeTextDocument(e => {
        comboMode.increaseCombo();
      });
    
      let enableComboModeDisposable = vscode.commands.registerCommand('extension.enableComboMode', () => {
        comboMode.enableComboMode();
        vscode.window.showInformationMessage('Input Combo Open', {modal: true});
      });
    
      let disableComboModeDisposable = vscode.commands.registerCommand('extension.disableComboMode', () => {
        comboMode.disableComboMode();
        vscode.window.showInformationMessage('Input Combo Close', {modal: true});
      });
    
      context.subscriptions.push(enableComboModeDisposable);
      context.subscriptions.push(disableComboModeDisposable);
}
