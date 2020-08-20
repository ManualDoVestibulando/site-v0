#!/bin/bash
echo "Wait server startup"
sleep 60 
echo "Start script"
npm run build
npm run start
