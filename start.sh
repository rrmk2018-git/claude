#!/bin/sh
set -e
echo "Installing dependencies..."
npm install --omit=dev
echo "Starting Car Booking System..."
node server.js
