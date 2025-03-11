# Screen Time Tracker - Edge/Chrome Extension  

A simple browser extension to track how much time you spend on different websites.  

## Features  
- ✅ Tracks time spent on websites  
- ✅ Displays data in a popup with a table  
- ✅ Shows total screen time with a progress bar  
- ✅ Button to clear all data  

## Installation (For Edge & Chrome)  
1. Open **Edge** or **Chrome**  
2. Go to `edge://extensions/` (or `chrome://extensions/`)  
3. **Enable Developer Mode**  
4. Click **"Load Unpacked"** and select the **screen-time-tracker** folder  
5. The extension will now appear in your toolbar!  

## Folder Structure


## How It Works  
1. The background script **tracks time** when switching tabs  
2. Data is stored using `chrome.storage.local`  
3. The popup **shows a table & progress bar** with time data  
4. Click **“Clear Data”** to reset time tracking  

## Permissions Used  
```json
"permissions": ["tabs", "storage", "activeTab"],
"host_permissions": ["http://*/*", "https://*/*"]



