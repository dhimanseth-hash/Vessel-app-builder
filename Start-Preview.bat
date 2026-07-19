@echo off
cd /d "%~dp0"
echo Starting Vessel Consistency Checker...
echo.
echo Open this URL in your browser:
echo http://localhost:4173
echo.
"C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 4173
pause
