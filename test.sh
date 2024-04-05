#!/bin/bash

IIS_SERVER="18.206.209.8"
REMOTE_USERNAME="Administrator"
REMOTE_PASSWORD=$IIS_PASS
REMOTE_DESTINATION="C:\demo"

# Local path to your application files
LOCAL_SOURCE="test.py"

# Copy files to remote server
echo "Copying files to remote server..."
scp -r $LOCAL_SOURCE $REMOTE_USERNAME@$IIS_SERVER:$REMOTE_DESTINATION

# Restart IIS to apply changes
echo "Restarting IIS..."
ssh $REMOTE_USERNAME@$IIS_SERVER "iisreset"
