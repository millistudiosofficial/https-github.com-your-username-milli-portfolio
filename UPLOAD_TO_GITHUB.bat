@echo off
color 0A
echo ========================================
echo   Milli Studios - GitHub Uploader
echo ========================================
echo.
set /p giturl="Please paste your GitHub Repository URL here and press Enter: "
echo.
echo Initializing Git...
git init
echo Adding files...
git add .
echo Committing files...
git commit -m "Final Portfolio Update"
echo Changing branch to main...
git branch -M main
echo Linking to your repository...
git remote add origin %giturl%
echo Pushing to GitHub...
git push -u origin main
echo.
echo ========================================
echo   DONE! Your website is on GitHub!
echo ========================================
pause
