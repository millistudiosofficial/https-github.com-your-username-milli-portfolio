@echo off
color 0A
echo ========================================
echo   Milli Studios - GitHub Uploader FIX
echo ========================================
echo.
echo ERROR FIX: You accidentally pasted the example URL instead of your real one!
echo.
echo Please go to your GitHub account on the internet.
echo Copy the website address at the top of the screen.
echo It should look something like: https://github.com/SubhaniBasha/milli-portfolio
echo DO NOT type "YourName". Use your actual username!
echo.
set /p giturl="Paste YOUR ACTUAL URL here and press Enter: "
echo.
git remote remove origin
git remote add origin %giturl%
git push -u origin main -f
echo.
echo ========================================
echo   DONE! Your website should be on GitHub!
echo ========================================
pause
