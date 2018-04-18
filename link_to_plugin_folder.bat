REM Run me under administrative privileges
mklink "C:\Program Files (x86)\Notepad++\plugins\jN\includes\prettier.js" "%~dp0dist\prettier.js"
mklink /D "C:\Program Files (x86)\Notepad++\plugins\jN\includes\prettier\" "%~dp0dist\prettier"
