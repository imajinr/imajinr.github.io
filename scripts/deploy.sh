#! /bin/sh

echo "DEEEEPLOYYY"
echo "BISA JO"
echo $HOSTNAME
pwd

ssh -v root@188.166.245.78 ls /etc
# scp -r dist user@server:/var/www/temp_deploy/dist/