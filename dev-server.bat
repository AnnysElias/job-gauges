@echo off
echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)
echo Starting development server...
echo Plugin will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
serve dist 