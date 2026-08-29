@echo off
echo =======================================================
echo  MediCare - Packaging Repository for measure.py
echo =======================================================
echo.
echo Packaging project including hidden .git folder...
python -c "import os, zipfile; r=os.getcwd(); z=zipfile.ZipFile('Medicare_Submission.zip','w',zipfile.ZIP_DEFLATED); [z.write(os.path.join(rt,f), os.path.relpath(os.path.join(rt,f),r)) for rt,ds,fs in os.walk(r) for f in fs if not any(x in rt for x in ['node_modules','dist','build','coverage','.gemini','scratch']) and not f.endswith('.zip')]; z.close(); print('✓ SUCCESS: Created Medicare_Submission.zip containing .git history!')"
echo.
echo Upload Medicare_Submission.zip to measure.py evaluator!
echo.
pause
