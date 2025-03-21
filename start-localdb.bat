@echo off
:: Request admin permissions
powershell -Command "Start-Process cmd -ArgumentList '/c net start MongoDB' -Verb runAs"